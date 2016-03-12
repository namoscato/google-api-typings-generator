// Type definitions for Google Google Fonts Developer API v1
// Project: https://developers.google.com/fonts/docs/developer_api
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.webfonts.v1 {
    
    interface Webfont {
        // The category of the font.
        category?: string,
        // The name of the font.
        family?: string,
        // The font files (with all supported scripts) for each one of the available variants, as a key : value map.
        files?: any,
        // This kind represents a webfont object in the webfonts service.
        kind?: string,
        // The date (format "yyyy-MM-dd") the font was modified for the last time.
        lastModified?: string,
        // The scripts supported by the font.
        subsets?: string[],        
        // The available variants for the font.
        variants?: string[],        
        // The font version.
        version?: string,
    }
    
    interface WebfontList {
        // The list of fonts currently served by the Google Fonts API.
        items?: Webfont[],        
        // This kind represents a list of webfont objects in the webfonts service.
        kind?: string,
    }
    
    interface WebfontsResource {
        // Retrieves the list of fonts currently served by the Google Fonts Developer API
        list (request: {        
            // Enables sorting of the list
            sort?: string,
        }) : gapi.client.Request<WebfontList>;        
        
    }
    
}

declare module gapi.client.webfonts {
    var webfonts: gapi.client.webfonts.v1.WebfontsResource; 
    
}
