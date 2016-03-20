// Type definitions for Google Google Cloud Pub/Sub API v1
// Project: https://cloud.google.com/pubsub/docs
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.pubsub {
    
    interface SetIamPolicyRequest {
        // REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
        policy?: Policy,
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
    
    interface TestIamPermissionsRequest {
        // The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see IAM Overview.
        permissions?: string[],        
    }
    
    interface TestIamPermissionsResponse {
        // A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
        permissions?: string[],        
    }
    
    interface Topic {
        // The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
        name?: string,
    }
    
    interface PublishRequest {
        // The messages to publish.
        messages?: PubsubMessage[],        
    }
    
    interface PubsubMessage {
        // The message payload. For JSON requests, the value of this field must be base64-encoded.
        data?: string,
        // Optional attributes for this message.
        attributes?: any,
        // ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a `PubsubMessage` via a `Pull` call or a push delivery. It must not be populated by the publisher in a `Publish` call.
        messageId?: string,
        // The time at which the message was published, populated by the server when it receives the `Publish` call. It must not be populated by the publisher in a `Publish` call.
        publishTime?: string,
    }
    
    interface PublishResponse {
        // The server-assigned ID of each published message, in the same order as the messages in the request. IDs are guaranteed to be unique within the topic.
        messageIds?: string[],        
    }
    
    interface ListTopicsResponse {
        // The resulting topics.
        topics?: Topic[],        
        // If not empty, indicates that there may be more topics that match the request; this value should be passed in a new `ListTopicsRequest`.
        nextPageToken?: string,
    }
    
    interface ListTopicSubscriptionsResponse {
        // The names of the subscriptions that match the request.
        subscriptions?: string[],        
        // If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListTopicSubscriptionsRequest` to get more subscriptions.
        nextPageToken?: string,
    }
    
    interface Empty {
    }
    
    interface Subscription {
        // The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
        name?: string,
        // The name of the topic from which this subscription is receiving messages. The value of this field will be `_deleted-topic_` if the topic has been deleted.
        topic?: string,
        // If push delivery is used with this subscription, this field is used to configure it. An empty `pushConfig` signifies that the subscriber will pull and ack messages using API methods.
        pushConfig?: PushConfig,
        // This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message. After message delivery but before the ack deadline expires and before the message is acknowledged, it is an outstanding message and will not be delivered again during that time (on a best-effort basis). For pull subscriptions, this value is used as the initial value for the ack deadline. To override this value for a given message, call `ModifyAckDeadline` with the corresponding `ack_id` if using pull. For push delivery, this value is also used to set the request timeout for the call to the push endpoint. If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver the message. If this parameter is not set, the default value of 10 seconds is used.
        ackDeadlineSeconds?: number,
    }
    
    interface PushConfig {
        // A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push".
        pushEndpoint?: string,
        // Endpoint configuration attributes. Every endpoint has a set of API supported attributes that can be used to control different aspects of the message delivery. The currently supported attribute is `x-goog-version`, which you can use to change the format of the push message. This attribute indicates the version of the data expected by the endpoint. This controls the shape of the envelope (i.e. its fields and metadata). The endpoint version is based on the version of the Pub/Sub API. If not present during the `CreateSubscription` call, it will default to the version of the API used to make such call. If not present during a `ModifyPushConfig` call, its value will not be changed. `GetSubscription` calls will always return a valid version, even if the subscription was created without this attribute. The possible values for this attribute are: * `v1beta1`: uses the push format defined in the v1beta1 Pub/Sub API. * `v1` or `v1beta2`: uses the push format defined in the v1 Pub/Sub API.
        attributes?: any,
    }
    
    interface ListSubscriptionsResponse {
        // The subscriptions that match the request.
        subscriptions?: Subscription[],        
        // If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListSubscriptionsRequest` to get more subscriptions.
        nextPageToken?: string,
    }
    
    interface ModifyAckDeadlineRequest {
        // List of acknowledgment IDs.
        ackIds?: string[],        
        // The new ack deadline with respect to the time this request was sent to the Pub/Sub system. Must be >= 0. For example, if the value is 10, the new ack deadline will expire 10 seconds after the `ModifyAckDeadline` call was made. Specifying zero may immediately make the message available for another pull request.
        ackDeadlineSeconds?: number,
    }
    
    interface AcknowledgeRequest {
        // The acknowledgment ID for the messages being acknowledged that was returned by the Pub/Sub system in the `Pull` response. Must not be empty.
        ackIds?: string[],        
    }
    
    interface PullRequest {
        // If this is specified as true the system will respond immediately even if it is not able to return a message in the `Pull` response. Otherwise the system is allowed to wait until at least one message is available rather than returning no messages. The client may cancel the request if it does not wish to wait any longer for the response.
        returnImmediately?: boolean,
        // The maximum number of messages returned for this request. The Pub/Sub system may return fewer than the number specified.
        maxMessages?: number,
    }
    
    interface PullResponse {
        // Received Pub/Sub messages. The Pub/Sub system will return zero messages if there are no more available in the backlog. The Pub/Sub system may return fewer than the `maxMessages` requested even if there are more messages available in the backlog.
        receivedMessages?: ReceivedMessage[],        
    }
    
    interface ReceivedMessage {
        // This ID can be used to acknowledge the received message.
        ackId?: string,
        // The message.
        message?: PubsubMessage,
    }
    
    interface ModifyPushConfigRequest {
        // The push configuration for future deliveries. An empty `pushConfig` indicates that the Pub/Sub system should stop pushing messages from the given subscription and allow messages to be pulled and acknowledged - effectively pausing the subscription if `Pull` is not called.
        pushConfig?: PushConfig,
    }
    
    interface SubscriptionsResource {
        // Lists the name of the subscriptions for this topic.
        list (request: {        
            // The name of the topic that subscriptions are attached to.
            topic: string,
            // Maximum number of subscription names to return.
            pageSize?: number,
            // The value returned by the last `ListTopicSubscriptionsResponse`; indicates that this is a continuation of a prior `ListTopicSubscriptions` call, and that the system should return the next page of data.
            pageToken?: string,
        }) : gapi.client.Request<ListTopicSubscriptionsResponse>;        
        
    }
    
    
    interface TopicsResource {
        // Sets the access control policy on the specified resource. Replaces any existing policy.
        setIamPolicy (request: {        
            // REQUIRED: The resource for which the policy is being specified. `resource` is usually specified as a path, such as `projects/*project*/zones/*zone*/disks/*disk*`. The format for the path specified in this value is resource specific and is specified in the `setIamPolicy` documentation.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Gets the access control policy for a `resource`. Returns an empty policy if the resource exists and does not have a policy set.
        getIamPolicy (request: {        
            // REQUIRED: The resource for which the policy is being requested. `resource` is usually specified as a path, such as `projects/*project*/zones/*zone*/disks/*disk*`. The format for the path specified in this value is resource specific and is specified in the `getIamPolicy` documentation.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // REQUIRED: The resource for which the policy detail is being requested. `resource` is usually specified as a path, such as `projects/*project*/zones/*zone*/disks/*disk*`. The format for the path specified in this value is resource specific and is specified in the `testIamPermissions` documentation.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
        // Creates the given topic with the given name.
        create (request: {        
            // The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
            name: string,
        }) : gapi.client.Request<Topic>;        
        
        // Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute.
        publish (request: {        
            // The messages in the request will be published on this topic.
            topic: string,
        }) : gapi.client.Request<PublishResponse>;        
        
        // Gets the configuration of a topic.
        get (request: {        
            // The name of the topic to get.
            topic: string,
        }) : gapi.client.Request<Topic>;        
        
        // Lists matching topics.
        list (request: {        
            // The name of the cloud project that topics belong to.
            project: string,
            // Maximum number of topics to return.
            pageSize?: number,
            // The value returned by the last `ListTopicsResponse`; indicates that this is a continuation of a prior `ListTopics` call, and that the system should return the next page of data.
            pageToken?: string,
        }) : gapi.client.Request<ListTopicsResponse>;        
        
        // Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.
        delete (request: {        
            // Name of the topic to delete.
            topic: string,
        }) : gapi.client.Request<Empty>;        
        
        subscriptions: SubscriptionsResource,
    }
    
    
    interface SubscriptionsResource {
        // Sets the access control policy on the specified resource. Replaces any existing policy.
        setIamPolicy (request: {        
            // REQUIRED: The resource for which the policy is being specified. `resource` is usually specified as a path, such as `projects/*project*/zones/*zone*/disks/*disk*`. The format for the path specified in this value is resource specific and is specified in the `setIamPolicy` documentation.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Gets the access control policy for a `resource`. Returns an empty policy if the resource exists and does not have a policy set.
        getIamPolicy (request: {        
            // REQUIRED: The resource for which the policy is being requested. `resource` is usually specified as a path, such as `projects/*project*/zones/*zone*/disks/*disk*`. The format for the path specified in this value is resource specific and is specified in the `getIamPolicy` documentation.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // REQUIRED: The resource for which the policy detail is being requested. `resource` is usually specified as a path, such as `projects/*project*/zones/*zone*/disks/*disk*`. The format for the path specified in this value is resource specific and is specified in the `testIamPermissions` documentation.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
        // Creates a subscription to a given topic. If the subscription already exists, returns `ALREADY_EXISTS`. If the corresponding topic doesn't exist, returns `NOT_FOUND`. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.
        create (request: {        
            // The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
            name: string,
        }) : gapi.client.Request<Subscription>;        
        
        // Gets the configuration details of a subscription.
        get (request: {        
            // The name of the subscription to get.
            subscription: string,
        }) : gapi.client.Request<Subscription>;        
        
        // Lists matching subscriptions.
        list (request: {        
            // The name of the cloud project that subscriptions belong to.
            project: string,
            // Maximum number of subscriptions to return.
            pageSize?: number,
            // The value returned by the last `ListSubscriptionsResponse`; indicates that this is a continuation of a prior `ListSubscriptions` call, and that the system should return the next page of data.
            pageToken?: string,
        }) : gapi.client.Request<ListSubscriptionsResponse>;        
        
        // Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription, or its topic unless the same topic is specified.
        delete (request: {        
            // The subscription to delete.
            subscription: string,
        }) : gapi.client.Request<Empty>;        
        
        // Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted.
        modifyAckDeadline (request: {        
            // The name of the subscription.
            subscription: string,
        }) : gapi.client.Request<Empty>;        
        
        // Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.
        acknowledge (request: {        
            // The subscription whose message is being acknowledged.
            subscription: string,
        }) : gapi.client.Request<Empty>;        
        
        // Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The server may return `UNAVAILABLE` if there are too many concurrent pull requests pending for the given subscription.
        pull (request: {        
            // The subscription from which messages should be pulled.
            subscription: string,
        }) : gapi.client.Request<PullResponse>;        
        
        // Modifies the `PushConfig` for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.
        modifyPushConfig (request: {        
            // The name of the subscription.
            subscription: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface ProjectsResource {
        topics: TopicsResource,
        subscriptions: SubscriptionsResource,
    }
    
}

declare module gapi.client.pubsub {
    var projects: gapi.client.pubsub.ProjectsResource; 
    
}
