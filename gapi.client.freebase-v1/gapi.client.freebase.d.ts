// Type definitions for Google Freebase Search v1
// Project: https://developers.google.com/freebase/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.freebase {
    
    interface ReconcileCandidate {
        // Percentage likelihood that this candidate is the unique matching entity. Value will be between 0.0 and 1.0
        confidence?: number,
        // Language code that candidate and notable names are displayed in.
        lang?: string,
        // Freebase MID of candidate entity.
        mid?: string,
        // Freebase name of matching entity in specified language.
        name?: string,
        // Type or profession the candidate is notable for.
        notable?: {        
            // MID of notable category.
            id?: string,
            // Name of notable category in specified language.
            name?: string,
        },        
    }
    
    interface ReconcileGet {
        // If filled, then the listed candidates are potential matches, and such should be evaluated by a more discerning algorithm or human. The matches are ordered by confidence.
        candidate?: ReconcileCandidate[],        
        // Server costs for reconciling.
        costs?: {        
            // Total number of hits found.
            hits?: number,
            // Total milliseconds spent.
            ms?: number,
        },        
        // If filled, this entity is guaranteed to match at requested confidence probability (default 99%).
        match?: ReconcileCandidate,
        // If filled, then there were recoverable problems that affected the request. For example, some of the properties were ignored because they either are not valid Freebase predicates or are not indexed for reconciliation. The candidates returned should be considered valid results, with the caveat that sections of the request were ignored as specified by the warning text.
        warning?: {        
            // Location of warning in the request e.g. invalid predicate.
            location?: string,
            // Warning message to display to the user.
            message?: string,
            // Code for identifying classes of warnings.
            reason?: string,
        }[],        
    }
}

declare module gapi.client.freebase {
}
