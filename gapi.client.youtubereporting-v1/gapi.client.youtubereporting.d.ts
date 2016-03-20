// Type definitions for Google YouTube Reporting API v1
// Project: https://developers.google.com/youtube/reporting/v1/reports/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.youtubereporting {
    
    interface Media {
        // Name of the media resource.
        resourceName?: string,
    }
    
    interface ListReportTypesResponse {
        // The list of report types.
        reportTypes?: ReportType[],        
        // A token to retrieve next page of results. Pass this value in the ListReportTypesRequest.page_token field in the subsequent call to `ListReportTypes` method to retrieve the next page of results.
        nextPageToken?: string,
    }
    
    interface ReportType {
        // The ID of the report type (max. 100 characters).
        id?: string,
        // The name of the report type (max. 100 characters).
        name?: string,
        // True if this a system-managed report type; otherwise false. Reporting jobs for system-managed report types are created automatically and can thus not be used in the `CreateJob` method.
        systemManaged?: boolean,
    }
    
    interface Job {
        // The server-generated ID of the job (max. 40 characters).
        id?: string,
        // The type of reports this job creates. Corresponds to the ID of a ReportType.
        reportTypeId?: string,
        // The name of the job (max. 100 characters).
        name?: string,
        // The creation date/time of the job.
        createTime?: string,
        // True if this a system-managed job that cannot be modified by the user; otherwise false.
        systemManaged?: boolean,
    }
    
    interface ListJobsResponse {
        // The list of jobs.
        jobs?: Job[],        
        // A token to retrieve next page of results. Pass this value in the ListJobsRequest.page_token field in the subsequent call to `ListJobs` method to retrieve the next page of results.
        nextPageToken?: string,
    }
    
    interface Empty {
    }
    
    interface ListReportsResponse {
        // The list of report types.
        reports?: Report[],        
        // A token to retrieve next page of results. Pass this value in the ListReportsRequest.page_token field in the subsequent call to `ListReports` method to retrieve the next page of results.
        nextPageToken?: string,
    }
    
    interface Report {
        // The server-generated ID of the report.
        id?: string,
        // The ID of the job that created this report.
        jobId?: string,
        // The start of the time period that the report instance covers. The value is inclusive.
        startTime?: string,
        // The end of the time period that the report instance covers. The value is exclusive.
        endTime?: string,
        // The date/time when this report was created.
        createTime?: string,
        // The URL from which the report can be downloaded (max. 1000 characters).
        downloadUrl?: string,
    }
    
    interface MediaResource {
        // Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.
        download (request: {        
            // Name of the media that is being downloaded. See ByteStream.ReadRequest.resource_name.
            resourceName: string,
        }) : gapi.client.Request<Media>;        
        
    }
    
    
    interface ReportTypesResource {
        // Lists report types.
        list (request: {        
            // The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
            onBehalfOfContentOwner?: string,
            // Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
            pageSize?: number,
            // A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method.
            pageToken?: string,
            // If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned.
            includeSystemManaged?: boolean,
        }) : gapi.client.Request<ListReportTypesResponse>;        
        
    }
    
    
    interface ReportsResource {
        // Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.
        list (request: {        
            // The ID of the job.
            jobId: string,
            // The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
            onBehalfOfContentOwner?: string,
            // Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
            pageSize?: number,
            // A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method.
            pageToken?: string,
            // If set, only reports created after the specified date/time are returned.
            createdAfter?: string,
            // If set, only reports whose start time is greater than or equal the specified date/time are returned.
            startTimeAtOrAfter?: string,
            // If set, only reports whose start time is smaller than the specified date/time are returned.
            startTimeBefore?: string,
        }) : gapi.client.Request<ListReportsResponse>;        
        
        // Gets the metadata of a specific report.
        get (request: {        
            // The ID of the job.
            jobId: string,
            // The ID of the report to retrieve.
            reportId: string,
            // The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
            onBehalfOfContentOwner?: string,
        }) : gapi.client.Request<Report>;        
        
    }
    
    
    interface JobsResource {
        // Creates a job and returns it.
        create (request: {        
            // The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
            onBehalfOfContentOwner?: string,
        }) : gapi.client.Request<Job>;        
        
        // Lists jobs.
        list (request: {        
            // The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
            onBehalfOfContentOwner?: string,
            // Requested page size. Server may return fewer jobs than requested. If unspecified, server will pick an appropriate default.
            pageSize?: number,
            // A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListJobs` method.
            pageToken?: string,
            // If set to true, also system-managed jobs will be returned; otherwise only user-created jobs will be returned. System-managed jobs can neither be modified nor deleted.
            includeSystemManaged?: boolean,
        }) : gapi.client.Request<ListJobsResponse>;        
        
        // Gets a job.
        get (request: {        
            // The ID of the job to retrieve.
            jobId: string,
            // The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
            onBehalfOfContentOwner?: string,
        }) : gapi.client.Request<Job>;        
        
        // Deletes a job.
        delete (request: {        
            // The ID of the job to delete.
            jobId: string,
            // The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
            onBehalfOfContentOwner?: string,
        }) : gapi.client.Request<Empty>;        
        
        reports: ReportsResource,
    }
    
}

declare module gapi.client.youtubereporting {
    var media: gapi.client.youtubereporting.MediaResource; 
    
    var reportTypes: gapi.client.youtubereporting.ReportTypesResource; 
    
    var jobs: gapi.client.youtubereporting.JobsResource; 
    
}
