// Type definitions for Google Google Ad Experience Report API v1
// Project: https://developers.google.com/ad-experience-report/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.adexperiencereport {
    
    interface PlatformSummary {
        // The assigned regions for the site and platform.
        region?: string[],        
        // The date on which ad filtering begins.
        enforcementTime?: string,
        // The ad filtering status of the site.
        filterStatus?: string,
        // Whether the site is currently under review.
        underReview?: boolean,
        // A link that leads to a full ad experience report.
        reportUrl?: string,
        // The last time that the site changed status.
        lastChangeTime?: string,
        // The status of the site reviewed for egregious ads.
        egregiousStatus?: string,
        // The status of the site reviewed for the Better Ads Standards.
        betterAdsStatus?: string,
    }
    
    interface ViolatingSitesResponse {
        // A list of summaries of violating sites.
        violatingSites?: SiteSummaryResponse[],        
    }
    
    interface SiteSummaryResponse {
        // The name of the site reviewed.
        reviewedSite?: string,
        // Summary for the desktop review of the site.
        desktopSummary?: PlatformSummary,
        // Summary for the mobile review of the site.
        mobileSummary?: PlatformSummary,
    }
    
    interface ViolatingSitesResource {
        // Lists sites with Ad Experience Report statuses of "Failing" or "Warning".
        list (request: {        
        }) : gapi.client.Request<ViolatingSitesResponse>;        
        
    }
    
    
    interface SitesResource {
        // Gets a summary of the ads rating of a site.
        get (request: {        
            // The required site name. It should be a site property registered in Search
            // Console. The server will return an error of BAD_REQUEST if this field is
            // not filled in.
            name: string,
        }) : gapi.client.Request<SiteSummaryResponse>;        
        
    }
    
}

declare module gapi.client.adexperiencereport {
    var violatingSites: gapi.client.adexperiencereport.ViolatingSitesResource; 
    
    var sites: gapi.client.adexperiencereport.SitesResource; 
    
}
