// Type definitions for Google Google App Engine Admin API v1alpha
// Project: https://cloud.google.com/appengine/docs/admin-api/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.appengine {
    
    interface ListLocationsResponse {
        // The standard List next-page token.
        nextPageToken?: string,
        // A list of locations that matches the specified filter in the request.
        locations?: Location[],        
    }
    
    interface ManagedCertificate {
        // Status of certificate management. Refers to the most recent certificate acquisition or renewal attempt.@OutputOnly
        status?: string,
        // Time at which the certificate was last renewed. The renewal process is fully managed. Certificate renewal will automatically occur before the certificate expires. Renewal errors can be tracked via ManagementStatus.@OutputOnly
        lastRenewalTime?: string,
    }
    
    interface OperationMetadataV1 {
        // Time that this operation completed.@OutputOnly
        endTime?: string,
        // Time that this operation was created.@OutputOnly
        insertTime?: string,
        // Durable messages that persist on every operation poll. @OutputOnly
        warning?: string[],        
        // Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
        target?: string,
        // User who requested this operation.@OutputOnly
        user?: string,
        // Ephemeral message that may change every time the operation is polled. @OutputOnly
        ephemeralMessage?: string,
        // API method that initiated this operation. Example: google.appengine.v1.Versions.CreateVersion.@OutputOnly
        method?: string,
    }
    
    interface SslSettings {
        // Whether the mapped certificate is an App Engine managed certificate. Managed certificates are created by default with a domain mapping. To opt out, specify no_managed_certificate on a CREATE or UPDATE request.@OutputOnly
        isManagedCertificate?: boolean,
        // ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will remove SSL support.By default, a managed certificate is automatically created for every domain mapping. To omit SSL support or to configure SSL manually, specify no_managed_certificate on a CREATE or UPDATE request. You must be authorized to administer the AuthorizedCertificate resource to manually map it to a DomainMapping resource. Example: 12345.
        certificateId?: string,
    }
    
    interface CertificateRawData {
        // Unencrypted PEM encoded RSA private key. This field is set once on certificate creation and then encrypted. The key size must be 2048 bits or fewer. Must include the header and footer. Example: <pre> -----BEGIN RSA PRIVATE KEY----- <unencrypted_key_value> -----END RSA PRIVATE KEY----- </pre> @InputOnly
        privateKey?: string,
        // PEM encoded x.509 public key certificate. This field is set once on certificate creation. Must include the header and footer. Example: <pre> -----BEGIN CERTIFICATE----- <certificate_value> -----END CERTIFICATE----- </pre>
        publicCertificate?: string,
    }
    
    interface Operation {
        // The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.
        response?: any,
        // The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should have the format of operations/some/unique/name.
        name?: string,
        // The error result of the operation in case of failure or cancellation.
        error?: Status,
        // Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
        metadata?: any,
        // If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
        done?: boolean,
    }
    
    interface ListDomainMappingsResponse {
        // Continuation token for fetching the next page of results.
        nextPageToken?: string,
        // The domain mappings for the application.
        domainMappings?: DomainMapping[],        
    }
    
    interface OperationMetadataExperimental {
        // Name of the resource that this operation is acting on. Example: apps/myapp/customDomains/example.com.@OutputOnly
        target?: string,
        // User who requested this operation.@OutputOnly
        user?: string,
        // API method that initiated this operation. Example: google.appengine.experimental.CustomDomains.CreateCustomDomain.@OutputOnly
        method?: string,
        // Time that this operation was created.@OutputOnly
        insertTime?: string,
        // Time that this operation completed.@OutputOnly
        endTime?: string,
    }
    
    interface OperationMetadataV1Alpha {
        // Time that this operation completed.@OutputOnly
        endTime?: string,
        // Durable messages that persist on every operation poll. @OutputOnly
        warning?: string[],        
        // Time that this operation was created.@OutputOnly
        insertTime?: string,
        // Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
        target?: string,
        // User who requested this operation.@OutputOnly
        user?: string,
        // Ephemeral message that may change every time the operation is polled. @OutputOnly
        ephemeralMessage?: string,
        // API method that initiated this operation. Example: google.appengine.v1alpha.Versions.CreateVersion.@OutputOnly
        method?: string,
    }
    
    interface AuthorizedDomain {
        // Fully qualified domain name of the domain authorized for use. Example: example.com.
        id?: string,
        // Full path to the AuthorizedDomain resource in the API. Example: apps/myapp/authorizedDomains/example.com.@OutputOnly
        name?: string,
    }
    
    interface Status {
        // A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
        message?: string,
        // A list of messages that carry the error details. There will be a common set of message types for APIs to use.
        details?: any[],        
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
    }
    
    interface ListAuthorizedDomainsResponse {
        // Continuation token for fetching the next page of results.
        nextPageToken?: string,
        // The authorized domains belonging to the user.
        domains?: AuthorizedDomain[],        
    }
    
    interface Empty {
    }
    
    interface LocationMetadata {
        // App Engine Flexible Environment is available in the given location.@OutputOnly
        flexibleEnvironmentAvailable?: boolean,
        // App Engine Standard Environment is available in the given location.@OutputOnly
        standardEnvironmentAvailable?: boolean,
    }
    
    interface DomainMapping {
        // SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.
        sslSettings?: SslSettings,
        // Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly
        name?: string,
        // The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.@OutputOnly
        resourceRecords?: ResourceRecord[],        
        // Relative name of the domain serving the application. Example: example.com.
        id?: string,
    }
    
    interface OperationMetadataV1Beta {
        // Time that this operation was created.@OutputOnly
        insertTime?: string,
        // Durable messages that persist on every operation poll. @OutputOnly
        warning?: string[],        
        // User who requested this operation.@OutputOnly
        user?: string,
        // Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
        target?: string,
        // Ephemeral message that may change every time the operation is polled. @OutputOnly
        ephemeralMessage?: string,
        // API method that initiated this operation. Example: google.appengine.v1beta.Versions.CreateVersion.@OutputOnly
        method?: string,
        // Time that this operation completed.@OutputOnly
        endTime?: string,
    }
    
    interface Location {
        // Cross-service attributes for the location. For example
        // {"cloud.googleapis.com/region": "us-east1"}
        // 
        labels?: any,
        // Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"
        name?: string,
        // The canonical id for this location. For example: "us-east1".
        locationId?: string,
        // Service-specific metadata. For example the available capacity at the given location.
        metadata?: any,
    }
    
    interface AuthorizedCertificate {
        // Topmost applicable domains of this certificate. This certificate applies to these domains and their subdomains. Example: example.com.@OutputOnly
        domainNames?: string[],        
        // Relative name of the certificate. This is a unique value autogenerated on AuthorizedCertificate resource creation. Example: 12345.@OutputOnly
        id?: string,
        // The user-specified display name of the certificate. This is not guaranteed to be unique. Example: My Certificate.
        displayName?: string,
        // The SSL certificate serving the AuthorizedCertificate resource. This must be obtained independently from a certificate authority.
        certificateRawData?: CertificateRawData,
        // Only applicable if this certificate is managed by App Engine. Managed certificates are tied to the lifecycle of a DomainMapping and cannot be updated or deleted via the AuthorizedCertificates API. If this certificate is manually administered by the user, this field will be empty.@OutputOnly
        managedCertificate?: ManagedCertificate,
        // The full paths to user visible Domain Mapping resources that have this certificate mapped. Example: apps/myapp/domainMappings/example.com.This may not represent the full list of mapped domain mappings if the user does not have VIEWER permissions on all of the applications that have this certificate mapped. See domain_mappings_count for a complete count.Only returned by GET requests when specifically requested by the view=FULL option.@OutputOnly
        visibleDomainMappings?: string[],        
        // The time when this certificate expires. To update the renewal time on this certificate, upload an SSL certificate with a different expiration time using AuthorizedCertificates.UpdateAuthorizedCertificate.@OutputOnly
        expireTime?: string,
        // Full path to the AuthorizedCertificate resource in the API. Example: apps/myapp/authorizedCertificates/12345.@OutputOnly
        name?: string,
        // Aggregate count of the domain mappings with this certificate mapped. This count includes domain mappings on applications for which the user does not have VIEWER permissions.Only returned by GET requests when specifically requested by the view=FULL option.@OutputOnly
        domainMappingsCount?: number,
    }
    
    interface ResourceRecord {
        // Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'.
        name?: string,
        // Resource record type. Example: AAAA.
        type?: string,
        // Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
        rrdata?: string,
    }
    
    interface ListOperationsResponse {
        // The standard List next-page token.
        nextPageToken?: string,
        // A list of operations that matches the specified filter in the request.
        operations?: Operation[],        
    }
    
    interface OperationMetadata {
        // Timestamp that this operation was created.@OutputOnly
        insertTime?: string,
        // User who requested this operation.@OutputOnly
        user?: string,
        // Name of the resource that this operation is acting on. Example: apps/myapp/modules/default.@OutputOnly
        target?: string,
        // API method that initiated this operation. Example: google.appengine.v1beta4.Version.CreateVersion.@OutputOnly
        method?: string,
        // Timestamp that this operation completed.@OutputOnly
        endTime?: string,
        // Type of this operation. Deprecated, use method field instead. Example: "create_version".@OutputOnly
        operationType?: string,
    }
    
    interface ListAuthorizedCertificatesResponse {
        // Continuation token for fetching the next page of results.
        nextPageToken?: string,
        // The SSL certificates the user is authorized to administer.
        certificates?: AuthorizedCertificate[],        
    }
    
    interface OperationMetadataV1Beta5 {
        // API method name that initiated this operation. Example: google.appengine.v1beta5.Version.CreateVersion.@OutputOnly
        method?: string,
        // Timestamp that this operation was created.@OutputOnly
        insertTime?: string,
        // Timestamp that this operation completed.@OutputOnly
        endTime?: string,
        // Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
        target?: string,
        // User who requested this operation.@OutputOnly
        user?: string,
    }
    
    interface AuthorizedDomainsResource {
        // Lists all domains the user is authorized to administer.
        list (request: {        
            // Maximum results to return per page.
            pageSize?: number,
            // Continuation token for fetching the next page of results.
            pageToken?: string,
            // Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
            appsId: string,
        }) : gapi.client.Request<ListAuthorizedDomainsResponse>;        
        
    }
    
    
    interface OperationsResource {
        // Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        get (request: {        
            // Part of `name`. The name of the operation resource.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            operationsId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        list (request: {        
            // The standard list page size.
            pageSize?: number,
            // The standard list filter.
            filter?: string,
            // The standard list page token.
            pageToken?: string,
            // Part of `name`. The name of the operation's parent resource.
            appsId: string,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
    }
    
    
    interface LocationsResource {
        // Get information about a location.
        get (request: {        
            // Part of `name`. Resource name for the location.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            locationsId: string,
        }) : gapi.client.Request<Location>;        
        
        // Lists information about the supported locations for this service.
        list (request: {        
            // The standard list filter.
            filter?: string,
            // The standard list page token.
            pageToken?: string,
            // Part of `name`. The resource that owns the locations collection, if applicable.
            appsId: string,
            // The standard list page size.
            pageSize?: number,
        }) : gapi.client.Request<ListLocationsResponse>;        
        
    }
    
    
    interface DomainMappingsResource {
        // Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
        patch (request: {        
            // Standard field mask for the set of fields to be updated.
            updateMask?: string,
            // Part of `name`. Name of the resource to update. Example: apps/myapp/domainMappings/example.com.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            domainMappingsId: string,
            // Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated. Only applicable if ssl_settings.certificate_id is specified in the update mask.
            noManagedCertificate?: boolean,
        }) : gapi.client.Request<Operation>;        
        
        // Gets the specified domain mapping.
        get (request: {        
            // Part of `name`. See documentation of `appsId`.
            domainMappingsId: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
            appsId: string,
        }) : gapi.client.Request<DomainMapping>;        
        
        // Lists the domain mappings on an application.
        list (request: {        
            // Maximum results to return per page.
            pageSize?: number,
            // Continuation token for fetching the next page of results.
            pageToken?: string,
            // Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
            appsId: string,
        }) : gapi.client.Request<ListDomainMappingsResponse>;        
        
        // Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
        create (request: {        
            // Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
            appsId: string,
            // Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated.
            noManagedCertificate?: boolean,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
        delete (request: {        
            // Part of `name`. See documentation of `appsId`.
            domainMappingsId: string,
            // Part of `name`. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com.
            appsId: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface AuthorizedCertificatesResource {
        // Deletes the specified SSL certificate.
        delete (request: {        
            // Part of `name`. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            authorizedCertificatesId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
        patch (request: {        
            // Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.
            updateMask?: string,
            // Part of `name`. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            authorizedCertificatesId: string,
        }) : gapi.client.Request<AuthorizedCertificate>;        
        
        // Gets the specified SSL certificate.
        get (request: {        
            // Part of `name`. See documentation of `appsId`.
            authorizedCertificatesId: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
            appsId: string,
            // Controls the set of fields returned in the GET response.
            view?: string,
        }) : gapi.client.Request<AuthorizedCertificate>;        
        
        // Lists all SSL certificates the user is authorized to administer.
        list (request: {        
            // Maximum results to return per page.
            pageSize?: number,
            // Continuation token for fetching the next page of results.
            pageToken?: string,
            // Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
            appsId: string,
        }) : gapi.client.Request<ListAuthorizedCertificatesResponse>;        
        
        // Uploads the specified SSL certificate.
        create (request: {        
            // Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
            appsId: string,
        }) : gapi.client.Request<AuthorizedCertificate>;        
        
    }
    
    
    interface AppsResource {
        authorizedDomains: AuthorizedDomainsResource,
        operations: OperationsResource,
        locations: LocationsResource,
        domainMappings: DomainMappingsResource,
        authorizedCertificates: AuthorizedCertificatesResource,
    }
    
}

declare module gapi.client.appengine {
    var apps: gapi.client.appengine.AppsResource; 
    
}
