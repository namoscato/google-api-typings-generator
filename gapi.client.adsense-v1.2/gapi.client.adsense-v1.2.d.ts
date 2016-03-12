// Type definitions for Google AdSense Management API v1.2
// Project: https://developers.google.com/adsense/management/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.adsense.v1_2 {
    
    interface Account {
        // Unique identifier of this account.
        id?: string,
        // Kind of resource this is, in this case adsense#account.
        kind?: string,
        // Name of this account.
        name?: string,
        // Whether this account is premium.
        premium?: boolean,
        // Sub accounts of the this account.
        subAccounts?: Account[],        
    }
    
    interface Accounts {
        // ETag of this response for caching purposes.
        etag?: string,
        // The accounts returned in this list response.
        items?: Account[],        
        // Kind of list this is, in this case adsense#accounts.
        kind?: string,
        // Continuation token used to page through accounts. To retrieve the next page of results, set the next request's "pageToken" value to this.
        nextPageToken?: string,
    }
    
    interface AdClient {
        // Whether this ad client is opted in to ARC.
        arcOptIn?: boolean,
        // Unique identifier of this ad client.
        id?: string,
        // Kind of resource this is, in this case adsense#adClient.
        kind?: string,
        // This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.
        productCode?: string,
        // Whether this ad client supports being reported on.
        supportsReporting?: boolean,
    }
    
    interface AdClients {
        // ETag of this response for caching purposes.
        etag?: string,
        // The ad clients returned in this list response.
        items?: AdClient[],        
        // Kind of list this is, in this case adsense#adClients.
        kind?: string,
        // Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this.
        nextPageToken?: string,
    }
    
    interface AdStyle {
        // The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
        colors?: {        
            // The color of the ad background.
            background?: string,
            // The color of the ad border.
            border?: string,
            // The color of the ad text.
            text?: string,
            // The color of the ad title.
            title?: string,
            // The color of the ad url.
            url?: string,
        },        
        // The style of the corners in the ad.
        corners?: string,
        // The font which is included in the style.
        font?: {        
            // The family of the font.
            family?: string,
            // The size of the font.
            size?: string,
        },        
        // Kind this is, in this case adsense#adStyle.
        kind?: string,
    }
    
    interface AdUnit {
        // Identity code of this ad unit, not necessarily unique across ad clients.
        code?: string,
        // Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
        contentAdsSettings?: {        
            // The backup option to be used in instances where no ad is available.
            backupOption?: {            
                // Color to use when type is set to COLOR.
                color?: string,
                // Type of the backup option. Possible values are BLANK, COLOR and URL.
                type?: string,
                // URL to use when type is set to URL.
                url?: string,
            },            
            // Size of this ad unit.
            size?: string,
            // Type of this ad unit.
            type?: string,
        },        
        // Custom style information specific to this ad unit.
        customStyle?: AdStyle,
        // Settings specific to feed ads (AFF) - deprecated.
        feedAdsSettings?: {        
            // The position of the ads relative to the feed entries.
            adPosition?: string,
            // The frequency at which ads should appear in the feed (i.e. every N entries).
            frequency?: number,
            // The minimum length an entry should be in order to have attached ads.
            minimumWordCount?: number,
            // The type of ads which should appear.
            type?: string,
        },        
        // Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
        id?: string,
        // Kind of resource this is, in this case adsense#adUnit.
        kind?: string,
        // Settings specific to WAP mobile content ads (AFMC) - deprecated.
        mobileContentAdsSettings?: {        
            // The markup language to use for this ad unit.
            markupLanguage?: string,
            // The scripting language to use for this ad unit.
            scriptingLanguage?: string,
            // Size of this ad unit.
            size?: string,
            // Type of this ad unit.
            type?: string,
        },        
        // Name of this ad unit.
        name?: string,
        // ID of the saved ad style which holds this ad unit's style information.
        savedStyleId?: string,
        // Status of this ad unit. Possible values are:
        // NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.
        // 
        // ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.
        // 
        // INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.
        status?: string,
    }
    
    interface AdUnits {
        // ETag of this response for caching purposes.
        etag?: string,
        // The ad units returned in this list response.
        items?: AdUnit[],        
        // Kind of list this is, in this case adsense#adUnits.
        kind?: string,
        // Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.
        nextPageToken?: string,
    }
    
    interface AdsenseReportsGenerateResponse {
        // The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
        averages?: string[],        
        // The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.
        headers?: {        
            // The currency of this column. Only present if the header type is METRIC_CURRENCY.
            currency?: string,
            // The name of the header.
            name?: string,
            // The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY.
            type?: string,
        }[],        
        // Kind this is, in this case adsense#report.
        kind?: string,
        // The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.
        rows?: string[][],        
        // The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit.
        totalMatchedRows?: string,
        // The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
        totals?: string[],        
        // Any warnings associated with generation of the report.
        warnings?: string[],        
    }
    
    interface CustomChannel {
        // Code of this custom channel, not necessarily unique across ad clients.
        code?: string,
        // Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
        id?: string,
        // Kind of resource this is, in this case adsense#customChannel.
        kind?: string,
        // Name of this custom channel.
        name?: string,
        // The targeting information of this custom channel, if activated.
        targetingInfo?: {        
            // The name used to describe this channel externally.
            adsAppearOn?: string,
            // The external description of the channel.
            description?: string,
            // The locations in which ads appear. (Only valid for content and mobile content ads (deprecated)). Acceptable values for content ads are: TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT, MULTIPLE_LOCATIONS. Acceptable values for mobile content ads (deprecated) are: TOP, MIDDLE, BOTTOM, MULTIPLE_LOCATIONS.
            location?: string,
            // The language of the sites ads will be displayed on.
            siteLanguage?: string,
        },        
    }
    
    interface CustomChannels {
        // ETag of this response for caching purposes.
        etag?: string,
        // The custom channels returned in this list response.
        items?: CustomChannel[],        
        // Kind of list this is, in this case adsense#customChannels.
        kind?: string,
        // Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
        nextPageToken?: string,
    }
    
    interface SavedAdStyle {
        // The AdStyle itself.
        adStyle?: AdStyle,
        // Unique identifier of this saved ad style. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
        id?: string,
        // Kind of resource this is, in this case adsense#savedAdStyle.
        kind?: string,
        // The user selected name of this SavedAdStyle.
        name?: string,
    }
    
    interface SavedAdStyles {
        // ETag of this response for caching purposes.
        etag?: string,
        // The saved ad styles returned in this list response.
        items?: SavedAdStyle[],        
        // Kind of list this is, in this case adsense#savedAdStyles.
        kind?: string,
        // Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.
        nextPageToken?: string,
    }
    
    interface SavedReport {
        // Unique identifier of this saved report.
        id?: string,
        // Kind of resource this is, in this case adsense#savedReport.
        kind?: string,
        // This saved report's name.
        name?: string,
    }
    
    interface SavedReports {
        // ETag of this response for caching purposes.
        etag?: string,
        // The saved reports returned in this list response.
        items?: SavedReport[],        
        // Kind of list this is, in this case adsense#savedReports.
        kind?: string,
        // Continuation token used to page through saved reports. To retrieve the next page of results, set the next request's "pageToken" value to this.
        nextPageToken?: string,
    }
    
    interface UrlChannel {
        // Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
        id?: string,
        // Kind of resource this is, in this case adsense#urlChannel.
        kind?: string,
        // URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home
        urlPattern?: string,
    }
    
    interface UrlChannels {
        // ETag of this response for caching purposes.
        etag?: string,
        // The URL channels returned in this list response.
        items?: UrlChannel[],        
        // Kind of list this is, in this case adsense#urlChannels.
        kind?: string,
        // Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
        nextPageToken?: string,
    }
    
    interface AdclientsResource {
        // List all ad clients in the specified account.
        list (request: {        
            // Account for which to list ad clients.
            accountId: string,
            // The maximum number of ad clients to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<AdClients>;        
        
    }
    
    
    interface CustomchannelsResource {
        // List all custom channels which the specified ad unit belongs to.
        list (request: {        
            // Account to which the ad client belongs.
            accountId: string,
            // Ad client which contains the ad unit.
            adClientId: string,
            // Ad unit for which to list custom channels.
            adUnitId: string,
            // The maximum number of custom channels to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<CustomChannels>;        
        
    }
    
    
    interface AdunitsResource {
        // Gets the specified ad unit in the specified ad client for the specified account.
        get (request: {        
            // Account to which the ad client belongs.
            accountId: string,
            // Ad client for which to get the ad unit.
            adClientId: string,
            // Ad unit to retrieve.
            adUnitId: string,
        }) : gapi.client.Request<AdUnit>;        
        
        // List all ad units in the specified ad client for the specified account.
        list (request: {        
            // Account to which the ad client belongs.
            accountId: string,
            // Ad client for which to list ad units.
            adClientId: string,
            // Whether to include inactive ad units. Default: true.
            includeInactive?: boolean,
            // The maximum number of ad units to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<AdUnits>;        
        
        customchannels: CustomchannelsResource,
    }
    
    
    interface AdunitsResource {
        // List all ad units in the specified custom channel.
        list (request: {        
            // Account to which the ad client belongs.
            accountId: string,
            // Ad client which contains the custom channel.
            adClientId: string,
            // Custom channel for which to list ad units.
            customChannelId: string,
            // Whether to include inactive ad units. Default: true.
            includeInactive?: boolean,
            // The maximum number of ad units to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<AdUnits>;        
        
    }
    
    
    interface CustomchannelsResource {
        // Get the specified custom channel from the specified ad client for the specified account.
        get (request: {        
            // Account to which the ad client belongs.
            accountId: string,
            // Ad client which contains the custom channel.
            adClientId: string,
            // Custom channel to retrieve.
            customChannelId: string,
        }) : gapi.client.Request<CustomChannel>;        
        
        // List all custom channels in the specified ad client for the specified account.
        list (request: {        
            // Account to which the ad client belongs.
            accountId: string,
            // Ad client for which to list custom channels.
            adClientId: string,
            // The maximum number of custom channels to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<CustomChannels>;        
        
        adunits: AdunitsResource,
    }
    
    
    interface SavedResource {
        // Generate an AdSense report based on the saved report ID sent in the query parameters.
        generate (request: {        
            // Account to which the saved reports belong.
            accountId: string,
            // Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
            locale?: string,
            // The maximum number of rows of report data to return.
            maxResults?: number,
            // The saved report to retrieve.
            savedReportId: string,
            // Index of the first row of report data to return.
            startIndex?: number,
        }) : gapi.client.Request<AdsenseReportsGenerateResponse>;        
        
        // List all saved reports in the specified AdSense account.
        list (request: {        
            // Account to which the saved reports belong.
            accountId: string,
            // The maximum number of saved reports to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<SavedReports>;        
        
    }
    
    
    interface ReportsResource {
        // Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
        generate (request: {        
            // Account upon which to report.
            accountId: string,
            // Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
            currency?: string,
            // Dimensions to base the report on.
            dimension?: string,
            // End of the date range to report on in "YYYY-MM-DD" format, inclusive.
            endDate: string,
            // Filters to be run on the report.
            filter?: string,
            // Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
            locale?: string,
            // The maximum number of rows of report data to return.
            maxResults?: number,
            // Numeric columns to include in the report.
            metric?: string,
            // The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
            sort?: string,
            // Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
            startDate: string,
            // Index of the first row of report data to return.
            startIndex?: number,
        }) : gapi.client.Request<AdsenseReportsGenerateResponse>;        
        
        saved: SavedResource,
    }
    
    
    interface SavedadstylesResource {
        // List a specific saved ad style for the specified account.
        get (request: {        
            // Account for which to get the saved ad style.
            accountId: string,
            // Saved ad style to retrieve.
            savedAdStyleId: string,
        }) : gapi.client.Request<SavedAdStyle>;        
        
        // List all saved ad styles in the specified account.
        list (request: {        
            // Account for which to list saved ad styles.
            accountId: string,
            // The maximum number of saved ad styles to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<SavedAdStyles>;        
        
    }
    
    
    interface UrlchannelsResource {
        // List all URL channels in the specified ad client for the specified account.
        list (request: {        
            // Account to which the ad client belongs.
            accountId: string,
            // Ad client for which to list URL channels.
            adClientId: string,
            // The maximum number of URL channels to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<UrlChannels>;        
        
    }
    
    
    interface AccountsResource {
        // Get information about the selected AdSense account.
        get (request: {        
            // Account to get information about.
            accountId: string,
            // Whether the tree of sub accounts should be returned.
            tree?: boolean,
        }) : gapi.client.Request<Account>;        
        
        // List all accounts available to this AdSense account.
        list (request: {        
            // The maximum number of accounts to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<Accounts>;        
        
        adclients: AdclientsResource,
        adunits: AdunitsResource,
        customchannels: CustomchannelsResource,
        reports: ReportsResource,
        savedadstyles: SavedadstylesResource,
        urlchannels: UrlchannelsResource,
    }
    
    
    interface AdclientsResource {
        // List all ad clients in this AdSense account.
        list (request: {        
            // The maximum number of ad clients to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<AdClients>;        
        
    }
    
    
    interface CustomchannelsResource {
        // List all custom channels which the specified ad unit belongs to.
        list (request: {        
            // Ad client which contains the ad unit.
            adClientId: string,
            // Ad unit for which to list custom channels.
            adUnitId: string,
            // The maximum number of custom channels to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<CustomChannels>;        
        
    }
    
    
    interface AdunitsResource {
        // Gets the specified ad unit in the specified ad client.
        get (request: {        
            // Ad client for which to get the ad unit.
            adClientId: string,
            // Ad unit to retrieve.
            adUnitId: string,
        }) : gapi.client.Request<AdUnit>;        
        
        // List all ad units in the specified ad client for this AdSense account.
        list (request: {        
            // Ad client for which to list ad units.
            adClientId: string,
            // Whether to include inactive ad units. Default: true.
            includeInactive?: boolean,
            // The maximum number of ad units to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<AdUnits>;        
        
        customchannels: CustomchannelsResource,
    }
    
    
    interface AdunitsResource {
        // List all ad units in the specified custom channel.
        list (request: {        
            // Ad client which contains the custom channel.
            adClientId: string,
            // Custom channel for which to list ad units.
            customChannelId: string,
            // Whether to include inactive ad units. Default: true.
            includeInactive?: boolean,
            // The maximum number of ad units to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<AdUnits>;        
        
    }
    
    
    interface CustomchannelsResource {
        // Get the specified custom channel from the specified ad client.
        get (request: {        
            // Ad client which contains the custom channel.
            adClientId: string,
            // Custom channel to retrieve.
            customChannelId: string,
        }) : gapi.client.Request<CustomChannel>;        
        
        // List all custom channels in the specified ad client for this AdSense account.
        list (request: {        
            // Ad client for which to list custom channels.
            adClientId: string,
            // The maximum number of custom channels to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<CustomChannels>;        
        
        adunits: AdunitsResource,
    }
    
    
    interface SavedResource {
        // Generate an AdSense report based on the saved report ID sent in the query parameters.
        generate (request: {        
            // Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
            locale?: string,
            // The maximum number of rows of report data to return.
            maxResults?: number,
            // The saved report to retrieve.
            savedReportId: string,
            // Index of the first row of report data to return.
            startIndex?: number,
        }) : gapi.client.Request<AdsenseReportsGenerateResponse>;        
        
        // List all saved reports in this AdSense account.
        list (request: {        
            // The maximum number of saved reports to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<SavedReports>;        
        
    }
    
    
    interface ReportsResource {
        // Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
        generate (request: {        
            // Accounts upon which to report.
            accountId?: string,
            // Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
            currency?: string,
            // Dimensions to base the report on.
            dimension?: string,
            // End of the date range to report on in "YYYY-MM-DD" format, inclusive.
            endDate: string,
            // Filters to be run on the report.
            filter?: string,
            // Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
            locale?: string,
            // The maximum number of rows of report data to return.
            maxResults?: number,
            // Numeric columns to include in the report.
            metric?: string,
            // The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
            sort?: string,
            // Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
            startDate: string,
            // Index of the first row of report data to return.
            startIndex?: number,
        }) : gapi.client.Request<AdsenseReportsGenerateResponse>;        
        
        saved: SavedResource,
    }
    
    
    interface SavedadstylesResource {
        // Get a specific saved ad style from the user's account.
        get (request: {        
            // Saved ad style to retrieve.
            savedAdStyleId: string,
        }) : gapi.client.Request<SavedAdStyle>;        
        
        // List all saved ad styles in the user's account.
        list (request: {        
            // The maximum number of saved ad styles to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<SavedAdStyles>;        
        
    }
    
    
    interface UrlchannelsResource {
        // List all URL channels in the specified ad client for this AdSense account.
        list (request: {        
            // Ad client for which to list URL channels.
            adClientId: string,
            // The maximum number of URL channels to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<UrlChannels>;        
        
    }
    
}

declare module gapi.client.adsense {
    var accounts: gapi.client.adsense.v1_2.AccountsResource; 
    
    var adclients: gapi.client.adsense.v1_2.AdclientsResource; 
    
    var adunits: gapi.client.adsense.v1_2.AdunitsResource; 
    
    var customchannels: gapi.client.adsense.v1_2.CustomchannelsResource; 
    
    var reports: gapi.client.adsense.v1_2.ReportsResource; 
    
    var savedadstyles: gapi.client.adsense.v1_2.SavedadstylesResource; 
    
    var urlchannels: gapi.client.adsense.v1_2.UrlchannelsResource; 
    
}
