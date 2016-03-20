// Type definitions for Google Google Play EMM API v1
// Project: https://developers.google.com/android/work/play/emm-api
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.androidenterprise {
    
    interface AppRestrictionsSchema {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#appRestrictionsSchema".
        kind?: string,
        // The set of restrictions that make up this schema.
        restrictions?: AppRestrictionsSchemaRestriction[],        
    }
    
    interface AppRestrictionsSchemaRestriction {
        // The default value of the restriction.
        defaultValue?: AppRestrictionsSchemaRestrictionRestrictionValue,
        // A longer description of the restriction, giving more detail of what it affects.
        description?: string,
        // For choice or multiselect restrictions, the list of possible entries' human-readable names.
        entry?: string[],        
        // For choice or multiselect restrictions, the list of possible entries' machine-readable values.
        entryValue?: string[],        
        // The unique key that the product uses to identify the restriction, e.g. "com.google.android.gm.fieldname".
        key?: string,
        // The type of the restriction.
        restrictionType?: string,
        // The name of the restriction.
        title?: string,
    }
    
    interface AppRestrictionsSchemaRestrictionRestrictionValue {
        // The type of the value being provided.
        type?: string,
        // The boolean value - this will only be present if type is bool.
        valueBool?: boolean,
        // The integer value - this will only be present if type is integer.
        valueInteger?: number,
        // The list of string values - this will only be present if type is multiselect.
        valueMultiselect?: string[],        
        // The string value - this will be present for types string, choice and hidden.
        valueString?: string,
    }
    
    interface AppVersion {
        // Unique increasing identifier for the app version.
        versionCode?: number,
        // The string used in the Play Store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be "1.4").
        versionString?: string,
    }
    
    interface ApprovalUrlInfo {
        // A URL that displays a product's permissions and that can also be used to approve the product with the Products.approve call.
        approvalUrl?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#approvalUrlInfo".
        kind?: string,
    }
    
    interface Collection {
        // Arbitrary unique ID, allocated by the API on creation.
        collectionId?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#collection".
        kind?: string,
        // A user-friendly name for the collection (should be unique), e.g. "Accounting apps".
        name?: string,
        // The IDs of the products in the collection, in the order in which they should be displayed.
        productId?: string[],        
        // Whether this collection is visible to all users, or only to the users that have been granted access through the "Collectionviewers" API. With the launch of the "setAvailableProductSet" API, this property should always be set to "viewersOnly", as the "allUsers" option will bypass the "availableProductSet" for all users within a domain.
        // 
        // The "allUsers" setting is deprecated, and will be removed.
        visibility?: string,
    }
    
    interface CollectionViewersListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#collectionViewersListResponse".
        kind?: string,
        // A user of an enterprise.
        user?: User[],        
    }
    
    interface CollectionsListResponse {
        // An ordered collection of products which can be made visible on the Google Play Store to a selected group of users.
        collection?: Collection[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#collectionsListResponse".
        kind?: string,
    }
    
    interface Device {
        // The Google Play Services Android ID for the device encoded as a lowercase hex string, e.g. "123456789abcdef0".
        androidId?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#device".
        kind?: string,
        // The mechanism by which this device is managed by the EMM. "managedDevice" means that the EMM's app is a device owner. "managedProfile" means that the EMM's app is the profile owner (and there is a separate personal profile which is not managed). "containerApp" means that the EMM's app is managing the Android for Work container app on the device.
        managementType?: string,
    }
    
    interface DeviceState {
        // The state of the Google account on the device. "enabled" indicates that the Google account on the device can be used to access Google services (including Google Play), while "disabled" means that it cannot. A new device is initially in the "disabled" state.
        accountState?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#deviceState".
        kind?: string,
    }
    
    interface DevicesListResponse {
        // A managed device.
        device?: Device[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#devicesListResponse".
        kind?: string,
    }
    
    interface Enterprise {
        // The unique ID for the enterprise.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#enterprise".
        kind?: string,
        // The name of the enterprise, e.g. "Example Inc".
        name?: string,
        // The enterprise's primary domain, e.g. "example.com".
        primaryDomain?: string,
    }
    
    interface EnterpriseAccount {
        // The email address of the service account.
        accountEmail?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#enterpriseAccount".
        kind?: string,
    }
    
    interface EnterprisesListResponse {
        // An enterprise.
        enterprise?: Enterprise[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#enterprisesListResponse".
        kind?: string,
    }
    
    interface EnterprisesSendTestPushNotificationResponse {
        // The message ID of the test push notification that was sent.
        messageId?: string,
        // The name of the Cloud Pub/Sub topic to which notifications for this enterprise's enrolled account will be sent.
        topicName?: string,
    }
    
    interface Entitlement {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#entitlement".
        kind?: string,
        // The ID of the product that the entitlement is for, e.g. "app:com.google.android.gm".
        productId?: string,
        // The reason for the entitlement, e.g. "free" for free apps. This is temporary, it will be replaced by the acquisition kind field of group licenses.
        reason?: string,
    }
    
    interface EntitlementsListResponse {
        // An entitlement of a user to a product (e.g. an app). For example, a free app that they have installed, or a paid app that they have been allocated a license to.
        entitlement?: Entitlement[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#entitlementsListResponse".
        kind?: string,
    }
    
    interface GroupLicense {
        // How this group license was acquired. "bulkPurchase" means that this group license object was created because the enterprise purchased licenses for this product; this is "free" otherwise (for free products).
        acquisitionKind?: string,
        // Whether the product to which this group license relates is currently approved by the enterprise, as either "approved" or "unapproved". Products are approved when a group license is first created, but this approval may be revoked by an enterprise admin via Google Play. Unapproved products will not be visible to end users in collections and new entitlements to them should not normally be created.
        approval?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#groupLicense".
        kind?: string,
        // The total number of provisioned licenses for this product. Returned by read operations, but ignored in write operations.
        numProvisioned?: number,
        // The number of purchased licenses (possibly in multiple purchases). If this field is omitted then there is no limit on the number of licenses that can be provisioned (e.g. if the acquisition kind is "free").
        numPurchased?: number,
        // The ID of the product that the license is for, e.g. "app:com.google.android.gm".
        productId?: string,
    }
    
    interface GroupLicenseUsersListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#groupLicenseUsersListResponse".
        kind?: string,
        // A user of an enterprise.
        user?: User[],        
    }
    
    interface GroupLicensesListResponse {
        // A group license for a product approved for use in the enterprise.
        groupLicense?: GroupLicense[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#groupLicensesListResponse".
        kind?: string,
    }
    
    interface Install {
        // Install state. The state "installPending" means that an install request has recently been made and download to the device is in progress. The state "installed" means that the app has been installed. This field is read-only.
        installState?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#install".
        kind?: string,
        // The ID of the product that the install is for, e.g. "app:com.google.android.gm".
        productId?: string,
        // The version of the installed product. Guaranteed to be set only if the install state is "installed".
        versionCode?: number,
    }
    
    interface InstallsListResponse {
        // An installation of an app for a user on a specific device. The existence of an install implies that the user must have an entitlement to the app.
        install?: Install[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#installsListResponse".
        kind?: string,
    }
    
    interface LocalizedText {
        // The BCP47 tag for a locale. (e.g. "en-US", "de").
        locale?: string,
        // The text localized in the associated locale.
        text?: string,
    }
    
    interface Permission {
        // A longer description of the permissions giving more details of what it affects.
        description?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#permission".
        kind?: string,
        // The name of the permission.
        name?: string,
        // An opaque string uniquely identifying the permission.
        permissionId?: string,
    }
    
    interface Product {
        // App versions currently available for this product. The returned list contains only public versions. Alpha and beta versions are not included.
        appVersion?: AppVersion[],        
        // The name of the author of the product (e.g. the app developer).
        authorName?: string,
        // A link to the (consumer) Google Play details page for the product.
        detailsUrl?: string,
        // How and to whom the package is made available. The value publicGoogleHosted means that the package is available through the Play Store and not restricted to a specific enterprise. The value privateGoogleHosted means that the package is a private app (restricted to an enterprise) but hosted by Google. The value privateSelfHosted means that the package is a private app (restricted to an enterprise) and is privately hosted.
        distributionChannel?: string,
        // A link to an image that can be used as an icon for the product. This image is suitable for use at up to 512px x 512px.
        iconUrl?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#product".
        kind?: string,
        // A string of the form app:<package name>. For example, app:com.google.android.gm represents the Gmail app.
        productId?: string,
        // Whether this product is free, free with in-app purchases, or paid.
        productPricing?: string,
        // Whether this app can only be installed on devices using the Android for Work container app.
        requiresContainerApp?: boolean,
        // A link to a smaller image that can be used as an icon for the product. This image is suitable for use at up to 128px x 128px.
        smallIconUrl?: string,
        // The name of the product.
        title?: string,
        // A link to the Google Play for Work details page for the product, for use by an Enterprise administrator.
        workDetailsUrl?: string,
    }
    
    interface ProductPermission {
        // An opaque string uniquely identifying the permission.
        permissionId?: string,
        // Whether the permission has been accepted or not.
        state?: string,
    }
    
    interface ProductPermissions {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#productPermissions".
        kind?: string,
        // The permissions required by the app.
        permission?: ProductPermission[],        
        // The ID of the app that the permissions relate to, e.g. "app:com.google.android.gm".
        productId?: string,
    }
    
    interface ProductSet {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#productSet".
        kind?: string,
        // The list of product IDs making up the set of products.
        productId?: string[],        
    }
    
    interface ProductsApproveRequest {
        // The approval URL that was shown to the user. Only the permissions shown to the user with that URL will be accepted, which may not be the product's entire set of permissions. For example, the URL may only display new permissions from an update after the product was approved, or not include new permissions if the product was updated since the URL was generated.
        approvalUrlInfo?: ApprovalUrlInfo,
    }
    
    interface ProductsGenerateApprovalUrlResponse {
        // A URL that can be rendered in an iframe to display the permissions (if any) of a product. This URL can be used to approve the product only once and only within 24 hours of being generated, using the Products.approve call. If the product is currently unapproved and has no permissions, this URL will point to an empty page. If the product is currently approved, a URL will only be generated if that product has added permissions since it was last approved, and the URL will only display those new permissions that have not yet been accepted.
        url?: string,
    }
    
    interface StoreCluster {
        // Unique ID of this cluster. Assigned by the server. Immutable once assigned.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeCluster".
        kind?: string,
        // Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.
        name?: LocalizedText[],        
        // String (US-ASCII only) used to determine order of this cluster within the parent page's elements. Page elements are sorted in lexicographic order of this field. Duplicated values are allowed, but ordering between elements with duplicate order is undefined.
        // 
        // The value of this field is never visible to a user, it is used solely for the purpose of defining an ordering. Maximum length is 20 characters.
        orderInPage?: string,
        // List of products in the order they are displayed in the cluster. There should not be duplicates within a cluster.
        productId?: string[],        
    }
    
    interface StoreLayout {
        // The ID of the store page to be used as the homepage. The homepage will be used as the first page shown in the Google Play for Work store.
        // 
        // If there is no homepage set, an empty store is shown. The homepage can be unset (by not specifying it) to empty the store.
        // 
        // If there exists at least one page, this field must be set to the ID of a valid page.
        homepageId?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeLayout".
        kind?: string,
    }
    
    interface StoreLayoutClustersListResponse {
        // A store cluster of an enterprise.
        cluster?: StoreCluster[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeLayoutClustersListResponse".
        kind?: string,
    }
    
    interface StoreLayoutPagesListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeLayoutPagesListResponse".
        kind?: string,
        // A store page of an enterprise.
        page?: StorePage[],        
    }
    
    interface StorePage {
        // Unique ID of this page. Assigned by the server. Immutable once assigned.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storePage".
        kind?: string,
        // Ordered list of pages a user should be able to reach from this page. The pages must exist, must not be this page, and once a link is created the page linked to cannot be deleted until all links to it are removed. It is recommended that the basic pages are created first, before adding the links between pages.
        // 
        // No attempt is made to verify that all pages are reachable from the homepage.
        link?: string[],        
        // Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.
        name?: LocalizedText[],        
    }
    
    interface User {
        // The unique ID for the user.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#user".
        kind?: string,
        // The user's primary email, e.g. "jsmith@example.com". Will always be set for Google managed users and not set for EMM managed users.
        primaryEmail?: string,
    }
    
    interface UserToken {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#userToken".
        kind?: string,
        // The token (activation code) to be entered by the user. This consists of a sequence of decimal digits. Note that the leading digit may be 0.
        token?: string,
        // The unique ID for the user.
        userId?: string,
    }
    
    interface UsersListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#usersListResponse".
        kind?: string,
        // A user of an enterprise.
        user?: User[],        
    }
    
    interface CollectionsResource {
        // Deletes a collection.
        delete (request: {        
            // The ID of the collection.
            collectionId: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves the details of a collection.
        get (request: {        
            // The ID of the collection.
            collectionId: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<Collection>;        
        
        // Creates a new collection.
        insert (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<Collection>;        
        
        // Retrieves the IDs of all the collections for an enterprise.
        list (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<CollectionsListResponse>;        
        
        // Updates a collection. This method supports patch semantics.
        patch (request: {        
            // The ID of the collection.
            collectionId: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<Collection>;        
        
        // Updates a collection.
        update (request: {        
            // The ID of the collection.
            collectionId: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<Collection>;        
        
    }
    
    
    interface CollectionviewersResource {
        // Removes the user from the list of those specifically allowed to see the collection. If the collection's visibility is set to viewersOnly then only such users will see the collection.
        delete (request: {        
            // The ID of the collection.
            collectionId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves the ID of the user if they have been specifically allowed to see the collection. If the collection's visibility is set to viewersOnly then only these users will see the collection.
        get (request: {        
            // The ID of the collection.
            collectionId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<User>;        
        
        // Retrieves the IDs of the users who have been specifically allowed to see the collection. If the collection's visibility is set to viewersOnly then only these users will see the collection.
        list (request: {        
            // The ID of the collection.
            collectionId: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<CollectionViewersListResponse>;        
        
        // Adds the user to the list of those specifically allowed to see the collection. If the collection's visibility is set to viewersOnly then only such users will see the collection. This method supports patch semantics.
        patch (request: {        
            // The ID of the collection.
            collectionId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<User>;        
        
        // Adds the user to the list of those specifically allowed to see the collection. If the collection's visibility is set to viewersOnly then only such users will see the collection.
        update (request: {        
            // The ID of the collection.
            collectionId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<User>;        
        
    }
    
    
    interface DevicesResource {
        // Retrieves the details of a device.
        get (request: {        
            // The ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<Device>;        
        
        // Retrieves whether a device is enabled or disabled for access by the user to Google services. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services.
        getState (request: {        
            // The ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<DeviceState>;        
        
        // Retrieves the IDs of all of a user's devices.
        list (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<DevicesListResponse>;        
        
        // Sets whether a device is enabled or disabled for access by the user to Google services. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services.
        setState (request: {        
            // The ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<DeviceState>;        
        
    }
    
    
    interface EnterprisesResource {
        // Deletes the binding between the EMM and enterprise. This is now deprecated; use this to unenroll customers that were previously enrolled with the 'insert' call, then enroll them again with the 'enroll' call.
        delete (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<void>;        
        
        // Enrolls an enterprise with the calling EMM.
        enroll (request: {        
            // The token provided by the enterprise to register the EMM.
            token: string,
        }) : gapi.client.Request<Enterprise>;        
        
        // Retrieves the name and domain of an enterprise.
        get (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<Enterprise>;        
        
        // Returns the store layout resource.
        getStoreLayout (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<StoreLayout>;        
        
        // Establishes the binding between the EMM and an enterprise. This is now deprecated; use enroll instead.
        insert (request: {        
            // The token provided by the enterprise to register the EMM.
            token: string,
        }) : gapi.client.Request<Enterprise>;        
        
        // Looks up an enterprise by domain name.
        list (request: {        
            // The exact primary domain name of the enterprise to look up.
            domain: string,
        }) : gapi.client.Request<EnterprisesListResponse>;        
        
        // Sends a test push notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.
        sendTestPushNotification (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<EnterprisesSendTestPushNotificationResponse>;        
        
        // Set the account that will be used to authenticate to the API as the enterprise.
        setAccount (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<EnterpriseAccount>;        
        
        // Sets the store layout resource.
        setStoreLayout (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<StoreLayout>;        
        
        // Unenrolls an enterprise from the calling EMM.
        unenroll (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface EntitlementsResource {
        // Removes an entitlement to an app for a user and uninstalls it.
        delete (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
            entitlementId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves details of an entitlement.
        get (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
            entitlementId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<Entitlement>;        
        
        // List of all entitlements for the specified user. Only the ID is set.
        list (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<EntitlementsListResponse>;        
        
        // Adds or updates an entitlement to an app for a user. This method supports patch semantics.
        patch (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
            entitlementId: string,
            // Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
            install?: boolean,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<Entitlement>;        
        
        // Adds or updates an entitlement to an app for a user.
        update (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
            entitlementId: string,
            // Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
            install?: boolean,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<Entitlement>;        
        
    }
    
    
    interface GrouplicensesResource {
        // Retrieves details of an enterprise's group license for a product.
        get (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product the group license is for, e.g. "app:com.google.android.gm".
            groupLicenseId: string,
        }) : gapi.client.Request<GroupLicense>;        
        
        // Retrieves IDs of all products for which the enterprise has a group license.
        list (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<GroupLicensesListResponse>;        
        
    }
    
    
    interface GrouplicenseusersResource {
        // Retrieves the IDs of the users who have been granted entitlements under the license.
        list (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product the group license is for, e.g. "app:com.google.android.gm".
            groupLicenseId: string,
        }) : gapi.client.Request<GroupLicenseUsersListResponse>;        
        
    }
    
    
    interface InstallsResource {
        // Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.
        delete (request: {        
            // The Android ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product represented by the install, e.g. "app:com.google.android.gm".
            installId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves details of an installation of an app on a device.
        get (request: {        
            // The Android ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product represented by the install, e.g. "app:com.google.android.gm".
            installId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<Install>;        
        
        // Retrieves the details of all apps installed on the specified device.
        list (request: {        
            // The Android ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<InstallsListResponse>;        
        
        // Requests to install the latest version of an app to a device. If the app is already installed then it is updated to the latest version if necessary. This method supports patch semantics.
        patch (request: {        
            // The Android ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product represented by the install, e.g. "app:com.google.android.gm".
            installId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<Install>;        
        
        // Requests to install the latest version of an app to a device. If the app is already installed then it is updated to the latest version if necessary.
        update (request: {        
            // The Android ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product represented by the install, e.g. "app:com.google.android.gm".
            installId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<Install>;        
        
    }
    
    
    interface PermissionsResource {
        // Retrieves details of an Android app permission for display to an enterprise admin.
        get (request: {        
            // The BCP47 tag for the user's preferred language (e.g. "en-US", "de")
            language?: string,
            // The ID of the permission.
            permissionId: string,
        }) : gapi.client.Request<Permission>;        
        
    }
    
    
    interface ProductsResource {
        // Approves the specified product (and the relevant app permissions, if any).
        approve (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product.
            productId: string,
        }) : gapi.client.Request<void>;        
        
        // Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product.
        // 
        // Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day.
        generateApprovalUrl (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The BCP 47 language code used for permission names and descriptions in the returned iframe, for instance "en-US".
            languageCode?: string,
            // The ID of the product.
            productId: string,
        }) : gapi.client.Request<ProductsGenerateApprovalUrlResponse>;        
        
        // Retrieves details of a product for display to an enterprise admin.
        get (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
            language?: string,
            // The ID of the product, e.g. "app:com.google.android.gm".
            productId: string,
        }) : gapi.client.Request<Product>;        
        
        // Retrieves the schema defining app restrictions configurable for this product. All products have a schema, but this may be empty if no app restrictions are defined.
        getAppRestrictionsSchema (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
            language?: string,
            // The ID of the product.
            productId: string,
        }) : gapi.client.Request<AppRestrictionsSchema>;        
        
        // Retrieves the Android app permissions required by this app.
        getPermissions (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product.
            productId: string,
        }) : gapi.client.Request<ProductPermissions>;        
        
        // This method has been deprecated. To programmatically approve applications, you must use the iframe mechanism via the  generateApprovalUrl and  approve methods of the Products resource. For more information, see the  Play EMM API usage requirements.
        // 
        // The updatePermissions method (deprecated) updates the set of Android app permissions for this app that have been accepted by the enterprise.
        updatePermissions (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product.
            productId: string,
        }) : gapi.client.Request<ProductPermissions>;        
        
    }
    
    
    interface StorelayoutclustersResource {
        // Deletes a cluster.
        delete (request: {        
            // The ID of the cluster.
            clusterId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves details of a cluster.
        get (request: {        
            // The ID of the cluster.
            clusterId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StoreCluster>;        
        
        // Inserts a new cluster in a page.
        insert (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StoreCluster>;        
        
        // Retrieves the details of all clusters on the specified page.
        list (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StoreLayoutClustersListResponse>;        
        
        // Updates a cluster. This method supports patch semantics.
        patch (request: {        
            // The ID of the cluster.
            clusterId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StoreCluster>;        
        
        // Updates a cluster.
        update (request: {        
            // The ID of the cluster.
            clusterId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StoreCluster>;        
        
    }
    
    
    interface StorelayoutpagesResource {
        // Deletes a store page.
        delete (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves details of a store page.
        get (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StorePage>;        
        
        // Inserts a new store page.
        insert (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<StorePage>;        
        
        // Retrieves the details of all pages in the store.
        list (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<StoreLayoutPagesListResponse>;        
        
        // Updates the content of a store page. This method supports patch semantics.
        patch (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StorePage>;        
        
        // Updates the content of a store page.
        update (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StorePage>;        
        
    }
    
    
    interface UsersResource {
        // Generates a token (activation code) to allow this user to configure their work account in the Android Setup Wizard. Revokes any previously generated token.
        // 
        // This call only works with Google managed accounts.
        generateToken (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<UserToken>;        
        
        // Retrieves a user's details.
        get (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<User>;        
        
        // Retrieves the set of products a user is entitled to access.
        getAvailableProductSet (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<ProductSet>;        
        
        // Looks up a user by their primary email address.
        list (request: {        
            // The exact primary email address of the user to look up.
            email: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<UsersListResponse>;        
        
        // Revokes a previously generated token (activation code) for the user.
        revokeToken (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Modifies the set of products a user is entitled to access.
        setAvailableProductSet (request: {        
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<ProductSet>;        
        
    }
    
}

declare module gapi.client.androidenterprise {
    var collections: gapi.client.androidenterprise.CollectionsResource; 
    
    var collectionviewers: gapi.client.androidenterprise.CollectionviewersResource; 
    
    var devices: gapi.client.androidenterprise.DevicesResource; 
    
    var enterprises: gapi.client.androidenterprise.EnterprisesResource; 
    
    var entitlements: gapi.client.androidenterprise.EntitlementsResource; 
    
    var grouplicenses: gapi.client.androidenterprise.GrouplicensesResource; 
    
    var grouplicenseusers: gapi.client.androidenterprise.GrouplicenseusersResource; 
    
    var installs: gapi.client.androidenterprise.InstallsResource; 
    
    var permissions: gapi.client.androidenterprise.PermissionsResource; 
    
    var products: gapi.client.androidenterprise.ProductsResource; 
    
    var storelayoutclusters: gapi.client.androidenterprise.StorelayoutclustersResource; 
    
    var storelayoutpages: gapi.client.androidenterprise.StorelayoutpagesResource; 
    
    var users: gapi.client.androidenterprise.UsersResource; 
    
}
