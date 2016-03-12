// Type definitions for Google Enterprise Apps Reseller API v1sandbox
// Project: https://developers.google.com/google-apps/reseller/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.reseller {
    
    interface Address {
        // Address line 1 of the address.
        addressLine1?: string,
        // Address line 2 of the address.
        addressLine2?: string,
        // Address line 3 of the address.
        addressLine3?: string,
        // Name of the contact person.
        contactName?: string,
        // ISO 3166 country code.
        countryCode?: string,
        // Identifies the resource as a customer address.
        kind?: string,
        // Name of the locality. This is in accordance with - http://portablecontacts.net/draft-spec.html#address_element.
        locality?: string,
        // Name of the organization.
        organizationName?: string,
        // The postal code. This is in accordance with - http://portablecontacts.net/draft-spec.html#address_element.
        postalCode?: string,
        // Name of the region. This is in accordance with - http://portablecontacts.net/draft-spec.html#address_element.
        region?: string,
    }
    
    interface ChangePlanRequest {
        // Identifies the resource as a subscription change plan request.
        kind?: string,
        // Name of the plan to change to.
        planName?: string,
        // Purchase order id for your order tracking purposes.
        purchaseOrderId?: string,
        // Number/Limit of seats in the new plan.
        seats?: Seats,
    }
    
    interface Customer {
        // The alternate email of the customer.
        alternateEmail?: string,
        // The domain name of the customer.
        customerDomain?: string,
        // Whether the customer's primary domain has been verified.
        customerDomainVerified?: boolean,
        // The id of the customer.
        customerId?: string,
        // Identifies the resource as a customer.
        kind?: string,
        // The phone number of the customer.
        phoneNumber?: string,
        // The postal address of the customer.
        postalAddress?: Address,
        // Ui url for customer resource.
        resourceUiUrl?: string,
    }
    
    interface RenewalSettings {
        // Identifies the resource as a subscription renewal setting.
        kind?: string,
        // Subscription renewal type.
        renewalType?: string,
    }
    
    interface Seats {
        // Identifies the resource as a subscription change plan request.
        kind?: string,
        // Read-only field containing the current number of licensed seats for FLEXIBLE Google-Apps subscriptions and secondary subscriptions such as Google-Vault and Drive-storage.
        licensedNumberOfSeats?: number,
        // Maximum number of seats that can be purchased. This needs to be provided only for a non-commitment plan. For a commitment plan it is decided by the contract.
        maximumNumberOfSeats?: number,
        // Number of seats to purchase. This is applicable only for a commitment plan.
        numberOfSeats?: number,
    }
    
    interface Subscription {
        // Billing method of this subscription.
        billingMethod?: string,
        // Creation time of this subscription in milliseconds since Unix epoch.
        creationTime?: string,
        // Primary domain name of the customer
        customerDomain?: string,
        // The id of the customer to whom the subscription belongs.
        customerId?: string,
        // Identifies the resource as a Subscription.
        kind?: string,
        // Plan details of the subscription
        plan?: {        
            // Interval of the commitment if it is a commitment plan.
            commitmentInterval?: {            
                // End time of the commitment interval in milliseconds since Unix epoch.
                endTime?: string,
                // Start time of the commitment interval in milliseconds since Unix epoch.
                startTime?: string,
            },            
            // Whether the plan is a commitment plan or not.
            isCommitmentPlan?: boolean,
            // The plan name of this subscription's plan.
            planName?: string,
        },        
        // Purchase order id for your order tracking purposes.
        purchaseOrderId?: string,
        // Renewal settings of the subscription.
        renewalSettings?: RenewalSettings,
        // Ui url for subscription resource.
        resourceUiUrl?: string,
        // Number/Limit of seats in the new plan.
        seats?: Seats,
        // Name of the sku for which this subscription is purchased.
        skuId?: string,
        // Status of the subscription.
        status?: string,
        // The id of the subscription.
        subscriptionId?: string,
        // field listing all current reasons the subscription is suspended. It is possible for a subscription to have multiple suspension reasons. A subscription's status is SUSPENDED until all pending suspensions are removed. Possible options include:  
        // - PENDING_TOS_ACCEPTANCE — The customer has not logged in and accepted the Google Apps Resold Terms of Services.  
        // - RENEWAL_WITH_TYPE_CANCEL — The customer's commitment ended and their service was cancelled at the end of their term.  
        // - RESELLER_INITIATED — A manual suspension invoked by a Reseller.  
        // - TRIAL_ENDED — The customer's trial expired without a plan selected.  
        // - OTHER — The customer is suspended for an internal Google reason (e.g. abuse or otherwise).
        suspensionReasons?: string[],        
        // Transfer related information for the subscription.
        transferInfo?: {        
            // 
            minimumTransferableSeats?: number,
            // Time when transfer token or intent to transfer will expire.
            transferabilityExpirationTime?: string,
        },        
        // Trial Settings of the subscription.
        trialSettings?: {        
            // Whether the subscription is in trial.
            isInTrial?: boolean,
            // End time of the trial in milliseconds since Unix epoch.
            trialEndTime?: string,
        },        
    }
    
    interface Subscriptions {
        // Identifies the resource as a collection of subscriptions.
        kind?: string,
        // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
        // The subscriptions in this page of results.
        subscriptions?: Subscription[],        
    }
    
    interface CustomersResource {
        // Gets a customer resource if one exists and is owned by the reseller.
        get (request: {        
            // Id of the Customer
            customerId: string,
        }) : gapi.client.Request<Customer>;        
        
        // Creates a customer resource if one does not already exist.
        insert (request: {        
            // An auth token needed for inserting a customer for which domain already exists. Can be generated at https://admin.google.com/TransferToken. Optional.
            customerAuthToken?: string,
        }) : gapi.client.Request<Customer>;        
        
        // Update a customer resource if one it exists and is owned by the reseller. This method supports patch semantics.
        patch (request: {        
            // Id of the Customer
            customerId: string,
        }) : gapi.client.Request<Customer>;        
        
        // Update a customer resource if one it exists and is owned by the reseller.
        update (request: {        
            // Id of the Customer
            customerId: string,
        }) : gapi.client.Request<Customer>;        
        
    }
    
    
    interface SubscriptionsResource {
        // Activates a subscription previously suspended by the reseller
        activate (request: {        
            // Id of the Customer
            customerId: string,
            // Id of the subscription, which is unique for a customer
            subscriptionId: string,
        }) : gapi.client.Request<Subscription>;        
        
        // Changes the plan of a subscription
        changePlan (request: {        
            // Id of the Customer
            customerId: string,
            // Id of the subscription, which is unique for a customer
            subscriptionId: string,
        }) : gapi.client.Request<Subscription>;        
        
        // Changes the renewal settings of a subscription
        changeRenewalSettings (request: {        
            // Id of the Customer
            customerId: string,
            // Id of the subscription, which is unique for a customer
            subscriptionId: string,
        }) : gapi.client.Request<Subscription>;        
        
        // Changes the seats configuration of a subscription
        changeSeats (request: {        
            // Id of the Customer
            customerId: string,
            // Id of the subscription, which is unique for a customer
            subscriptionId: string,
        }) : gapi.client.Request<Subscription>;        
        
        // Cancels/Downgrades a subscription.
        delete (request: {        
            // Id of the Customer
            customerId: string,
            // Whether the subscription is to be fully cancelled or downgraded
            deletionType: string,
            // Id of the subscription, which is unique for a customer
            subscriptionId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a subscription of the customer.
        get (request: {        
            // Id of the Customer
            customerId: string,
            // Id of the subscription, which is unique for a customer
            subscriptionId: string,
        }) : gapi.client.Request<Subscription>;        
        
        // Creates/Transfers a subscription for the customer.
        insert (request: {        
            // An auth token needed for transferring a subscription. Can be generated at https://www.google.com/a/cpanel/customer-domain/TransferToken. Optional.
            customerAuthToken?: string,
            // Id of the Customer
            customerId: string,
        }) : gapi.client.Request<Subscription>;        
        
        // Lists subscriptions of a reseller, optionally filtered by a customer name prefix.
        list (request: {        
            // An auth token needed if the customer is not a resold customer of this reseller. Can be generated at https://www.google.com/a/cpanel/customer-domain/TransferToken.Optional.
            customerAuthToken?: string,
            // Id of the Customer
            customerId?: string,
            // Prefix of the customer's domain name by which the subscriptions should be filtered. Optional
            customerNamePrefix?: string,
            // Maximum number of results to return
            maxResults?: number,
            // Token to specify next page in the list
            pageToken?: string,
        }) : gapi.client.Request<Subscriptions>;        
        
        // Starts paid service of a trial subscription
        startPaidService (request: {        
            // Id of the Customer
            customerId: string,
            // Id of the subscription, which is unique for a customer
            subscriptionId: string,
        }) : gapi.client.Request<Subscription>;        
        
        // Suspends an active subscription
        suspend (request: {        
            // Id of the Customer
            customerId: string,
            // Id of the subscription, which is unique for a customer
            subscriptionId: string,
        }) : gapi.client.Request<Subscription>;        
        
    }
    
}

declare module gapi.client.reseller {
    var customers: gapi.client.reseller.CustomersResource; 
    
    var subscriptions: gapi.client.reseller.SubscriptionsResource; 
    
}
