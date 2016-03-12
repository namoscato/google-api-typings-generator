// Type definitions for Google Google Maps Coordinate API v1
// Project: https://developers.google.com/coordinate/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.coordinate.v1 {
    
    interface CustomField {
        // Custom field id.
        customFieldId?: string,
        // Identifies this object as a custom field.
        kind?: string,
        // Custom field value.
        value?: string,
    }
    
    interface CustomFieldDef {
        // Whether the field is enabled.
        enabled?: boolean,
        // List of enum items for this custom field. Populated only if the field type is enum. Enum fields appear as 'lists' in the Coordinate web and mobile UI.
        enumitems?: EnumItemDef[],        
        // Custom field id.
        id?: string,
        // Identifies this object as a custom field definition.
        kind?: string,
        // Custom field name.
        name?: string,
        // Whether the field is required for checkout.
        requiredForCheckout?: boolean,
        // Custom field type.
        type?: string,
    }
    
    interface CustomFieldDefListResponse {
        // Collection of custom field definitions in a team.
        items?: CustomFieldDef[],        
        // Identifies this object as a collection of custom field definitions in a team.
        kind?: string,
    }
    
    interface CustomFields {
        // Collection of custom fields.
        customField?: CustomField[],        
        // Identifies this object as a collection of custom fields.
        kind?: string,
    }
    
    interface EnumItemDef {
        // Whether the enum item is active. Jobs may contain inactive enum values; however, setting an enum to an inactive value when creating or updating a job will result in a 500 error.
        active?: boolean,
        // Identifies this object as an enum item definition.
        kind?: string,
        // Custom field value.
        value?: string,
    }
    
    interface Job {
        // Job id.
        id?: string,
        // List of job changes since it was created. The first change corresponds to the state of the job when it was created.
        jobChange?: JobChange[],        
        // Identifies this object as a job.
        kind?: string,
        // Current job state.
        state?: JobState,
    }
    
    interface JobChange {
        // Identifies this object as a job change.
        kind?: string,
        // Change applied to the job. Only the fields that were changed are set.
        state?: JobState,
        // Time at which this change was applied.
        timestamp?: string,
    }
    
    interface JobListResponse {
        // Jobs in the collection.
        items?: Job[],        
        // Identifies this object as a list of jobs.
        kind?: string,
        // A token to provide to get the next page of results.
        nextPageToken?: string,
    }
    
    interface JobState {
        // Email address of the assignee, or the string "DELETED_USER" if the account is no longer available.
        assignee?: string,
        // Custom fields.
        customFields?: CustomFields,
        // Customer name.
        customerName?: string,
        // Customer phone number.
        customerPhoneNumber?: string,
        // Identifies this object as a job state.
        kind?: string,
        // Job location.
        location?: Location,
        // Note added to the job.
        note?: string[],        
        // Job progress.
        progress?: string,
        // Job title.
        title?: string,
    }
    
    interface Location {
        // Address.
        addressLine?: string[],        
        // Identifies this object as a location.
        kind?: string,
        // Latitude.
        lat?: number,
        // Longitude.
        lng?: number,
    }
    
    interface LocationListResponse {
        // Locations in the collection.
        items?: LocationRecord[],        
        // Identifies this object as a list of locations.
        kind?: string,
        // A token to provide to get the next page of results.
        nextPageToken?: string,
        // Pagination information for token pagination.
        tokenPagination?: TokenPagination,
    }
    
    interface LocationRecord {
        // The collection time in milliseconds since the epoch.
        collectionTime?: string,
        // The location accuracy in meters. This is the radius of a 95% confidence interval around the location measurement.
        confidenceRadius?: number,
        // Identifies this object as a location.
        kind?: string,
        // Latitude.
        latitude?: number,
        // Longitude.
        longitude?: number,
    }
    
    interface Schedule {
        // Whether the job is scheduled for the whole day. Time of day in start/end times is ignored if this is true.
        allDay?: boolean,
        // Job duration in milliseconds.
        duration?: string,
        // Scheduled end time in milliseconds since epoch.
        endTime?: string,
        // Identifies this object as a job schedule.
        kind?: string,
        // Scheduled start time in milliseconds since epoch.
        startTime?: string,
    }
    
    interface Team {
        // Team id, as found in a coordinate team url e.g. https://coordinate.google.com/f/xyz where "xyz" is the team id.
        id?: string,
        // Identifies this object as a team.
        kind?: string,
        // Team name
        name?: string,
    }
    
    interface TeamListResponse {
        // Teams in the collection.
        items?: Team[],        
        // Identifies this object as a list of teams.
        kind?: string,
    }
    
    interface TokenPagination {
        // Identifies this object as pagination information.
        kind?: string,
        // A token to provide to get the next page of results.
        nextPageToken?: string,
        // A token to provide to get the previous page of results.
        previousPageToken?: string,
    }
    
    interface Worker {
        // Worker email address. If a worker has been deleted from your team, the email address will appear as DELETED_USER.
        id?: string,
        // Identifies this object as a worker.
        kind?: string,
    }
    
    interface WorkerListResponse {
        // Workers in the collection.
        items?: Worker[],        
        // Identifies this object as a list of workers.
        kind?: string,
    }
    
    interface CustomFieldDefResource {
        // Retrieves a list of custom field definitions for a team.
        list (request: {        
            // Team ID
            teamId: string,
        }) : gapi.client.Request<CustomFieldDefListResponse>;        
        
    }
    
    
    interface JobsResource {
        // Retrieves a job, including all the changes made to the job.
        get (request: {        
            // Job number
            jobId: string,
            // Team ID
            teamId: string,
        }) : gapi.client.Request<Job>;        
        
        // Inserts a new job. Only the state field of the job should be set.
        insert (request: {        
            // Job address as newline (Unix) separated string
            address: string,
            // Assignee email address, or empty string to unassign.
            assignee?: string,
            // Sets the value of custom fields. To set a custom field, pass the field id (from /team/teamId/custom_fields), a URL escaped '=' character, and the desired value as a parameter. For example, customField=12%3DAlice. Repeat the parameter for each custom field. Note that '=' cannot appear in the parameter value. Specifying an invalid, or inactive enum field will result in an error 500.
            customField?: string,
            // Customer name
            customerName?: string,
            // Customer phone number
            customerPhoneNumber?: string,
            // The latitude coordinate of this job's location.
            lat: number,
            // The longitude coordinate of this job's location.
            lng: number,
            // Job note as newline (Unix) separated string
            note?: string,
            // Team ID
            teamId: string,
            // Job title
            title: string,
        }) : gapi.client.Request<Job>;        
        
        // Retrieves jobs created or modified since the given timestamp.
        list (request: {        
            // Maximum number of results to return in one page.
            maxResults?: number,
            // Minimum time a job was modified in milliseconds since epoch.
            minModifiedTimestampMs?: string,
            // Whether to omit detail job history information.
            omitJobChanges?: boolean,
            // Continuation token
            pageToken?: string,
            // Team ID
            teamId: string,
        }) : gapi.client.Request<JobListResponse>;        
        
        // Updates a job. Fields that are set in the job state will be updated. This method supports patch semantics.
        patch (request: {        
            // Job address as newline (Unix) separated string
            address?: string,
            // Assignee email address, or empty string to unassign.
            assignee?: string,
            // Sets the value of custom fields. To set a custom field, pass the field id (from /team/teamId/custom_fields), a URL escaped '=' character, and the desired value as a parameter. For example, customField=12%3DAlice. Repeat the parameter for each custom field. Note that '=' cannot appear in the parameter value. Specifying an invalid, or inactive enum field will result in an error 500.
            customField?: string,
            // Customer name
            customerName?: string,
            // Customer phone number
            customerPhoneNumber?: string,
            // Job number
            jobId: string,
            // The latitude coordinate of this job's location.
            lat?: number,
            // The longitude coordinate of this job's location.
            lng?: number,
            // Job note as newline (Unix) separated string
            note?: string,
            // Job progress
            progress?: string,
            // Team ID
            teamId: string,
            // Job title
            title?: string,
        }) : gapi.client.Request<Job>;        
        
        // Updates a job. Fields that are set in the job state will be updated.
        update (request: {        
            // Job address as newline (Unix) separated string
            address?: string,
            // Assignee email address, or empty string to unassign.
            assignee?: string,
            // Sets the value of custom fields. To set a custom field, pass the field id (from /team/teamId/custom_fields), a URL escaped '=' character, and the desired value as a parameter. For example, customField=12%3DAlice. Repeat the parameter for each custom field. Note that '=' cannot appear in the parameter value. Specifying an invalid, or inactive enum field will result in an error 500.
            customField?: string,
            // Customer name
            customerName?: string,
            // Customer phone number
            customerPhoneNumber?: string,
            // Job number
            jobId: string,
            // The latitude coordinate of this job's location.
            lat?: number,
            // The longitude coordinate of this job's location.
            lng?: number,
            // Job note as newline (Unix) separated string
            note?: string,
            // Job progress
            progress?: string,
            // Team ID
            teamId: string,
            // Job title
            title?: string,
        }) : gapi.client.Request<Job>;        
        
    }
    
    
    interface LocationResource {
        // Retrieves a list of locations for a worker.
        list (request: {        
            // Maximum number of results to return in one page.
            maxResults?: number,
            // Continuation token
            pageToken?: string,
            // Start timestamp in milliseconds since the epoch.
            startTimestampMs: string,
            // Team ID
            teamId: string,
            // Worker email address.
            workerEmail: string,
        }) : gapi.client.Request<LocationListResponse>;        
        
    }
    
    
    interface ScheduleResource {
        // Retrieves the schedule for a job.
        get (request: {        
            // Job number
            jobId: string,
            // Team ID
            teamId: string,
        }) : gapi.client.Request<Schedule>;        
        
        // Replaces the schedule of a job with the provided schedule. This method supports patch semantics.
        patch (request: {        
            // Whether the job is scheduled for the whole day. Time of day in start/end times is ignored if this is true.
            allDay?: boolean,
            // Job duration in milliseconds.
            duration?: string,
            // Scheduled end time in milliseconds since epoch.
            endTime?: string,
            // Job number
            jobId: string,
            // Scheduled start time in milliseconds since epoch.
            startTime?: string,
            // Team ID
            teamId: string,
        }) : gapi.client.Request<Schedule>;        
        
        // Replaces the schedule of a job with the provided schedule.
        update (request: {        
            // Whether the job is scheduled for the whole day. Time of day in start/end times is ignored if this is true.
            allDay?: boolean,
            // Job duration in milliseconds.
            duration?: string,
            // Scheduled end time in milliseconds since epoch.
            endTime?: string,
            // Job number
            jobId: string,
            // Scheduled start time in milliseconds since epoch.
            startTime?: string,
            // Team ID
            teamId: string,
        }) : gapi.client.Request<Schedule>;        
        
    }
    
    
    interface TeamResource {
        // Retrieves a list of teams for a user.
        list (request: {        
            // Whether to include teams for which the user has the Admin role.
            admin?: boolean,
            // Whether to include teams for which the user has the Dispatcher role.
            dispatcher?: boolean,
            // Whether to include teams for which the user has the Worker role.
            worker?: boolean,
        }) : gapi.client.Request<TeamListResponse>;        
        
    }
    
    
    interface WorkerResource {
        // Retrieves a list of workers in a team.
        list (request: {        
            // Team ID
            teamId: string,
        }) : gapi.client.Request<WorkerListResponse>;        
        
    }
    
}

declare module gapi.client.coordinate {
    var customFieldDef: gapi.client.coordinate.v1.CustomFieldDefResource; 
    
    var jobs: gapi.client.coordinate.v1.JobsResource; 
    
    var location: gapi.client.coordinate.v1.LocationResource; 
    
    var schedule: gapi.client.coordinate.v1.ScheduleResource; 
    
    var team: gapi.client.coordinate.v1.TeamResource; 
    
    var worker: gapi.client.coordinate.v1.WorkerResource; 
    
}
