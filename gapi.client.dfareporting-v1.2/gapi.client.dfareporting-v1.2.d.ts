// Type definitions for Google DFA Reporting API v1.2
// Project: https://developers.google.com/doubleclick-advertisers/reporting/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.dfareporting.v1_2 {
    
    interface Activities {
        // List of activity filters. The dimension values need to be all either of type "dfa:activity" or "dfa:activityGroup".
        filters?: DimensionValue[],        
        // The kind of resource this is, in this case dfareporting#activities.
        kind?: string,
        // List of names of floodlight activity metrics.
        metricNames?: string[],        
    }
    
    interface CustomRichMediaEvents {
        // List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName.
        filteredEventIds?: DimensionValue[],        
        // The kind of resource this is, in this case dfareporting#customRichMediaEvents.
        kind?: string,
    }
    
    interface DateRange {
        // The end date of the date range, inclusive. A string of the format: "yyyy-MM-dd".
        endDate?: string,
        // The kind of resource this is, in this case dfareporting#dateRange.
        kind?: string,
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
    }
    
    interface DimensionFilter {
        // The name of the dimension to filter.
        dimensionName?: string,
        // The kind of resource this is, in this case dfareporting#dimensionFilter.
        kind?: string,
        // The value of the dimension to filter.
        value?: string,
    }
    
    interface DimensionValue {
        // The name of the dimension.
        dimensionName?: string,
        // The eTag of this response for caching purposes.
        etag?: string,
        // The ID associated with the value if available.
        id?: string,
        // The kind of resource this is, in this case dfareporting#dimensionValue.
        kind?: string,
        // Determines how the 'value' field is matched when filtering. One of:  
        // - EXACT (default if not specified) 
        // - CONTAINS 
        // - BEGINS_WITH 
        // - WILDCARD_EXPRESSION (allowing '*' as a placeholder for variable length character sequences, it can be escaped with a backslash.)  Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
        matchType?: string,
        // The value of the dimension.
        value?: string,
    }
    
    interface DimensionValueList {
        // The eTag of this response for caching purposes.
        etag?: string,
        // The dimension values returned in this response.
        items?: DimensionValue[],        
        // The kind of list this is, in this case dfareporting#dimensionValueList.
        kind?: string,
        // Continuation token used to page through dimension values. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
        nextPageToken?: string,
    }
    
    interface DimensionValueRequest {
        // The name of the dimension for which values should be requested.
        dimensionName?: string,
        // The end date of the date range for which to retrieve dimension values. A string of the format: "yyyy-MM-dd".
        endDate?: string,
        // The list of filters by which to filter values. The filters are ANDed.
        filters?: DimensionFilter[],        
        // The kind of request this is, in this case dfareporting#dimensionValueRequest.
        kind?: string,
        // The start date of the date range for which to retrieve dimension values. A string of the format: "yyyy-MM-dd".
        startDate?: string,
    }
    
    interface File {
        // The date range for which the file has report data. The date range will always be the absolute date range for which the report is run.
        dateRange?: DateRange,
        // The eTag of this response for caching purposes.
        etag?: string,
        // The file name of the file.
        fileName?: string,
        // The output format of the report. Only available once the file is available.
        format?: string,
        // The unique ID of this report file.
        id?: string,
        // The kind of resource this is, in this case dfareporting#file.
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
            // The url for downloading the report data through the API.
            apiUrl?: string,
            // The url for downloading the report data through a browser.
            browserUrl?: string,
        },        
    }
    
    interface FileList {
        // The eTag of this response for caching purposes.
        etag?: string,
        // The files returned in this response.
        items?: File[],        
        // The kind of list this is, in this case dfareporting#fileList.
        kind?: string,
        // Continuation token used to page through files. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
        nextPageToken?: string,
    }
    
    interface Recipient {
        // The delivery type for the recipient, one of:  
        // - "ATTACHMENT" 
        // - "LINK"
        deliveryType?: string,
        // The email address of the recipient.
        email?: string,
        // The kind of resource this is, in this case dfareporting#recipient.
        kind?: string,
    }
    
    interface Report {
        // The account ID to which this report belongs.
        accountId?: string,
        // The report criteria for a report of type "ACTIVE_GRP".
        activeGrpCriteria?: {        
            // The date range this report should be run for.
            dateRange?: DateRange,
            // The list of filters on which dimensions are filtered.
            // Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
            // A valid active GRP report needs to have exactly one DimensionValue for the United States in addition to any advertiser or campaign dimension values.
            dimensionFilters?: DimensionValue[],            
            // The list of dimensions the report should include.
            dimensions?: SortedDimension[],            
            // The list of names of metrics the report should include.
            metricNames?: string[],            
        },        
        // The report criteria for a report of type "STANDARD".
        criteria?: {        
            // Activity group.
            activities?: Activities,
            // Custom Rich Media Events group.
            customRichMediaEvents?: CustomRichMediaEvents,
            // The date range for which this report should be run.
            dateRange?: DateRange,
            // The list of filters on which dimensions are filtered.
            // Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
            dimensionFilters?: DimensionValue[],            
            // The list of standard dimensions the report should include.
            dimensions?: SortedDimension[],            
            // The list of names of metrics the report should include.
            metricNames?: string[],            
        },        
        // The report criteria for a report of type "CROSS_DIMENSION_REACH".
        crossDimensionReachCriteria?: {        
            // The list of dimensions the report should include.
            breakdown?: SortedDimension[],            
            // The date range this report should be run for.
            dateRange?: DateRange,
            // The dimension option, one of:  
            // - "ADVERTISER" 
            // - "CAMPAIGN" 
            // - "SITE_BY_ADVERTISER" 
            // - "SITE_BY_CAMPAIGN"
            dimension?: string,
            // The list of filters on which dimensions are filtered.
            dimensionFilters?: DimensionValue[],            
            // The list of names of metrics the report should include.
            metricNames?: string[],            
            // The list of names of overlap metrics the report should include.
            overlapMetricNames?: string[],            
            // Whether the report is pivoted or not. Defaults to true.
            pivoted?: boolean,
        },        
        // The report's email delivery settings.
        delivery?: {        
            // Whether the report should be emailed to the report owner.
            emailOwner?: boolean,
            // The type of delivery for the owner to receive, if enabled. One of:  
            // - "ATTACHMENT" 
            // - "LINK"
            emailOwnerDeliveryType?: string,
            // The message to be sent with each email.
            message?: string,
            // The list of recipients to which to email the report.
            recipients?: Recipient[],            
        },        
        // The eTag of this response for caching purposes.
        etag?: string,
        // The file name used when generating report files for this report.
        fileName?: string,
        // The report criteria for a report of type "FLOODLIGHT".
        floodlightCriteria?: {        
            // The date range this report should be run for.
            dateRange?: DateRange,
            // The list of filters on which dimensions are filtered.
            // Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
            dimensionFilters?: DimensionValue[],            
            // The list of dimensions the report should include.
            dimensions?: SortedDimension[],            
            // The floodlight ID for which to show data in this report. All advertisers associated with that ID will automatically be added. The dimension of the value needs to be 'dfa:floodlightConfigId'.
            floodlightConfigId?: DimensionValue,
            // The list of names of metrics the report should include.
            metricNames?: string[],            
            // The properties of the report.
            reportProperties?: {            
                // Include conversions that have no cookie, but do have an exposure path.
                includeAttributedIPConversions?: boolean,
                // Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window.
                includeUnattributedCookieConversions?: boolean,
                // Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion.
                includeUnattributedIPConversions?: boolean,
            },            
        },        
        // The output format of the report, one of:  
        // - "CSV" 
        // - "EXCEL"  If not specified, default format is "CSV". Note that the actual format in the completed report file might differ if for instance the report's size exceeds the format's capabilities. "CSV" will then be the fallback format.
        format?: string,
        // The unique ID identifying this report resource.
        id?: string,
        // The kind of resource this is, in this case dfareporting#report.
        kind?: string,
        // The timestamp (in milliseconds since epoch) of when this report was last modified.
        lastModifiedTime?: string,
        // The name of the report.
        name?: string,
        // The user profile id of the owner of this report.
        ownerProfileId?: string,
        // The report criteria for a report of type "PATH_TO_CONVERSION".
        pathToConversionCriteria?: {        
            // The list of 'dfa:activity' values to filter on.
            activityFilters?: DimensionValue[],            
            // The list of conversion dimensions the report should include.
            conversionDimensions?: SortedDimension[],            
            // The list of custom floodlight variables the report should include.
            customFloodlightVariables?: SortedDimension[],            
            // The date range this report should be run for.
            dateRange?: DateRange,
            // The floodlight ID for which to show data in this report. All advertisers associated with that ID will automatically be added. The dimension of the value needs to be 'dfa:floodlightConfigId'.
            floodlightConfigId?: DimensionValue,
            // The list of names of metrics the report should include.
            metricNames?: string[],            
            // The list of per interaction dimensions the report should include.
            perInteractionDimensions?: SortedDimension[],            
            // The properties of the report.
            reportProperties?: {            
                // DFA checks to see if a click interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90.
                clicksLookbackWindow?: number,
                // DFA checks to see if an impression interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90.
                impressionsLookbackWindow?: number,
                // Include conversions that have no cookie, but do have an exposure path.
                includeAttributedIPConversions?: boolean,
                // Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window.
                includeUnattributedCookieConversions?: boolean,
                // Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion.
                includeUnattributedIPConversions?: boolean,
                // The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report.
                maximumClickInteractions?: number,
                // The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report.
                maximumImpressionInteractions?: number,
                // The maximum amount of time that can take place between interactions (clicks or impressions) by the same user. Valid values: 1-90.
                maximumInteractionGap?: number,
                // Enable pivoting on interaction path.
                pivotOnInteractionPath?: boolean,
            },            
        },        
        // The report criteria for a report of type "REACH".
        reachCriteria?: {        
            // Activity group.
            activities?: Activities,
            // Custom Rich Media Events group.
            customRichMediaEvents?: CustomRichMediaEvents,
            // The date range this report should be run for.
            dateRange?: DateRange,
            // The list of filters on which dimensions are filtered.
            // Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
            dimensionFilters?: DimensionValue[],            
            // The list of dimensions the report should include.
            dimensions?: SortedDimension[],            
            // The list of names of metrics the report should include.
            metricNames?: string[],            
            // The list of names of  Reach By Frequency metrics the report should include.
            reachByFrequencyMetricNames?: string[],            
        },        
        // The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY".
        schedule?: {        
            // Whether the schedule is active or not. Must be set to either true or false.
            active?: boolean,
            // Defines every how many days, weeks or months the report should be run. Needs to be set when "repeats" is either "DAILY", "WEEKLY" or "MONTHLY".
            every?: number,
            // The expiration date when the scheduled report stops running.
            expirationDate?: string,
            // The interval for which the report is repeated, one of:  
            // - "DAILY", also requires field "every" to be set. 
            // - "WEEKLY", also requires fields "every" and "repeatsOnWeekDays" to be set. 
            // - "TWICE_A_MONTH" 
            // - "MONTHLY", also requires fields "every" and "runsOnDayOfMonth" to be set. 
            // - "QUARTERLY" 
            // - "YEARLY"
            repeats?: string,
            // List of week days "WEEKLY" on which scheduled reports should run.
            repeatsOnWeekDays?: string[],            
            // Enum to define for "MONTHLY" scheduled reports whether reports should be repeated on the same day of the month as "startDate" or the same day of the week of the month. Possible values are:  
            // - DAY_OF_MONTH 
            // - WEEK_OF_MONTH  
            // Example: If 'startDate' is Monday, April 2nd 2012 (2012-04-02), "DAY_OF_MONTH" would run subsequent reports on the 2nd of every Month, and "WEEK_OF_MONTH" would run subsequent reports on the first Monday of the month.
            runsOnDayOfMonth?: string,
            // Start date of date range for which scheduled reports should be run.
            startDate?: string,
        },        
        // The subbaccount ID to which this report belongs if applicable.
        subAccountId?: string,
        // The type of the report, one of:  
        // - STANDARD 
        // - REACH 
        // - ACTIVE_GRP 
        // - PATH_TO_CONVERSION 
        // - FLOODLIGHT 
        // - CROSS_DIMENSION_REACH
        type?: string,
    }
    
    interface ReportList {
        // The eTag of this response for caching purposes.
        etag?: string,
        // The reports returned in this response.
        items?: Report[],        
        // The kind of list this is, in this case dfareporting#reportList.
        kind?: string,
        // Continuation token used to page through reports. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
        nextPageToken?: string,
    }
    
    interface SortedDimension {
        // The kind of resource this is, in this case dfareporting#sortedDimension.
        kind?: string,
        // The name of the dimension.
        name?: string,
        // An optional sort order for the dimension column, one of:  
        // - "ASCENDING" 
        // - "DESCENDING"
        sortOrder?: string,
    }
    
    interface UserProfile {
        // The account ID to which this profile belongs.
        accountId?: string,
        // The account name this profile belongs to.
        accountName?: string,
        // The eTag of this response for caching purposes.
        etag?: string,
        // The kind of resource this is, in this case dfareporting#userProfile.
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
        // The eTag of this response for caching purposes.
        etag?: string,
        // The user profiles returned in this response.
        items?: UserProfile[],        
        // The kind of list this is, in this case dfareporting#userProfileList.
        kind?: string,
    }
    
    interface DimensionValuesResource {
        // Retrieves list of report dimension values for a list of filters.
        query (request: {        
            // Maximum number of results to return.
            maxResults?: number,
            // The value of the nextToken from the previous result page.
            pageToken?: string,
            // The DFA user profile ID.
            profileId: string,
        }) : gapi.client.Request<DimensionValueList>;        
        
    }
    
    
    interface FilesResource {
        // Retrieves a report file by its report ID and file ID.
        get (request: {        
            // The ID of the report file.
            fileId: string,
            // The ID of the report.
            reportId: string,
        }) : gapi.client.Request<File>;        
        
        // Lists files for a user profile.
        list (request: {        
            // Maximum number of results to return.
            maxResults?: number,
            // The value of the nextToken from the previous result page.
            pageToken?: string,
            // The DFA profile ID.
            profileId: string,
            // The scope that defines which results are returned, default is 'MINE'.
            scope?: string,
            // The field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is 'DESCENDING'.
            sortOrder?: string,
        }) : gapi.client.Request<FileList>;        
        
    }
    
    
    interface FilesResource {
        // Retrieves a report file.
        get (request: {        
            // The ID of the report file.
            fileId: string,
            // The DFA profile ID.
            profileId: string,
            // The ID of the report.
            reportId: string,
        }) : gapi.client.Request<File>;        
        
        // Lists files for a report.
        list (request: {        
            // Maximum number of results to return.
            maxResults?: number,
            // The value of the nextToken from the previous result page.
            pageToken?: string,
            // The DFA profile ID.
            profileId: string,
            // The ID of the parent report.
            reportId: string,
            // The field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is 'DESCENDING'.
            sortOrder?: string,
        }) : gapi.client.Request<FileList>;        
        
    }
    
    
    interface ReportsResource {
        // Deletes a report by its ID.
        delete (request: {        
            // The DFA user profile ID.
            profileId: string,
            // The ID of the report.
            reportId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a report by its ID.
        get (request: {        
            // The DFA user profile ID.
            profileId: string,
            // The ID of the report.
            reportId: string,
        }) : gapi.client.Request<Report>;        
        
        // Creates a report.
        insert (request: {        
            // The DFA user profile ID.
            profileId: string,
        }) : gapi.client.Request<Report>;        
        
        // Retrieves list of reports.
        list (request: {        
            // Maximum number of results to return.
            maxResults?: number,
            // The value of the nextToken from the previous result page.
            pageToken?: string,
            // The DFA user profile ID.
            profileId: string,
            // The scope that defines which results are returned, default is 'MINE'.
            scope?: string,
            // The field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is 'DESCENDING'.
            sortOrder?: string,
        }) : gapi.client.Request<ReportList>;        
        
        // Updates a report. This method supports patch semantics.
        patch (request: {        
            // The DFA user profile ID.
            profileId: string,
            // The ID of the report.
            reportId: string,
        }) : gapi.client.Request<Report>;        
        
        // Runs a report.
        run (request: {        
            // The DFA profile ID.
            profileId: string,
            // The ID of the report.
            reportId: string,
            // If set and true, tries to run the report synchronously.
            synchronous?: boolean,
        }) : gapi.client.Request<File>;        
        
        // Updates a report.
        update (request: {        
            // The DFA user profile ID.
            profileId: string,
            // The ID of the report.
            reportId: string,
        }) : gapi.client.Request<Report>;        
        
        files: FilesResource,
    }
    
    
    interface UserProfilesResource {
        // Gets one user profile by ID.
        get (request: {        
            // The user profile ID.
            profileId: string,
        }) : gapi.client.Request<UserProfile>;        
        
        // Retrieves list of user profiles for a user.
        list (request: {        
        }) : gapi.client.Request<UserProfileList>;        
        
    }
    
}

declare module gapi.client.dfareporting {
    var dimensionValues: gapi.client.dfareporting.v1_2.DimensionValuesResource; 
    
    var files: gapi.client.dfareporting.v1_2.FilesResource; 
    
    var reports: gapi.client.dfareporting.v1_2.ReportsResource; 
    
    var userProfiles: gapi.client.dfareporting.v1_2.UserProfilesResource; 
    
}
