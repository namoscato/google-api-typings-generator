// Type definitions for Google Google Partners API v2
// Project: https://developers.google.com/partners/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.partners {
    
    interface LogUserEventRequest {
        // Current request metadata.
        requestMetadata?: RequestMetadata,
        // The action that occurred.
        eventAction?: string,
        // The category the action belongs to.
        eventCategory?: string,
        // The scope of the event.
        eventScope?: string,
        // List of event data for the event.
        eventDatas?: EventData[],        
        // The URL where the event occurred.
        url?: string,
        // Advertiser lead information.
        lead?: Lead,
    }
    
    interface RequestMetadata {
        // Values to use instead of the user's respective defaults for the current request. These are only honored by whitelisted products.
        userOverrides?: UserOverrides,
        // Locale to use for the current request.
        locale?: string,
        // Google Partners session ID.
        partnersSessionId?: string,
        // Experiment IDs the current request belongs to.
        experimentIds?: string[],        
        // Source of traffic for the current request.
        trafficSource?: TrafficSource,
    }
    
    interface UserOverrides {
        // IP address to use instead of the user's geo-located IP address.
        ipAddress?: string,
        // Logged-in user ID to impersonate instead of the user's ID.
        userId?: string,
    }
    
    interface TrafficSource {
        // Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
        trafficSourceId?: string,
        // Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
        trafficSubId?: string,
    }
    
    interface EventData {
        // Data type.
        key?: string,
        // Data values.
        values?: string[],        
    }
    
    interface Lead {
        // ID of the lead.
        id?: string,
        // Type of lead.
        type?: string,
        // Email address of lead source.
        email?: string,
        // First name of lead source.
        givenName?: string,
        // Last name of lead source.
        familyName?: string,
        // Website URL of lead source.
        websiteUrl?: string,
        // Phone number of lead source.
        phoneNumber?: string,
        // Comments lead source gave.
        comments?: string,
        // List of reasons for using Google Partner Search and creating a lead.
        gpsMotivations?: string[],        
        // The minimum monthly budget lead source is willing to spend.
        minMonthlyBudget?: Money,
    }
    
    interface Money {
        // The 3-letter currency code defined in ISO 4217.
        currencyCode?: string,
        // The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
        units?: string,
        // Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
        nanos?: number,
    }
    
    interface LogUserEventResponse {
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
    }
    
    interface ResponseMetadata {
        // Debug information about this request.
        debugInfo?: DebugInfo,
    }
    
    interface DebugInfo {
        // Info about the server that serviced this request.
        serverInfo?: string,
        // URL of the service that handled this request.
        serviceUrl?: string,
        // Server-side debug stack trace.
        serverTraceInfo?: string,
    }
    
    interface LogMessageRequest {
        // Current request metadata.
        requestMetadata?: RequestMetadata,
        // Message level of client message.
        level?: string,
        // Details about the client message.
        details?: string,
        // Map of client info, such as URL, browser navigator, browser platform, etc.
        clientInfo?: any,
    }
    
    interface LogMessageResponse {
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
    }
    
    interface ListUserStatesResponse {
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
        // User's states.
        userStates?: string[],        
    }
    
    interface GetCompanyResponse {
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
        // The company.
        company?: Company,
    }
    
    interface Company {
        // The ID of the company.
        id?: string,
        // The name of the company.
        name?: string,
        // The list of localized info for the company.
        localizedInfos?: LocalizedCompanyInfo[],        
        // The list of company locations.
        locations?: Location[],        
        // The minimum monthly budget that the company accepts for partner business, converted to the requested currency code.
        convertedMinMonthlyBudget?: Money,
        // The unconverted minimum monthly budget that the company accepts for partner business.
        originalMinMonthlyBudget?: Money,
        // Basic information from the company's public profile.
        publicProfile?: PublicProfile,
        // The list of Google Partners certification statuses for the company.
        certificationStatuses?: CertificationStatus[],        
        // Information related to the ranking of the company within the list of companies.
        ranks?: Rank[],        
        // URL of the company's website.
        websiteUrl?: string,
        // Industries the company can help with.
        industries?: string[],        
        // Services the company can help with.
        services?: string[],        
    }
    
    interface LocalizedCompanyInfo {
        // Language code of the localized company info, as defined by BCP 47 (IETF BCP 47, "Tags for Identifying Languages").
        languageCode?: string,
        // Localized display name.
        displayName?: string,
        // Localized brief description that the company uses to advertise themselves.
        overview?: string,
        // List of country codes for the localized company info.
        countryCodes?: string[],        
    }
    
    interface Location {
        // The complete address of the location.
        address?: string,
        // The latitude and longitude of the location, in degrees.
        latLng?: LatLng,
    }
    
    interface LatLng {
        // The latitude in degrees. It must be in the range [-90.0, +90.0].
        latitude?: number,
        // The longitude in degrees. It must be in the range [-180.0, +180.0].
        longitude?: number,
    }
    
    interface PublicProfile {
        // The ID which can be used to retrieve more details about the public profile.
        id?: string,
        // The display name of the public profile.
        displayName?: string,
        // The URL of the public profile.
        url?: string,
        // The URL to the main display image of the public profile.
        displayImageUrl?: string,
    }
    
    interface CertificationStatus {
        // The type of the certification.
        type?: string,
        // List of certification exam statuses.
        examStatuses?: CertificationExamStatus[],        
        // Whether certification is passing.
        isCertified?: boolean,
    }
    
    interface CertificationExamStatus {
        // The type of certification exam.
        type?: string,
        // The number of people who have passed the certification exam.
        numberUsersPass?: number,
    }
    
    interface Rank {
        // The type of rank.
        type?: string,
        // The numerical value of the rank.
        value?: number,
    }
    
    interface ListCompaniesResponse {
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
        // The list of companies.
        companies?: Company[],        
        // A token to retrieve next page of results. Pass this value in the `ListCompaniesRequest.page_token` field in the subsequent call to ListCompanies to retrieve the next page of results.
        nextPageToken?: string,
    }
    
    interface CreateLeadRequest {
        // Current request metadata.
        requestMetadata?: RequestMetadata,
        // The lead resource. The `LeadType` must not be `LEAD_TYPE_UNSPECIFIED` and either `email` or `phone_number` must be provided.
        lead?: Lead,
        // reCaptcha challenge info.
        recaptchaChallenge?: RecaptchaChallenge,
    }
    
    interface RecaptchaChallenge {
        // The ID of the reCaptcha challenge.
        id?: string,
        // The response to the reCaptcha challenge.
        response?: string,
    }
    
    interface CreateLeadResponse {
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
        // Lead that was created depending on the outcome of reCaptcha validation.
        lead?: Lead,
        // The outcome of reCaptcha validation.
        recaptchaStatus?: string,
    }
    
    interface UserEventsResource {
        // Logs a user event.
        log (request: {        
        }) : gapi.client.Request<LogUserEventResponse>;        
        
    }
    
    
    interface ClientMessagesResource {
        // Logs a generic message from the client, such as `Failed to render component`, `Profile page is running slow`, `More than 500 users have accessed this result.`, etc.
        log (request: {        
        }) : gapi.client.Request<LogMessageResponse>;        
        
    }
    
    
    interface UserStatesResource {
        // Lists states for current user.
        list (request: {        
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
        }) : gapi.client.Request<ListUserStatesResponse>;        
        
    }
    
    
    interface LeadsResource {
        // Creates an advertiser lead for the given company ID.
        create (request: {        
            // The ID of the company to contact.
            companyId: string,
        }) : gapi.client.Request<CreateLeadResponse>;        
        
    }
    
    
    interface CompaniesResource {
        // Gets a company.
        get (request: {        
            // The ID of the company to retrieve.
            companyId: string,
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
            // The view of `Company` resource to be returned. This must not be `COMPANY_VIEW_UNSPECIFIED`.
            view?: string,
            // How to order addresses within the returned company. Currently, only `address` and `address desc` is supported which will sorted by closest to farthest in distance from given address and farthest to closest distance from given address respectively.
            orderBy?: string,
            // If the company's budget is in a different currency code than this one, then the converted budget is converted to this currency code.
            currencyCode?: string,
            // The address to use for sorting the company's addresses by proximity. If not given, the geo-located address of the request is used. Used when order_by is set.
            address?: string,
        }) : gapi.client.Request<GetCompanyResponse>;        
        
        // Lists companies.
        list (request: {        
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
            // Requested page size. Server may return fewer companies than requested. If unspecified, server picks an appropriate default.
            pageSize?: number,
            // A token identifying a page of results that the server returns. Typically, this is the value of `ListCompaniesResponse.next_page_token` returned from the previous call to ListCompanies.
            pageToken?: string,
            // Company name to search for.
            companyName?: string,
            // The view of the `Company` resource to be returned. This must not be `COMPANY_VIEW_UNSPECIFIED`.
            view?: string,
            // The 3-letter currency code defined in ISO 4217.
            minMonthlyBudget.currencyCode?: string,
            // The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
            minMonthlyBudget.units?: string,
            // Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
            minMonthlyBudget.nanos?: number,
            // The 3-letter currency code defined in ISO 4217.
            maxMonthlyBudget.currencyCode?: string,
            // The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
            maxMonthlyBudget.units?: string,
            // Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
            maxMonthlyBudget.nanos?: number,
            // List of industries the company can help with.
            industries?: string,
            // List of services the company can help with.
            services?: string,
            // List of language codes that company can support. Only primary language subtags are accepted as defined by BCP 47 (IETF BCP 47, "Tags for Identifying Languages").
            languageCodes?: string,
            // The address to use when searching for companies. If not given, the geo-located address of the request is used.
            address?: string,
            // How to order addresses within the returned companies. Currently, only `address` and `address desc` is supported which will sorted by closest to farthest in distance from given address and farthest to closest distance from given address respectively.
            orderBy?: string,
            // List of reasons for using Google Partner Search to get companies.
            gpsMotivations?: string,
            // Website URL that will help to find a better matched company. .
            websiteUrl?: string,
        }) : gapi.client.Request<ListCompaniesResponse>;        
        
        leads: LeadsResource,
    }
    
}

declare module gapi.client.partners {
    var userEvents: gapi.client.partners.UserEventsResource; 
    
    var clientMessages: gapi.client.partners.ClientMessagesResource; 
    
    var userStates: gapi.client.partners.UserStatesResource; 
    
    var companies: gapi.client.partners.CompaniesResource; 
    
}
