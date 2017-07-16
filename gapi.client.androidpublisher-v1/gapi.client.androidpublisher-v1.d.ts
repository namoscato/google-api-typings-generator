// Type definitions for Google Google Play Developer API v1
// Project: https://developers.google.com/android-publisher
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.androidpublisher {
    
    interface SubscriptionPurchase {
        // Whether the subscription will automatically be renewed when it reaches its current expiry time.
        autoRenewing?: boolean,
        // Time at which the subscription was granted, in milliseconds since the Epoch.
        initiationTimestampMsec?: string,
        // This kind represents a subscriptionPurchase object in the androidpublisher service.
        kind?: string,
        // Time at which the subscription will expire, in milliseconds since the Epoch.
        validUntilTimestampMsec?: string,
    }
    
    interface PurchasesResource {
        // Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
        cancel (request: {        
            // The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
            packageName: string,
            // The purchased subscription ID (for example, 'monthly001').
            subscriptionId: string,
            // The token provided to the user's device when the subscription was purchased.
            token: string,
        }) : gapi.client.Request<void>;        
        
        // Checks whether a user's subscription purchase is valid and returns its expiry time.
        get (request: {        
            // The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
            packageName: string,
            // The purchased subscription ID (for example, 'monthly001').
            subscriptionId: string,
            // The token provided to the user's device when the subscription was purchased.
            token: string,
        }) : gapi.client.Request<SubscriptionPurchase>;        
        
    }
    
}

declare module gapi.client.androidpublisher {
    var purchases: gapi.client.androidpublisher.PurchasesResource; 
    
}
