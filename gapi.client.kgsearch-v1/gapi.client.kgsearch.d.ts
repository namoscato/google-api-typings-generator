// Type definitions for Google Knowledge Graph Search API v1
// Project: https://developers.google.com/knowledge-graph/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.kgsearch.v1 {
    
    interface SearchResponse {
        // The local context applicable for the response. See more details at http://www.w3.org/TR/json-ld/#context-definitions.
        context?: any,
        // The schema type of top-level JSON-LD object, e.g. ItemList.
        type?: any,
        // The item list of search results.
        itemListElement?: any[],        
    }
    
    interface EntitiesResource {
        // Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in response, which will be in JSON-LD format and compatible with http://schema.org
        search (request: {        
            // The literal query string for search.
            query?: string,
            // The list of entity id to be used for search instead of query string.
            ids?: string,
            // The list of language codes (defined in ISO 693) to run the query with, e.g. 'en'.
            languages?: string,
            // Restricts returned entities with these types, e.g. Person (as defined in http://schema.org/Person).
            types?: string,
            // Enables indenting of json results.
            indent?: boolean,
            // Enables prefix match against names and aliases of entities
            prefix?: boolean,
            // Limits the number of entities to be returned.
            limit?: number,
        }) : gapi.client.Request<SearchResponse>;        
        
    }
    
}

declare module gapi.client.kgsearch {
    var entities: gapi.client.kgsearch.v1.EntitiesResource; 
    
}
