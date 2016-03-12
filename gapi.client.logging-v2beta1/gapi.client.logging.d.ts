// Type definitions for Google Google Cloud Logging API v2beta1
// Project: https://cloud.google.com/logging/docs/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.logging.v2beta1 {
    
    interface Empty {
    }
    
    interface WriteLogEntriesRequest {
        // Optional. A default log resource name for those log entries in `entries` that do not specify their own `logName`. Example: `"projects/my-project/logs/syslog"`. See LogEntry.
        logName?: string,
        // Optional. A default monitored resource for those log entries in `entries` that do not specify their own `resource`.
        resource?: MonitoredResource,
        // Optional. User-defined `key:value` items that are added to the `labels` field of each log entry in `entries`, except when a log entry specifies its own `key:value` item with the same key. Example: `{ "size": "large", "color":"red" }`
        labels?: any,
        // Required. The log entries to write. The log entries must have values for all required fields.
        entries?: LogEntry[],        
    }
    
    interface MonitoredResource {
        // The type of monitored resource. This field must match the value of the `type` field in a MonitoredResourceDescriptor object. For example, `"cloudsql_database"` represents Cloud SQL databases.
        type?: string,
        // Values for some or all of the labels listed in the associated monitored resource descriptor. For example, specify a specific Cloud SQL database by supplying values for both the `"database_id"` and `"zone"` labels. Specify the set of all Cloud SQL databases in a particular location by supplying a value for only the `"zone"` label.
        labels?: any,
    }
    
    interface LogEntry {
        // Required. The resource name of the log to which this log entry belongs. The format of the name is `projects/<project-id>/logs/<log-id%gt;`. Examples: `"projects/my-projectid/logs/syslog"`, `"projects/1234567890/logs/library.googleapis.com%2Fbook_log"`. The log ID part of resource name must be less than 512 characters long and can only include the following characters: upper and lower case alphanumeric characters: [A-Za-z0-9]; and punctuation characters: forward-slash, underscore, hyphen, and period. Forward-slash (`/`) characters in the log ID must be URL-encoded.
        logName?: string,
        // Required. The monitored resource associated with this log entry. Example: a log entry that reports a database error would be associated with the monitored resource designating the particular database that reported the error.
        resource?: MonitoredResource,
        // The log entry payload, represented as a protocol buffer. You can only use `protoPayload` values that belong to a set of approved types.
        protoPayload?: any,
        // The log entry payload, represented as a Unicode string (UTF-8).
        textPayload?: string,
        // The log entry payload, represented as a structure that is expressed as a JSON object.
        jsonPayload?: any,
        // Optional. The time the event described by the log entry occurred. If omitted, Cloud Logging will use the time the log entry is written.
        timestamp?: string,
        // Optional. The severity of the log entry. The default value is `LogSeverity.DEFAULT`.
        severity?: string,
        // Optional. A unique ID for the log entry. If you provide this field, the logging service considers other log entries in the same log with the same ID as duplicates which can be removed. If omitted, Cloud Logging will generate a unique ID for this log entry.
        insertId?: string,
        // Optional. Information about the HTTP request associated with this log entry, if applicable.
        httpRequest?: HttpRequest,
        // Optional. A set of user-defined (key, value) data that provides additional information about the log entry.
        labels?: any,
        // Optional. Information about an operation associated with the log entry, if applicable.
        operation?: LogEntryOperation,
    }
    
    interface HttpRequest {
        // The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`.
        requestMethod?: string,
        // The scheme (http, https), the host name, the path and the query portion of the URL that was requested. Example: `"http://example.com/some/info?color=red"`.
        requestUrl?: string,
        // The size of the HTTP request message in bytes, including the request headers and the request body.
        requestSize?: string,
        // The response code indicating the status of response. Examples: 200, 404.
        status?: number,
        // The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body.
        responseSize?: string,
        // The user agent sent by the client. Example: `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)"`.
        userAgent?: string,
        // The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`.
        remoteIp?: string,
        // The referer URL of the request, as defined in [HTTP/1.1 Header Field Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
        referer?: string,
        // Whether or not an entity was served from cache (with or without validation).
        cacheHit?: boolean,
        // Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if `cache_hit` is True.
        validatedWithOriginServer?: boolean,
    }
    
    interface LogEntryOperation {
        // Required. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation.
        id?: string,
        // Required. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique. Examples for `producer`: `"MyDivision.MyBigCompany.com"`, "github.com/MyProject/MyApplication"`.
        producer?: string,
        // Optional. Set this to True if this is the first log entry in the operation.
        first?: boolean,
        // Optional. Set this to True if this is the last log entry in the operation.
        last?: boolean,
    }
    
    interface WriteLogEntriesResponse {
    }
    
    interface ListLogEntriesRequest {
        // Required. One or more project IDs or project numbers from which to retrieve log entries. Examples of a project ID: `"my-project-1A"`, `"1234567890"`.
        projectIds?: string[],        
        // Optional. An [advanced logs filter](/logging/docs/view/advanced_filters). The filter is compared against all log entries in the projects specified by `projectIds`. Only entries that match the filter are retrieved. An empty filter matches all log entries.
        filter?: string,
        // Optional. How the results should be sorted. Presently, the only permitted values are `"timestamp"` (default) and `"timestamp desc"`. The first option returns entries in order of increasing values of `LogEntry.timestamp` (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of `LogEntry.insertId`.
        orderBy?: string,
        // Optional. The maximum number of results to return from this request. Fewer results might be returned. You must check for the `nextPageToken` result to determine if additional results are available, which you can retrieve by passing the `nextPageToken` value in the `pageToken` parameter to the next request.
        pageSize?: number,
        // Optional. If the `pageToken` request parameter is supplied, then the next page of results in the set are retrieved. The `pageToken` parameter must be set with the value of the `nextPageToken` result parameter from the previous request. The values of `projectIds`, `filter`, and `orderBy` must be the same as in the previous request.
        pageToken?: string,
    }
    
    interface ListLogEntriesResponse {
        // A list of log entries.
        entries?: LogEntry[],        
        // If there are more results than were returned, then `nextPageToken` is given a value in the response. To get the next batch of results, call this method again using the value of `nextPageToken` as `pageToken`.
        nextPageToken?: string,
    }
    
    interface ListMonitoredResourceDescriptorsResponse {
        // A list of resource descriptors.
        resourceDescriptors?: MonitoredResourceDescriptor[],        
        // If there are more results than were returned, then `nextPageToken` is returned in the response. To get the next batch of results, call this method again using the value of `nextPageToken` as `pageToken`.
        nextPageToken?: string,
    }
    
    interface MonitoredResourceDescriptor {
        // The monitored resource type. For example, the type `"cloudsql_database"` represents databases in Google Cloud SQL.
        type?: string,
        // A concise name for the monitored resource type, which is displayed in user interfaces. For example, `"Cloud SQL Database"`.
        displayName?: string,
        // A detailed description of the monitored resource type, which is used in documentation.
        description?: string,
        // A set of labels that can be used to describe instances of this monitored resource type. For example, Cloud SQL databases can be labeled with their `"database_id"` and their `"zone"`.
        labels?: LabelDescriptor[],        
    }
    
    interface LabelDescriptor {
        // The label key.
        key?: string,
        // The type of data that can be assigned to the label.
        valueType?: string,
        // A human-readable description for the label.
        description?: string,
    }
    
    interface ListSinksResponse {
        // A list of sinks.
        sinks?: LogSink[],        
        // If there are more results than were returned, then `nextPageToken` is given a value in the response. To get the next batch of results, call this method again using the value of `nextPageToken` as `pageToken`.
        nextPageToken?: string,
    }
    
    interface LogSink {
        // Required. The client-assigned sink identifier. Example: `"my-severe-errors-to-pubsub"`. Sink identifiers are limited to 1000 characters and can include only the following characters: `A-Z`, `a-z`, `0-9`, and the special characters `_-.`.
        name?: string,
        // The export destination. See [Exporting Logs With Sinks](/logging/docs/api/tasks/exporting-logs). Examples: `"storage.googleapis.com/a-bucket"`, `"bigquery.googleapis.com/projects/a-project-id/datasets/a-dataset"`.
        destination?: string,
        // An [advanced logs filter](/logging/docs/view/advanced_filters) that defines the log entries to be exported. The filter must be consistent with the log entry format designed by the `outputVersionFormat` parameter, regardless of the format of the log entry that was originally written to Cloud Logging. Example: `"logName:syslog AND severity>=ERROR"`.
        filter?: string,
        // The log entry version used when exporting log entries from this sink. This version does not have to correspond to the version of the log entry when it was written to Cloud Logging.
        outputVersionFormat?: string,
    }
    
    interface ListLogMetricsResponse {
        // A list of logs-based metrics.
        metrics?: LogMetric[],        
        // If there are more results than were returned, then `nextPageToken` is given a value in the response. To get the next batch of results, call this method again using the value of `nextPageToken` as `pageToken`.
        nextPageToken?: string,
    }
    
    interface LogMetric {
        // Required. The client-assigned metric identifier. Example: `"severe_errors"`. Metric identifiers are limited to 1000 characters and can include only the following characters: `A-Z`, `a-z`, `0-9`, and the special characters `_-.,+!*',()%/\`. The forward-slash character (`/`) denotes a hierarchy of name pieces, and it cannot be the first character of the name.
        name?: string,
        // A description of this metric, which is used in documentation.
        description?: string,
        // An [advanced logs filter](/logging/docs/view/advanced_filters). Example: `"logName:syslog AND severity>=ERROR"`.
        filter?: string,
    }
    
    interface RequestLog {
        // Application that handled this request.
        appId?: string,
        // Module of the application that handled this request.
        moduleId?: string,
        // Version of the application that handled this request.
        versionId?: string,
        // Globally unique identifier for a request, which is based on the request start time. Request IDs for requests which started later will compare greater as strings than those for requests which started earlier.
        requestId?: string,
        // Origin IP address.
        ip?: string,
        // Time when the request started.
        startTime?: string,
        // Time when the request finished.
        endTime?: string,
        // Latency of the request.
        latency?: string,
        // Number of CPU megacycles used to process request.
        megaCycles?: string,
        // Request method. Example: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`, `"DELETE"`.
        method?: string,
        // Contains the path and query portion of the URL that was requested. For example, if the URL was "http://example.com/app?name=val", the resource would be "/app?name=val". The fragment identifier, which is identified by the `#` character, is not included.
        resource?: string,
        // HTTP version of request. Example: `"HTTP/1.1"`.
        httpVersion?: string,
        // HTTP response status code. Example: 200, 404.
        status?: number,
        // Size in bytes sent back to client by request.
        responseSize?: string,
        // Referrer URL of request.
        referrer?: string,
        // User agent that made the request.
        userAgent?: string,
        // The logged-in user who made the request. Most likely, this is the part of the user's email before the `@` sign. The field value is the same for different requests from the same user, but different users can have similar names. This information is also available to the application via the App Engine Users API. This field will be populated starting with App Engine 1.9.21.
        nickname?: string,
        // File or class that handled the request.
        urlMapEntry?: string,
        // Internet host and port number of the resource being requested.
        host?: string,
        // An indication of the relative cost of serving this request.
        cost?: number,
        // Queue name of the request, in the case of an offline request.
        taskQueueName?: string,
        // Task name of the request, in the case of an offline request.
        taskName?: string,
        // Whether this was a loading request for the instance.
        wasLoadingRequest?: boolean,
        // Time this request spent in the pending request queue.
        pendingTime?: string,
        // If the instance processing this request belongs to a manually scaled module, then this is the 0-based index of the instance. Otherwise, this value is -1.
        instanceIndex?: number,
        // Whether this request is finished or active.
        finished?: boolean,
        // An identifier for the instance that handled the request.
        instanceId?: string,
        // A list of log lines emitted by the application while serving this request.
        line?: LogLine[],        
        // App Engine release version.
        appEngineRelease?: string,
        // Cloud Trace identifier for this request.
        traceId?: string,
        // Source code for the application that handled this request. There can be more than one source reference per deployed application if source code is distributed among multiple repositories.
        sourceReference?: SourceReference[],        
    }
    
    interface LogLine {
        // Approximate time when this log entry was made.
        time?: string,
        // Severity of this log entry.
        severity?: string,
        // App-provided log message.
        logMessage?: string,
        // Where in the source code this log message was written.
        sourceLocation?: SourceLocation,
    }
    
    interface SourceLocation {
        // Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.
        file?: string,
        // Line within the source file.
        line?: string,
        // Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information is used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function` (Python).
        functionName?: string,
    }
    
    interface SourceReference {
        // Optional. A URI string identifying the repository. Example: "https://github.com/GoogleCloudPlatform/kubernetes.git"
        repository?: string,
        // The canonical and persistent identifier of the deployed revision. Example (git): "0035781c50ec7aa23385dc841529ce8a4b70db1b"
        revisionId?: string,
    }
    
    interface LogsResource {
        // Deletes a log and all its log entries. The log will reappear if it receives new entries.
        delete (request: {        
            // Required. The resource name of the log to delete. Example: `"projects/my-project/logs/syslog"`.
            logName: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface SinksResource {
        // Lists sinks.
        list (request: {        
            // Required. The resource name of the project containing the sinks. Example: `"projects/my-logging-project"`, `"projects/01234567890"`.
            projectName: string,
            // Optional. If the `pageToken` request parameter is supplied, then the next page of results in the set are retrieved. The `pageToken` parameter must be set with the value of the `nextPageToken` result parameter from the previous request. The value of `projectName` must be the same as in the previous request.
            pageToken?: string,
            // Optional. The maximum number of results to return from this request. Fewer results might be returned. You must check for the `nextPageToken` result to determine if additional results are available, which you can retrieve by passing the `nextPageToken` value in the `pageToken` parameter to the next request.
            pageSize?: number,
        }) : gapi.client.Request<ListSinksResponse>;        
        
        // Gets a sink.
        get (request: {        
            // The resource name of the sink to return. Example: `"projects/my-project-id/sinks/my-sink-id"`.
            sinkName: string,
        }) : gapi.client.Request<LogSink>;        
        
        // Creates a sink.
        create (request: {        
            // The resource name of the project in which to create the sink. Example: `"projects/my-project-id"`. The new sink must be provided in the request.
            projectName: string,
        }) : gapi.client.Request<LogSink>;        
        
        // Creates or updates a sink.
        update (request: {        
            // The resource name of the sink to update. Example: `"projects/my-project-id/sinks/my-sink-id"`. The updated sink must be provided in the request and have the same name that is specified in `sinkName`. If the sink does not exist, it is created.
            sinkName: string,
        }) : gapi.client.Request<LogSink>;        
        
        // Deletes a sink.
        delete (request: {        
            // The resource name of the sink to delete. Example: `"projects/my-project-id/sinks/my-sink-id"`.
            sinkName: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface MetricsResource {
        // Lists logs-based metrics.
        list (request: {        
            // Required. The resource name of the project containing the metrics. Example: `"projects/my-project-id"`.
            projectName: string,
            // Optional. If the `pageToken` request parameter is supplied, then the next page of results in the set are retrieved. The `pageToken` parameter must be set with the value of the `nextPageToken` result parameter from the previous request. The value of `projectName` must be the same as in the previous request.
            pageToken?: string,
            // Optional. The maximum number of results to return from this request. Fewer results might be returned. You must check for the `nextPageToken` result to determine if additional results are available, which you can retrieve by passing the `nextPageToken` value in the `pageToken` parameter to the next request.
            pageSize?: number,
        }) : gapi.client.Request<ListLogMetricsResponse>;        
        
        // Gets a logs-based metric.
        get (request: {        
            // The resource name of the desired metric. Example: `"projects/my-project-id/metrics/my-metric-id"`.
            metricName: string,
        }) : gapi.client.Request<LogMetric>;        
        
        // Creates a logs-based metric.
        create (request: {        
            // The resource name of the project in which to create the metric. Example: `"projects/my-project-id"`. The new metric must be provided in the request.
            projectName: string,
        }) : gapi.client.Request<LogMetric>;        
        
        // Creates or updates a logs-based metric.
        update (request: {        
            // The resource name of the metric to update. Example: `"projects/my-project-id/metrics/my-metric-id"`. The updated metric must be provided in the request and have the same identifier that is specified in `metricName`. If the metric does not exist, it is created.
            metricName: string,
        }) : gapi.client.Request<LogMetric>;        
        
        // Deletes a logs-based metric.
        delete (request: {        
            // The resource name of the metric to delete. Example: `"projects/my-project-id/metrics/my-metric-id"`.
            metricName: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface ProjectsResource {
        logs: LogsResource,
        sinks: SinksResource,
        metrics: MetricsResource,
    }
    
    
    interface EntriesResource {
        // Writes log entries to Cloud Logging. All log entries in Cloud Logging are written by this method.
        write (request: {        
        }) : gapi.client.Request<WriteLogEntriesResponse>;        
        
        // Lists log entries. Use this method to retrieve log entries from Cloud Logging. For ways to export log entries, see [Exporting Logs](/logging/docs/export).
        list (request: {        
        }) : gapi.client.Request<ListLogEntriesResponse>;        
        
    }
    
    
    interface MonitoredResourceDescriptorsResource {
        // Lists monitored resource descriptors that are used by Cloud Logging.
        list (request: {        
            // Optional. The maximum number of results to return from this request. Fewer results might be returned. You must check for the `nextPageToken` result to determine if additional results are available, which you can retrieve by passing the `nextPageToken` value in the `pageToken` parameter to the next request.
            pageSize?: number,
            // Optional. If the `pageToken` request parameter is supplied, then the next page of results in the set are retrieved. The `pageToken` parameter must be set with the value of the `nextPageToken` result parameter from the previous request.
            pageToken?: string,
        }) : gapi.client.Request<ListMonitoredResourceDescriptorsResponse>;        
        
    }
    
}

declare module gapi.client.logging {
    var projects: gapi.client.logging.v2beta1.ProjectsResource; 
    
    var entries: gapi.client.logging.v2beta1.EntriesResource; 
    
    var monitoredResourceDescriptors: gapi.client.logging.v2beta1.MonitoredResourceDescriptorsResource; 
    
}
