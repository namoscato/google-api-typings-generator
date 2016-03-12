// Type definitions for Google Admin Reports API reports_v1
// Project: https://developers.google.com/admin-sdk/reports/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.admin.reports_v1 {
    
    interface Activities {
        // ETag of the resource.
        etag?: string,
        // Each record in read response.
        items?: Activity[],        
        // Kind of list response this is.
        kind?: string,
        // Token for retrieving the next page
        nextPageToken?: string,
    }
    
    interface Activity {
        // User doing the action.
        actor?: {        
            // User or OAuth 2LO request.
            callerType?: string,
            // Email address of the user.
            email?: string,
            // For OAuth 2LO API requests, consumer_key of the requestor.
            key?: string,
            // Obfuscated user id of the user.
            profileId?: string,
        },        
        // ETag of the entry.
        etag?: string,
        // Activity events.
        events?: {        
            // Name of event.
            name?: string,
            // Parameter value pairs for various applications.
            parameters?: {            
                // Boolean value of the parameter.
                boolValue?: boolean,
                // Integral value of the parameter.
                intValue?: string,
                // Multi-int value of the parameter.
                multiIntValue?: string[],                
                // Multi-string value of the parameter.
                multiValue?: string[],                
                // The name of the parameter.
                name?: string,
                // String value of the parameter.
                value?: string,
            }[],            
            // Type of event.
            type?: string,
        }[],        
        // Unique identifier for each activity record.
        id?: {        
            // Application name to which the event belongs.
            applicationName?: string,
            // Obfuscated customer ID of the source customer.
            customerId?: string,
            // Time of occurrence of the activity.
            time?: string,
            // Unique qualifier if multiple events have the same time.
            uniqueQualifier?: string,
        },        
        // IP Address of the user doing the action.
        ipAddress?: string,
        // Kind of resource this is.
        kind?: string,
        // Domain of source customer.
        ownerDomain?: string,
    }
    
    interface Channel {
        // The address where notifications are delivered for this channel.
        address?: string,
        // Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
        expiration?: string,
        // A UUID or similar unique string that identifies this channel.
        id?: string,
        // Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string "api#channel".
        kind?: string,
        // Additional parameters controlling delivery channel behavior. Optional.
        params?: any,
        // A Boolean value to indicate whether payload is wanted. Optional.
        payload?: boolean,
        // An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
        resourceId?: string,
        // A version-specific identifier for the watched resource.
        resourceUri?: string,
        // An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
        token?: string,
        // The type of delivery mechanism used for this channel.
        type?: string,
    }
    
    interface UsageReport {
        // The date to which the record belongs.
        date?: string,
        // Information about the type of the item.
        entity?: {        
            // Obfuscated customer id for the record.
            customerId?: string,
            // Obfuscated user id for the record.
            profileId?: string,
            // The type of item, can be a customer or user.
            type?: string,
            // user's email.
            userEmail?: string,
        },        
        // ETag of the resource.
        etag?: string,
        // The kind of object.
        kind?: string,
        // Parameter value pairs for various applications.
        parameters?: {        
            // Boolean value of the parameter.
            boolValue?: boolean,
            // RFC 3339 formatted value of the parameter.
            datetimeValue?: string,
            // Integral value of the parameter.
            intValue?: string,
            // Nested message value of the parameter.
            msgValue?: any[],            
            // The name of the parameter.
            name?: string,
            // String value of the parameter.
            stringValue?: string,
        }[],        
    }
    
    interface UsageReports {
        // ETag of the resource.
        etag?: string,
        // The kind of object.
        kind?: string,
        // Token for retrieving the next page
        nextPageToken?: string,
        // Various application parameter records.
        usageReports?: UsageReport[],        
        // Warnings if any.
        warnings?: {        
            // Machine readable code / warning type.
            code?: string,
            // Key-Value pairs to give detailed information on the warning.
            data?: {            
                // Key associated with a key-value pair to give detailed information on the warning.
                key?: string,
                // Value associated with a key-value pair to give detailed information on the warning.
                value?: string,
            }[],            
            // Human readable message for the warning.
            message?: string,
        }[],        
    }
    
    interface ActivitiesResource {
        // Retrieves a list of activities for a specific customer and application.
        list (request: {        
            // IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
            actorIpAddress?: string,
            // Application name for which the events are to be retrieved.
            applicationName: string,
            // Represents the customer for which the data is to be fetched.
            customerId?: string,
            // Return events which occured at or before this time.
            endTime?: string,
            // Name of the event being queried.
            eventName?: string,
            // Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],...
            filters?: string,
            // Number of activity records to be shown in each page.
            maxResults?: number,
            // Token to specify next page.
            pageToken?: string,
            // Return events which occured at or after this time.
            startTime?: string,
            // Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for all users.
            userKey: string,
        }) : gapi.client.Request<Activities>;        
        
        // Push changes to activities
        watch (request: {        
            // IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
            actorIpAddress?: string,
            // Application name for which the events are to be retrieved.
            applicationName: string,
            // Represents the customer for which the data is to be fetched.
            customerId?: string,
            // Return events which occured at or before this time.
            endTime?: string,
            // Name of the event being queried.
            eventName?: string,
            // Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],...
            filters?: string,
            // Number of activity records to be shown in each page.
            maxResults?: number,
            // Token to specify next page.
            pageToken?: string,
            // Return events which occured at or after this time.
            startTime?: string,
            // Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for all users.
            userKey: string,
        }) : gapi.client.Request<Channel>;        
        
    }
    
    
    interface ChannelsResource {
        // Stop watching resources through this channel
        stop (request: {        
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface CustomerUsageReportsResource {
        // Retrieves a report which is a collection of properties / statistics for a specific customer.
        get (request: {        
            // Represents the customer for which the data is to be fetched.
            customerId?: string,
            // Represents the date in yyyy-mm-dd format for which the data is to be fetched.
            date: string,
            // Token to specify next page.
            pageToken?: string,
            // Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
            parameters?: string,
        }) : gapi.client.Request<UsageReports>;        
        
    }
    
    
    interface UserUsageReportResource {
        // Retrieves a report which is a collection of properties / statistics for a set of users.
        get (request: {        
            // Represents the customer for which the data is to be fetched.
            customerId?: string,
            // Represents the date in yyyy-mm-dd format for which the data is to be fetched.
            date: string,
            // Represents the set of filters including parameter operator value.
            filters?: string,
            // Maximum number of results to return. Maximum allowed is 1000
            maxResults?: number,
            // Token to specify next page.
            pageToken?: string,
            // Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
            parameters?: string,
            // Represents the profile id or the user email for which the data should be filtered.
            userKey: string,
        }) : gapi.client.Request<UsageReports>;        
        
    }
    
}

declare module gapi.client.admin {
    var activities: gapi.client.admin.reports_v1.ActivitiesResource; 
    
    var channels: gapi.client.admin.reports_v1.ChannelsResource; 
    
    var customerUsageReports: gapi.client.admin.reports_v1.CustomerUsageReportsResource; 
    
    var userUsageReport: gapi.client.admin.reports_v1.UserUsageReportResource; 
    
}
