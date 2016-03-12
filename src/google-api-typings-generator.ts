/// <reference path="../typings/main.d.ts" />

import * as program from 'commander';
import * as request from 'request';
import * as fs from 'fs';
import * as _ from "lodash";
import * as Promise from 'promise';

var typesMap = {
    "integer": "number",
    "object": "any"
}

interface ITextWriter {
    write(chunk?);
    end();
}


class StringWriter implements ITextWriter {

    private buffer = "";

    public write(chunk: string) {
        this.buffer += chunk;
    }

    public end() {

    }

    public toString() {
        return this.buffer;
    }
}

class StreamWriter implements ITextWriter {

    constructor(private stream: fs.WriteStream) {

    }

    write(chunk: string) {
        this.stream.write(chunk);
    }

    end() {
        this.stream.end();
    }
}

class IndentedTextWriter {
    constructor(private writer: ITextWriter, public newLine = "\r\n", public tabString = "    ") {

    }

    public indent = 0;

    public write(chunk: string) {
        this.writer.write(chunk);
    }

    public startIndentedLine(chunk = "") {
        this.write(Array(this.indent + 1).join(this.tabString) + chunk);
    }

    public writeLine(chunk = "") {
        this.startIndentedLine(chunk + this.newLine);
    }

    public end() {
        this.writer.end();
    }
}

interface ITypescriptTextWriter {
    namespace(name: string, context: (writer: TypescriptTextWriter) => void);
}

type TypescriptWriterCallback = (writer) => void;

class TypescriptTextWriter implements ITypescriptTextWriter {
    constructor(private writer: IndentedTextWriter) {
    }

    private braces(text: string, context: (writer: TypescriptTextWriter) => void) {
        this.writer.writeLine(text + " {");
        this.writer.indent++;
        context(this);
        this.writer.indent--;
        this.writer.writeLine("}");
    }

    public reference(path: string) {
        this.writer.writeLine(`/// <reference path="${path}" />`);
    }

    public namespace(name: string, context: TypescriptWriterCallback) {
        this.writer.writeLine();
        this.braces(`namespace ${name}`, context);
    }

    public module(name: string, context: TypescriptWriterCallback) {
        this.writer.writeLine();
        this.braces(`declare module ${name}`, context);
    }

    public declareNamespace(name: string, context: TypescriptWriterCallback) {
        this.writer.writeLine();
        this.braces(`declare namespace ${name}`, context);
    }

    public interface(name: string, context: TypescriptWriterCallback) {
        this.writer.writeLine();
        this.braces(`interface ${name}`, context);
    }

    public anonymysType(context: TypescriptWriterCallback) {
        this.writer.write("{");
        this.writer.writeLine();
        this.writer.indent++;
        context(this);
        this.writer.indent--;
        this.writer.startIndentedLine("}");
    }

    public property(name: string, type: string | TypescriptWriterCallback, required = true) {
        if (typeof type === 'function') {
            this.writer.startIndentedLine(`${name}${required ? "" : "?"}: `);
            type(this);
            this.writer.write(",");
            this.writer.writeLine();
        }
        else if (typeof type === 'string') {
            this.writer.writeLine(`${name}${required ? "" : "?"}: ${type},`);
        }

    }

    public comment(text: string = "") {
        var lines = text.split(/\r\n|\r|\n|\u000a\u000d|\u000a|\u000d|\u240a/g);
        _.forEach(lines, line => this.writer.writeLine(`// ${line}`));
    }

    public method(name: string, parameters: [{ parameter: string, type: string | TypescriptWriterCallback }], returnType: string) {
        this.writer.startIndentedLine(`${name} (`);

        _.forEach(parameters, (parameter, index) => {
            this.write(parameter.parameter + ": ");
            this.write(parameter.type);

            if (index + 1 < parameters.length) {
                this.writeLine(",");
            }
        });

        this.writer.write(`) : ${returnType};`);

        this.writer.writeLine();
        //this.writer.writeLine(`${name}(${parameters.map(p => p.parameter + ": " + p.type).join(", ")}): ${returnType};`);
    }

    public writeLine(chunk = "") {
        this.writer.writeLine(chunk);
    }

    public write(chunk: string | TypescriptWriterCallback = "") {
        if (typeof chunk === "string") {
            this.writer.write(chunk);
        }
        else if (typeof chunk === "function") {
            chunk(this);
        }
    }

    public end() {
        this.writer.end();
    }
}

function processResource(resource) {
    var childs = _.map(resource.resources || {}, value => processResource(value));
    return _.union(_.map(resource.methods || {}, value => value), childs);
}

function getNamespace(path: string) {
    var parts = path.split('.');

    if (parts.length > 0) {
        parts.splice(parts.length - 1)

        var n: string = _.camelCase(parts.join('.'));
        return parts.join('.');
    }
    else
        return null;
}

