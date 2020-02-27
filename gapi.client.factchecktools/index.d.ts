// Type definitions for non-npm package Fact Check Tools API v1alpha1 1.0
// Project: https://developers.google.com/fact-check/tools/api/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://factchecktools.googleapis.com/$discovery/rest?version=v1alpha1
// Revision: 20200227

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Fact Check Tools API v1alpha1 */
    function load(name: "factchecktools", version: "v1alpha1"): PromiseLike<void>;
    function load(name: "factchecktools", version: "v1alpha1", callback: () => any): void;

    namespace factchecktools {
        interface GoogleFactcheckingFactchecktoolsV1alpha1Claim {
            /** A person or organization stating the claim. For instance, "John Doe". */
            claimant?: string;
            /** The date that the claim was made. */
            claimDate?: string;
            /** One or more reviews of this claim (namely, a fact-checking article). */
            claimReview?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview[];
            /** The claim text. For instance, "Crime has doubled in the last 2 years." */
            text?: string;
        }
        interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor {
            /** Corresponds to `ClaimReview.itemReviewed.author.image`. */
            imageUrl?: string;
            /** Corresponds to `ClaimReview.itemReviewed.author.jobTitle`. */
            jobTitle?: string;
            /**
             * A person or organization stating the claim. For instance, "John Doe".<br>
             * Corresponds to `ClaimReview.itemReviewed.author.name`.
             */
            name?: string;
            /** Corresponds to `ClaimReview.itemReviewed.author.sameAs`. */
            sameAs?: string;
        }
        interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating {
            /**
             * For numeric ratings, the best value possible in the scale from worst to
             * best.<br>
             * Corresponds to `ClaimReview.reviewRating.bestRating`.
             */
            bestRating?: number;
            /** Corresponds to `ClaimReview.reviewRating.image`. */
            imageUrl?: string;
            /** Corresponds to `ClaimReview.reviewRating.ratingExplanation`. */
            ratingExplanation?: string;
            /**
             * A numeric rating of this claim, in the range worstRating — bestRating
             * inclusive.<br>
             * Corresponds to `ClaimReview.reviewRating.ratingValue`.
             */
            ratingValue?: number;
            /**
             * The truthfulness rating as a human-readible short word or phrase.<br>
             * Corresponds to `ClaimReview.reviewRating.alternateName`.
             */
            textualRating?: string;
            /**
             * For numeric ratings, the worst value possible in the scale from worst to
             * best.<br>
             * Corresponds to `ClaimReview.reviewRating.worstRating`.
             */
            worstRating?: number;
        }
        interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview {
            /** The language this review was written in. For instance, "en" or "de". */
            languageCode?: string;
            /** The publisher of this claim review. */
            publisher?: GoogleFactcheckingFactchecktoolsV1alpha1Publisher;
            /** The date the claim was reviewed. */
            reviewDate?: string;
            /** Textual rating. For instance, "Mostly false". */
            textualRating?: string;
            /** The title of this claim review, if it can be determined. */
            title?: string;
            /** The URL of this claim review. */
            url?: string;
        }
        interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor {
            /** Corresponds to `ClaimReview.author.image`. */
            imageUrl?: string;
            /**
             * Name of the organization that is publishing the fact check.<br>
             * Corresponds to `ClaimReview.author.name`.
             */
            name?: string;
        }
        interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup {
            /**
             * A list of links to works in which this claim appears, aside from the one
             * specified in `claim_first_appearance`.<br>
             * Corresponds to `ClaimReview.itemReviewed[@type=Claim].appearance.url`.
             */
            claimAppearances?: string[];
            /** Info about the author of this claim. */
            claimAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor;
            /**
             * The date when the claim was made or entered public discourse.<br>
             * Corresponds to `ClaimReview.itemReviewed.datePublished`.
             */
            claimDate?: string;
            /**
             * A link to a work in which this claim first appears.<br>
             * Corresponds to `ClaimReview.itemReviewed[@type=Claim].firstAppearance.url`.
             */
            claimFirstAppearance?: string;
            /**
             * The location where this claim was made.<br>
             * Corresponds to `ClaimReview.itemReviewed.name`.
             */
            claimLocation?: string;
            /**
             * A short summary of the claim being evaluated.<br>
             * Corresponds to `ClaimReview.claimReviewed`.
             */
            claimReviewed?: string;
            /** Info about the rating of this claim review. */
            rating?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating;
            /**
             * This field is optional, and will default to the page URL. We provide this
             * field to allow you the override the default value, but the only permitted
             * override is the page URL plus an optional anchor link ("page jump").<br>
             * Corresponds to `ClaimReview.url`
             */
            url?: string;
        }
        interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage {
            /**
             * Info about the author of this claim review.
             * Similar to the above, semantically these are page-level fields, and each
             * `ClaimReview` on this page will contain the same values.
             */
            claimReviewAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor;
            /**
             * A list of individual claim reviews for this page.
             * Each item in the list corresponds to one `ClaimReview` element.
             */
            claimReviewMarkups?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup[];
            /**
             * The name of this `ClaimReview` markup page resource, in the form of
             * `pages/{page_id}`. Except for update requests, this field is output-only
             * and should not be set by the user.
             */
            name?: string;
            /**
             * The URL of the page associated with this `ClaimReview` markup.
             * While every individual `ClaimReview` has its own URL field, semantically
             * this is a page-level field, and each `ClaimReview` on this page will use
             * this value unless individually overridden.<br>
             * Corresponds to `ClaimReview.url`
             */
            pageUrl?: string;
            /**
             * The date when the fact check was published.
             * Similar to the URL, semantically this is a page-level field, and each
             * `ClaimReview` on this page will contain the same value.<br>
             * Corresponds to `ClaimReview.datePublished`
             */
            publishDate?: string;
            /**
             * The version ID for this markup. Except for update requests, this field is
             * output-only and should not be set by the user.
             */
            versionId?: string;
        }
        interface GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse {
            /** The list of claims and all of their associated information. */
            claims?: GoogleFactcheckingFactchecktoolsV1alpha1Claim[];
            /**
             * The next pagination token in the Search response. It should be used as the
             * `page_token` for the following request. An empty value means no more
             * results.
             */
            nextPageToken?: string;
        }
        interface GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse {
            /** The result list of pages of `ClaimReview` markup. */
            claimReviewMarkupPages?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage[];
            /**
             * The next pagination token in the Search response. It should be used as the
             * `page_token` for the following request. An empty value means no more
             * results.
             */
            nextPageToken?: string;
        }
        interface GoogleFactcheckingFactchecktoolsV1alpha1Publisher {
            /** The name of this publisher. For instance, "Awesome Fact Checks". */
            name?: string;
            /**
             * Host-level site name, without the protocol or "www" prefix. For instance,
             * "awesomefactchecks.com". This value of this field is based purely on the
             * claim review URL.
             */
            site?: string;
        }
        // tslint:disable-next-line:no-empty-interface
        interface GoogleProtobufEmpty {
        }
        interface ClaimsResource {
            /** Search through fact-checked claims. */
            search(request?: {
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
                /**
                 * The BCP-47 language code, such as "en-US" or "sr-Latn". Can be used to
                 * restrict results by language, though we do not currently consider the
                 * region.
                 */
                languageCode?: string;
                /**
                 * The maximum age of the returned search results, in days.
                 * Age is determined by either claim date or review date, whichever is newer.
                 */
                maxAgeDays?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * An integer that specifies the current offset (that is, starting result
                 * location) in search results. This field is only considered if `page_token`
                 * is unset. For example, 0 means to return results starting from the first
                 * matching result, and 10 means to return from the 11th result.
                 */
                offset?: number;
                /**
                 * The pagination size. We will return up to that many results. Defaults to
                 * 10 if not set.
                 */
                pageSize?: number;
                /**
                 * The pagination token. You may provide the `next_page_token` returned from a
                 * previous List request, if any, in order to get the next page. All other
                 * fields must have the same values as in the previous request.
                 */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Textual query string. Required unless `review_publisher_site_filter` is
                 * specified.
                 */
                query?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** The review publisher site to filter results by, e.g. nytimes.com. */
                reviewPublisherSiteFilter?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse>;
        }
        interface PagesResource {
            /** Create `ClaimReview` markup on a page. */
            create(request: {
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
                resource: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
            }): Request<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage>;
            create(request: {
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
            body: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage): Request<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage>;
            /** Delete all `ClaimReview` markup on a page. */
            delete(request?: {
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
                /** The name of the resource to delete, in the form of `pages/{page_id}`. */
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
            }): Request<{}>;
            /** Get all `ClaimReview` markup on a page. */
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
                /** The name of the resource to get, in the form of `pages/{page_id}`. */
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
            }): Request<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage>;
            /**
             * List the `ClaimReview` markup pages for a specific URL or for an
             * organization.
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
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * An integer that specifies the current offset (that is, starting result
                 * location) in search results. This field is only considered if `page_token`
                 * is unset, and if the request is not for a specific URL. For example, 0
                 * means to return results starting from the first matching result, and 10
                 * means to return from the 11th result.
                 */
                offset?: number;
                /**
                 * The organization for which we want to fetch markups for. For instance,
                 * "site.com". Cannot be specified along with an URL.
                 */
                organization?: string;
                /**
                 * The pagination size. We will return up to that many results. Defaults to
                 * 10 if not set. Has no effect if a URL is requested.
                 */
                pageSize?: number;
                /**
                 * The pagination token. You may provide the `next_page_token` returned from a
                 * previous List request, if any, in order to get the next page. All other
                 * fields must have the same values as in the previous request.
                 */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /**
                 * The URL from which to get `ClaimReview` markup. There will be at most one
                 * result. If markup is associated with a more canonical version of the URL
                 * provided, we will return that URL instead. Cannot be specified along with
                 * an organization.
                 */
                url?: string;
            }): Request<GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse>;
            /**
             * Update for all `ClaimReview` markup on a page
             *
             * Note that this is a full update. To retain the existing `ClaimReview`
             * markup on a page, first perform a Get operation, then modify the returned
             * markup, and finally call Update with the entire `ClaimReview` markup as the
             * body.
             */
            update(request: {
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
                /**
                 * The name of this `ClaimReview` markup page resource, in the form of
                 * `pages/{page_id}`. Except for update requests, this field is output-only
                 * and should not be set by the user.
                 */
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
                resource: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
            }): Request<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage>;
            update(request: {
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
                /**
                 * The name of this `ClaimReview` markup page resource, in the form of
                 * `pages/{page_id}`. Except for update requests, this field is output-only
                 * and should not be set by the user.
                 */
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
            body: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage): Request<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage>;
        }

        const claims: ClaimsResource;

        const pages: PagesResource;
    }
}
