// Type definitions for Google DFA Reporting API v1
// Project: https://developers.google.com/doubleclick-advertisers/reporting/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.dfareporting.v1 {
    
    interface DimensionFilter {
        // The name of the dimension to filter.
        dimensionName?: string,
        // Kind of resource this is, in this case dfareporting#dimensionFilter.
        kind?: string,
        // The value of the dimension to filter for.
        value?: string,
    }
    
    interface DimensionValue {
        // Name of the dimension.
        dimensionName?: string,
        // ETag of this response for caching purposes.
        etag?: string,
        // The ID associated with the value if available.
        id?: string,
        // Kind of resource this is, in this case dfareporting#dimensionValue.
        kind?: string,
        // The value of the dimension.
        value?: string,
    }
    
    interface DimensionValueList {
        // ETag of this response for caching purposes.
        etag?: string,
        // The dimension values returned in this response.
        items?: DimensionValue[],        
        // Kind of list this is, in this case dfareporting#dimensionValueList.
        kind?: string,
        // Continuation token used to page through dimension values. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
        nextPageToken?: string,
    }
    
    interface DimensionValueRequest {
        // The name of the dimension values should be requested for.
        dimensionName?: string,
        // The end date of the date range for which to retrieve dimension values. A string of the format: "yyyy-MM-dd".
        endDate?: string,
        // List of filters to filter values by. The filters are ANDed.
        filters?: DimensionFilter[],        
        // Kind of request this is, in this case dfareporting#dimensionValueRequest.
        kind?: string,
        // The start date of the date range for which to retrieve dimension values. A string of the format: "yyyy-MM-dd".
        startDate?: string,
    }
    
    interface File {
        // The date range for which the file has report data.
        dateRange?: {        
            // The end date of the date range, inclusive. A string of the format: "yyyy-MM-dd".
            endDate?: string,
            // The start date of the date range, inclusive. A string of the format: "yyyy-MM-dd".
            startDate?: string,
        },        
        // ETag of this response for caching purposes.
        etag?: string,
        // The file name of the file.
        fileName?: string,
        // The unique ID of this report file.
        id?: string,
        // Kind of resource this is, in this case dfareporting#file.
        kind?: string,
        // The timestamp in milliseconds since epoch when this file was last modified.
        lastModifiedTime?: string,
        // The ID of the report this file was generated from.
        reportId?: string,
        // The status of the report file, one of:  
        // - "PROCESSING" 
        // - "REPORT_AVAILABLE" 
        // - "FAILED" 
        // - "CANCELLED"
        status?: string,
        // The urls where the completed report file can be downloaded.
        urls?: {        
            // Urls for generated CSV data.
            csv?: {            
                // The url for downloading the report data through the API.
                apiUrl?: string,
                // The url for downloading the report data through a browser.
                browserUrl?: string,
            },            
        },        
    }
    
    interface FileList {
        // ETag of this response for caching purposes.
        etag?: string,
        // The files returned in this response.
        items?: File[],        
        // Kind of list this is, in this case dfareporting#fileList.
        kind?: string,
        // Continuation token used to page through files. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
        nextPageToken?: string,
    }
    
    interface Report {
        // The account id this report belongs to.
        accountId?: string,
        // The report criteria.
        criteria?: {        
            // Activity group.
            activities?: {            
                // List of activity filters. The dimension values need to be all either of type "dfa:activity" or "dfa:activityGroup".
                filters?: DimensionValue[],                
                // List of names of floodlight activity metrics.
                metricNames?: string[],                
            },            
            // Custom Rich Media Events group.
            customRichMediaEvents?: {            
                // List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName.
                filteredEventIds?: DimensionValue[],                
            },            
            // The date range this report should be run for.
            dateRange?: {            
                // The end date of the date range, inclusive. A string of the format: "yyyy-MM-dd".
                endDate?: string,
                // The date range relative to the date of when the report is run, one of:  
                // - "TODAY" 
                // - "YESTERDAY" 
                // - "WEEK_TO_DATE" 
                // - "MONTH_TO_DATE" 
                // - "QUARTER_TO_DATE" 
                // - "YEAR_TO_DATE" 
                // - "PREVIOUS_WEEK" 
                // - "PREVIOUS_MONTH" 
                // - "PREVIOUS_QUARTER" 
                // - "PREVIOUS_YEAR" 
                // - "LAST_7_DAYS" 
                // - "LAST_30_DAYS" 
                // - "LAST_90_DAYS" 
                // - "LAST_365_DAYS" 
                // - "LAST_24_MONTHS"
                relativeDateRange?: string,
                // The start date of the date range, inclusive. A string of the format: "yyyy-MM-dd".
                startDate?: string,
            },            
            // The list of filters dimensions are filtered on.
            // Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
            dimensionFilters?: DimensionValue[],            
            // The list of dimensions the report should include.
            dimensions?: SortedDimension[],            
            // The list of names of metrics the report should include.
            metricNames?: string[],            
        },        
        // ETag of this response for caching purposes.
        etag?: string,
        // The file name used when generating report files for this report.
        fileName?: string,
        // The unique ID identifying this report resource.
        id?: string,
        // Kind of resource this is, in this case dfareporting#report.
        kind?: string,
        // The timestamp (in milliseconds since epoch) of when this report was last modified.
        lastModifiedTime?: string,
        // The name of the report.
        name?: string,
        // The user profile id of the owner of this report.
        ownerProfileId?: string,
        // The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY".
        schedule?: {        
            // Whether the schedule is active or not. Must be set to either true or false.
            active?: boolean,
            // Defines every how many days, weeks or months the report should be run. Needs to be set when "repeats" is either "DAILY", "WEEKLY" or "MONTHLY".
            every?: number,
            // The expiration date when the scheduled report stops running.
            expirationDate?: string,
            // The interval the report is repeated for, one of:  
            // - "DAILY", also requires field "every" to be set. 
            // - "WEEKLY", also requires fields "every" and "repeatsOnWeekDays" to be set. 
            // - "TWICE_A_MONTH" 
            // - "MONTHLY", also requires fields "every" and "runsOnDayOfMonth" to be set. 
            // - "QUARTERLY" 
            // - "YEARLY"
            repeats?: string,
            // List of week days "WEEKLY" scheduled reports should run on.
            repeatsOnWeekDays?: string[],            
            // Enum to define for "MONTHLY" scheduled reports whether reports should be repeated on the same day of the month as "startDate" or the same day of the week of the month. Possible values are:  
            // - DAY_OF_MONTH 
            // - WEEK_OF_MONTH  
            // Example: If 'startDate' is Monday, April 2nd 2012 (2012-04-02), "DAY_OF_MONTH" would run subsequent reports on the 2nd of every Month, and "WEEK_OF_MONTH" would run subsequent reports on the first Monday of the month.
            runsOnDayOfMonth?: string,
            // Start date of date range for which scheduled reports should be run.
            startDate?: string,
        },        
        // The subbaccount id this report belongs to if applicable.
        subAccountId?: string,
        // The type of the report, currently only "STANDARD" is supported.
        type?: string,
    }
    
    interface ReportList {
        // ETag of this response for caching purposes.
        etag?: string,
        // The reports returned in this response.
        items?: Report[],        
        // Kind of list this is, in this case dfareporting#reportList.
        kind?: string,
        // Continuation token used to page through reports. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
        nextPageToken?: string,
    }
    
    interface SortedDimension {
        // Kind of resource this is, in this case dfareporting#sortedDimension.
        kind?: string,
        // The name of the dimension.
        name?: string,
        // An optional sort order for the dimension column, one of:  
        // - "ASCENDING" 
        // - "DESCENDING"
        sortOrder?: string,
    }
    
    interface UserProfile {
        // The account ID this profile belongs to.
        accountId?: string,
        // The account name this profile belongs to.
        accountName?: string,
        // ETag of this response for caching purposes.
        etag?: string,
        // Kind of resource this is, in this case dfareporting#userProfile.
        kind?: string,
        // The unique ID of the user profile.
        profileId?: string,
        // The sub account ID this profile belongs to if applicable.
        subAccountId?: string,
        // The sub account name this profile belongs to if applicable.
        subAccountName?: string,
        // The user name.
        userName?: string,
    }
    
    interface UserProfileList {
        // ETag of this response for caching purposes.
        etag?: string,
        // The user profiles returned in this response.
        items?: UserProfile[],        
        // Kind of list this is, in this case dfareporting#userProfileList.
        kind?: string,
    }
    
    interface DimensionValuesResource {
        // Retrieves list of report dimension values for a list of filters.
        query (request: {        
            // Maximum number of results to return.
            maxResults?: number,
            // The value of the nextToken from the previous result page.
            pageToken?: string,
            // The DFA user profile id.
            profileId: string,
        }) : gapi.client.Request<DimensionValueList>;        
        
    }
    
    
    interface FilesResource {
        // Lists files for a user profile.
        list (request: {        
            // Maximum number of results to return.
            maxResults?: number,
            // The value of the nextToken from the previous result page.
            pageToken?: string,
            // The DFA profile id.
            profileId: string,
            // The field to sort the list by.
            sortField?: string,
            // Order of sorted results, default is 'DESCENDING'.
            sortOrder?: string,
        }) : gapi.client.Request<FileList>;        
        
    }
    
    
    interface FilesResource {
        // Retrieves a report file.
        get (request: {        
            // The id of the report file.
            fileId: string,
            // The DFA profile id.
            profileId: string,
            // The id of the report.
            reportId: string,
        }) : gapi.client.Request<File>;        
        
        // Lists files for a report.
        list (request: {        
            // Maximum number of results to return.
            maxResults?: number,
            // The value of the nextToken from the previous result page.
            pageToken?: string,
            // The DFA profile id.
            profileId: string,
            // The id of the parent report.
            reportId: string,
            // The field to sort the list by.
            sortField?: string,
            // Order of sorted results, default is 'DESCENDING'.
            sortOrder?: string,
        }) : gapi.client.Request<FileList>;        
        
    }
    
    
    interface ReportsResource {
        // Deletes a report by its id.
        delete (request: {        
            // The DFA user profile id.
            profileId: string,
            // The id of the report.
            reportId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a report by its id.
        get (request: {        
            // The DFA user profile id.
            profileId: string,
            // The id of the report.
            reportId: string,
        }) : gapi.client.Request<Report>;        
        
        // Creates a report.
        insert (request: {        
            // The DFA user profile id.
            profileId: string,
        }) : gapi.client.Request<Report>;        
        
        // Retrieves list of reports.
        list (request: {        
            // Maximum number of results to return.
            maxResults?: number,
            // The value of the nextToken from the previous result page.
            pageToken?: string,
            // The DFA user profile id.
            profileId: string,
            // The field to sort the list by.
            sortField?: string,
            // Order of sorted results, default is 'DESCENDING'.
            sortOrder?: string,
        }) : gapi.client.Request<ReportList>;        
        
        // Updates a report. This method supports patch semantics.
        patch (request: {        
            // The DFA user profile id.
            profileId: string,
            // The id of the report.
            reportId: string,
        }) : gapi.client.Request<Report>;        
        
        // Runs a report.
        run (request: {        
            // The DFA profile id.
            profileId: string,
            // The id of the report.
            reportId: string,
            // If set and true, tries to run the report synchronously.
            synchronous?: boolean,
        }) : gapi.client.Request<File>;        
        
        // Updates a report.
        update (request: {        
            // The DFA user profile id.
            profileId: string,
            // The id of the report.
            reportId: string,
        }) : gapi.client.Request<Report>;        
        
        files: FilesResource,
    }
    
    
    interface UserProfilesResource {
        // Gets one user profile by id.
        get (request: {        
            // The user profile id.
            profileId: string,
        }) : gapi.client.Request<UserProfile>;        
        
        // Retrieves list of user profiles for a user.
        list (request: {        
        }) : gapi.client.Request<UserProfileList>;        
        
    }
    
}

declare module gapi.client.dfareporting {
    var dimensionValues: gapi.client.dfareporting.v1.DimensionValuesResource; 
    
    var files: gapi.client.dfareporting.v1.FilesResource; 
    
    var reports: gapi.client.dfareporting.v1.ReportsResource; 
    
    var userProfiles: gapi.client.dfareporting.v1.UserProfilesResource; 
    
}
