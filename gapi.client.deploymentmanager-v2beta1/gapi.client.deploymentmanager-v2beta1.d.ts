// Type definitions for Google Google Cloud Deployment Manager API v2beta1
// Project: https://developers.google.com/deployment-manager/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.deploymentmanager {
    
    interface Deployment {
        // ! An optional user-provided description of the deployment.
        description?: string,
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // ! [Output Only] URL of the manifest representing the full configuration ! of this deployment.
        manifest?: string,
        // ! The name of the deployment, which must be unique within the project.
        name?: string,
        // ! [Input Only] The YAML configuration to use in processing this deployment. ! ! When you create a deployment, the server creates a new manifest with the ! given YAML configuration and sets the `manifest` property to the URL of ! the manifest resource.
        targetConfig?: string,
    }
    
    interface DeploymentsListResponse {
        // ! The deployments contained in this response.
        deployments?: Deployment[],        
        // ! A token used to continue a truncated list request.
        nextPageToken?: string,
    }
    
    interface Manifest {
        // v2beta1: YAML with config - described above v2beta2: YAML + templates. ! The YAML configuration for this manifest.
        config?: string,
        // ! [Output Only] The fully-expanded configuration file, including any ! templates and references.
        evaluatedConfig?: string,
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // ! [Output Only] The name of the manifest.
        name?: string,
        // [Output Only] Self link for the manifest.
        selfLink?: string,
    }
    
    interface ManifestsListResponse {
        // ! Manifests contained in this list response.
        manifests?: Manifest[],        
        // ! A token used to continue a truncated list request.
        nextPageToken?: string,
    }
    
    interface Operation {
        // ! [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // ! [Output Only] The time that this operation was completed. This is in ! RFC3339 format.
        endTime?: string,
        // ! [Output Only] If errors occurred during processing of this operation, ! this field will be populated.
        error?: {        
            // ! The array of errors encountered while processing this operation.
            errors?: {            
                // ! The error type identifier for this error.
                code?: string,
                // ! Indicates the field in the request which caused the error. ! This property is optional.
                location?: string,
                // ! An optional, human-readable error message.
                message?: string,
            }[],            
        },        
        // ! [Output Only] If operation fails, the HTTP error message returned, ! e.g. NOT FOUND.
        httpErrorMessage?: string,
        // ! [Output Only] If operation fails, the HTTP error status code returned, ! e.g. 404.
        httpErrorStatusCode?: number,
        // ! [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // ! [Output Only] The time that this operation was requested. ! This is in RFC 3339 format.
        insertTime?: string,
        // ! [Output Only] Name of the operation.
        name?: string,
        // ! [Output Only] Type of the operation. Examples include "insert", or ! "delete"
        operationType?: string,
        // ! [Output Only] An optional progress indicator that ranges from 0 to 100. ! There is no requirement that this be linear or support any granularity ! of operations. This should not be used to guess at when the operation will ! be complete. This number should be monotonically increasing as the ! operation progresses.
        progress?: number,
        // [Output Only] Self link for the manifest.
        selfLink?: string,
        // ! [Output Only] The time that this operation was started by the server. ! This is in RFC 3339 format.
        startTime?: string,
        // ! [Output Only] Status of the operation. Can be one of the following: ! "PENDING", "RUNNING", or "DONE".
        status?: string,
        // ! [Output Only] An optional textual description of the current status of ! the operation.
        statusMessage?: string,
        // ! [Output Only] Unique target id which identifies a particular ! incarnation of the target.
        targetId?: string,
        // ! [Output Only] URL of the resource the operation is mutating.
        targetLink?: string,
        // ! [Output Only] User who requested the operation, for example ! "user@example.com"
        user?: string,
        // ! [Output Only] If warning messages generated during processing of this ! operation, this field will be populated.
        warnings?: {        
            // ! The warning type identifier for this warning.
            code?: any,
            // ! Metadata for this warning in 'key: value' format.
            data?: {            
                // ! A key for the warning data.
                key?: string,
                // ! A warning data value corresponding to the key.
                value?: string,
            }[],            
            // ! Optional human-readable details for this warning.
            message?: string,
        }[],        
    }
    
    interface OperationsListResponse {
        // ! A token used to continue a truncated list request.
        nextPageToken?: string,
        // ! Operations contained in this list response.
        operations?: Operation[],        
    }
    
    interface Resource {
        // ! [Output Only] A list of any errors that occurred during deployment.
        errors?: string[],        
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // ! [Output Only] The intended state of the resource.
        intent?: string,
        // ! [Output Only] URL of the manifest representing the current configuration ! of this resource.
        manifest?: string,
        // ! [Output Only] The name of the resource as it appears in the YAML config.
        name?: string,
        // ! [Output Only] The state of the resource.
        state?: string,
        // ! [Output Only] The type of the resource, for example ! ?compute.v1.instance?, or ?replicaPools.v1beta2.instanceGroupManager?
        type?: string,
        // ! [Output Only] The URL of the actual resource.
        url?: string,
    }
    
    interface ResourcesListResponse {
        // ! A token used to continue a truncated list request.
        nextPageToken?: string,
        // ! Resources contained in this list response.
        resources?: Resource[],        
    }
    
    interface Type {
        // ! Name of the type.
        name?: string,
    }
    
    interface TypesListResponse {
        // ! Types supported by Deployment Manager
        types?: Type[],        
    }
    
    interface DeploymentsResource {
        // ! Deletes a deployment and all of the resources in the deployment.
        delete (request: {        
            // ! The name of the deployment for this request.
            deployment: string,
            // ! The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // ! Gets information about a specific deployment.
        get (request: {        
            // ! The name of the deployment for this request.
            deployment: string,
            // ! The project ID for this request.
            project: string,
        }) : gapi.client.Request<Deployment>;        
        
        // ! Creates a deployment and all of the resources described by the ! deployment manifest.
        insert (request: {        
            // ! The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // ! Lists all deployments for a given project.
        list (request: {        
            // ! Maximum count of results to be returned. ! Acceptable values are 0 to 100, inclusive. (Default: 50)
            maxResults?: number,
            // ! Specifies a nextPageToken returned by a previous list request. This ! token can be used to request the next page of results from a previous ! list request.
            pageToken?: string,
            // ! The project ID for this request.
            project: string,
        }) : gapi.client.Request<DeploymentsListResponse>;        
        
    }
    
    
    interface ManifestsResource {
        // ! Gets information about a specific manifest.
        get (request: {        
            // ! The name of the deployment for this request.
            deployment: string,
            // ! The name of the manifest for this request.
            manifest: string,
            // ! The project ID for this request.
            project: string,
        }) : gapi.client.Request<Manifest>;        
        
        // ! Lists all manifests for a given deployment.
        list (request: {        
            // ! The name of the deployment for this request.
            deployment: string,
            // ! Maximum count of results to be returned. ! Acceptable values are 0 to 100, inclusive. (Default: 50)
            maxResults?: number,
            // ! Specifies a nextPageToken returned by a previous list request. This ! token can be used to request the next page of results from a previous ! list request.
            pageToken?: string,
            // ! The project ID for this request.
            project: string,
        }) : gapi.client.Request<ManifestsListResponse>;        
        
    }
    
    
    interface OperationsResource {
        // ! Gets information about a specific Operation.
        get (request: {        
            // ! The name of the operation for this request.
            operation: string,
            // ! The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // ! Lists all Operations for a project.
        list (request: {        
            // ! Maximum count of results to be returned. ! Acceptable values are 0 to 100, inclusive. (Default: 50)
            maxResults?: number,
            // ! Specifies a nextPageToken returned by a previous list request. This ! token can be used to request the next page of results from a previous ! list request.
            pageToken?: string,
            // ! The project ID for this request.
            project: string,
        }) : gapi.client.Request<OperationsListResponse>;        
        
    }
    
    
    interface ResourcesResource {
        // ! Gets information about a single resource.
        get (request: {        
            // ! The name of the deployment for this request.
            deployment: string,
            // ! The project ID for this request.
            project: string,
            // ! The name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<Resource>;        
        
        // ! Lists all resources in a given deployment.
        list (request: {        
            // ! The name of the deployment for this request.
            deployment: string,
            // ! Maximum count of results to be returned. ! Acceptable values are 0 to 100, inclusive. (Default: 50)
            maxResults?: number,
            // ! Specifies a nextPageToken returned by a previous list request. This ! token can be used to request the next page of results from a previous ! list request.
            pageToken?: string,
            // ! The project ID for this request.
            project: string,
        }) : gapi.client.Request<ResourcesListResponse>;        
        
    }
    
    
    interface TypesResource {
        // ! Lists all Types for Deployment Manager.
        list (request: {        
            // ! Maximum count of results to be returned. ! Acceptable values are 0 to 100, inclusive. (Default: 50)
            maxResults?: number,
            // ! Specifies a nextPageToken returned by a previous list request. This ! token can be used to request the next page of results from a previous ! list request.
            pageToken?: string,
            // ! The project ID for this request.
            project: string,
        }) : gapi.client.Request<TypesListResponse>;        
        
    }
    
}

declare module gapi.client.deploymentmanager {
    var deployments: gapi.client.deploymentmanager.DeploymentsResource; 
    
    var manifests: gapi.client.deploymentmanager.ManifestsResource; 
    
    var operations: gapi.client.deploymentmanager.OperationsResource; 
    
    var resources: gapi.client.deploymentmanager.ResourcesResource; 
    
    var types: gapi.client.deploymentmanager.TypesResource; 
    
}
