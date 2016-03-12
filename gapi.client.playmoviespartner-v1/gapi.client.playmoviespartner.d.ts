// Type definitions for Google Google Play Movies Partner API v1
// Project: https://developers.google.com/playmoviespartner/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.playmoviespartner.v1 {
    
    interface ListAvailsResponse {
        // List of Avails that match the request criteria.
        avails?: Avail[],        
        // See _List methods rules_ for info about this field.
        nextPageToken?: string,
    }
    
    interface Avail {
        // The name of the studio that owns the Edit referred in the Avail. This is the equivalent of `studio_name` in other resources, but it follows the EMA nomenclature. Example: "Google Films".
        displayName?: string,
        // Spoken language of the intended audience. Language shall be encoded in accordance with RFC 5646. Example: "fr".
        storeLanguage?: string,
        // ISO 3166-1 alpha-2 country code for the country or territory of this Avail. For Avails, we use Territory in lieu of Country to comply with EMA specifications. But please note that Territory and Country identify the same thing. Example: "US".
        territory?: string,
        // Work type as enumerated in EMA.
        workType?: string,
        // Title used by involved parties to refer to this series. Only available on TV Avails. Example: "Googlers, The".
        seriesTitleInternalAlias?: string,
        // The number assigned to the season within a series. Only available on TV Avails. Example: "1".
        seasonNumber?: string,
        // The number assigned to the episode within a season. Only available on TV Avails. Example: "3".
        episodeNumber?: string,
        // Title used by involved parties to refer to this season. Only available on TV Avails. Example: "Googlers, The".
        seasonTitleInternalAlias?: string,
        // OPTIONAL.TV Only. Title used by involved parties to refer to this episode. Only available on TV Avails. Example: "Coding at Google".
        episodeTitleInternalAlias?: string,
        // Title used by involved parties to refer to this content. Example: "Googlers, The". Only available on Movie Avails.
        titleInternalAlias?: string,
        // Type of transaction.
        licenseType?: string,
        // Indicates the format profile covered by the transaction.
        formatProfile?: string,
        // Start of term in YYYY-MM-DD format in the timezone of the country of the Avail. Example: "2013-05-14".
        start?: string,
        // End of term in YYYY-MM-DD format in the timezone of the country of the Avail. "Open" if no end date is available. Example: "2019-02-17"
        end?: string,
        // Type of pricing that should be applied to this Avail based on how the partner classify them. Example: "Tier", "WSP", "SRP", or "Category".
        priceType?: string,
        // Value to be applied to the pricing type. Example: "4" or "2.99"
        priceValue?: string,
        // Title Identifier. This should be the Title Level EIDR. Example: "10.5240/1489-49A2-3956-4B2D-FE16-5".
        contentId?: string,
        // Edit Identifier. This should be the Edit Level EIDR. Example: "10.2340/1489-49A2-3956-4B2D-FE16-6"
        productId?: string,
        // Manifestation Identifier. This should be the Manifestation Level EIDR. Example: "10.2340/1489-49A2-3956-4B2D-FE16-7"
        encodeId?: string,
        // Other identifier referring to the series, as defined by partner. Only available on TV avails. Example: "rs_googlers".
        seriesAltId?: string,
        // Other identifier referring to the season, as defined by partner. Only available on TV avails. Example: "rs_googlers_s1".
        seasonAltId?: string,
        // Other identifier referring to the episode, as defined by partner. Only available on TV avails. Example: "rs_googlers_s1_3".
        episodeAltId?: string,
        // Other identifier referring to the Edit, as defined by partner. Example: "GOOGLER_2006"
        altId?: string,
        // First date an Edit could be publically announced as becoming available at a specific future date in territory of Avail. *Not* the Avail start date or pre-order start date. Format is YYYY-MM-DD. Only available for pre-orders. Example: "2012-12-10"
        suppressionLiftDate?: string,
        // Release date of the Title in earliest released territory. Typically it is just the year, but it is free-form as per EMA spec. Examples: "1979", "Oct 2014"
        releaseDate?: string,
        // Rating system applied to the version of title within territory of Avail. Rating systems should be formatted as per [EMA ratings spec](http://www.movielabs.com/md/ratings/) Example: "MPAA"
        ratingSystem?: string,
        // Value representing the rating. Ratings should be formatted as per http://www.movielabs.com/md/ratings/ Example: "PG"
        ratingValue?: string,
        // Value representing the rating reason. Rating reasons should be formatted as per [EMA ratings spec](http://www.movielabs.com/md/ratings/) and comma-separated for inclusion of multiple reasons. Example: "L, S, V"
        ratingReason?: string,
        // Communicating if caption file will be delivered.
        captionIncluded?: boolean,
        // Communicating an exempt category as defined by FCC regulations. It is not required for non-US Avails. Example: "1"
        captionExemption?: string,
        // Google-generated ID identifying the video linked to this Avail, once delivered. Not part of EMA Specs. Example: 'gtry456_xc'
        videoId?: string,
        // Name of the post-production houses that manage the Avail. Not part of EMA Specs.
        pphNames?: string[],        
    }
    
    interface Order {
        // ID internally generated by Google to uniquely identify an Order. Example: 'abcde12_x'
        orderId?: string,
        // ID that can be used to externally identify an Order. This ID is provided by partners when submitting the Avails. Example: 'GOOGLER_2006'
        customId?: string,
        // Google-generated ID identifying the video linked to this Order, once delivered. Example: 'gtry456_xc'.
        videoId?: string,
        // Countries where the Order is available, using the "ISO 3166-1 alpha-2" format (example: "US").
        countries?: string[],        
        // Type of the Edit linked to the Order.
        type?: string,
        // Default Edit name, usually in the language of the country of origin. Example: "Googlers, The".
        name?: string,
        // Default Episode name, usually in the language of the country of origin. Only available for TV Edits Example: "Googlers, The - Pilot".
        episodeName?: string,
        // Default Season name, usually in the language of the country of origin. Only available for TV Edits Example: "Googlers, The - A Brave New World".
        seasonName?: string,
        // Default Show name, usually in the language of the country of origin. Only available for TV Edits Example: "Googlers, The".
        showName?: string,
        // High-level status of the order.
        status?: string,
        // Detailed status of the order
        statusDetail?: string,
        // Field explaining why an Order has been rejected. Example: "Trailer audio is 2ch mono, please re-deliver in stereo".
        rejectionNote?: string,
        // Timestamp when the Order was created.
        orderedTime?: string,
        // Timestamp when the Order was approved.
        approvedTime?: string,
        // Timestamp when the Order was fulfilled.
        receivedTime?: string,
        // Timestamp of the earliest start date of the Avails linked to this Order.
        earliestAvailStartTime?: string,
        // Order priority, as defined by Google. The higher the value, the higher the priority. Example: 90
        priority?: number,
        // Legacy Order priority, as defined by Google. Example: 'P0'
        legacyPriority?: string,
        // YouTube Channel ID that should be used to fulfill the Order. Example: "UCRG64darCZhb".
        channelId?: string,
        // YouTube Channel Name that should be used to fulfill the Order. Example: "Google_channel".
        channelName?: string,
        // Name of the studio that owns the Edit ordered.
        studioName?: string,
        // Name of the post-production house that manages the Edit ordered.
        pphName?: string,
        // A simpler representation of the priority.
        normalizedPriority?: string,
    }
    
    interface ListOrdersResponse {
        // List of Orders that match the request criteria.
        orders?: Order[],        
        // See _List methods rules_ for info about this field.
        nextPageToken?: string,
    }
    
    interface ExperienceLocale {
        // ID internally generated by Google to uniquely identify a ExperienceLocale. Example: 'KRZiVjY9h7t'
        elId?: string,
        // Country where the ExperienceLocale is available, using the "ISO 3166-1 alpha-2" format. Example: "US".
        country?: string,
        // Language of the ExperienceLocale, using the "BCP 47" format. Examples: "en", "en-US", "es", "es-419".
        language?: string,
        // Video ID, as defined by Google, linked to the feature video in the ExperienceLocale. Example: 'gtry456_xc'.
        videoId?: string,
        // Trailer ID, as defined by Google, linked to the trailer video in the ExperienceLocale. Example: 'gtry457_tr'.
        trailerId?: string,
        // Title-level EIDR ID. Example: "10.5240/1489-49A2-3956-4B2D-FE16-5".
        titleLevelEidr?: string,
        // Edit-level EIDR ID. Example: "10.5240/1489-49A2-3956-4B2D-FE16-6".
        editLevelEidr?: string,
        // Alternative Cut ID, sometimes available in lieu of the main Edit-level EIDR ID. This is not an EIDR ID, but a Partner-provided ID. Example: "206346_79838".
        altCutId?: string,
        // List of custom IDs (defined by the partner) linked to this ExperienceLocale. Example: "R86241"
        customIds?: string[],        
        // PresentationID as defined in the EMA specs.
        presentationId?: string,
        // InventoryID as defined in the EMA specs.
        inventoryId?: string,
        // PlayableSequenceID as defined in the EMA specs.
        playableSequenceId?: string,
        // Type of the Edit linked to the ExperienceLocale.
        type?: string,
        // Default Edit name, usually in the language of the country of origin. Example: "Googlers, The".
        name?: string,
        // High-level status of the ExperienceLocale.
        status?: string,
        // ExperienceLocale priority, as defined by Google. The higher the value, the higher the priority. Example: 90
        priority?: number,
        // Timestamp when the ExperienceLocale was created.
        createdTime?: string,
        // Timestamp when the ExperienceLocale was approved.
        approvedTime?: string,
        // Timestamp of the earliest start date of the Avails linked to this ExperienceLocale.
        earliestAvailStartTime?: string,
        // YouTube Channel ID linked to the ExperienceLocale. Example: "UCRG64darCZhb".
        channelId?: string,
        // Name of the studio that owns the ExperienceLocale.
        studioName?: string,
        // Name of the post-production houses that manage the ExperienceLocale.
        pphNames?: string[],        
        // A simpler representation of the priority.
        normalizedPriority?: string,
    }
    
    interface ListExperienceLocalesResponse {
        // List of ExperienceLocales that match the request criteria.
        experienceLocales?: ExperienceLocale[],        
        // See _List methods rules_ for info about this field.
        nextPageToken?: string,
    }
    
    interface StoreInfo {
        // Google-generated ID identifying the video linked to the Edit. Example: 'gtry456_xc'
        videoId?: string,
        // Google-generated ID identifying the season linked to the Edit. Only available for TV Edits. Example: 'ster23ex'
        seasonId?: string,
        // Google-generated ID identifying the show linked to the Edit. Only available for TV Edits. Example: 'et2hsue_x'
        showId?: string,
        // Country where Edit is available in ISO 3166-1 alpha-2 country code. Example: "US".
        country?: string,
        // Timestamp when the Edit went live on the Store.
        liveTime?: string,
        // Edit type, like Movie, Episode or Season.
        type?: string,
        // Default Edit name, usually in the language of the country of origin. Example: "Googlers, The".
        name?: string,
        // Title-level EIDR ID. Example: "10.5240/1489-49A2-3956-4B2D-FE16-5".
        titleLevelEidr?: string,
        // Edit-level EIDR ID. Example: "10.5240/1489-49A2-3956-4B2D-FE16-6".
        editLevelEidr?: string,
        // Default Season name, usually in the language of the country of origin. Only available for TV Edits Example: "Googlers, The - A Brave New World".
        seasonName?: string,
        // Default Show name, usually in the language of the country of origin. Only available for TV Edits Example: "Googlers, The".
        showName?: string,
        // The number assigned to the season within a show. Only available on TV Edits. Example: "1".
        seasonNumber?: string,
        // The number assigned to the episode within a season. Only available on TV Edits. Example: "1".
        episodeNumber?: string,
        // Whether the Edit has a SD offer.
        hasSdOffer?: boolean,
        // Whether the Edit has a HD offer.
        hasHdOffer?: boolean,
        // Whether the Edit has a VOD offer.
        hasVodOffer?: boolean,
        // Whether the Edit has a EST offer.
        hasEstOffer?: boolean,
        // Whether the Edit has a 5.1 channel audio track.
        hasAudio51?: boolean,
        // Audio tracks available for this Edit.
        audioTracks?: string[],        
        // Subtitles available for this Edit.
        subtitles?: string[],        
        // Whether the Edit has info cards.
        hasInfoCards?: boolean,
        // Knowledge Graph ID associated to this Edit, if available. This ID links the Edit to its knowledge entity, externally accessible at http://freebase.com. In the absense of Title EIDR or Edit EIDR, this ID helps link together multiple Edits across countries. Example: '/m/0ffx29'
        mid?: string,
        // Google-generated ID identifying the trailer linked to the Edit. Example: 'bhd_4e_cx'
        trailerId?: string,
        // Name of the studio that owns the Edit ordered.
        studioName?: string,
        // Name of the post-production houses that manage the Edit.
        pphNames?: string[],        
    }
    
    interface ListStoreInfosResponse {
        // List of StoreInfos that match the request criteria.
        storeInfos?: StoreInfo[],        
        // See 'List methods rules' for info about this field.
        nextPageToken?: string,
    }
    
    interface AvailsResource {
        // List Avails owned or managed by the partner. See _Authentication and Authorization rules_ and _List methods rules_ for more information about this method.
        list (request: {        
            // REQUIRED. See _General rules_ for more information about this field.
            accountId: string,
            // See _List methods rules_ for info about this field.
            pageSize?: number,
            // See _List methods rules_ for info about this field.
            pageToken?: string,
            // See _List methods rules_ for info about this field.
            pphNames?: string,
            // See _List methods rules_ for info about this field.
            studioNames?: string,
            // Filter Avails that match a case-insensitive substring of the default Title name.
            title?: string,
            // Filter Avails that match (case-insensitive) any of the given country codes, using the "ISO 3166-1 alpha-2" format (examples: "US", "us", "Us").
            territories?: string,
            // Filter Avails that match a case-insensitive, partner-specific custom id.
            altId?: string,
            // Filter Avails that match any of the given `video_id`s.
            videoIds?: string,
        }) : gapi.client.Request<ListAvailsResponse>;        
        
    }
    
    
    interface OrdersResource {
        // Get an Order given its id. See _Authentication and Authorization rules_ and _Get methods rules_ for more information about this method.
        get (request: {        
            // REQUIRED. See _General rules_ for more information about this field.
            accountId: string,
            // REQUIRED. Order ID.
            orderId: string,
        }) : gapi.client.Request<Order>;        
        
        // List Orders owned or managed by the partner. See _Authentication and Authorization rules_ and _List methods rules_ for more information about this method.
        list (request: {        
            // REQUIRED. See _General rules_ for more information about this field.
            accountId: string,
            // See _List methods rules_ for info about this field.
            pageSize?: number,
            // See _List methods rules_ for info about this field.
            pageToken?: string,
            // See _List methods rules_ for info about this field.
            pphNames?: string,
            // See _List methods rules_ for info about this field.
            studioNames?: string,
            // Filter Orders that match a title name (case-insensitive, sub-string match).
            name?: string,
            // Filter Orders that match one of the given status.
            status?: string,
            // Filter Orders that match a case-insensitive, partner-specific custom id.
            customId?: string,
        }) : gapi.client.Request<ListOrdersResponse>;        
        
    }
    
    
    interface ExperienceLocalesResource {
        // Get an ExperienceLocale given its id. See _Authentication and Authorization rules_ and _Get methods rules_ for more information about this method.
        get (request: {        
            // REQUIRED. See _General rules_ for more information about this field.
            accountId: string,
            // REQUIRED. ExperienceLocale ID, as defined by Google.
            elId: string,
        }) : gapi.client.Request<ExperienceLocale>;        
        
        // List ExperienceLocales owned or managed by the partner. See _Authentication and Authorization rules_ and _List methods rules_ for more information about this method.
        list (request: {        
            // REQUIRED. See _General rules_ for more information about this field.
            accountId: string,
            // See _List methods rules_ for info about this field.
            pageSize?: number,
            // See _List methods rules_ for info about this field.
            pageToken?: string,
            // See _List methods rules_ for info about this field.
            pphNames?: string,
            // See _List methods rules_ for info about this field.
            studioNames?: string,
            // Filter ExperienceLocales that match a given title-level EIDR.
            titleLevelEidr?: string,
            // Filter ExperienceLocales that match a given edit-level EIDR.
            editLevelEidr?: string,
            // Filter ExperienceLocales that match one of the given status.
            status?: string,
            // Filter ExperienceLocales that match a case-insensitive, partner-specific custom id.
            customId?: string,
            // Filter ExperienceLocales that match a case-insensitive, partner-specific Alternative Cut ID.
            altCutId?: string,
        }) : gapi.client.Request<ListExperienceLocalesResponse>;        
        
    }
    
    
    interface CountryResource {
        // Get a StoreInfo given its video id and country. See _Authentication and Authorization rules_ and _Get methods rules_ for more information about this method.
        get (request: {        
            // REQUIRED. See _General rules_ for more information about this field.
            accountId: string,
            // REQUIRED. Video ID.
            videoId: string,
            // REQUIRED. Edit country.
            country: string,
        }) : gapi.client.Request<StoreInfo>;        
        
    }
    
    
    interface StoreInfosResource {
        // List StoreInfos owned or managed by the partner. See _Authentication and Authorization rules_ and _List methods rules_ for more information about this method.
        list (request: {        
            // REQUIRED. See _General rules_ for more information about this field.
            accountId: string,
            // See _List methods rules_ for info about this field.
            pageSize?: number,
            // See _List methods rules_ for info about this field.
            pageToken?: string,
            // See _List methods rules_ for info about this field.
            pphNames?: string,
            // See _List methods rules_ for info about this field.
            studioNames?: string,
            // Filter StoreInfos that match a given `video_id`. NOTE: this field is deprecated and will be removed on V2; `video_ids` should be used instead.
            videoId?: string,
            // Filter StoreInfos that match (case-insensitive) any of the given country codes, using the "ISO 3166-1 alpha-2" format (examples: "US", "us", "Us").
            countries?: string,
            // Filter StoreInfos that match a case-insensitive substring of the default name.
            name?: string,
            // Filter StoreInfos that match any of the given `video_id`s.
            videoIds?: string,
        }) : gapi.client.Request<ListStoreInfosResponse>;        
        
        country: CountryResource,
    }
    
    
    interface AccountsResource {
        avails: AvailsResource,
        orders: OrdersResource,
        experienceLocales: ExperienceLocalesResource,
        storeInfos: StoreInfosResource,
    }
    
}

declare module gapi.client.playmoviespartner {
    var accounts: gapi.client.playmoviespartner.v1.AccountsResource; 
    
}
