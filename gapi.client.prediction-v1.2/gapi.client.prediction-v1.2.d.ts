// Type definitions for Google Prediction API v1.2
// Project: https://developers.google.com/prediction/docs/developer-guide
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.prediction.v1_2 {
    
    interface Input {
        // 
        input?: {        
            // 
            csvInstance?: any[],            
        },        
    }
    
    interface Output {
        // 
        id?: string,
        // 
        kind?: string,
        // 
        outputLabel?: string,
        // 
        outputMulti?: {        
            // 
            label?: string,
            // 
            score?: number,
        }[],        
        // 
        outputValue?: number,
        // 
        selfLink?: string,
    }
    
    interface Training {
        // 
        id?: string,
        // 
        kind?: string,
        // 
        modelInfo?: {        
            // 
            classificationAccuracy?: number,
            // 
            meanSquaredError?: number,
            // 
            modelType?: string,
        },        
        // 
        selfLink?: string,
        // 
        trainingStatus?: string,
    }
    
    interface Update {
        // The true class label of this instance
        classLabel?: string,
        // The input features for this instance
        csvInstance?: any[],        
    }
    
    interface HostedmodelsResource {
        // Submit input and request an output against a hosted model
        predict (request: {        
            // The name of a hosted model
            hostedModelName: string,
        }) : gapi.client.Request<Output>;        
        
    }
    
    
    interface TrainingResource {
        // Delete a trained model
        delete (request: {        
            // mybucket/mydata resource in Google Storage
            data: string,
        }) : gapi.client.Request<void>;        
        
        // Check training status of your model
        get (request: {        
            // mybucket/mydata resource in Google Storage
            data: string,
        }) : gapi.client.Request<Training>;        
        
        // Begin training your model
        insert (request: {        
            // mybucket/mydata resource in Google Storage
            data?: string,
        }) : gapi.client.Request<Training>;        
        
        // Add new data to a trained model
        update (request: {        
            // mybucket/mydata resource in Google Storage
            data: string,
        }) : gapi.client.Request<Training>;        
        
    }
    
}

declare module gapi.client.prediction {
    var hostedmodels: gapi.client.prediction.v1_2.HostedmodelsResource; 
    
    var training: gapi.client.prediction.v1_2.TrainingResource; 
    
}
