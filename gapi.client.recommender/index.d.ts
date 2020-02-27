// Type definitions for non-npm package Recommender API v1beta1 1.0
// Project: https://cloud.google.com/recommender/docs/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://recommender.googleapis.com/$discovery/rest?version=v1beta1
// Revision: 20200224

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Recommender API v1beta1 */
    function load(name: "recommender", version: "v1beta1"): PromiseLike<void>;
    function load(name: "recommender", version: "v1beta1", callback: () => any): void;

    namespace recommender {
        interface GoogleCloudRecommenderV1beta1CostProjection {
            /**
             * An approximate projection on amount saved or amount incurred. Negative cost
             * units indicate cost savings and positive cost units indicate increase.
             * See google.type.Money documentation for positive/negative units.
             */
            cost?: GoogleTypeMoney;
            /** Duration for which this cost applies. */
            duration?: string;
        }
        interface GoogleCloudRecommenderV1beta1Impact {
            /** Category that is being targeted. */
            category?: string;
            /** Use with CategoryType.COST */
            costProjection?: GoogleCloudRecommenderV1beta1CostProjection;
        }
        interface GoogleCloudRecommenderV1beta1ListRecommendationsResponse {
            /**
             * A token that can be used to request the next page of results. This field is
             * empty if there are no additional results.
             */
            nextPageToken?: string;
            /** The set of recommendations for the `parent` resource. */
            recommendations?: GoogleCloudRecommenderV1beta1Recommendation[];
        }
        interface GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest {
            /** Required. Fingerprint of the Recommendation. Provides optimistic locking. */
            etag?: string;
            /**
             * State properties to include with this state. Overwrites any existing
             * `state_metadata`.
             * Keys must match the regex /^a-z0-9{0,62}$/.
             * Values must match the regex /^[a-zA-Z0-9_./-]{0,255}$/.
             */
            stateMetadata?: Record<string, string>;
        }
        interface GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest {
            /** Fingerprint of the Recommendation. Provides optimistic locking. */
            etag?: string;
            /**
             * State properties to include with this state. Overwrites any existing
             * `state_metadata`.
             * Keys must match the regex /^a-z0-9{0,62}$/.
             * Values must match the regex /^[a-zA-Z0-9_./-]{0,255}$/.
             */
            stateMetadata?: Record<string, string>;
        }
        interface GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest {
            /** Required. Fingerprint of the Recommendation. Provides optimistic locking. */
            etag?: string;
            /**
             * State properties to include with this state. Overwrites any existing
             * `state_metadata`.
             * Keys must match the regex /^a-z0-9{0,62}$/.
             * Values must match the regex /^[a-zA-Z0-9_./-]{0,255}$/.
             */
            stateMetadata?: Record<string, string>;
        }
        interface GoogleCloudRecommenderV1beta1Operation {
            /**
             * Type of this operation. Contains one of 'and', 'remove', 'replace', 'move',
             * 'copy', 'test' and 'custom' operations. This field is case-insensitive and
             * always populated.
             */
            action?: string;
            /**
             * Path to the target field being operated on. If the operation is at the
             * resource level, then path should be "/". This field is always populated.
             */
            path?: string;
            /**
             * Set of filters to apply if `path` refers to array elements or nested array
             * elements in order to narrow down to a single unique element that is being
             * tested/modified.
             * This is intended to be an exact match per filter. To perform advanced
             * matching, use path_value_matchers.
             *
             * &#42; Example: {
             * "/versions/&#42;/name" : "it-123"
             * "/versions/&#42;/targetSize/percent": 20
             * }
             * &#42; Example: {
             * "/bindings/&#42;/role": "roles/admin"
             * "/bindings/&#42;/condition" : null
             * }
             * &#42; Example: {
             * "/bindings/&#42;/role": "roles/admin"
             * "/bindings/&#42;/members/&#42;" : ["x@google.com", "y@google.com"]
             * }
             * When both path_filters and path_value_matchers are set, an implicit AND
             * must be performed.
             */
            pathFilters?: Record<string, any>;
            /**
             * Similar to path_filters, this contains set of filters to apply if `path`
             * field referes to array elements. This is meant to support value matching
             * beyond exact match. To perform exact match, use path_filters.
             * When both path_filters and path_value_matchers are set, an implicit AND
             * must be performed.
             */
            pathValueMatchers?: Record<string, GoogleCloudRecommenderV1beta1ValueMatcher>;
            /**
             * Contains the fully qualified resource name. This field is always populated.
             * ex: //cloudresourcemanager.googleapis.com/projects/foo.
             */
            resource?: string;
            /**
             * Type of GCP resource being modified/tested. This field is always populated.
             * Example: cloudresourcemanager.googleapis.com/Project,
             * compute.googleapis.com/Instance
             */
            resourceType?: string;
            /**
             * Can be set with action 'copy' or 'move' to indicate the source field within
             * resource or source_resource, ignored if provided for other operation types.
             */
            sourcePath?: string;
            /**
             * Can be set with action 'copy' to copy resource configuration across
             * different resources of the same type. Example: A resource clone can be
             * done via action = 'copy', path = "/", from = "/",
             * source_resource = <source> and resource_name = <target>.
             * This field is empty for all other values of `action`.
             */
            sourceResource?: string;
            /**
             * Value for the `path` field. Will be set for actions:'add'/'replace'.
             * Maybe set for action: 'test'. Either this or `value_matcher` will be set
             * for 'test' operation. An exact match must be performed.
             */
            value?: any;
            /**
             * Can be set for action 'test' for advanced matching for the value of
             * 'path' field. Either this or `value` will be set for 'test' operation.
             */
            valueMatcher?: GoogleCloudRecommenderV1beta1ValueMatcher;
        }
        interface GoogleCloudRecommenderV1beta1OperationGroup {
            /**
             * List of operations across one or more resources that belong to this group.
             * Loosely based on RFC6902 and should be performed in the order they appear.
             */
            operations?: GoogleCloudRecommenderV1beta1Operation[];
        }
        interface GoogleCloudRecommenderV1beta1Recommendation {
            /**
             * Optional set of additional impact that this recommendation may have when
             * trying to optimize for the primary category. These may be positive
             * or negative.
             */
            additionalImpact?: GoogleCloudRecommenderV1beta1Impact[];
            /** Content of the recommendation describing recommended changes to resources. */
            content?: GoogleCloudRecommenderV1beta1RecommendationContent;
            /**
             * Free-form human readable summary in English. The maximum length is 500
             * characters.
             */
            description?: string;
            /**
             * Fingerprint of the Recommendation. Provides optimistic locking when
             * updating states.
             */
            etag?: string;
            /**
             * Last time this recommendation was refreshed by the system that created it
             * in the first place.
             */
            lastRefreshTime?: string;
            /** Name of recommendation. */
            name?: string;
            /**
             * The primary impact that this recommendation can have while trying to
             * optimize for one category.
             */
            primaryImpact?: GoogleCloudRecommenderV1beta1Impact;
            /**
             * Contains an identifier for a subtype of recommendations produced for the
             * same recommender. Subtype is a function of content and impact, meaning a
             * new subtype might be added when significant changes to `content` or
             * `primary_impact.category` are introduced. See the Recommenders section
             * to see a list of subtypes for a given Recommender.
             *
             * Examples:
             * For recommender = "google.iam.policy.Recommender",
             * recommender_subtype can be one of "REMOVE_ROLE"/"REPLACE_ROLE"
             */
            recommenderSubtype?: string;
            /** Information for state. Contains state and metadata. */
            stateInfo?: GoogleCloudRecommenderV1beta1RecommendationStateInfo;
        }
        interface GoogleCloudRecommenderV1beta1RecommendationContent {
            /**
             * Operations to one or more Google Cloud resources grouped in such a way
             * that, all operations within one group are expected to be performed
             * atomically and in an order.
             */
            operationGroups?: GoogleCloudRecommenderV1beta1OperationGroup[];
        }
        interface GoogleCloudRecommenderV1beta1RecommendationStateInfo {
            /** The state of the recommendation, Eg ACTIVE, SUCCEEDED, FAILED. */
            state?: string;
            /** A map of metadata for the state, provided by user or automations systems. */
            stateMetadata?: Record<string, string>;
        }
        interface GoogleCloudRecommenderV1beta1ValueMatcher {
            /**
             * To be used for full regex matching. The regular expression is using the
             * Google RE2 syntax (https://github.com/google/re2/wiki/Syntax), so to be
             * used with RE2::FullMatch
             */
            matchesPattern?: string;
        }
        interface GoogleTypeMoney {
            /** The 3-letter currency code defined in ISO 4217. */
            currencyCode?: string;
            /**
             * Number of nano (10^-9) units of the amount.
             * The value must be between -999,999,999 and +999,999,999 inclusive.
             * If `units` is positive, `nanos` must be positive or zero.
             * If `units` is zero, `nanos` can be positive, zero, or negative.
             * If `units` is negative, `nanos` must be negative or zero.
             * For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
             */
            nanos?: number;
            /**
             * The whole units of the amount.
             * For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
             */
            units?: string;
        }
        interface RecommendationsResource {
            /**
             * Gets the requested recommendation. Requires the recommender.&#42;.get
             * IAM permission for the specified recommender.
             */
            get(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Required. Name of the recommendation. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<GoogleCloudRecommenderV1beta1Recommendation>;
            /**
             * Lists recommendations for a Cloud project. Requires the recommender.&#42;.list
             * IAM permission for the specified recommender.
             */
            list(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /**
                 * Filter expression to restrict the recommendations returned. Supported
                 * filter fields: state_info.state
                 * Eg: `state_info.state:"DISMISSED" or state_info.state:"FAILED"
                 */
                filter?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * Optional. The maximum number of results to return from this request.  Non-positive
                 * values are ignored. If not specified, the server will determine the number
                 * of results to return.
                 */
                pageSize?: number;
                /**
                 * Optional. If present, retrieves the next batch of results from the preceding call to
                 * this method. `page_token` must be the value of `next_page_token` from the
                 * previous response. The values of other method parameters must be identical
                 * to those in the previous call.
                 */
                pageToken?: string;
                /**
                 * Required. The container resource on which to execute the request.
                 * Acceptable formats:
                 *
                 * 1.
                 * "projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]",
                 *
                 * LOCATION here refers to GCP Locations:
                 * https://cloud.google.com/about/locations/
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<GoogleCloudRecommenderV1beta1ListRecommendationsResponse>;
            /**
             * Marks the Recommendation State as Claimed. Users can use this method to
             * indicate to the Recommender API that they are starting to apply the
             * recommendation themselves. This stops the recommendation content from being
             * updated. Associated insights are frozen and placed in the ACCEPTED state.
             *
             * MarkRecommendationClaimed can be applied to recommendations in CLAIMED or
             * ACTIVE state.
             *
             * Requires the recommender.&#42;.update IAM permission for the specified
             * recommender.
             */
            markClaimed(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Required. Name of the recommendation. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest;
            }): Request<GoogleCloudRecommenderV1beta1Recommendation>;
            markClaimed(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Required. Name of the recommendation. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest): Request<GoogleCloudRecommenderV1beta1Recommendation>;
            /**
             * Marks the Recommendation State as Failed. Users can use this method to
             * indicate to the Recommender API that they have applied the recommendation
             * themselves, and the operation failed. This stops the recommendation content
             * from being updated. Associated insights are frozen and placed in the
             * ACCEPTED state.
             *
             * MarkRecommendationFailed can be applied to recommendations in ACTIVE,
             * CLAIMED, SUCCEEDED, or FAILED state.
             *
             * Requires the recommender.&#42;.update IAM permission for the specified
             * recommender.
             */
            markFailed(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Required. Name of the recommendation. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest;
            }): Request<GoogleCloudRecommenderV1beta1Recommendation>;
            markFailed(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Required. Name of the recommendation. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest): Request<GoogleCloudRecommenderV1beta1Recommendation>;
            /**
             * Marks the Recommendation State as Succeeded. Users can use this method to
             * indicate to the Recommender API that they have applied the recommendation
             * themselves, and the operation was successful. This stops the recommendation
             * content from being updated. Associated insights are frozen and placed in
             * the ACCEPTED state.
             *
             * MarkRecommendationSucceeded can be applied to recommendations in ACTIVE,
             * CLAIMED, SUCCEEDED, or FAILED state.
             *
             * Requires the recommender.&#42;.update IAM permission for the specified
             * recommender.
             */
            markSucceeded(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Required. Name of the recommendation. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest;
            }): Request<GoogleCloudRecommenderV1beta1Recommendation>;
            markSucceeded(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Required. Name of the recommendation. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest): Request<GoogleCloudRecommenderV1beta1Recommendation>;
        }
        interface RecommendersResource {
            recommendations: RecommendationsResource;
        }
        interface LocationsResource {
            recommenders: RecommendersResource;
        }
        interface ProjectsResource {
            locations: LocationsResource;
        }

        const projects: ProjectsResource;
    }
}
