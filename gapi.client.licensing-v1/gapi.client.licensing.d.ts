// Type definitions for Google Enterprise License Manager API v1
// Project: https://developers.google.com/google-apps/licensing/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.licensing {
    
    interface LicenseAssignment {
        // ETag of the resource.
        etags?: string,
        // Identifies the resource as a LicenseAssignment.
        kind?: string,
        // Name of the product.
        productId?: string,
        // Link to this page.
        selfLink?: string,
        // Name of the sku of the product.
        skuId?: string,
        // Email id of the user.
        userId?: string,
    }
    
    interface LicenseAssignmentInsert {
        // Email id of the user
        userId?: string,
    }
    
    interface LicenseAssignmentList {
        // ETag of the resource.
        etag?: string,
        // The LicenseAssignments in this page of results.
        items?: LicenseAssignment[],        
        // Identifies the resource as a collection of LicenseAssignments.
        kind?: string,
        // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
    }
    
    interface LicenseAssignmentsResource {
        // Revoke License.
        delete (request: {        
            // Name for product
            productId: string,
            // Name for sku
            skuId: string,
            // email id or unique Id of the user
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Get license assignment of a particular product and sku for a user
        get (request: {        
            // Name for product
            productId: string,
            // Name for sku
            skuId: string,
            // email id or unique Id of the user
            userId: string,
        }) : gapi.client.Request<LicenseAssignment>;        
        
        // Assign License.
        insert (request: {        
            // Name for product
            productId: string,
            // Name for sku
            skuId: string,
        }) : gapi.client.Request<LicenseAssignment>;        
        
        // List license assignments for given product of the customer.
        listForProduct (request: {        
            // CustomerId represents the customer for whom licenseassignments are queried
            customerId: string,
            // Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
            maxResults?: number,
            // Token to fetch the next page.Optional. By default server will return first page
            pageToken?: string,
            // Name for product
            productId: string,
        }) : gapi.client.Request<LicenseAssignmentList>;        
        
        // List license assignments for given product and sku of the customer.
        listForProductAndSku (request: {        
            // CustomerId represents the customer for whom licenseassignments are queried
            customerId: string,
            // Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
            maxResults?: number,
            // Token to fetch the next page.Optional. By default server will return first page
            pageToken?: string,
            // Name for product
            productId: string,
            // Name for sku
            skuId: string,
        }) : gapi.client.Request<LicenseAssignmentList>;        
        
        // Assign License. This method supports patch semantics.
        patch (request: {        
            // Name for product
            productId: string,
            // Name for sku for which license would be revoked
            skuId: string,
            // email id or unique Id of the user
            userId: string,
        }) : gapi.client.Request<LicenseAssignment>;        
        
        // Assign License.
        update (request: {        
            // Name for product
            productId: string,
            // Name for sku for which license would be revoked
            skuId: string,
            // email id or unique Id of the user
            userId: string,
        }) : gapi.client.Request<LicenseAssignment>;        
        
    }
    
}

declare module gapi.client.licensing {
    var licenseAssignments: gapi.client.licensing.LicenseAssignmentsResource; 
    
}
