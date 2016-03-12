// Type definitions for Google Google Proximity Beacon API v1beta1
// Project: https://developers.google.com/beacons/proximity/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.proximitybeacon {
    
    interface Beacon {
        // Resource name of this beacon. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon. This field must be left empty when registering. After reading a beacon, clients can use the name for future operations.
        beaconName?: string,
        // The identifier of a beacon as advertised by it. This field must be populated when registering. It may be empty when updating a beacon record because it is ignored in updates.
        advertisedId?: AdvertisedId,
        // Current status of the beacon. Required.
        status?: string,
        // The [Google Places API](/places/place-id) Place ID of the place where the beacon is deployed. This is given when the beacon is registered or updated, not automatically detected in any way. Optional.
        placeId?: string,
        // The location of the beacon, expressed as a latitude and longitude pair. This location is given when the beacon is registered or updated. It does not necessarily indicate the actual current location of the beacon. Optional.
        latLng?: LatLng,
        // The indoor level information for this beacon, if known. As returned by the Google Maps API. Optional.
        indoorLevel?: IndoorLevel,
        // Expected location stability. This is set when the beacon is registered or updated, not automatically detected in any way. Optional.
        expectedStability?: string,
        // Free text used to identify and describe the beacon. Maximum length 140 characters. Optional.
        description?: string,
        // Properties of the beacon device, for example battery type or firmware version. Optional.
        properties?: any,
    }
    
    interface AdvertisedId {
        // Specifies the identifier type. Required.
        type?: string,
        // The actual beacon identifier, as broadcast by the beacon hardware. Must be [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP requests, and will be so encoded (with padding) in responses. The base64 encoding should be of the binary byte-stream and not any textual (such as hex) representation thereof. Required.
        id?: string,
    }
    
    interface LatLng {
        // The latitude in degrees. It must be in the range [-90.0, +90.0].
        latitude?: number,
        // The longitude in degrees. It must be in the range [-180.0, +180.0].
        longitude?: number,
    }
    
    interface IndoorLevel {
        // The name of this level.
        name?: string,
    }
    
    interface Empty {
    }
    
    interface ListBeaconsResponse {
        // The beacons that matched the search criteria.
        beacons?: Beacon[],        
        // An opaque pagination token that the client may provide in their next request to retrieve the next page of results.
        nextPageToken?: string,
        // Estimate of the total number of beacons matched by the query. Higher values may be less accurate.
        totalCount?: string,
    }
    
    interface BeaconAttachment {
        // Resource name of this attachment. Attachment names have the format: beacons/beacon_id/attachments/attachment_id. Leave this empty on creation.
        attachmentName?: string,
        // Specifies what kind of attachment this is. Tells a client how to interpret the `data` field. Format is namespace/type. Namespace provides type separation between clients. Type describes the type of `data`, for use by the client when parsing the `data` field. Required.
        namespacedType?: string,
        // An opaque data container for client-provided data. Must be [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP requests, and will be so encoded (with padding) in responses. Required.
        data?: string,
    }
    
    interface ListBeaconAttachmentsResponse {
        // The attachments that corresponded to the request params.
        attachments?: BeaconAttachment[],        
    }
    
    interface DeleteAttachmentsResponse {
        // The number of attachments that were deleted.
        numDeleted?: number,
    }
    
    interface ListNamespacesResponse {
        // The attachments that corresponded to the request params.
        namespaces?: Namespace[],        
    }
    
    interface Namespace {
        // Resource name of this namespace. Namespaces names have the format: namespaces/namespace.
        namespaceName?: string,
        // Specifies what clients may receive attachments under this namespace via `beaconinfo.getforobserved`.
        servingVisibility?: string,
    }
    
    interface ListDiagnosticsResponse {
        // The diagnostics matching the given request.
        diagnostics?: Diagnostics[],        
        // Token that can be used for pagination. Returned only if the request matches more beacons than can be returned in this response.
        nextPageToken?: string,
    }
    
    interface Diagnostics {
        // Resource name of the beacon.
        beaconName?: string,
        // The date when the battery is expected to be low. If the value is missing then there is no estimate for when the battery will be low. This value is only an estimate, not an exact date.
        estimatedLowBatteryDate?: Date,
        // An unordered list of Alerts that the beacon has.
        alerts?: string[],        
    }
    
    interface Date {
        // Year of date. Must be from 1 to 9,999, or 0 if specifying a date without a year.
        year?: number,
        // Month of year of date. Must be from 1 to 12.
        month?: number,
        // Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year/month where the day is not sigificant.
        day?: number,
    }
    
    interface GetInfoForObservedBeaconsRequest {
        // The beacons that the client has encountered. At least one must be given.
        observations?: Observation[],        
        // Specifies what kind of attachments to include in the response. When given, the response will include only attachments of the given types. When empty, no attachments will be returned. Must be in the format namespace/type. Accepts `*` to specify all types in all namespaces. Optional.
        namespacedTypes?: string[],        
    }
    
    interface Observation {
        // The ID advertised by the beacon the client has encountered. Required.
        advertisedId?: AdvertisedId,
        // The array of telemetry bytes received from the beacon. The server is responsible for parsing it. This field may frequently be empty, as with a beacon that transmits telemetry only occasionally.
        telemetry?: string,
        // Time when the beacon was observed. Being sourced from a mobile device, this time may be suspect.
        timestampMs?: string,
    }
    
    interface GetInfoForObservedBeaconsResponse {
        // Public information about beacons. May be empty if the request matched no beacons.
        beacons?: BeaconInfo[],        
    }
    
    interface BeaconInfo {
        // The ID advertised by the beacon.
        advertisedId?: AdvertisedId,
        // The name under which the beacon is registered.
        beaconName?: string,
        // Free text used to identify or describe the beacon in a registered establishment. For example: "entrance", "room 101", etc. May be empty.
        description?: string,
        // Attachments matching the type(s) requested. May be empty if no attachment types were requested, or if none matched.
        attachments?: AttachmentInfo[],        
    }
    
    interface AttachmentInfo {
        // Specifies what kind of attachment this is. Tells a client how to interpret the `data` field. Format is namespace/type, for example scrupulous-wombat-12345/welcome-message
        namespacedType?: string,
        // An opaque data container for client-provided data.
        data?: string,
    }
    
    interface AttachmentsResource {
        // Associates the given data with the specified beacon. Attachment data must contain two parts:  
        // - A namespaced type. 
        // - The actual attachment data itself.  The namespaced type consists of two parts, the namespace and the type. The namespace must be one of the values returned by the `namespaces` endpoint, while the type can be a string of any characters except for the forward slash (`/`) up to 100 characters in length. Attachment data can be up to 1024 bytes long.
        create (request: {        
            // The beacon on which the attachment should be created. Required.
            beaconName: string,
        }) : gapi.client.Request<BeaconAttachment>;        
        
        // Returns the attachments for the specified beacon that match the specified namespaced-type pattern. To control which namespaced types are returned, you add the `namespacedType` query parameter to the request. You must either use `*/*`, to return all attachments, or the namespace must be one of the ones returned from the `namespaces` endpoint.
        list (request: {        
            // The beacon whose attachments are to be fetched. Required.
            beaconName: string,
            // Specifies the namespace and type of attachment to include in response in namespace/type format. Accepts `*/*` to specify "all types in all namespaces".
            namespacedType?: string,
        }) : gapi.client.Request<ListBeaconAttachmentsResponse>;        
        
        // Deletes the specified attachment for the given beacon. Each attachment has a unique attachment name (`attachmentName`) which is returned when you fetch the attachment data via this API. You specify this with the delete request to control which attachment is removed. This operation cannot be undone.
        delete (request: {        
            // The attachment name (`attachmentName`) of the attachment to remove. For example: `beacons/3!893737abc9/attachments/c5e937-af0-494-959-ec49d12738` Required.
            attachmentName: string,
        }) : gapi.client.Request<Empty>;        
        
        // Deletes multiple attachments on a given beacon. This operation is permanent and cannot be undone. You can optionally specify `namespacedType` to choose which attachments should be deleted. If you do not specify `namespacedType`, all your attachments on the given beacon will be deleted. You also may explicitly specify `*/*` to delete all.
        batchDelete (request: {        
            // The beacon whose attachments are to be deleted. Required.
            beaconName: string,
            // Specifies the namespace and type of attachments to delete in `namespace/type` format. Accepts `*/*` to specify "all types in all namespaces". Optional.
            namespacedType?: string,
        }) : gapi.client.Request<DeleteAttachmentsResponse>;        
        
    }
    
    
    interface DiagnosticsResource {
        // List the diagnostics for a single beacon. You can also list diagnostics for all the beacons owned by your Google Developers Console project by using the beacon name `beacons/-`.
        list (request: {        
            // Beacon that the diagnostics are for.
            beaconName: string,
            // Specifies the maximum number of results to return. Defaults to 10. Maximum 1000. Optional.
            pageSize?: number,
            // Requests results that occur after the `page_token`, obtained from the response to a previous request. Optional.
            pageToken?: string,
            // Requests only beacons that have the given alert. For example, to find beacons that have low batteries use `alert_filter=LOW_BATTERY`.
            alertFilter?: string,
        }) : gapi.client.Request<ListDiagnosticsResponse>;        
        
    }
    
    
    interface BeaconsResource {
        // Registers a previously unregistered beacon given its `advertisedId`. These IDs are unique within the system. An ID can be registered only once.
        register (request: {        
        }) : gapi.client.Request<Beacon>;        
        
        // Decommissions the specified beacon in the service. This beacon will no longer be returned from `beaconinfo.getforobserved`. This operation is permanent -- you will not be able to re-register a beacon with this ID again.
        decommission (request: {        
            // Beacon that should be decommissioned. Required.
            beaconName: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns detailed information about the specified beacon.
        get (request: {        
            // Beacon that is requested.
            beaconName: string,
        }) : gapi.client.Request<Beacon>;        
        
        // Searches the beacon registry for beacons that match the given search criteria. Only those beacons that the client has permission to list will be returned.
        list (request: {        
            // Filter query string that supports the following field filters: * `description:""` For example: `description:"Room 3"` Returns beacons whose description matches tokens in the string "Room 3" (not necessarily that exact string). The string must be double-quoted. * `status:` For example: `status:active` Returns beacons whose status matches the given value. Values must be one of the Beacon.Status enum values (case insensitive). Accepts multiple filters which will be combined with OR logic. * `stability:` For example: `stability:mobile` Returns beacons whose expected stability matches the given value. Values must be one of the Beacon.Stability enum values (case insensitive). Accepts multiple filters which will be combined with OR logic. * `place_id:""` For example: `place_id:"ChIJVSZzVR8FdkgRXGmmm6SslKw="` Returns beacons explicitly registered at the given place, expressed as a Place ID obtained from [Google Places API](/places/place-id). Does not match places inside the given place. Does not consider the beacon's actual location (which may be different from its registered place). Accepts multiple filters that will be combined with OR logic. The place ID must be double-quoted. * `registration_time[|=]` For example: `registration_time>=1433116800` Returns beacons whose registration time matches the given filter. Supports the operators: , =. Timestamp must be expressed as an integer number of seconds since midnight January 1, 1970 UTC. Accepts at most two filters that will be combined with AND logic, to support "between" semantics. If more than two are supplied, the latter ones are ignored. * `lat: lng: radius:` For example: `lat:51.1232343 lng:-1.093852 radius:1000` Returns beacons whose registered location is within the given circle. When any of these fields are given, all are required. Latitude and longitude must be decimal degrees between -90.0 and 90.0 and between -180.0 and 180.0 respectively. Radius must be an integer number of meters less than 1,000,000 (1000 km). * `property:"="` For example: `property:"battery-type=CR2032"` Returns beacons which have a property of the given name and value. Supports multiple filters which will be combined with OR logic. The entire name=value string must be double-quoted as one string. * `attachment_type:""` For example: `attachment_type:"my-namespace/my-type"` Returns beacons having at least one attachment of the given namespaced type. Supports "any within this namespace" via the partial wildcard syntax: "my-namespace/*". Supports multiple filters which will be combined with OR logic. The string must be double-quoted. Multiple filters on the same field are combined with OR logic (except registration_time which is combined with AND logic). Multiple filters on different fields are combined with AND logic. Filters should be separated by spaces. As with any HTTP query string parameter, the whole filter expression must be URL-encoded. Example REST request: `GET /v1beta1/beacons?q=status:active%20lat:51.123%20lng:-1.095%20radius:1000`
            q?: string,
            // A pagination token obtained from a previous request to list beacons.
            pageToken?: string,
            // The maximum number of records to return for this request, up to a server-defined upper limit.
            pageSize?: number,
        }) : gapi.client.Request<ListBeaconsResponse>;        
        
        // Updates the information about the specified beacon. **Any field that you do not populate in the submitted beacon will be permanently erased**, so you should follow the "read, modify, write" pattern to avoid inadvertently destroying data. Changes to the beacon status via this method will be silently ignored. To update beacon status, use the separate methods on this API for (de)activation and decommissioning.
        update (request: {        
            // Resource name of this beacon. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon. This field must be left empty when registering. After reading a beacon, clients can use the name for future operations.
            beaconName: string,
        }) : gapi.client.Request<Beacon>;        
        
        // (Re)activates a beacon. A beacon that is active will return information and attachment data when queried via `beaconinfo.getforobserved`. Calling this method on an already active beacon will do nothing (but will return a successful response code).
        activate (request: {        
            // The beacon to activate. Required.
            beaconName: string,
        }) : gapi.client.Request<Empty>;        
        
        // Deactivates a beacon. Once deactivated, the API will not return information nor attachment data for the beacon when queried via `beaconinfo.getforobserved`. Calling this method on an already inactive beacon will do nothing (but will return a successful response code).
        deactivate (request: {        
            // The beacon name of this beacon.
            beaconName: string,
        }) : gapi.client.Request<Empty>;        
        
        attachments: AttachmentsResource,
        diagnostics: DiagnosticsResource,
    }
    
    
    interface NamespacesResource {
        // Lists all attachment namespaces owned by your Google Developers Console project. Attachment data associated with a beacon must include a namespaced type, and the namespace must be owned by your project.
        list (request: {        
        }) : gapi.client.Request<ListNamespacesResponse>;        
        
    }
    
    
    interface BeaconinfoResource {
        // Given one or more beacon observations, returns any beacon information and attachments accessible to your application.
        getforobserved (request: {        
        }) : gapi.client.Request<GetInfoForObservedBeaconsResponse>;        
        
    }
    
}

declare module gapi.client.proximitybeacon {
    var beacons: gapi.client.proximitybeacon.BeaconsResource; 
    
    var namespaces: gapi.client.proximitybeacon.NamespacesResource; 
    
    var beaconinfo: gapi.client.proximitybeacon.BeaconinfoResource; 
    
}
