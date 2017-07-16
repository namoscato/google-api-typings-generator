// Type definitions for Google Google Cloud Functions API v1
// Project: https://cloud.google.com/functions
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.cloudfunctions {
    
    interface OperationMetadataV1Beta2 {
        // Target of the operation - for example
        // projects/project-1/locations/region-1/functions/function-1
        target?: string,
        // The original request that started the operation.
        request?: any,
        // Type of operation.
        type?: string,
    }
}

declare module gapi.client.cloudfunctions {
}