function getName(path: string) {
    var parts = path.split('.');

    if (parts.length > 0)
        return _.last(parts);
    else
        return null;
}

function formatParameters(method, out: (line) => void) {

    out("{");

    _.forEach(method.parameters, (data, key) => {
        out("\t" + key + ": " + (typesMap[data.type] || data.type) + ",");
    })

    out("}");

    //return "{ \r\n\t\t" + _.map(method.parameters, (data, key) => key + ": " + (typesMap[data.type] || data.type)).join(", \r\n\t\t") + "\r\n\t\t }";
}

function firstLetterUp(text: string) {
    return text[0].toUpperCase() + text.substring(1);
}

function getMethodParameterInterfaceName(resource, method: gapi.client.discovery.v1.RestMethod) {
    return firstLetterUp(resource) + firstLetterUp(getName(method.id)) + "Request";
}

function getType(type: any): string | TypescriptWriterCallback {
    if (type.type === "array") {
        return (writer: TypescriptTextWriter) => {
            let child = getType(type.items);

            if (typeof child === "string") {
                writer.write(child);
            }
            else if (typeof child === "function") {
                child(writer);
            }
            writer.write("[]");
        };
    }
    else if (type.type === "object" && type.properties) {
        return (writer: TypescriptTextWriter) => {
            writer.anonymysType(() =>
                _.forEach(type.properties, (data: any, key) => {
                    writer.comment(formatComment(data.description));
                    writer.property(key, getType(data), data.required || false);
                }));
        }
    }
    else if (type.type) {
        return typesMap[type.type] || type.type;
    }
    else if (type.$ref) {
        return type.$ref;
    }
    else throw Error();
}

function formatComment(comment: string) {
    if (!comment) return "";

    return comment;
}

function getMethodReturn(method: gapi.client.discovery.v1.RestMethod) {

    if (method.response) {
        return "gapi.client.Request<" + method.response.$ref + ">";
    }
    else {
        return "gapi.client.Request<void>";
    }
}

export class App {

    private typingsDirectory: string;

    constructor(private base = __dirname + "/../out/") {
        this.typingsDirectory = base + "/typings";

        if (!fs.existsSync(this.base)) {
            fs.mkdirSync(this.base);
        }

        if (!fs.existsSync(this.typingsDirectory)) {
            fs.mkdirSync(this.typingsDirectory);
        }

        console.log(`base directory: ${this.base}`);
        console.log(`typings directory: ${this.typingsDirectory}`);
        console.log();
    }

    static parseVersion(version: string) {
        var major, minor, patch;
        var match = version.match(/v(\d+)?(?:\.(\d+))?(.*)?/);

        if (match) {
            major = match[1] || 0;
            minor = match[2];
            patch = match[3];

            return `${major}${minor ? "." + minor : ""}${patch ? "-" + patch : ""}`;
        }
    }

    private getResourceTypeName(resourceName: string) {
        return resourceName[0].toUpperCase() + resourceName.substring(1) + "Resource";
    }

    // writes specified resource definition
    private writeResources(out: TypescriptTextWriter, resources: gapi.client.discovery.v1.RestResource[]) {

        _.forEach(resources, (resource: gapi.client.discovery.v1.RestResource, resourceName: string) => {

            var resourceInterfaceName = this.getResourceTypeName(resourceName);

            this.writeResources(out, resource.resources);

            out.interface(resourceInterfaceName, () => {

                _.forEach(resource.methods, (method: gapi.client.discovery.v1.RestMethod, name: string) => {
                    out.comment(formatComment(method.description));
                    out.method(getName(method.id), [{
                        parameter: "request",
                        type: (writer: TypescriptTextWriter) => {
                            writer.anonymysType(() =>
                                _.forEach(method.parameters, (data: any, key) => {
                                    writer.comment(formatComment(data.description));
                                    writer.property(key, getType(data), data.required || false);
                                })
                            );
                        }

                    }], getMethodReturn(method));

                    out.writeLine();
                });

                _.forEach(resource.resources, (childResource: gapi.client.discovery.v1.RestResource, childResourceName: string) => {
                    var childResourceInterfaceName = childResourceName[0].toUpperCase() + childResourceName.substring(1) + "Resource";
                    out.property(childResourceName, childResourceInterfaceName);
                });

            });

            out.writeLine();
        });
    }

    private getTypingsUrl(api: string, version: string) {
        return `https://guthub.com/bolisov/typings-gapi/typings/${this.getTypingsName(api, version)}`;
    }

    private getTypingsName(api: string, version: string) {
        if (version == null)
            return `gapi.client.${api}`;
        else
            return `gapi.client.${api}-${version}`;
    }

    private getTypingsDirectory(api: string, version: string) {
        return `${this.typingsDirectory}/${this.getTypingsName(api, version)}`;
    }

