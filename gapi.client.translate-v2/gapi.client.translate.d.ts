// Type definitions for Google Translate API v2
// Project: https://developers.google.com/translate/v2/using_rest
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.translate.v2 {
    
    interface DetectionsListResponse {
        // A detections contains detection results of several text
        detections?: DetectionsResource[],        
    }
    
    interface DetectionsResource {
    }
    
    interface LanguagesListResponse {
        // List of source/target languages supported by the translation API. If target parameter is unspecified, the list is sorted by the ASCII code point order of the language code. If target parameter is specified, the list is sorted by the collation order of the language name in the target language.
        languages?: LanguagesResource[],        
    }
    
    interface LanguagesResource {
        // The language code.
        language?: string,
        // The localized name of the language if target parameter is given.
        name?: string,
    }
    
    interface TranslationsListResponse {
        // Translations contains list of translation results of given text
        translations?: TranslationsResource[],        
    }
    
    interface TranslationsResource {
        // Detected source language if source parameter is unspecified.
        detectedSourceLanguage?: string,
        // The translation.
        translatedText?: string,
    }
    
    interface DetectionsResource {
        // Detect the language of text.
        list (request: {        
            // The text to detect
            q: string,
        }) : gapi.client.Request<DetectionsListResponse>;        
        
    }
    
    
    interface LanguagesResource {
        // List the source/target languages supported by the API
        list (request: {        
            // the language and collation in which the localized results should be returned
            target?: string,
        }) : gapi.client.Request<LanguagesListResponse>;        
        
    }
    
    
    interface TranslationsResource {
        // Returns text translations from one language to another.
        list (request: {        
            // The customization id for translate
            cid?: string,
            // The format of the text
            format?: string,
            // The text to translate
            q: string,
            // The source language of the text
            source?: string,
            // The target language into which the text should be translated
            target: string,
        }) : gapi.client.Request<TranslationsListResponse>;        
        
    }
    
}

declare module gapi.client.translate {
    var detections: gapi.client.translate.v2.DetectionsResource; 
    
    var languages: gapi.client.translate.v2.LanguagesResource; 
    
    var translations: gapi.client.translate.v2.TranslationsResource; 
    
}
