// Type definitions for Google Drive API v1
// Project: https://developers.google.com/drive/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.drive.v1 {
    
    interface File {
        // Create time for this file (formatted RFC 3339 timestamp).
        createdDate?: string,
        // A short description of the file
        description?: string,
        // 
        downloadUrl?: string,
        // ETag of the file.
        etag?: string,
        // The file extension used when downloading this file. This field is read only. To set the extension, include it on title when creating the file. This will only be populated on files with content stored in Drive.
        fileExtension?: string,
        // The size of the file in bytes. This will only be populated on files with content stored in Drive.
        fileSize?: string,
        // The id of the file.
        id?: string,
        // Indexable text attributes for the file (can only be written)
        indexableText?: {        
            // The text to be indexed for this file
            text?: string,
        },        
        // The type of file. This is always drive#file
        kind?: string,
        // Labels for the file.
        labels?: {        
            // Whether this file is hidden from the user
            hidden?: boolean,
            // Whether this file is starred by the user.
            starred?: boolean,
            // Whether this file has been trashed.
            trashed?: boolean,
        },        
        // Last time this file was viewed by the user (formatted RFC 3339 timestamp).
        lastViewedDate?: string,
        // An MD5 checksum for the content of this file. This will only be populated on files with content stored in Drive.
        md5Checksum?: string,
        // The mimetype of the file
        mimeType?: string,
        // Last time this file was modified by the user (formatted RFC 3339 timestamp).
        modifiedByMeDate?: string,
        // Last time this file was modified by anyone (formatted RFC 3339 timestamp).
        modifiedDate?: string,
        // Collection of parent folders which contain this file.
        // On insert, setting this field will put the file in all of the provided folders. If no folders are provided, the file will be placed in the default root folder. On update, this field is ignored.
        parentsCollection?: {        
            // The id of this parent
            id?: string,
            // A link to get the metadata for this parent
            parentLink?: string,
        }[],        
        // A link back to this file.
        selfLink?: string,
        // The title of this file.
        title?: string,
        // The permissions for the authenticated user on this file.
        userPermission?: Permission,
    }
    
    interface Permission {
        // Any additional roles that this permission describes.
        additionalRoles?: string[],        
        // An etag for this permission.
        etag?: string,
        // The kind of this permission. This is always drive#permission
        kind?: string,
        // The role that this permission describes. (For example: reader, writer, owner)
        role?: string,
        // The type of permission (For example: user, group etc).
        type?: string,
    }
    
    interface FilesResource {
        // Gets a file's metadata by id.
        get (request: {        
            // The id for the file in question.
            id: string,
            // This parameter is deprecated and has no function.
            projection?: string,
            // Whether to update the view date after successfully retrieving the file.
            updateViewedDate?: boolean,
        }) : gapi.client.Request<File>;        
        
        // Inserts a file, and any settable metadata or blob content sent with the request.
        insert (request: {        
        }) : gapi.client.Request<File>;        
        
        // Updates file metadata and/or content. This method supports patch semantics.
        patch (request: {        
            // The id for the file in question.
            id: string,
            // Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions.
            newRevision?: boolean,
            // Controls updating the modified date of the file. If true, the modified date will be updated to the current time, regardless of whether other changes are being made. If false, the modified date will only be updated to the current time if other changes are also being made (changing the title, for example).
            updateModifiedDate?: boolean,
            // Whether to update the view date after successfully updating the file.
            updateViewedDate?: boolean,
        }) : gapi.client.Request<File>;        
        
        // Updates file metadata and/or content
        update (request: {        
            // The id for the file in question.
            id: string,
            // Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions.
            newRevision?: boolean,
            // Controls updating the modified date of the file. If true, the modified date will be updated to the current time, regardless of whether other changes are being made. If false, the modified date will only be updated to the current time if other changes are also being made (changing the title, for example).
            updateModifiedDate?: boolean,
            // Whether to update the view date after successfully updating the file.
            updateViewedDate?: boolean,
        }) : gapi.client.Request<File>;        
        
    }
    
}

declare module gapi.client.drive {
    var files: gapi.client.drive.v1.FilesResource; 
    
}
