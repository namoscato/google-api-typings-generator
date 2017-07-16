// Type definitions for Google Accelerated Mobile Pages (AMP) URL API v1
// Project: https://developers.google.com/amp/cache/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.acceleratedmobilepageurl {
    
    interface AmpUrl {
        // The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to
        // the cached document in the Google AMP Cache.
        cdnAmpUrl?: string,
        // The AMP URL pointing to the publisher's web server.
        ampUrl?: string,
        // The original non-AMP URL.
        originalUrl?: string,
    }
    
    interface AmpUrlError {
        // An optional descriptive error message.
        errorMessage?: string,
        // The error code of an API call.
        errorCode?: string,
        // The original non-AMP URL.
        originalUrl?: string,
    }
    
    interface BatchGetAmpUrlsRequest {
        // List of URLs to look up for the paired AMP URLs.
        // The URLs are case-sensitive. Up to 50 URLs per lookup
        // (see [Usage Limits](/amp/cache/reference/limits)).
        urls?: string[],        
        // The lookup_strategy being requested.
        lookupStrategy?: string,
    }
    
    interface BatchGetAmpUrlsResponse {
        // The errors for requested URLs that have no AMP URL.
        urlErrors?: AmpUrlError[],        
        // For each URL in BatchAmpUrlsRequest, the URL response. The response might
        // not be in the same order as URLs in the batch request.
        // If BatchAmpUrlsRequest contains duplicate URLs, AmpUrl is generated
        // only once.
        ampUrls?: AmpUrl[],        
    }
    
    interface AmpUrlsResource {
        // Returns AMP URL(s) and equivalent
        // [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).
        batchGet (request: {        
        }) : gapi.client.Request<BatchGetAmpUrlsResponse>;        
        
    }
    
}

declare module gapi.client.acceleratedmobilepageurl {
    var ampUrls: gapi.client.acceleratedmobilepageurl.AmpUrlsResource; 
    
}
