// Type definitions for Google Google Play Developer API v1.1
// Project: https://developers.google.com/android-publisher
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.androidpublisher.v1_1 {
    
    interface InappPurchase {
        // The consumption state of the inapp product. Possible values are:  
        // - Yet to be consumed 
        // - Consumed
        consumptionState?: number,
        // A developer-specified string that contains supplemental information about an order.
        developerPayload?: string,
        // This kind represents an inappPurchase object in the androidpublisher service.
        kind?: string,
        // The purchase state of the order. Possible values are:  
        // - Purchased 
        // - Cancelled
        purchaseState?: number,
        // The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970).
        purchaseTime?: string,
    }
    
    interface SubscriptionPurchase {
        // Whether the subscription will automatically be renewed when it reaches its current expiry time.
        autoRenewing?: boolean,
        // Time at which the subscription was granted, in milliseconds since Epoch.
        initiationTimestampMsec?: string,
        // This kind represents a subscriptionPurchase object in the androidpublisher service.
        kind?: string,
        // Time at which the subscription will expire, in milliseconds since Epoch.
        validUntilTimestampMsec?: string,
    }
    
    interface InapppurchasesResource {
        // Checks the purchase and consumption status of an inapp item.
        get (request: {        
            // The package name of the application the inapp product was sold in (for example, 'com.some.thing').
            packageName: string,
            // The inapp product SKU (for example, 'com.some.thing.inapp1').
            productId: string,
            // The token provided to the user's device when the inapp product was purchased.
            token: string,
        }) : gapi.client.Request<InappPurchase>;        
        
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
    var inapppurchases: gapi.client.androidpublisher.v1_1.InapppurchasesResource; 
    
    var purchases: gapi.client.androidpublisher.v1_1.PurchasesResource; 
    
}
