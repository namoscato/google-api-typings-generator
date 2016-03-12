// Type definitions for Google Google App Engine Admin API v1beta5
// Project: https://cloud.google.com/appengine/docs/admin-api/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.appengine {
    
    interface Operation {
        // The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping above, the `name` should have the format of `operations/some/unique/name`.
        name?: string,
        // Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
        metadata?: any,
        // If the value is `false`, it means the operation is still in progress. If true, the operation is completed, and either `error` or `response` is available.
        done?: boolean,
        // The error result of the operation in case of failure.
        error?: Status,
        // The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
        response?: any,
    }
    
    interface Status {
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
        message?: string,
        // A list of messages that carry the error details. There will be a common set of message types for APIs to use.
        details?: any[],        
    }
    
    interface ListOperationsResponse {
        // A list of operations that matches the specified filter in the request.
        operations?: Operation[],        
        // The standard List next-page token.
        nextPageToken?: string,
    }
    
    interface Application {
        // The full path to the application in the API. Example: "apps/myapp". @OutputOnly
        name?: string,
        // The relative name/path of the application. Example: "myapp".
        id?: string,
        // HTTP path dispatch rules for requests to the app that do not explicitly target a service or version. The rules are order-dependent.
        dispatchRules?: UrlDispatchRule[],        
        // If set, only users from the specified Google Apps authentication domain may access the application. If not set, any Google Account may access the application.
        authDomain?: string,
        // The location from which the application will be run. Choices are "us" for United States and "eu" for European Union. Application instances will run out of data centers in the chosen location and all of the application's End User Content will be stored at rest in the chosen location. The default is "us".
        location?: string,
        // A Google Cloud Storage bucket which can be used for storing files associated with an application. This bucket is associated with the application and can be used by the gcloud deployment commands. @OutputOnly
        codeBucket?: string,
        // Determines the cookie expiration policy for the application.
        defaultCookieExpiration?: string,
        // The hostname used to reach the application, as resolved by App Engine. @OutputOnly
        defaultHostname?: string,
        // A Google Cloud Storage bucket which can be used by the application to store content. @OutputOnly
        defaultBucket?: string,
    }
    
    interface UrlDispatchRule {
        // The domain name to match on. Supports '*' (glob) wildcarding on the left-hand side of a '.'. If empty, all domains will be matched (the same as '*').
        domain?: string,
        // The pathname within the host. This must start with a '/'. A single '*' (glob) can be included at the end of the path. The sum of the lengths of the domain and path may not exceed 100 characters.
        path?: string,
        // The resource id of a Service in this application that should service the matched request. The Service must already exist. Example: "default".
        service?: string,
    }
    
    interface Version {
        // The full path to the Version resource in the API. Example: "apps/myapp/services/default/versions/v1". @OutputOnly
        name?: string,
        // The relative name/path of the Version within the service. Example: "v1". Version specifiers can contain lowercase letters, digits, and hyphens. It cannot begin with the prefix `ah-` and the names `default` and `latest` are reserved and cannot be used.
        id?: string,
        // Automatic scaling is the scaling policy that App Engine has used since its inception. It is based on request rate, response latencies, and other application metrics.
        automaticScaling?: AutomaticScaling,
        // A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
        basicScaling?: BasicScaling,
        // A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
        manualScaling?: ManualScaling,
        // Before an application can receive email or XMPP messages, the application must be configured to enable the service.
        inboundServices?: string[],        
        // The instance class to use to run this app. Valid values for AutomaticScaling are `[F1, F2, F4, F4_1G]`. Valid values for ManualScaling and BasicScaling are `[B1, B2, B4, B8, B4_1G]`. Default: "F1" for AutomaticScaling, "B1" for ManualScaling and BasicScaling
        instanceClass?: string,
        // Used to specify extra network settings (for VM runtimes only).
        network?: Network,
        // Used to specify how many machine resources an app version needs (for VM runtimes only).
        resources?: Resources,
        // The desired runtime. Values can include python27, java7, go, etc.
        runtime?: string,
        // If true, multiple requests can be dispatched to the app at once.
        threadsafe?: boolean,
        // Whether to deploy this app in a VM container.
        vm?: boolean,
        // Beta settings supplied to the application via metadata.
        betaSettings?: any,
        // The App Engine execution environment to use for this version. Default: "1"
        env?: string,
        // The current serving status of this version. Only `SERVING` versions will have instances created or billed for. If this field is unset when a version is created, `SERVING` status will be assumed. It is an error to explicitly set this field to `SERVING_STATUS_UNSPECIFIED`.
        servingStatus?: string,
        // The email address of the user who created this version. @OutputOnly
        deployer?: string,
        // Creation time of this version. This will be between the start and end times of the operation that creates this version. @OutputOnly
        creationTime?: string,
        // Total size of version files hosted on App Engine disk in bytes. @OutputOnly
        diskUsageBytes?: string,
        // An ordered list of URL Matching patterns that should be applied to incoming requests. The first matching URL consumes the request, and subsequent handlers are not attempted. Only returned in `GET` requests if `view=FULL` is set. May only be set on create requests; once created, is immutable.
        handlers?: UrlMap[],        
        // Custom static error pages instead of these generic error pages, (limit 10 KB/page) Only returned in `GET` requests if `view=FULL` is set. May only be set on create requests; once created, is immutable.
        errorHandlers?: ErrorHandler[],        
        // Configuration for Python runtime third-party libraries required by the application. Only returned in `GET` requests if `view=FULL` is set. May only be set on create requests; once created, is immutable.
        libraries?: Library[],        
        // Serving configuration for Google Cloud Endpoints. Only returned in `GET` requests if `view=FULL` is set. May only be set on create requests; once created, is immutable.
        apiConfig?: ApiConfigHandler,
        // Environment variables made available to the application. Only returned in `GET` requests if `view=FULL` is set. May only be set on create requests; once created, is immutable.
        envVariables?: any,
        // The length of time a static file served by a static file handler ought to be cached by web proxies and browsers, if the handler does not specify its own expiration. Only returned in `GET` requests if `view=FULL` is set. May only be set on create requests; once created, is immutable.
        defaultExpiration?: string,
        // Configure health checking for the VM instances. Unhealthy VM instances will be stopped and replaced with new instances. Only returned in `GET` requests if `view=FULL` is set. May only be set on create requests; once created, is immutable.
        healthCheck?: HealthCheck,
        // Go only. Files that match this pattern will not be built into the app. May only be set on create requests.
        nobuildFilesRegex?: string,
        // Code and application artifacts that make up this version. Only returned in `GET` requests if `view=FULL` is set. May only be set on create requests; once created, is immutable.
        deployment?: Deployment,
    }
    
    interface AutomaticScaling {
        // The amount of time that the [Autoscaler](https://cloud.google.com/compute/docs/autoscaler/) should wait between changes to the number of virtual machines. Applies only to the VM runtime.
        coolDownPeriod?: string,
        // Target scaling by CPU usage.
        cpuUtilization?: CpuUtilization,
        // The number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance. Default value is chosen based on the runtime.
        maxConcurrentRequests?: number,
        // The maximum number of idle instances that App Engine should maintain for this version.
        maxIdleInstances?: number,
        // Max number of instances that App Engine should start to handle requests.
        maxTotalInstances?: number,
        // The maximum amount of time that App Engine should allow a request to wait in the pending queue before starting a new instance to handle it.
        maxPendingLatency?: string,
        // The minimum number of idle instances that App Engine should maintain for this version. Only applies to the default version of a service, since other versions are not expected to receive significant traffic.
        minIdleInstances?: number,
        // Minimum number of instances that App Engine should maintain.
        minTotalInstances?: number,
        // The minimum amount of time that App Engine should allow a request to wait in the pending queue before starting a new instance to handle it.
        minPendingLatency?: string,
        // Target scaling by request utilization.
        requestUtilization?: RequestUtilization,
        // Target scaling by disk usage.
        diskUtilization?: DiskUtilization,
        // Target scaling by network usage.
        networkUtilization?: NetworkUtilization,
    }
    
    interface CpuUtilization {
        // The period of time over which CPU utilization is calculated.
        aggregationWindowLength?: string,
        // Target (0-1) CPU utilization ratio to maintain when scaling.
        targetUtilization?: number,
    }
    
    interface RequestUtilization {
        // Target requests per second.
        targetRequestCountPerSec?: number,
        // Target number of concurrent requests.
        targetConcurrentRequests?: number,
    }
    
    interface DiskUtilization {
        // Target bytes per second written.
        targetWriteBytesPerSec?: number,
        // Target ops per second written.
        targetWriteOpsPerSec?: number,
        // Target bytes per second read.
        targetReadBytesPerSec?: number,
        // Target ops per second read.
        targetReadOpsPerSec?: number,
    }
    
    interface NetworkUtilization {
        // Target bytes per second sent.
        targetSentBytesPerSec?: number,
        // Target packets per second sent.
        targetSentPacketsPerSec?: number,
        // Target bytes per second received.
        targetReceivedBytesPerSec?: number,
        // Target packets per second received.
        targetReceivedPacketsPerSec?: number,
    }
    
    interface BasicScaling {
        // The instance will be shut down this amount of time after receiving its last request.
        idleTimeout?: string,
        // The maximum number of instances for App Engine to create for this version.
        maxInstances?: number,
    }
    
    interface ManualScaling {
        // The number of instances to assign to the service at the start. This number can later be altered by using the [Modules API](https://cloud.google.com/appengine/docs/python/modules/functions) `set_num_instances()` function.
        instances?: number,
    }
    
    interface Network {
        // A list of ports (or port pairs) to forward from the VM into the app container.
        forwardedPorts?: string[],        
        // A tag to apply to the VM instance during creation.
        instanceTag?: string,
        // The Google Compute Engine network where the VMs will be created. If not specified, or empty, the network named "default" will be used. (The short name should be specified, not the resource path.)
        name?: string,
    }
    
    interface Resources {
        // How many CPU cores an app version needs.
        cpu?: number,
        // How much disk size, in GB, an app version needs.
        diskGb?: number,
        // How much memory, in GB, an app version needs.
        memoryGb?: number,
    }
    
    interface UrlMap {
        // A URL prefix. This value uses regular expression syntax (and so regexp special characters must be escaped), but it should not contain groupings. All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path. This is always required.
        urlRegex?: string,
        // Returns the contents of a file, such as an image, as the response.
        staticFiles?: StaticFilesHandler,
        // Executes a script to handle the request that matches the URL pattern.
        script?: ScriptHandler,
        // Use API Endpoints to handle requests.
        apiEndpoint?: ApiEndpointHandler,
        // Configures whether security (HTTPS) should be enforced for this URL.
        securityLevel?: string,
        // What level of login is required to access this resource.
        login?: string,
        // For users not logged in, how to handle access to resources with required login. Defaults to "redirect".
        authFailAction?: string,
        // `30x` code to use when performing redirects for the `secure` field. A `302` is used by default.
        redirectHttpResponseCode?: string,
    }
    
    interface StaticFilesHandler {
        // The path to the static files matched by the URL pattern, from the application root directory. The path can refer to text matched in groupings in the URL pattern.
        path?: string,
        // A regular expression that matches the file paths for all files that will be referenced by this handler.
        uploadPathRegex?: string,
        // HTTP headers to use for all responses from these URLs.
        httpHeaders?: any,
        // If specified, all files served by this handler will be served using the specified MIME type. If not specified, the MIME type for a file will be derived from the file's filename extension.
        mimeType?: string,
        // The length of time a static file served by this handler ought to be cached by web proxies and browsers.
        expiration?: string,
        // If true, this UrlMap entry does not match the request unless the file referenced by the handler also exists. If no such file exists, processing will continue with the next UrlMap that matches the requested URL.
        requireMatchingFile?: boolean,
        // By default, files declared in static file handlers are uploaded as static data and are only served to end users, they cannot be read by an application. If this field is set to true, the files are also uploaded as code data so your application can read them. Both uploads are charged against your code and static data storage resource quotas.
        applicationReadable?: boolean,
    }
    
    interface ScriptHandler {
        // Specifies the path to the script from the application root directory.
        scriptPath?: string,
    }
    
    interface ApiEndpointHandler {
        // Specifies the path to the script from the application root directory.
        scriptPath?: string,
    }
    
    interface ErrorHandler {
        // The error condition this handler applies to.
        errorCode?: string,
        // Static file content to be served for this error.
        staticFile?: string,
        // MIME type of file. If unspecified, "text/html" is assumed.
        mimeType?: string,
    }
    
    interface Library {
        // The name of the library, e.g. "PIL" or "django".
        name?: string,
        // The version of the library to select, or "latest".
        version?: string,
    }
    
    interface ApiConfigHandler {
        // For users not logged in, how to handle access to resources with required login. Defaults to "redirect".
        authFailAction?: string,
        // What level of login is required to access this resource. Default is "optional".
        login?: string,
        // Specifies the path to the script from the application root directory.
        script?: string,
        // Configures whether security (HTTPS) should be enforced for this URL.
        securityLevel?: string,
        // URL to serve the endpoint at.
        url?: string,
    }
    
    interface HealthCheck {
        // Whether to explicitly disable health checks for this instance.
        disableHealthCheck?: boolean,
        // The host header to send when performing an HTTP health check (e.g. myapp.appspot.com)
        host?: string,
        // The number of consecutive successful health checks before receiving traffic.
        healthyThreshold?: number,
        // The number of consecutive failed health checks before removing traffic.
        unhealthyThreshold?: number,
        // The number of consecutive failed health checks before an instance is restarted.
        restartThreshold?: number,
        // The interval between health checks.
        checkInterval?: string,
        // The amount of time before the health check is considered failed.
        timeout?: string,
    }
    
    interface Deployment {
        // A manifest of files stored in Google Cloud Storage which should be included as part of this application. All files must be readable using the credentials supplied with this call.
        files?: any,
        // If supplied, a docker (container) image which should be used to start the application. Only applicable to the 'vm' runtime.
        container?: ContainerInfo,
        // The origin of the source code for this deployment. There can be more than one source reference per Version if source code is distributed among multiple repositories.
        sourceReferences?: SourceReference[],        
    }
    
    interface FileInfo {
        // The URL source to use to fetch this file. Must be a URL to a resource in Google Cloud Storage in the form 'http(s)://storage.googleapis.com/\/\'.
        sourceUrl?: string,
        // The SHA1 (160 bits) hash of the file in hex.
        sha1Sum?: string,
        // The MIME type of the file; if unspecified, the value from Google Cloud Storage will be used.
        mimeType?: string,
    }
    
    interface ContainerInfo {
        // Reference to a hosted container image. Must be a URI to a resource in a Docker repository. Must be fully qualified, including tag or digest. e.g. gcr.io/my-project/image:tag or gcr.io/my-project/image@digest
        image?: string,
    }
    
    interface SourceReference {
        // Optional. A URI string identifying the repository. Example: "https://source.developers.google.com/p/app-123/r/default"
        repository?: string,
        // The canonical (and persistent) identifier of the deployed revision, i.e. any kind of aliases including tags or branch names are not allowed. Example (git): "2198322f89e0bb2e25021667c2ed489d1fd34e6b"
        revisionId?: string,
    }
    
    interface ListVersionsResponse {
        // The versions belonging to the requested application service.
        versions?: Version[],        
        // Continuation token for fetching the next page of results.
        nextPageToken?: string,
    }
    
    interface Service {
        // The full path to the Service resource in the API. Example: "apps/myapp/services/default" @OutputOnly
        name?: string,
        // The relative name/path of the service within the application. Example: "default" @OutputOnly
        id?: string,
        // A mapping that defines fractional HTTP traffic diversion to different versions within the service.
        split?: TrafficSplit,
    }
    
    interface TrafficSplit {
        // Which mechanism should be used as a selector when choosing a version to send a request to. The traffic selection algorithm will be stable for either type until allocations are changed.
        shardBy?: string,
        // Mapping from service version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version may only be specified once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated in this field may not be deleted until the service is deleted, or their traffic allocation is removed. Allocations must sum to 1. Supports precision up to two decimal places for IP-based splits and up to three decimal places for cookie-based splits.
        allocations?: any,
    }
    
    interface ListServicesResponse {
        // The services belonging to the requested application.
        services?: Service[],        
        // Continuation token for fetching the next page of results.
        nextPageToken?: string,
    }
    
    interface OperationMetadata {
        // The type of the operation (deprecated, use method field instead). Example: "create_version". @OutputOnly
        operationType?: string,
        // Timestamp that this operation was received. @OutputOnly
        insertTime?: string,
        // Timestamp that this operation was completed. (Not present if the operation is still in progress.) @OutputOnly
        endTime?: string,
        // The user who requested this operation. @OutputOnly
        user?: string,
        // Resource that this operation is acting on. Example: "apps/myapp/modules/default". @OutputOnly
        target?: string,
        // API method name that initiated the operation. Example: "google.appengine.v1beta4.Version.CreateVersion". @OutputOnly
        method?: string,
    }
    
    interface OperationMetadataV1Beta5 {
        // API method name that initiated the operation. Example: "google.appengine.v1beta5.Version.CreateVersion". @OutputOnly
        method?: string,
        // Timestamp that this operation was received. @OutputOnly
        insertTime?: string,
        // Timestamp that this operation was completed. (Not present if the operation is still in progress.) @OutputOnly
        endTime?: string,
        // The user who requested this operation. @OutputOnly
        user?: string,
        // Resource that this operation is acting on. Example: "apps/myapp/services/default". @OutputOnly
        target?: string,
    }
    
    interface OperationsResource {
        // Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        get (request: {        
            // Part of `name`. The name of the operation resource.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            operationsId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding below allows API services to override the binding to use different resource name schemes, such as `users/*/operations`.
        list (request: {        
            // Part of `name`. The name of the operation collection.
            appsId: string,
            // The standard list filter.
            filter?: string,
            // The standard list page size.
            pageSize?: number,
            // The standard list page token.
            pageToken?: string,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
    }
    
    
    interface VersionsResource {
        // Deploys new code and resource files to a version.
        create (request: {        
            // Part of `name`. Name of the resource to update. For example: "apps/myapp/services/default".
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes an existing version.
        delete (request: {        
            // Part of `name`. Name of the resource requested. For example: "apps/myapp/services/default/versions/v1".
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Part of `name`. See documentation of `appsId`.
            versionsId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets application deployment information.
        get (request: {        
            // Part of `name`. Name of the resource requested. For example: "apps/myapp/services/default/versions/v1".
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Part of `name`. See documentation of `appsId`.
            versionsId: string,
            // Controls the set of fields returned in the `Get` response.
            view?: string,
        }) : gapi.client.Request<Version>;        
        
        // Lists the versions of a service.
        list (request: {        
            // Part of `name`. Name of the resource requested. For example: "apps/myapp/services/default".
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Controls the set of fields returned in the `List` response.
            view?: string,
            // Maximum results to return per page.
            pageSize?: number,
            // Continuation token for fetching the next page of results.
            pageToken?: string,
        }) : gapi.client.Request<ListVersionsResponse>;        
        
        // Updates an existing version. Note: UNIMPLEMENTED.
        patch (request: {        
            // Part of `name`. Name of the resource to update. For example: "apps/myapp/services/default/versions/1".
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Part of `name`. See documentation of `appsId`.
            versionsId: string,
            // Standard field mask for the set of fields to be updated.
            mask?: string,
        }) : gapi.client.Request<Version>;        
        
    }
    
    
    interface ServicesResource {
        // Deletes a service and all enclosed versions.
        delete (request: {        
            // Part of `name`. Name of the resource requested. For example: "apps/myapp/services/default".
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets the current configuration of the service.
        get (request: {        
            // Part of `name`. Name of the resource requested. For example: "apps/myapp/services/default".
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
        }) : gapi.client.Request<Service>;        
        
        // Lists all the services in the application.
        list (request: {        
            // Part of `name`. Name of the resource requested. For example: "apps/myapp".
            appsId: string,
            // Maximum results to return per page.
            pageSize?: number,
            // Continuation token for fetching the next page of results.
            pageToken?: string,
        }) : gapi.client.Request<ListServicesResponse>;        
        
        // Updates the configuration of the specified service.
        patch (request: {        
            // Part of `name`. Name of the resource to update. For example: "apps/myapp/services/default".
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Standard field mask for the set of fields to be updated.
            mask?: string,
            // Whether to use Traffic Migration to shift traffic gradually. Traffic can only be migrated from a single version to another single version.
            migrateTraffic?: boolean,
        }) : gapi.client.Request<Operation>;        
        
        versions: VersionsResource,
    }
    
    
    interface AppsResource {
        // Gets information about an application.
        get (request: {        
            // Part of `name`. Name of the application to get. For example: "apps/myapp".
            appsId: string,
            // Certain resources associated with an application are created on-demand. Controls whether these resources should be created when performing the `GET` operation. If specified and any resources could not be created, the request will fail with an error code. Additionally, this parameter can cause the request to take longer to complete. Note: This parameter will be deprecated in a future version of the API.
            ensureResourcesExist?: boolean,
        }) : gapi.client.Request<Application>;        
        
        operations: OperationsResource,
        services: ServicesResource,
    }
    
}

declare module gapi.client.appengine {
    var apps: gapi.client.appengine.AppsResource; 
    
}
