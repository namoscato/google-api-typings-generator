// Type definitions for non-npm package Drive Activity API v1 1.0
// Project: https://developers.google.com/google-apps/activity/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://www.googleapis.com/discovery/v1/apis/appsactivity/v1/rest
// Revision: 20200223

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Drive Activity API v1 */
    function load(name: "appsactivity", version: "v1"): PromiseLike<void>;
    function load(name: "appsactivity", version: "v1", callback: () => any): void;

    namespace appsactivity {
        interface Activity {
            /** The fields common to all of the singleEvents that make up the Activity. */
            combinedEvent?: Event;
            /** A list of all the Events that make up the Activity. */
            singleEvents?: Event[];
        }
        interface Event {
            /**
             * Additional event types. Some events may have multiple types when multiple actions are part of a single event. For example, creating a document,
             * renaming it, and sharing it may be part of a single file-creation event.
             */
            additionalEventTypes?: string[];
            /** The time at which the event occurred formatted as Unix time in milliseconds. */
            eventTimeMillis?: string;
            /** Whether this event is caused by a user being deleted. */
            fromUserDeletion?: boolean;
            /** Extra information for move type events, such as changes in an object's parents. */
            move?: Move;
            /** Extra information for permissionChange type events, such as the user or group the new permission applies to. */
            permissionChanges?: PermissionChange[];
            /** The main type of event that occurred. */
            primaryEventType?: string;
            /** Extra information for rename type events, such as the old and new names. */
            rename?: Rename;
            /** Information specific to the Target object modified by the event. */
            target?: Target;
            /** Represents the user responsible for the event. */
            user?: User;
        }
        interface ListActivitiesResponse {
            /** List of activities. */
            activities?: Activity[];
            /** Token for the next page of results. */
            nextPageToken?: string;
        }
        interface Move {
            /** The added parent(s). */
            addedParents?: Parent[];
            /** The removed parent(s). */
            removedParents?: Parent[];
        }
        interface Parent {
            /** The parent's ID. */
            id?: string;
            /** Whether this is the root folder. */
            isRoot?: boolean;
            /** The parent's title. */
            title?: string;
        }
        interface Permission {
            /** The name of the user or group the permission applies to. */
            name?: string;
            /** The ID for this permission. Corresponds to the Drive API's permission ID returned as part of the Drive Permissions resource. */
            permissionId?: string;
            /** Indicates the Google Drive permissions role. The role determines a user's ability to read, write, or comment on the file. */
            role?: string;
            /** Indicates how widely permissions are granted. */
            type?: string;
            /** The user's information if the type is USER. */
            user?: User;
            /** Whether the permission requires a link to the file. */
            withLink?: boolean;
        }
        interface PermissionChange {
            /** Lists all Permission objects added. */
            addedPermissions?: Permission[];
            /** Lists all Permission objects removed. */
            removedPermissions?: Permission[];
        }
        interface Photo {
            /** The URL of the photo. */
            url?: string;
        }
        interface Rename {
            /** The new title. */
            newTitle?: string;
            /** The old title. */
            oldTitle?: string;
        }
        interface Target {
            /** The ID of the target. For example, in Google Drive, this is the file or folder ID. */
            id?: string;
            /** The MIME type of the target. */
            mimeType?: string;
            /** The name of the target. For example, in Google Drive, this is the title of the file. */
            name?: string;
        }
        interface User {
            /** A boolean which indicates whether the specified User was deleted. If true, name, photo and permission_id will be omitted. */
            isDeleted?: boolean;
            /** Whether the user is the authenticated user. */
            isMe?: boolean;
            /** The displayable name of the user. */
            name?: string;
            /**
             * The permission ID associated with this user. Equivalent to the Drive API's permission ID for this user, returned as part of the Drive Permissions
             * resource.
             */
            permissionId?: string;
            /** The profile photo of the user. Not present if the user has no profile photo. */
            photo?: Photo;
        }
        interface ActivitiesResource {
            /**
             * Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was
             * acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is
             * scoped to activities from a given Google service using the source parameter.
             */
            list(request?: {
                /** Data format for the response. */
                alt?: string;
                /** Identifies the Drive folder containing the items for which to return activities. */
                "drive.ancestorId"?: string;
                /** Identifies the Drive item to return activities for. */
                "drive.fileId"?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** Indicates the strategy to use when grouping singleEvents items in the associated combinedEvent object. */
                groupingStrategy?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** The maximum number of events to return on a page. The response includes a continuation token if there are more events. */
                pageSize?: number;
                /** A token to retrieve a specific page of results. */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * The Google service from which to return activities. Possible values of source are:
                 * - drive.google.com
                 */
                source?: string;
                /**
                 * The ID used for ACL checks (does not filter the resulting event list by the assigned value). Use the special value me to indicate the currently
                 * authenticated user.
                 */
                userId?: string;
                /** Deprecated. Please use quotaUser instead. */
                userIp?: string;
            }): Request<ListActivitiesResponse>;
        }

        const activities: ActivitiesResource;
    }
}
