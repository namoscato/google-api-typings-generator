// Type definitions for Google Ad Exchange Buyer API II v2beta1
// Project: https://developers.google.com/ad-exchange/buyer-rest/guides/client-access/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.adexchangebuyer2.v2beta1 {
    
    interface ClientUser {
        // User's email address. The value of this field
        // is ignored in an update operation.
        email?: string,
        // Numerical account ID of the client buyer
        // with which the user is associated; the
        // buyer must be a client of the current sponsor buyer.
        // The value of this field is ignored in an update operation.
        clientAccountId?: string,
        // The status of the client user.
        status?: string,
        // The unique numerical ID of the client user
        // that has accepted an invitation.
        // The value of this field is ignored in an update operation.
        userId?: string,
    }
    
    interface ClientUserInvitation {
        // The email address to which the invitation is sent. Email
        // addresses should be unique among all client users under each sponsor
        // buyer.
        email?: string,
        // Numerical account ID of the client buyer
        // that the invited user is associated with.
        // The value of this field is ignored in create operations.
        clientAccountId?: string,
        // The unique numerical ID of the invitation that is sent to the user.
        // The value of this field is ignored in create operations.
        invitationId?: string,
    }
    
    interface ListClientUserInvitationsResponse {
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListClientUserInvitationsRequest.pageToken
        // field in the subsequent call to the
        // clients.invitations.list
        // method to retrieve the next
        // page of results.
        nextPageToken?: string,
        // The returned list of client users.
        invitations?: ClientUserInvitation[],        
    }
    
    interface ListClientUsersResponse {
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListClientUsersRequest.pageToken
        // field in the subsequent call to the
        // clients.invitations.list
        // method to retrieve the next
        // page of results.
        nextPageToken?: string,
        // The returned list of client users.
        users?: ClientUser[],        
    }
    
    interface Client {
        // Whether the client buyer will be visible to sellers.
        visibleToSeller?: boolean,
        // The status of the client buyer.
        status?: string,
        // The type of the client entity: `ADVERTISER`, `BRAND`, or `AGENCY`.
        entityType?: string,
        // The role which is assigned to the client buyer. Each role implies a set of
        // permissions granted to the client. Must be one of `CLIENT_DEAL_VIEWER`,
        // `CLIENT_DEAL_NEGOTIATOR`, or `CLIENT_DEAL_APPROVER`.
        role?: string,
        // Name used to represent this client to publishers.
        // You may have multiple clients that map to the same entity,
        // but for each client the combination of `clientName` and entity
        // must be unique.
        // You can specify this field as empty.
        clientName?: string,
        // The globally-unique numerical ID of the client.
        // The value of this field is ignored in create and update operations.
        clientAccountId?: string,
        // Numerical identifier of the client entity.
        // The entity can be an advertiser, a brand, or an agency.
        // This identifier is unique among all the entities with the same type.
        // 
        // A list of all known advertisers with their identifiers is available in the
        // [advertisers.txt](https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt)
        // file.
        // 
        // A list of all known brands with their identifiers is available in the
        // [brands.txt](https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt)
        // file.
        // 
        // A list of all known agencies with their identifiers is available in the
        // [agencies.txt](https://storage.googleapis.com/adx-rtb-dictionaries/agencies.txt)
        // file.
        entityId?: string,
        // The name of the entity. This field is automatically fetched based on
        // the type and ID.
        // The value of this field is ignored in create and update operations.
        entityName?: string,
    }
    
    interface ListClientsResponse {
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListClientsRequest.pageToken
        // field in the subsequent call to the
        // accounts.clients.list method
        // to retrieve the next page of results.
        nextPageToken?: string,
        // The returned list of clients.
        clients?: Client[],        
    }
    
    interface UsersResource {
        // Updates an existing client user.
        // Only the user status can be changed on update.
        update (request: {        
            // Numerical account ID of the client buyer that the user to be retrieved
            // is associated with. (required)
            clientAccountId: string,
            // Numerical identifier of the user to retrieve. (required)
            userId: string,
            // Numerical account ID of the client's sponsor buyer. (required)
            accountId: string,
        }) : gapi.client.Request<ClientUser>;        
        
        // Retrieves an existing client user.
        get (request: {        
            // Numerical account ID of the client buyer
            // that the user to be retrieved is associated with. (required)
            clientAccountId: string,
            // Numerical identifier of the user to retrieve. (required)
            userId: string,
            // Numerical account ID of the client's sponsor buyer. (required)
            accountId: string,
        }) : gapi.client.Request<ClientUser>;        
        
        // Lists all the known client users for a specified
        // sponsor buyer account ID.
        list (request: {        
            // Requested page size. The server may return fewer clients than requested.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // The account ID of the client buyer to list users for. (required)
            // You must specify either a string representation of a
            // numerical account identifier or the `-` character
            // to list all the client users for all the clients
            // of a given sponsor buyer.
            clientAccountId: string,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListClientUsersResponse.nextPageToken
            // returned from the previous call to the
            // accounts.clients.users.list method.
            pageToken?: string,
            // Numerical account ID of the sponsor buyer of the client to list users for.
            // (required)
            accountId: string,
        }) : gapi.client.Request<ListClientUsersResponse>;        
        
    }
    
    
    interface InvitationsResource {
        // Retrieves an existing client user invitation.
        get (request: {        
            // Numerical account ID of the client buyer that the user invitation
            // to be retrieved is associated with. (required)
            clientAccountId: string,
            // Numerical identifier of the user invitation to retrieve. (required)
            invitationId: string,
            // Numerical account ID of the client's sponsor buyer. (required)
            accountId: string,
        }) : gapi.client.Request<ClientUserInvitation>;        
        
        // Creates and sends out an email invitation to access
        // an Ad Exchange client buyer account.
        create (request: {        
            // Numerical account ID of the client buyer that the user
            // should be associated with. (required)
            clientAccountId: string,
            // Numerical account ID of the client's sponsor buyer. (required)
            accountId: string,
        }) : gapi.client.Request<ClientUserInvitation>;        
        
        // Lists all the client users invitations for a client
        // with a given account ID.
        list (request: {        
            // Requested page size. Server may return fewer clients than requested.
            // If unspecified, server will pick an appropriate default.
            pageSize?: number,
            // Numerical account ID of the client buyer to list invitations for.
            // (required)
            // You must either specify a string representation of a
            // numerical account identifier or the `-` character
            // to list all the invitations for all the clients
            // of a given sponsor buyer.
            clientAccountId: string,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListClientUserInvitationsResponse.nextPageToken
            // returned from the previous call to the
            // clients.invitations.list
            // method.
            pageToken?: string,
            // Numerical account ID of the client's sponsor buyer. (required)
            accountId: string,
        }) : gapi.client.Request<ListClientUserInvitationsResponse>;        
        
    }
    
    
    interface ClientsResource {
        // Updates an existing client buyer.
        update (request: {        
            // Unique numerical account ID of the client to update. (required)
            clientAccountId: string,
            // Unique numerical account ID for the buyer of which the client buyer
            // is a customer; the sponsor buyer to update a client for. (required)
            accountId: string,
        }) : gapi.client.Request<Client>;        
        
        // Creates a new client buyer.
        create (request: {        
            // Unique numerical account ID for the buyer of which the client buyer
            // is a customer; the sponsor buyer to create a client for. (required)
            accountId: string,
        }) : gapi.client.Request<Client>;        
        
        // Gets a client buyer with a given client account ID.
        get (request: {        
            // Numerical account ID of the client buyer to retrieve. (required)
            clientAccountId: string,
            // Numerical account ID of the client's sponsor buyer. (required)
            accountId: string,
        }) : gapi.client.Request<Client>;        
        
        // Lists all the clients for the current sponsor buyer.
        list (request: {        
            // Requested page size. The server may return fewer clients than requested.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListClientsResponse.nextPageToken
            // returned from the previous call to the
            // accounts.clients.list method.
            pageToken?: string,
            // Unique numerical account ID of the sponsor buyer to list the clients for.
            accountId: string,
        }) : gapi.client.Request<ListClientsResponse>;        
        
        users: UsersResource,
        invitations: InvitationsResource,
    }
    
    
    interface AccountsResource {
        clients: ClientsResource,
    }
    
}

declare module gapi.client.adexchangebuyer2 {
    var accounts: gapi.client.adexchangebuyer2.v2beta1.AccountsResource; 
    
}
