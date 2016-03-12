// Type definitions for Google DoubleClick Bid Manager API v1
// Project: https://developers.google.com/bid-manager/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.doubleclickbidmanager {
    
    interface DownloadLineItemsRequest {
        // File specification (column names, types, order) in which the line items will be returned. Default to EWF.
        fileSpec?: string,
        // Ids of the specified filter type used to filter line items to fetch. If omitted, all the line items will be returned.
        filterIds?: string[],        
        // Filter type used to filter line items to fetch.
        filterType?: string,
        // Format in which the line items will be returned. Default to CSV.
        format?: string,
    }
    
    interface DownloadLineItemsResponse {
        // Retrieved line items in CSV format. Refer to  Entity Write File Format or  Structured Data File Format for more information on file formats.
        lineItems?: string,
    }
    
    interface FilterPair {
        // Filter type.
        type?: string,
        // Filter value.
        value?: string,
    }
    
    interface ListQueriesResponse {
        // Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listQueriesResponse".
        kind?: string,
        // Retrieved queries.
        queries?: Query[],        
    }
    
    interface ListReportsResponse {
        // Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listReportsResponse".
        kind?: string,
        // Retrieved reports.
        reports?: Report[],        
    }
    
    interface Note {
        // Note id.
        id?: string,
        // Message from publisher.
        message?: string,
        // Equals "publisher" for notification from Rubicon.
        source?: string,
        // Time when the note was added, e.g. "2015-12-16T17:25:35.000-08:00".
        timestamp?: string,
        // Publisher user name.
        username?: string,
    }
    
    interface NotifyProposalChangeRequest {
        // Action taken by publisher. One of: Accept, Decline, Append
        action?: string,
        // URL to access proposal detail.
        href?: string,
        // Below are contents of notification from Rubicon. Proposal id.
        id?: string,
        // Notes from publisher
        notes?: Note[],        
        // Deal token, available when proposal is accepted by publisher.
        token?: string,
    }
    
    interface Parameters {
        // Filters used to match traffic data in your report.
        filters?: FilterPair[],        
        // Data is grouped by the filters listed in this field.
        groupBys?: string[],        
        // Whether to include data from Invite Media.
        includeInviteData?: boolean,
        // Metrics to include as columns in your report.
        metrics?: string[],        
        // Report type.
        type?: string,
    }
    
    interface Query {
        // Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#query".
        kind?: string,
        // Query metadata.
        metadata?: QueryMetadata,
        // Query parameters.
        params?: Parameters,
        // Query ID.
        queryId?: string,
        // The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.
        reportDataEndTimeMs?: string,
        // The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.
        reportDataStartTimeMs?: string,
        // Information on how often and when to run a query.
        schedule?: QuerySchedule,
        // Canonical timezone code for report data time. Defaults to America/New_York.
        timezoneCode?: string,
    }
    
    interface QueryMetadata {
        // Range of report data.
        dataRange?: string,
        // Format of the generated report.
        format?: string,
        // The path to the location in Google Cloud Storage where the latest report is stored.
        googleCloudStoragePathForLatestReport?: string,
        // The path in Google Drive for the latest report.
        googleDrivePathForLatestReport?: string,
        // The time when the latest report started to run.
        latestReportRunTimeMs?: string,
        // Locale of the generated reports. Valid values are cs CZECH de GERMAN en ENGLISH es SPANISH fr FRENCH it ITALIAN ja JAPANESE ko KOREAN pl POLISH pt-BR BRAZILIAN_PORTUGUESE ru RUSSIAN tr TURKISH uk UKRAINIAN zh-CN CHINA_CHINESE zh-TW TAIWAN_CHINESE
        // 
        // An locale string not in the list above will generate reports in English.
        locale?: string,
        // Number of reports that have been generated for the query.
        reportCount?: number,
        // Whether the latest report is currently running.
        running?: boolean,
        // Whether to send an email notification when a report is ready. Default to false.
        sendNotification?: boolean,
        // List of email addresses which are sent email notifications when the report is finished. Separate from sendNotification.
        shareEmailAddress?: string[],        
        // Query title. It is used to name the reports generated from this query.
        title?: string,
    }
    
    interface QuerySchedule {
        // Datetime to periodically run the query until.
        endTimeMs?: string,
        // How often the query is run.
        frequency?: string,
        // Time of day at which a new report will be generated, represented as minutes past midnight. Range is 0 to 1439. Only applies to scheduled reports.
        nextRunMinuteOfDay?: number,
        // Canonical timezone code for report generation time. Defaults to America/New_York.
        nextRunTimezoneCode?: string,
    }
    
    interface Report {
        // Key used to identify a report.
        key?: ReportKey,
        // Report metadata.
        metadata?: ReportMetadata,
        // Report parameters.
        params?: Parameters,
    }
    
    interface ReportFailure {
        // Error code that shows why the report was not created.
        errorCode?: string,
    }
    
    interface ReportKey {
        // Query ID.
        queryId?: string,
        // Report ID.
        reportId?: string,
    }
    
    interface ReportMetadata {
        // The path to the location in Google Cloud Storage where the report is stored.
        googleCloudStoragePath?: string,
        // The ending time for the data that is shown in the report.
        reportDataEndTimeMs?: string,
        // The starting time for the data that is shown in the report.
        reportDataStartTimeMs?: string,
        // Report status.
        status?: ReportStatus,
    }
    
    interface ReportStatus {
        // If the report failed, this records the cause.
        failure?: ReportFailure,
        // The time when this report either completed successfully or failed.
        finishTimeMs?: string,
        // The file type of the report.
        format?: string,
        // The state of the report.
        state?: string,
    }
    
    interface RowStatus {
        // Whether the stored entity is changed as a result of upload.
        changed?: boolean,
        // Entity Id.
        entityId?: string,
        // Entity name.
        entityName?: string,
        // Reasons why the entity can't be uploaded.
        errors?: string[],        
        // Whether the entity is persisted.
        persisted?: boolean,
        // Row number.
        rowNumber?: number,
    }
    
    interface RunQueryRequest {
        // Report data range used to generate the report.
        dataRange?: string,
        // The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.
        reportDataEndTimeMs?: string,
        // The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.
        reportDataStartTimeMs?: string,
        // Canonical timezone code for report data time. Defaults to America/New_York.
        timezoneCode?: string,
    }
    
    interface UploadLineItemsRequest {
        // Set to true to get upload status without actually persisting the line items.
        dryRun?: boolean,
        // Format the line items are in. Default to CSV.
        format?: string,
        // Line items in CSV to upload. Refer to  Entity Write File Format for more information on file format.
        lineItems?: string,
    }
    
    interface UploadLineItemsResponse {
        // Status of upload.
        uploadStatus?: UploadStatus,
    }
    
    interface UploadStatus {
        // Reasons why upload can't be completed.
        errors?: string[],        
        // Per-row upload status.
        rowStatus?: RowStatus[],        
    }
    
    interface LineitemsResource {
        // Retrieves line items in CSV format.
        downloadlineitems (request: {        
        }) : gapi.client.Request<DownloadLineItemsResponse>;        
        
        // Uploads line items in CSV format.
        uploadlineitems (request: {        
        }) : gapi.client.Request<UploadLineItemsResponse>;        
        
    }
    
    
    interface QueriesResource {
        // Creates a query.
        createquery (request: {        
        }) : gapi.client.Request<Query>;        
        
        // Deletes a stored query as well as the associated stored reports.
        deletequery (request: {        
            // Query ID to delete.
            queryId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a stored query.
        getquery (request: {        
            // Query ID to retrieve.
            queryId: string,
        }) : gapi.client.Request<Query>;        
        
        // Retrieves stored queries.
        listqueries (request: {        
        }) : gapi.client.Request<ListQueriesResponse>;        
        
        // Runs a stored query to generate a report.
        runquery (request: {        
            // Query ID to run.
            queryId: string,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface ReportsResource {
        // Retrieves stored reports.
        listreports (request: {        
            // Query ID with which the reports are associated.
            queryId: string,
        }) : gapi.client.Request<ListReportsResponse>;        
        
    }
    
    
    interface RubiconResource {
        // Update proposal upon actions of Rubicon publisher.
        notifyproposalchange (request: {        
        }) : gapi.client.Request<void>;        
        
    }
    
}

declare module gapi.client.doubleclickbidmanager {
    var lineitems: gapi.client.doubleclickbidmanager.LineitemsResource; 
    
    var queries: gapi.client.doubleclickbidmanager.QueriesResource; 
    
    var reports: gapi.client.doubleclickbidmanager.ReportsResource; 
    
    var rubicon: gapi.client.doubleclickbidmanager.RubiconResource; 
    
}
