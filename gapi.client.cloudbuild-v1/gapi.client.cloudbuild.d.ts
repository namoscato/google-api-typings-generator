// Type definitions for Google Google Cloud Container Builder API v1
// Project: https://cloud.google.com/container-builder/docs/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.cloudbuild {
    
    interface Status {
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A list of messages that carry the error details.  There will be a
        // common set of message types for APIs to use.
        details?: any[],        
        // A developer-facing error message, which should be in English. Any
        // user-facing error message should be localized and sent in the
        // google.rpc.Status.details field, or localized by the client.
        message?: string,
    }
    
    interface BuildOperationMetadata {
        // The build that the operation is tracking.
        build?: Build,
    }
    
    interface Source {
        // If provided, get the source from this location in in Google Cloud Storage.
        storageSource?: StorageSource,
    }
    
    interface Operation {
        // The error result of the operation in case of failure.
        error?: Status,
        // If the value is `false`, it means the operation is still in progress.
        // If true, the operation is completed, and either `error` or `response` is
        // available.
        done?: boolean,
        // The normal response of the operation in case of success.  If the original
        // method returns no data on success, such as `Delete`, the response is
        // `google.protobuf.Empty`.  If the original method is standard
        // `Get`/`Create`/`Update`, the response should be the resource.  For other
        // methods, the response should have the type `XxxResponse`, where `Xxx`
        // is the original method name.  For example, if the original method name
        // is `TakeSnapshot()`, the inferred response type is
        // `TakeSnapshotResponse`.
        response?: any,
        // Service-specific metadata associated with the operation.  It typically
        // contains progress information and common metadata such as create time.
        // Some services might not provide such metadata.  Any method that returns a
        // long-running operation should document the metadata type, if any.
        metadata?: any,
        // The server-assigned name, which is only unique within the same service that
        // originally returns it. If you use the default HTTP mapping, the
        // `name` should have the format of `operations/some/unique/name`.
        name?: string,
    }
    
    interface BuiltImage {
        // Docker Registry 2.0 digest.
        digest?: string,
        // Name used to push the container image to Google Container Registry, as
        // presented to `docker push`.
        name?: string,
    }
    
    interface StorageSource {
        // Google Cloud Storage generation for the object. If the generation is
        // omitted, the latest generation will be used.
        generation?: string,
        // Google Cloud Storage bucket containing source (see
        // [Bucket Name
        // Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
        bucket?: string,
        // Google Cloud Storage object containing source.
        // 
        // This object must be a gzipped archive file (.tar.gz) containing source to
        // build.
        object?: string,
    }
    
    interface Results {
        // Images that were built as a part of the build.
        images?: BuiltImage[],        
    }
    
    interface Build {
        // Unique identifier of the build.
        // @OutputOnly
        id?: string,
        // Results of the build.
        // @OutputOnly
        results?: Results,
        // Status of the build.
        // @OutputOnly
        status?: string,
        // Time at whihc execution of the build was finished.
        // @OutputOnly
        finishTime?: string,
        // Amount of time that this build should be allowed to run, to second
        // granularity. If this amount of time elapses, work on the build will cease
        // and the build status will be TIMEOUT.
        // 
        // Default time is ten minutes.
        timeout?: string,
        // Describes the operations to be performed on the workspace.
        steps?: BuildStep[],        
        // Describes where to find the source files to build.
        source?: Source,
        // Time at which the build was created.
        // @OutputOnly
        createTime?: string,
        // List of images expected to be built and pushed to Google Container
        // Registry. If an image is listed here and the image is not produced by
        // one of the build steps, the build will fail. Any images present when
        // the build steps are complete will be pushed to Container Registry.
        images?: string[],        
        // Time at which execution of the build was started.
        // @OutputOnly
        startTime?: string,
        // Google Cloud Storage bucket where logs should be written (see
        // [Bucket Name
        // Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
        // Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`.
        logsBucket?: string,
        // ID of the project.
        // @OutputOnly.
        projectId?: string,
    }
    
    interface CancelBuildRequest {
    }
    
    interface ListOperationsResponse {
        // The standard List next-page token.
        nextPageToken?: string,
        // A list of operations that matches the specified filter in the request.
        operations?: Operation[],        
    }
    
    interface BuildStep {
        // Command-line arguments to use when running this step's container.
        args?: string[],        
        // Working directory (relative to project source root) to use when running
        // this operation's container.
        dir?: string,
        // Additional environment variables to set for this step's container.
        env?: string[],        
        // Name of the container image to use for creating this stage in the
        // pipeline, as presented to `docker pull`.
        name?: string,
    }
    
    interface ListBuildsResponse {
        // Token to receive the next page of results.
        nextPageToken?: string,
        // Builds will be sorted by create_time, descending.
        builds?: Build[],        
    }
    
    interface BuildsResource {
        // Returns information about a previously requested build.
        // 
        // The Build that is returned includes its status (e.g., success or failure,
        // or in-progress), and timing information.
        get (request: {        
            // ID of the build.
            id: string,
            // ID of the project.
            projectId: string,
        }) : gapi.client.Request<Build>;        
        
        // Starts a build with the specified configuration.
        // 
        // The long-running Operation returned by this method will include the ID of
        // the build, which can be passed to GetBuild to determine its status (e.g.,
        // success or failure).
        create (request: {        
            // ID of the project.
            projectId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists previously requested builds.
        // 
        // Previously requested builds may still be in-progress, or may have finished
        // successfully or unsuccessfully.
        list (request: {        
            // Number of results to return in the list.
            pageSize?: number,
            // Token to provide to skip to a particular spot in the list.
            pageToken?: string,
            // ID of the project.
            projectId: string,
        }) : gapi.client.Request<ListBuildsResponse>;        
        
        // Cancels a requested build in progress.
        cancel (request: {        
            // ID of the build.
            id: string,
            // ID of the project.
            projectId: string,
        }) : gapi.client.Request<Build>;        
        
    }
    
    
    interface ProjectsResource {
        builds: BuildsResource,
    }
    
    
    interface OperationsResource {
        // Gets the latest state of a long-running operation.  Clients can use this
        // method to poll the operation result at intervals as recommended by the API
        // service.
        get (request: {        
            // The name of the operation resource.
            name: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists operations that match the specified filter in the request. If the
        // server doesn't support this method, it returns `UNIMPLEMENTED`.
        // 
        // NOTE: the `name` binding below allows API services to override the binding
        // to use different resource name schemes, such as `users/*/operations`.
        list (request: {        
            // The standard list page size.
            pageSize?: number,
            // The standard list filter.
            filter?: string,
            // The standard list page token.
            pageToken?: string,
            // The name of the operation collection.
            name: string,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
    }
    
}

declare module gapi.client.cloudbuild {
    var projects: gapi.client.cloudbuild.ProjectsResource; 
    
    var operations: gapi.client.cloudbuild.OperationsResource; 
    
}
