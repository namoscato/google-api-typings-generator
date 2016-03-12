// Type definitions for Google Google Apps Script Execution API v1
// Project: https://developers.google.com/apps-script/execution/rest/v1/run
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.script {
    
    interface ExecutionRequest {
        // The name of the function to execute in the given script. The name does not include parentheses or parameters.
        function?: string,
        // The parameters to be passed to the function being executed. The type for each parameter should match the expected type in Apps Script. Parameters cannot be Apps Script-specific objects (such as a `Document` or `Calendar`); they can only be primitive types such as a `string`, `number`, `array`, `object`, or `boolean`. Optional.
        parameters?: any[],        
        // This field is not used.
        sessionState?: string,
        // If `true` and the user is an owner of the script, the script runs at the most recently saved version rather than the version deployed for use with the Execution API. Optional; default is `false`.
        devMode?: boolean,
    }
    
    interface Operation {
        // This field is not used.
        name?: string,
        // This field is not used.
        metadata?: any,
        // This field is not used.
        done?: boolean,
        // If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, this field will contain a `Status` object. The `Status` object's `details` field will contain an array with a single `ExecutionError` object that provides information about the nature of the error.
        error?: Status,
        // If the script function returns successfully, this field will contain an `ExecutionResponse` object with the function's return value as the object's `result` field.
        response?: any,
    }
    
    interface Status {
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
        message?: string,
        // An array that contains a single `ExecutionError` object that provides information about the nature of the error.
        details?: any[],        
    }
    
    interface ExecutionError {
        // An array of objects that provide a stack trace through the script to show where the execution failed, with the deepest call first.
        scriptStackTraceElements?: ScriptStackTraceElement[],        
        // The error message thrown by Apps Script, usually localized into the user's language.
        errorMessage?: string,
        // The error type, for example `TypeError` or `ReferenceError`. If the error type is unavailable, this field is not included.
        errorType?: string,
    }
    
    interface ScriptStackTraceElement {
        // The name of the function that failed.
        function?: string,
        // The line number where the script failed.
        lineNumber?: number,
    }
    
    interface ExecutionResponse {
        // The return value of the script function. The type will match the type returned in Apps Script. Functions called through the Execution API cannot return Apps Script-specific objects (such as a `Document` or `Calendar`); they can only return primitive types such as a `string`, `number`, `array`, `object`, or `boolean`.
        result?: any,
    }
    
    interface ScriptsResource {
        // Runs a function in an Apps Script project that has been deployed for use with the Apps Script Execution API. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authentication](#authentication) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the project in the script editor, then select **File > Project properties** and click the **Scopes** tab.
        run (request: {        
            // The project key of the script to be executed. To find the project key, open the project in the script editor, then select **File > Project properties**.
            scriptId: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
}

declare module gapi.client.script {
    var scripts: gapi.client.script.ScriptsResource; 
    
}