    /// writes api description for specified JSON object
    private processApi(api: gapi.client.discovery.v1.RestDescription, actualVersion: boolean) {

        console.log(`Generating ${api.id} definitions...`);

        var destinationDirectory = this.getTypingsDirectory(api.name, api.version);

        if (!fs.existsSync(destinationDirectory)) {
            fs.mkdirSync(destinationDirectory);
        }

        var methods = _(processResource(api)).flatten(true).map((x: any) => {
            return {
                namespace: getNamespace(x.id),
                name: getName(x.id),
                method: x
            }
        }).value(),
            grouped = _.groupBy(methods, method => method.namespace),
            filename = "gapi.client." + api.name + (actualVersion ? "" : "-" + api.version) + ".d.ts",
            stream = fs.createWriteStream(destinationDirectory + "/" + filename),
            writer = new TypescriptTextWriter(new IndentedTextWriter(new StreamWriter(stream))),
            rootNamespace = `gapi.client.${api.name}.${api.version.replace(/\./, "_")}`;

        writer.comment(`Type definitions for ${api.ownerName} ${api.title} ${api.version}`);
        writer.comment(`Project: ${api.documentationLink}`);
        writer.comment(`Definitions by: Bolisov Alexey`);
        writer.writeLine();
        writer.reference("../gapi.client/gapi.client.d.ts");

        // write main namespace
        writer.module(rootNamespace, () => {
            _.forEach(api.schemas, (schema : gapi.client.discovery.v1.JsonSchema, key) => {
                writer.interface(schema.id, () => {
                    _.forEach(schema.properties, (data: any, key) => {
                        writer.comment(formatComment(data.description));
                        writer.property(key, getType(data), data.required || false);
                    })
                })
            });

            this.writeResources(writer, api.resources);
        });

        // expose root resources to gapi.client namespace
        writer.module(`gapi.client.${api.name}`, () => {
            _.forEach(api.resources, (resource: gapi.client.discovery.v1.RestResource, resourceName: string) => {
                writer.writeLine(`var ${resourceName}: ${rootNamespace}.${this.getResourceTypeName(resourceName)}; `);
                writer.writeLine();
            })
        });

        writer.end();

        var typingsStream = fs.createWriteStream(destinationDirectory + "/typings.json");

        typingsStream.write(JSON.stringify({
            "name": api.name,
            "main": filename,
            "version": App.parseVersion(api.version),
            "author": "Typed by Bolisov Alexey",
            "description": api.description,
            "homepage": "https://github.com/bolisov/typings-gapi",
            "dependencies": {
                "gapi.client": "github:bolisov/typings-gapi/gapi.client"
            }
        }, null, 4));

        typingsStream.end();

    }

    private request(url: string) {
        return new Promise((resolve, reject) => {
            request(url, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    var api = JSON.parse(body);
                    resolve(api);
                }
                else {
                    console.error("Got an error: ", error, ", status code: ", response.statusCode);
                    reject(error);
                }
            });
        });
    }

    public processService(url: string, actualVersion: boolean) {
        return this
            .request(url)
            .then(api => this.processApi(api, actualVersion))
    }

    public discover(service: string = null, allVersions: boolean = false) {
        console.log("Discovering Google services...");


        return this
            .request("https://www.googleapis.com/discovery/v1/apis")
            .then((list: gapi.client.discovery.v1.DirectoryList) => {
                var apis = _.filter(list.items, api => service == null || api.name === service);
                apis = _.filter(apis, api => allVersions || api.preferred);
                return apis;
            })
            .then(items => {

                if (items.length === 0) {
                    console.error("Can't find services");
                    throw Error("Can't find services");
                } else {
                    var generation: Promise.IThenable<any> = items.reduce((cur, api: any) => cur.then(() => this.processService(api.discoveryRestUrl, api.preferred)), Promise.resolve(null));
                    return generation.then(() => items);
                }
            })
            .then(services => {

                _.forEach(
                    _.groupBy(services, service => service.name),
                    (versions, service) => {

                        var typingsStream = fs.createWriteStream(`${this.typingsDirectory}/${this.getTypingsName(service, null)}.json`),
                            v = _.reduce(versions, (current, api) => {
                                current[App.parseVersion(api.version)] = this.getTypingsUrl(api.name, api.version);
                                return current;
                            }, {});

                        typingsStream.write(JSON.stringify({
                            "versions": v
                        }, null, 4));

                        typingsStream.end();
                    });
            });
    }
}

var params: any = program
    .version("0.0.1")
    .allowUnknownOption(false)
    .option("-u, --url [url]", "process only specific REST service definition by url")
    .option("-s, --service [name]", "process only specific REST service definition by name")
    //.option("-a, --all", "include previously versions", true)
    .option("-o, --out", "output directory")
    .parse(process.argv);

var app = new App(params.out);

if (params.url) {
    app
        .processService(params.url, true)
        .then(() => console.log("Done"), error => console.error(error));
}
else {
    app
        .discover(params.service, true)
        .then(() => console.log("Done"), error => console.error(error));
}