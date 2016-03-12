// Type definitions for Google Groups Migration API v1
// Project: https://developers.google.com/google-apps/groups-migration/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.groupsmigration.v1 {
    
    interface Groups {
        // The kind of insert resource this is.
        kind?: string,
        // The status of the insert request.
        responseCode?: string,
    }
    
    interface ArchiveResource {
        // Inserts a new mail into the archive of the Google group.
        insert (request: {        
            // The group ID
            groupId: string,
        }) : gapi.client.Request<Groups>;        
        
    }
    
}

declare module gapi.client.groupsmigration {
    var archive: gapi.client.groupsmigration.v1.ArchiveResource; 
    
}
