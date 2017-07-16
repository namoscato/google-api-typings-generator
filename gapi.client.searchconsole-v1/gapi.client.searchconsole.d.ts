// Type definitions for Google Google Search Console URL Testing Tools API v1
// Project: https://developers.google.com/webmaster-tools/search-console-api/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.searchconsole {
    
    interface ResourceIssue {
        // Describes a blocked resource issue.
        blockedResource?: BlockedResource,
    }
    
    interface BlockedResource {
        // URL of the blocked resource.
        url?: string,
    }
    
    interface TestStatus {
        // Status of the test.
        status?: string,
        // Error details if applicable.
        details?: string,
    }
    
    interface RunMobileFriendlyTestRequest {
        // URL for inspection.
        url?: string,
        // Whether or not screenshot is requested. Default is false.
        requestScreenshot?: boolean,
    }
    
    interface Image {
        // The mime-type of the image data.
        mimeType?: string,
        // Image data in format determined by the mime type. Currently, the format
        // will always be "image/png", but this might change in the future.
        data?: string,
    }
    
    interface MobileFriendlyIssue {
        // Rule violated.
        rule?: string,
    }
    
    interface RunMobileFriendlyTestResponse {
        // Test verdict, whether the page is mobile friendly or not.
        mobileFriendliness?: string,
        // List of mobile-usability issues.
        mobileFriendlyIssues?: MobileFriendlyIssue[],        
        // Screenshot of the requested URL.
        screenshot?: Image,
        // Information about embedded resources issues.
        resourceIssues?: ResourceIssue[],        
        // Final state of the test, can be either complete or an error.
        testStatus?: TestStatus,
    }
    
    interface MobileFriendlyTestResource {
        // Runs Mobile-Friendly Test for a given URL.
        run (request: {        
        }) : gapi.client.Request<RunMobileFriendlyTestResponse>;        
        
    }
    
    
    interface UrlTestingToolsResource {
        mobileFriendlyTest: MobileFriendlyTestResource,
    }
    
}

declare module gapi.client.searchconsole {
    var urlTestingTools: gapi.client.searchconsole.UrlTestingToolsResource; 
    
}
