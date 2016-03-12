// Type definitions for Google Google Identity and Access Management API v1
// Project: https://cloud.google.com/iam/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.iam.v1 {
    
    interface ListServiceAccountsResponse {
        // The list of matching service accounts.
        accounts?: ServiceAccount[],        
        // To retrieve the next page of results, set [ListServiceAccountsRequest.page_token] to this value.
        nextPageToken?: string,
    }
    
    interface ServiceAccount {
        // The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". In requests using '-' as a wildcard for the project, will infer the project from the account and the account value can be the email address or the unique_id of the service account. In responses the resource name will always be in the format "projects/{project}/serviceAccounts/{email}".
        name?: string,
        // @OutputOnly The id of the project that owns the service account.
        projectId?: string,
        // @OutputOnly unique and stable id of the service account.
        uniqueId?: string,
        // @OutputOnly Email address of the service account.
        email?: string,
        // Optional. A user-specified description of the service account. Must be fewer than 100 UTF-8 bytes.
        displayName?: string,
        // Used to perform a consistent read-modify-write.
        etag?: string,
        // @OutputOnly. The OAuth2 client id for the service account. This is used in conjunction with the OAuth2 clientconfig API to make three legged OAuth2 (3LO) flows to access the data of Google users.
        oauth2ClientId?: string,
    }
    
    interface CreateServiceAccountRequest {
        // Required. The account id that is used to generate the service account email address and a stable unique id. It is unique within a project, must be 1-63 characters long, and match the regular expression [a-z]([-a-z0-9]*[a-z0-9]) to comply with RFC1035.
        accountId?: string,
        // The ServiceAccount resource to create. Currently, only the following values are user assignable: display_name .
        serviceAccount?: ServiceAccount,
    }
    
    interface Empty {
    }
    
    interface ListServiceAccountKeysResponse {
        // The public keys for the service account.
        keys?: ServiceAccountKey[],        
    }
    
    interface ServiceAccountKey {
        // The resource name of the service account key in the format "projects/{project}/serviceAccounts/{email}/keys/{key}".
        name?: string,
        // The type of the private key.
        privateKeyType?: string,
        // The key data.
        privateKeyData?: string,
        // The key can be used after this timestamp.
        validAfterTime?: string,
        // The key can be used before this timestamp.
        validBeforeTime?: string,
    }
    
    interface CreateServiceAccountKeyRequest {
        // The type of the key requested. GOOGLE_CREDENTIALS is the default key type.
        privateKeyType?: string,
    }
    
    interface SignBlobRequest {
        // The bytes to sign
        bytesToSign?: string,
    }
    
    interface SignBlobResponse {
        // The id of the key used to sign the blob.
        keyId?: string,
        // The signed blob.
        signature?: string,
    }
    
    interface Policy {
        // Version of the `Policy`. The default version is 0.
        version?: number,
        // Associates a list of `members` to a `role`. Multiple `bindings` must not be specified for the same `role`. `bindings` with no members will result in an error.
        bindings?: Binding[],        
        // 
        rules?: Rule[],        
        // `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
        etag?: string,
    }
    
    interface Binding {
        // Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required
        role?: string,
        // Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@gmail.com` or `joe@example.com`. * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: A Google Apps domain name that represents all the users of that domain. For example, `google.com` or `example.com`.
        members?: string[],        
    }
    
    interface Rule {
        // Human-readable description of the rule.
        description?: string,
        // A permission is a string of form '..' (e.g., 'storage.buckets.list'). A value of '*' matches all permissions, and a verb part of '*' (e.g., 'storage.buckets.*') matches all verbs.
        permissions?: string[],        
        // Required
        action?: string,
        // The rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in this set of entries.
        in?: string[],        
        // The rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is not in this set of entries. The format for in and not_in entries is the same as for members in a Binding (see google/iam/v1/policy.proto).
        notIn?: string[],        
        // Additional restrictions that must be met
        conditions?: Condition[],        
        // The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action.
        logConfig?: LogConfig[],        
    }
    
    interface Condition {
        // Trusted attributes supplied by the IAM system.
        iam?: string,
        // Trusted attributes supplied by any service that owns resources and uses the IAM system for access control.
        sys?: string,
        // Trusted attributes discharged by the service.
        svc?: string,
        // An operator to apply the subject with.
        op?: string,
        // The object of the condition. Exactly one of these must be set.
        value?: string,
        // The objects of the condition. This is mutually exclusive with 'value'.
        values?: string[],        
    }
    
    interface LogConfig {
        // Counter options.
        counter?: CounterOptions,
        // Data access options.
        dataAccess?: DataAccessOptions,
        // Cloud audit options.
        cloudAudit?: CloudAuditOptions,
    }
    
    interface CounterOptions {
        // The metric to update.
        metric?: string,
        // The field value to attribute.
        field?: string,
    }
    
    interface DataAccessOptions {
    }
    
    interface CloudAuditOptions {
    }
    
    interface SetIamPolicyRequest {
        // REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
        policy?: Policy,
    }
    
    interface TestIamPermissionsRequest {
        // The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see IAM Overview.
        permissions?: string[],        
    }
    
    interface TestIamPermissionsResponse {
        // A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
        permissions?: string[],        
    }
    
    interface KeysResource {
        // Lists service account keys
        list (request: {        
            // The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". Using '-' as a wildcard for the project, will infer the project from the account. The account value can be the email address or the unique_id of the service account.
            name: string,
            // The type of keys the user wants to list. If empty, all key types are included in the response. Duplicate key types are not allowed.
            keyTypes?: string,
        }) : gapi.client.Request<ListServiceAccountKeysResponse>;        
        
        // Gets the ServiceAccountKey by key id.
        get (request: {        
            // The resource name of the service account key in the format "projects/{project}/serviceAccounts/{account}/keys/{key}". Using '-' as a wildcard for the project will infer the project from the account. The account value can be the email address or the unique_id of the service account.
            name: string,
        }) : gapi.client.Request<ServiceAccountKey>;        
        
        // Creates a service account key and returns it.
        create (request: {        
            // The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". Using '-' as a wildcard for the project, will infer the project from the account. The account value can be the email address or the unique_id of the service account.
            name: string,
        }) : gapi.client.Request<ServiceAccountKey>;        
        
        // Deletes a service account key.
        delete (request: {        
            // The resource name of the service account key in the format "projects/{project}/serviceAccounts/{account}/keys/{key}". Using '-' as a wildcard for the project will infer the project from the account. The account value can be the email address or the unique_id of the service account.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface ServiceAccountsResource {
        // Lists service accounts for a project.
        list (request: {        
            // Required. The resource name of the project associated with the service accounts, such as "projects/123"
            name: string,
            // Optional limit on the number of service accounts to include in the response. Further accounts can subsequently be obtained by including the [ListServiceAccountsResponse.next_page_token] in a subsequent request.
            pageSize?: number,
            // Optional pagination token returned in an earlier [ListServiceAccountsResponse.next_page_token].
            pageToken?: string,
        }) : gapi.client.Request<ListServiceAccountsResponse>;        
        
        // Gets a ServiceAccount
        get (request: {        
            // The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". Using '-' as a wildcard for the project, will infer the project from the account. The account value can be the email address or the unique_id of the service account.
            name: string,
        }) : gapi.client.Request<ServiceAccount>;        
        
        // Creates a service account and returns it.
        create (request: {        
            // Required. The resource name of the project associated with the service accounts, such as "projects/123"
            name: string,
        }) : gapi.client.Request<ServiceAccount>;        
        
        // Updates a service account. Currently, only the following fields are updatable: 'display_name' . The 'etag' is mandatory.
        update (request: {        
            // The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". In requests using '-' as a wildcard for the project, will infer the project from the account and the account value can be the email address or the unique_id of the service account. In responses the resource name will always be in the format "projects/{project}/serviceAccounts/{email}".
            name: string,
        }) : gapi.client.Request<ServiceAccount>;        
        
        // Deletes a service acount.
        delete (request: {        
            // The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". Using '-' as a wildcard for the project, will infer the project from the account. The account value can be the email address or the unique_id of the service account.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Signs a blob using a service account.
        signBlob (request: {        
            // The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". Using '-' as a wildcard for the project, will infer the project from the account. The account value can be the email address or the unique_id of the service account.
            name: string,
        }) : gapi.client.Request<SignBlobResponse>;        
        
        // Returns the IAM access control policy for specified IAM resource.
        getIamPolicy (request: {        
            // REQUIRED: The resource for which the policy is being requested. `resource` is usually specified as a path, such as `projects/*project*/zones/*zone*/disks/*disk*`. The format for the path specified in this value is resource specific and is specified in the `getIamPolicy` documentation.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Sets the IAM access control policy for the specified IAM resource.
        setIamPolicy (request: {        
            // REQUIRED: The resource for which the policy is being specified. `resource` is usually specified as a path, such as `projects/*project*/zones/*zone*/disks/*disk*`. The format for the path specified in this value is resource specific and is specified in the `setIamPolicy` documentation.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Tests the specified permissions against the IAM access control policy for the specified IAM resource.
        testIamPermissions (request: {        
            // REQUIRED: The resource for which the policy detail is being requested. `resource` is usually specified as a path, such as `projects/*project*/zones/*zone*/disks/*disk*`. The format for the path specified in this value is resource specific and is specified in the `testIamPermissions` documentation.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
        keys: KeysResource,
    }
    
    
    interface ProjectsResource {
        serviceAccounts: ServiceAccountsResource,
    }
    
}

declare module gapi.client.iam {
    var projects: gapi.client.iam.v1.ProjectsResource; 
    
}
