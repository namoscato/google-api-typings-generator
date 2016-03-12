// Type definitions for Google Google Cloud Resource Manager API v1beta1
// Project: https://cloud.google.com/resource-manager
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.cloudresourcemanager {
    
    interface Project {
        // The number uniquely identifying the project. Example: 415104041262 Read-only.
        projectNumber?: string,
        // The unique, user-assigned ID of the Project. It must be 6 to 30 lowercase letters, digits, or hyphens. It must start with a letter. Trailing hyphens are prohibited. Example: tokyo-rain-123 Read-only after creation.
        projectId?: string,
        // The Project lifecycle state. Read-only.
        lifecycleState?: string,
        // The user-assigned name of the Project. It must be 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: My Project Read-write.
        name?: string,
        // Creation time. Read-only.
        createTime?: string,
        // The labels associated with this Project. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: \[a-z\](\[-a-z0-9\]*\[a-z0-9\])?. Label values must be between 0 and 63 characters long and must conform to the regular expression (\[a-z\](\[-a-z0-9\]*\[a-z0-9\])?)?. No more than 256 labels can be associated with a given resource. Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed. Example: "environment" : "dev" Read-write.
        labels?: any,
        // An optional reference to a parent Resource. The only supported parent type is "organization". Once set, the parent cannot be modified. Read-write.
        parent?: ResourceId,
    }
    
    interface ResourceId {
        // Required field representing the resource type this id is for. At present, the only valid type is "organization".
        type?: string,
        // Required field for the type-specific id. This should correspond to the id used in the type-specific API's.
        id?: string,
    }
    
    interface ListProjectsResponse {
        // The list of Projects that matched the list filter. This list can be paginated.
        projects?: Project[],        
        // Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime.
        nextPageToken?: string,
    }
    
    interface Empty {
    }
    
    interface UndeleteProjectRequest {
    }
    
    interface GetIamPolicyRequest {
    }
    
    interface Policy {
        // Version of the `Policy`. The default version is 0.
        version?: number,
        // Associates a list of `members` to a `role`. Multiple `bindings` must not be specified for the same `role`. `bindings` with no members will result in an error.
        bindings?: Binding[],        
        // `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
        etag?: string,
    }
    
    interface Binding {
        // Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required
        role?: string,
        // Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@gmail.com` or `joe@example.com`. * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: A Google Apps domain name that represents all the users of that domain. For example, `google.com` or `example.com`.
        members?: string[],        
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
    
    interface ListOrganizationsResponse {
        // The list of Organizations that matched the list query, possibly paginated.
        organizations?: Organization[],        
        // A pagination token to be used to retrieve the next page of results. If the result is too large to fit within the page size specified in the request, this field will be set with a token that can be used to fetch the next page of results. If this field is empty, it indicates that this response contains the last page of results.
        nextPageToken?: string,
    }
    
    interface Organization {
        // An immutable id for the Organization that is assigned on creation. This should be omitted when creating a new Organization. This field is read-only.
        organizationId?: string,
        // A friendly string to be used to refer to the Organization in the UI. This field is required.
        displayName?: string,
        // The owner of this Organization. The owner should be specified on creation. Once set, it cannot be changed. This field is required.
        owner?: OrganizationOwner,
        // Timestamp when the Organization was created. Assigned by the server. @OutputOnly
        creationTime?: string,
    }
    
    interface OrganizationOwner {
        // The Google for Work customer id used in the Directory API.
        directoryCustomerId?: string,
    }
    
    interface ProjectsResource {
        // Creates a Project resource. Initially, the Project resource is owned by its creator exclusively. The creator can later grant permission to others to read or update the Project. Several APIs are activated automatically for the Project, including Google Cloud Storage.
        create (request: {        
        }) : gapi.client.Request<Project>;        
        
        // Lists Projects that are visible to the user and satisfy the specified filter. This method returns Projects in an unspecified order. New Projects do not necessarily appear at the end of the list.
        list (request: {        
            // A pagination token returned from a previous call to ListProjects that indicates from where listing should continue. Optional.
            pageToken?: string,
            // The maximum number of Projects to return in the response. The server can return fewer Projects than requested. If unspecified, server picks an appropriate default. Optional.
            pageSize?: number,
            // An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: + `name` + `id` + labels.key where *key* is the name of a label Some examples of using labels as filters: |Filter|Description| |------|-----------| |name:*|The project has a name.| |name:Howl|The project's name is `Howl` or `howl`.| |name:HOWL|Equivalent to above.| |NAME:howl|Equivalent to above.| |labels.color:*|The project has the label `color`.| |labels.color:red|The project's label `color` has the value `red`.| |labels.color:red label.size:big|The project's label `color` has the value `red` and its label `size` has the value `big`. Optional.
            filter?: string,
        }) : gapi.client.Request<ListProjectsResponse>;        
        
        // Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
        get (request: {        
            // The Project ID (for example, `my-project-123`). Required.
            projectId: string,
        }) : gapi.client.Request<Project>;        
        
        // Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.
        update (request: {        
            // The project ID (for example, `my-project-123`). Required.
            projectId: string,
        }) : gapi.client.Request<Project>;        
        
        // Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if the following criteria are met: + The Project does not have a billing account associated with it. + The Project has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the lifecycle state changes to DELETE_IN_PROGRESS. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have modify permissions for this Project.
        delete (request: {        
            // The Project ID (for example, `foo-bar-123`). Required.
            projectId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, as indicated by a lifecycle state of DELETE_IN_PROGRESS, the Project cannot be restored. The caller must have modify permissions for this Project.
        undelete (request: {        
            // The project ID (for example, `foo-bar-123`). Required.
            projectId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist.
        getIamPolicy (request: {        
            // REQUIRED: The resource for which the policy is being requested. `resource` is usually specified as a path, such as `projects/*project*/zones/*zone*/disks/*disk*`. The format for the path specified in this value is resource specific and is specified in the `getIamPolicy` documentation.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Sets the IAM access control policy for the specified Project. Replaces any existing policy. The following constraints apply when using `setIamPolicy()`: + Project currently supports only `user:{emailid}` and `serviceAccount:{emailid}` members in a `Binding` of a `Policy`. + To be added as an `owner`, a user must be invited via Cloud Platform console and must accept the invitation. + Members cannot be added to more than one role in the same policy. + There must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to to remove the last ToS-accepted owner from the policy will fail. + Calling this method requires enabling the App Engine Admin API. Note: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles.
        setIamPolicy (request: {        
            // REQUIRED: The resource for which the policy is being specified. `resource` is usually specified as a path, such as `projects/*project*/zones/*zone*/disks/*disk*`. The format for the path specified in this value is resource specific and is specified in the `setIamPolicy` documentation.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Returns permissions that a caller has on the specified Project.
        testIamPermissions (request: {        
            // REQUIRED: The resource for which the policy detail is being requested. `resource` is usually specified as a path, such as `projects/*project*/zones/*zone*/disks/*disk*`. The format for the path specified in this value is resource specific and is specified in the `testIamPermissions` documentation.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
    }
    
    
    interface OrganizationsResource {
        // Lists Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the list.
        list (request: {        
            // The maximum number of Organizations to return in the response. This field is optional.
            pageSize?: number,
            // A pagination token returned from a previous call to `ListOrganizations` that indicates from where listing should continue. This field is optional.
            pageToken?: string,
            // An optional query string used to filter the Organizations to return in the response. Filter rules are case-insensitive. Organizations may be filtered by `owner.directoryCustomerId` or by `domain`, where the domain is a Google for Work domain, for example: |Filter|Description| |------|-----------| |owner.directorycustomerid:123456789|Organizations with `owner.directory_customer_id` equal to `123456789`.| |domain:google.com|Organizations corresponding to the domain `google.com`.| This field is optional.
            filter?: string,
        }) : gapi.client.Request<ListOrganizationsResponse>;        
        
        // Fetches an Organization resource identified by the specified `organization_id`.
        get (request: {        
            // The id of the Organization resource to fetch.
            organizationId: string,
        }) : gapi.client.Request<Organization>;        
        
        // Updates an Organization resource identified by the specified `organization_id`.
        update (request: {        
            // An immutable id for the Organization that is assigned on creation. This should be omitted when creating a new Organization. This field is read-only.
            organizationId: string,
        }) : gapi.client.Request<Organization>;        
        
        // Sets the access control policy on an Organization resource. Replaces any existing policy.
        setIamPolicy (request: {        
            // REQUIRED: The resource for which the policy is being specified. `resource` is usually specified as a path, such as `projects/*project*/zones/*zone*/disks/*disk*`. The format for the path specified in this value is resource specific and is specified in the `setIamPolicy` documentation.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists.
        getIamPolicy (request: {        
            // REQUIRED: The resource for which the policy is being requested. `resource` is usually specified as a path, such as `projects/*project*/zones/*zone*/disks/*disk*`. The format for the path specified in this value is resource specific and is specified in the `getIamPolicy` documentation.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Returns permissions that a caller has on the specified Organization.
        testIamPermissions (request: {        
            // REQUIRED: The resource for which the policy detail is being requested. `resource` is usually specified as a path, such as `projects/*project*/zones/*zone*/disks/*disk*`. The format for the path specified in this value is resource specific and is specified in the `testIamPermissions` documentation.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
    }
    
}

declare module gapi.client.cloudresourcemanager {
    var projects: gapi.client.cloudresourcemanager.ProjectsResource; 
    
    var organizations: gapi.client.cloudresourcemanager.OrganizationsResource; 
    
}
