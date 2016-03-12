// Type definitions for Google Content API for Shopping v2
// Project: https://developers.google.com/shopping-content
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.content.v2 {
    
    interface Account {
        // Indicates whether the merchant sells adult content.
        adultContent?: boolean,
        // List of linked AdWords accounts, active or pending approval. To create a new link request, add a new link with status active to the list. It will remain is state pending until approved or rejected in the AdWords interface. To delete an active link or to cancel a link request, remove it from the list.
        adwordsLinks?: AccountAdwordsLink[],        
        // Merchant Center account ID.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#account".
        kind?: string,
        // Display name for the account.
        name?: string,
        // URL for individual seller reviews, i.e., reviews for each child account.
        reviewsUrl?: string,
        // Client-specific, locally-unique, internal ID for the child account.
        sellerId?: string,
        // Users with access to the account. Every account (except for subaccounts) must have at least one admin user.
        users?: AccountUser[],        
        // The merchant's website.
        websiteUrl?: string,
    }
    
    interface AccountAdwordsLink {
        // Customer ID of the AdWords account.
        adwordsId?: string,
        // Status of the link between this Merchant Center account and the AdWords account. Upon retrieval, it represents the actual status of the link and can be either active if it was approved in Google AdWords or pending if it's pending approval. Upon insertion, it represents the intended status of the link. Re-uploading a link with status active when it's still pending or with status pending when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status inactive is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending.
        status?: string,
    }
    
    interface AccountIdentifier {
        // The aggregator ID, set for aggregators and subaccounts (in that case, it represents the aggregator of the subaccount).
        aggregatorId?: string,
        // The merchant account ID, set for individual accounts and subaccounts.
        merchantId?: string,
    }
    
    interface AccountShipping {
        // The ID of the account to which these account shipping settings belong.
        accountId?: string,
        // Carrier-based shipping calculations.
        carrierRates?: AccountShippingCarrierRate[],        
        // Identifies what kind of resource this is. Value: the fixed string "content#accountShipping".
        kind?: string,
        // Location groups for shipping.
        locationGroups?: AccountShippingLocationGroup[],        
        // Rate tables definitions.
        rateTables?: AccountShippingRateTable[],        
        // Shipping services describing shipping fees calculation.
        services?: AccountShippingShippingService[],        
    }
    
    interface AccountShippingCarrierRate {
        // The carrier that is responsible for the shipping, such as "UPS", "FedEx", or "USPS".
        carrier?: string,
        // The carrier service, such as "Ground" or "2Day".
        carrierService?: string,
        // Additive shipping rate modifier.
        modifierFlatRate?: Price,
        // Multiplicative shipping rate modifier in percent. Represented as a floating point number without the percentage character.
        modifierPercent?: string,
        // The name of the carrier rate.
        name?: string,
        // The sale country for which this carrier rate is valid, represented as a CLDR territory code.
        saleCountry?: string,
        // Shipping origin represented as a postal code.
        shippingOrigin?: string,
    }
    
    interface AccountShippingCondition {
        // Delivery location in terms of a location group name. A location group with this name must be specified among location groups.
        deliveryLocationGroup?: string,
        // Delivery location in terms of a location ID. Can be used to represent administrative areas, smaller country subdivisions, or cities.
        deliveryLocationId?: string,
        // Delivery location in terms of a postal code.
        deliveryPostalCode?: string,
        // Delivery location in terms of a postal code range.
        deliveryPostalCodeRange?: AccountShippingPostalCodeRange,
        // Maximum shipping price. Forms an interval between the maximum of smaller prices (exclusive) and this price (inclusive).
        priceMax?: Price,
        // Shipping label of the product. The products with the label are matched.
        shippingLabel?: string,
        // Maximum shipping weight. Forms an interval between the maximum of smaller weight (exclusive) and this weight (inclusive).
        weightMax?: Weight,
    }
    
    interface AccountShippingLocationGroup {
        // The CLDR territory code of the country in which this location group is.
        country?: string,
        // A location ID (also called criteria ID) representing administrative areas, smaller country subdivisions (counties), or cities.
        locationIds?: string[],        
        // The name of the location group.
        name?: string,
        // A postal code range representing a city or a set of cities.
        postalCodeRanges?: AccountShippingPostalCodeRange[],        
        // A postal code representing a city or a set of cities.  
        // - A single postal code (e.g., 12345)
        // - A postal code prefix followed by a star (e.g., 1234*)
        postalCodes?: string[],        
    }
    
    interface AccountShippingPostalCodeRange {
        // The last (inclusive) postal code or prefix of the range.
        end?: string,
        // The first (inclusive) postal code or prefix of the range.
        start?: string,
    }
    
    interface AccountShippingRateTable {
        // One-dimensional table cells define one condition along the same dimension. Bi-dimensional table cells use two dimensions with respectively M and N distinct values and must contain exactly M * N cells with distinct conditions (for each possible value pairs).
        content?: AccountShippingRateTableCell[],        
        // The name of the rate table.
        name?: string,
        // The sale country for which this table is valid, represented as a CLDR territory code.
        saleCountry?: string,
    }
    
    interface AccountShippingRateTableCell {
        // Conditions for which the cell is valid. All cells in a table must use the same dimension or pair of dimensions among price, weight, shipping label or delivery location. If no condition is specified, the cell acts as a catch-all and matches all the elements that are not matched by other cells in this dimension.
        condition?: AccountShippingCondition,
        // The rate applicable if the cell conditions are matched.
        rate?: Price,
    }
    
    interface AccountShippingShippingService {
        // Whether the shipping service is available.
        active?: boolean,
        // Calculation method for the "simple" case that needs no rules.
        calculationMethod?: AccountShippingShippingServiceCalculationMethod,
        // Decision tree for "complicated" shipping cost calculation.
        costRuleTree?: AccountShippingShippingServiceCostRule,
        // The name of this shipping service.
        name?: string,
        // The CLDR territory code of the sale country for which this service can be used.
        saleCountry?: string,
    }
    
    interface AccountShippingShippingServiceCalculationMethod {
        // Name of the carrier rate to use for the calculation.
        carrierRate?: string,
        // Delivery is excluded. Valid only within cost rules tree.
        excluded?: boolean,
        // Fixed price shipping, represented as a floating point number associated with a currency.
        flatRate?: Price,
        // Percentage of the price, represented as a floating point number without the percentage character.
        percentageRate?: string,
        // Name of the rate table to use for the calculation.
        rateTable?: string,
    }
    
    interface AccountShippingShippingServiceCostRule {
        // Final calculation method to be used only in leaf nodes.
        calculationMethod?: AccountShippingShippingServiceCalculationMethod,
        // Subsequent rules to be applied, only for inner nodes. The last child must not specify a condition and acts as a catch-all.
        children?: AccountShippingShippingServiceCostRule[],        
        // Condition for this rule to be applicable. If no condition is specified, the rule acts as a catch-all.
        condition?: AccountShippingCondition,
    }
    
    interface AccountStatus {
        // The ID of the account for which the status is reported.
        accountId?: string,
        // A list of data quality issues.
        dataQualityIssues?: AccountStatusDataQualityIssue[],        
        // Identifies what kind of resource this is. Value: the fixed string "content#accountStatus".
        kind?: string,
    }
    
    interface AccountStatusDataQualityIssue {
        // Country for which this issue is reported.
        country?: string,
        // Actual value displayed on the landing page.
        displayedValue?: string,
        // Example items featuring the issue.
        exampleItems?: AccountStatusExampleItem[],        
        // Issue identifier.
        id?: string,
        // Last time the account was checked for this issue.
        lastChecked?: string,
        // Number of items in the account found to have the said issue.
        numItems?: number,
        // Severity of the problem.
        severity?: string,
        // Submitted value that causes the issue.
        submittedValue?: string,
    }
    
    interface AccountStatusExampleItem {
        // Unique item ID as specified in the uploaded product data.
        itemId?: string,
        // Landing page of the item.
        link?: string,
        // The item value that was submitted.
        submittedValue?: string,
        // Title of the item.
        title?: string,
        // The actual value on the landing page.
        valueOnLandingPage?: string,
    }
    
    interface AccountTax {
        // The ID of the account to which these account tax settings belong.
        accountId?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#accountTax".
        kind?: string,
        // Tax rules. Updating the tax rules will enable US taxes (not reversible). Defining no rules is equivalent to not charging tax at all.
        rules?: AccountTaxTaxRule[],        
    }
    
    interface AccountTaxTaxRule {
        // Country code in which tax is applicable.
        country?: string,
        // State (or province) is which the tax is applicable, described by its location id (also called criteria id).
        locationId?: string,
        // Explicit tax rate in percent, represented as a floating point number without the percentage character. Must not be negative.
        ratePercent?: string,
        // If true, shipping charges are also taxed.
        shippingTaxed?: boolean,
        // Whether the tax rate is taken from a global tax table or specified explicitly.
        useGlobalRate?: boolean,
    }
    
    interface AccountUser {
        // Whether user is an admin.
        admin?: boolean,
        // User's email address.
        emailAddress?: string,
    }
    
    interface AccountsAuthInfoResponse {
        // The account identifiers corresponding to the authenticated user.
        // - For an individual account: only the merchant ID is defined
        // - For an aggregator: only the aggregator ID is defined
        // - For a subaccount of an MCA: both the merchant ID and the aggregator ID are defined.
        accountIdentifiers?: AccountIdentifier[],        
        // Identifies what kind of resource this is. Value: the fixed string "content#accountsAuthInfoResponse".
        kind?: string,
    }
    
    interface AccountsCustomBatchRequest {
        // The request entries to be processed in the batch.
        entries?: AccountsCustomBatchRequestEntry[],        
    }
    
    interface AccountsCustomBatchRequestEntry {
        // The account to create or update. Only defined if the method is insert or update.
        account?: Account,
        // The ID of the account to get or delete. Only defined if the method is get or delete.
        accountId?: string,
        // An entry ID, unique within the batch request.
        batchId?: number,
        // The ID of the managing account.
        merchantId?: string,
        // 
        method?: string,
    }
    
    interface AccountsCustomBatchResponse {
        // The result of the execution of the batch requests.
        entries?: AccountsCustomBatchResponseEntry[],        
        // Identifies what kind of resource this is. Value: the fixed string "content#accountsCustomBatchResponse".
        kind?: string,
    }
    
    interface AccountsCustomBatchResponseEntry {
        // The retrieved, created, or updated account. Not defined if the method was delete.
        account?: Account,
        // The ID of the request entry this entry responds to.
        batchId?: number,
        // A list of errors defined if and only if the request failed.
        errors?: Errors,
        // Identifies what kind of resource this is. Value: the fixed string "content#accountsCustomBatchResponseEntry".
        kind?: string,
    }
    
    interface AccountsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#accountsListResponse".
        kind?: string,
        // The token for the retrieval of the next page of accounts.
        nextPageToken?: string,
        // 
        resources?: Account[],        
    }
    
    interface AccountshippingCustomBatchRequest {
        // The request entries to be processed in the batch.
        entries?: AccountshippingCustomBatchRequestEntry[],        
    }
    
    interface AccountshippingCustomBatchRequestEntry {
        // The ID of the account for which to get/update account shipping settings.
        accountId?: string,
        // The account shipping settings to update. Only defined if the method is update.
        accountShipping?: AccountShipping,
        // An entry ID, unique within the batch request.
        batchId?: number,
        // The ID of the managing account.
        merchantId?: string,
        // 
        method?: string,
    }
    
    interface AccountshippingCustomBatchResponse {
        // The result of the execution of the batch requests.
        entries?: AccountshippingCustomBatchResponseEntry[],        
        // Identifies what kind of resource this is. Value: the fixed string "content#accountshippingCustomBatchResponse".
        kind?: string,
    }
    
    interface AccountshippingCustomBatchResponseEntry {
        // The retrieved or updated account shipping settings.
        accountShipping?: AccountShipping,
        // The ID of the request entry this entry responds to.
        batchId?: number,
        // A list of errors defined if and only if the request failed.
        errors?: Errors,
        // Identifies what kind of resource this is. Value: the fixed string "content#accountshippingCustomBatchResponseEntry".
        kind?: string,
    }
    
    interface AccountshippingListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#accountshippingListResponse".
        kind?: string,
        // The token for the retrieval of the next page of account shipping settings.
        nextPageToken?: string,
        // 
        resources?: AccountShipping[],        
    }
    
    interface AccountstatusesCustomBatchRequest {
        // The request entries to be processed in the batch.
        entries?: AccountstatusesCustomBatchRequestEntry[],        
    }
    
    interface AccountstatusesCustomBatchRequestEntry {
        // The ID of the (sub-)account whose status to get.
        accountId?: string,
        // An entry ID, unique within the batch request.
        batchId?: number,
        // The ID of the managing account.
        merchantId?: string,
        // The method (get).
        method?: string,
    }
    
    interface AccountstatusesCustomBatchResponse {
        // The result of the execution of the batch requests.
        entries?: AccountstatusesCustomBatchResponseEntry[],        
        // Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesCustomBatchResponse".
        kind?: string,
    }
    
    interface AccountstatusesCustomBatchResponseEntry {
        // The requested account status. Defined if and only if the request was successful.
        accountStatus?: AccountStatus,
        // The ID of the request entry this entry responds to.
        batchId?: number,
        // A list of errors defined if and only if the request failed.
        errors?: Errors,
    }
    
    interface AccountstatusesListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesListResponse".
        kind?: string,
        // The token for the retrieval of the next page of account statuses.
        nextPageToken?: string,
        // 
        resources?: AccountStatus[],        
    }
    
    interface AccounttaxCustomBatchRequest {
        // The request entries to be processed in the batch.
        entries?: AccounttaxCustomBatchRequestEntry[],        
    }
    
    interface AccounttaxCustomBatchRequestEntry {
        // The ID of the account for which to get/update account tax settings.
        accountId?: string,
        // The account tax settings to update. Only defined if the method is update.
        accountTax?: AccountTax,
        // An entry ID, unique within the batch request.
        batchId?: number,
        // The ID of the managing account.
        merchantId?: string,
        // 
        method?: string,
    }
    
    interface AccounttaxCustomBatchResponse {
        // The result of the execution of the batch requests.
        entries?: AccounttaxCustomBatchResponseEntry[],        
        // Identifies what kind of resource this is. Value: the fixed string "content#accounttaxCustomBatchResponse".
        kind?: string,
    }
    
    interface AccounttaxCustomBatchResponseEntry {
        // The retrieved or updated account tax settings.
        accountTax?: AccountTax,
        // The ID of the request entry this entry responds to.
        batchId?: number,
        // A list of errors defined if and only if the request failed.
        errors?: Errors,
        // Identifies what kind of resource this is. Value: the fixed string "content#accounttaxCustomBatchResponseEntry".
        kind?: string,
    }
    
    interface AccounttaxListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#accounttaxListResponse".
        kind?: string,
        // The token for the retrieval of the next page of account tax settings.
        nextPageToken?: string,
        // 
        resources?: AccountTax[],        
    }
    
    interface Datafeed {
        // The two-letter ISO 639-1 language in which the attributes are defined in the data feed.
        attributeLanguage?: string,
        // The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for targetCountry.
        contentLanguage?: string,
        // The type of data feed.
        contentType?: string,
        // Fetch schedule for the feed file.
        fetchSchedule?: DatafeedFetchSchedule,
        // The filename of the feed. All feeds must have a unique file name.
        fileName?: string,
        // Format of the feed file.
        format?: DatafeedFormat,
        // The ID of the data feed.
        id?: string,
        // The list of intended destinations (corresponds to checked check boxes in Merchant Center).
        intendedDestinations?: string[],        
        // Identifies what kind of resource this is. Value: the fixed string "content#datafeed".
        kind?: string,
        // A descriptive name of the data feed.
        name?: string,
        // The country where the items in the feed will be included in the search index, represented as a CLDR territory code.
        targetCountry?: string,
    }
    
    interface DatafeedFetchSchedule {
        // The day of the month the feed file should be fetched (1-31).
        dayOfMonth?: number,
        // The URL where the feed file can be fetched. Google Merchant Center will support automatic scheduled uploads using the HTTP, HTTPS, FTP, or SFTP protocols, so the value will need to be a valid link using one of those four protocols.
        fetchUrl?: string,
        // The hour of the day the feed file should be fetched (0-23).
        hour?: number,
        // The minute of the hour the feed file should be fetched (0-59). Read-only.
        minuteOfHour?: number,
        // An optional password for fetch_url.
        password?: string,
        // Time zone used for schedule. UTC by default. E.g., "America/Los_Angeles".
        timeZone?: string,
        // An optional user name for fetch_url.
        username?: string,
        // The day of the week the feed file should be fetched.
        weekday?: string,
    }
    
    interface DatafeedFormat {
        // Delimiter for the separation of values in a delimiter-separated values feed. If not specified, the delimiter will be auto-detected. Ignored for non-DSV data feeds.
        columnDelimiter?: string,
        // Character encoding scheme of the data feed. If not specified, the encoding will be auto-detected.
        fileEncoding?: string,
        // Specifies how double quotes are interpreted. If not specified, the mode will be auto-detected. Ignored for non-DSV data feeds.
        quotingMode?: string,
    }
    
    interface DatafeedStatus {
        // The ID of the feed for which the status is reported.
        datafeedId?: string,
        // The list of errors occurring in the feed.
        errors?: DatafeedStatusError[],        
        // The number of items in the feed that were processed.
        itemsTotal?: string,
        // The number of items in the feed that were valid.
        itemsValid?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#datafeedStatus".
        kind?: string,
        // The last date at which the feed was uploaded.
        lastUploadDate?: string,
        // The processing status of the feed.
        processingStatus?: string,
        // The list of errors occurring in the feed.
        warnings?: DatafeedStatusError[],        
    }
    
    interface DatafeedStatusError {
        // The code of the error, e.g., "validation/invalid_value".
        code?: string,
        // The number of occurrences of the error in the feed.
        count?: string,
        // A list of example occurrences of the error, grouped by product.
        examples?: DatafeedStatusExample[],        
        // The error message, e.g., "Invalid price".
        message?: string,
    }
    
    interface DatafeedStatusExample {
        // The ID of the example item.
        itemId?: string,
        // Line number in the data feed where the example is found.
        lineNumber?: string,
        // The problematic value.
        value?: string,
    }
    
    interface DatafeedsCustomBatchRequest {
        // The request entries to be processed in the batch.
        entries?: DatafeedsCustomBatchRequestEntry[],        
    }
    
    interface DatafeedsCustomBatchRequestEntry {
        // An entry ID, unique within the batch request.
        batchId?: number,
        // The data feed to insert.
        datafeed?: Datafeed,
        // The ID of the data feed to get or delete.
        datafeedId?: string,
        // The ID of the managing account.
        merchantId?: string,
        // 
        method?: string,
    }
    
    interface DatafeedsCustomBatchResponse {
        // The result of the execution of the batch requests.
        entries?: DatafeedsCustomBatchResponseEntry[],        
        // Identifies what kind of resource this is. Value: the fixed string "content#datafeedsCustomBatchResponse".
        kind?: string,
    }
    
    interface DatafeedsCustomBatchResponseEntry {
        // The ID of the request entry this entry responds to.
        batchId?: number,
        // The requested data feed. Defined if and only if the request was successful.
        datafeed?: Datafeed,
        // A list of errors defined if and only if the request failed.
        errors?: Errors,
    }
    
    interface DatafeedsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#datafeedsListResponse".
        kind?: string,
        // The token for the retrieval of the next page of datafeeds.
        nextPageToken?: string,
        // 
        resources?: Datafeed[],        
    }
    
    interface DatafeedstatusesCustomBatchRequest {
        // The request entries to be processed in the batch.
        entries?: DatafeedstatusesCustomBatchRequestEntry[],        
    }
    
    interface DatafeedstatusesCustomBatchRequestEntry {
        // An entry ID, unique within the batch request.
        batchId?: number,
        // The ID of the data feed to get or delete.
        datafeedId?: string,
        // The ID of the managing account.
        merchantId?: string,
        // 
        method?: string,
    }
    
    interface DatafeedstatusesCustomBatchResponse {
        // The result of the execution of the batch requests.
        entries?: DatafeedstatusesCustomBatchResponseEntry[],        
        // Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesCustomBatchResponse".
        kind?: string,
    }
    
    interface DatafeedstatusesCustomBatchResponseEntry {
        // The ID of the request entry this entry responds to.
        batchId?: number,
        // The requested data feed status. Defined if and only if the request was successful.
        datafeedStatus?: DatafeedStatus,
        // A list of errors defined if and only if the request failed.
        errors?: Errors,
    }
    
    interface DatafeedstatusesListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesListResponse".
        kind?: string,
        // The token for the retrieval of the next page of datafeed statuses.
        nextPageToken?: string,
        // 
        resources?: DatafeedStatus[],        
    }
    
    interface Error {
        // The domain of the error.
        domain?: string,
        // A description of the error.
        message?: string,
        // The error code.
        reason?: string,
    }
    
    interface Errors {
        // The HTTP status of the first error in errors.
        code?: number,
        // A list of errors.
        errors?: Error[],        
        // The message of the first error in errors.
        message?: string,
    }
    
    interface Installment {
        // The amount the buyer has to pay per month.
        amount?: Price,
        // The number of installments the buyer has to pay.
        months?: string,
    }
    
    interface Inventory {
        // The availability of the product.
        availability?: string,
        // Number and amount of installments to pay for an item. Brazil only.
        installment?: Installment,
        // Identifies what kind of resource this is. Value: the fixed string "content#inventory".
        kind?: string,
        // Loyalty points that users receive after purchasing the item. Japan only.
        loyaltyPoints?: LoyaltyPoints,
        // The price of the product.
        price?: Price,
        // The quantity of the product. Must be equal to or greater than zero. Supported only for local products.
        quantity?: number,
        // The sale price of the product. Mandatory if sale_price_effective_date is defined.
        salePrice?: Price,
        // A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided.
        salePriceEffectiveDate?: string,
        // The quantity of the product that is reserved for sell-on-google ads. Supported only for online products.
        sellOnGoogleQuantity?: number,
    }
    
    interface InventoryCustomBatchRequest {
        // The request entries to be processed in the batch.
        entries?: InventoryCustomBatchRequestEntry[],        
    }
    
    interface InventoryCustomBatchRequestEntry {
        // An entry ID, unique within the batch request.
        batchId?: number,
        // Price and availability of the product.
        inventory?: Inventory,
        // The ID of the managing account.
        merchantId?: string,
        // The ID of the product for which to update price and availability.
        productId?: string,
        // The code of the store for which to update price and availability. Use online to update price and availability of an online product.
        storeCode?: string,
    }
    
    interface InventoryCustomBatchResponse {
        // The result of the execution of the batch requests.
        entries?: InventoryCustomBatchResponseEntry[],        
        // Identifies what kind of resource this is. Value: the fixed string "content#inventoryCustomBatchResponse".
        kind?: string,
    }
    
    interface InventoryCustomBatchResponseEntry {
        // The ID of the request entry this entry responds to.
        batchId?: number,
        // A list of errors defined if and only if the request failed.
        errors?: Errors,
        // Identifies what kind of resource this is. Value: the fixed string "content#inventoryCustomBatchResponseEntry".
        kind?: string,
    }
    
    interface InventorySetRequest {
        // The availability of the product.
        availability?: string,
        // Number and amount of installments to pay for an item. Brazil only.
        installment?: Installment,
        // Loyalty points that users receive after purchasing the item. Japan only.
        loyaltyPoints?: LoyaltyPoints,
        // The price of the product.
        price?: Price,
        // The quantity of the product. Must be equal to or greater than zero. Supported only for local products.
        quantity?: number,
        // The sale price of the product. Mandatory if sale_price_effective_date is defined.
        salePrice?: Price,
        // A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided.
        salePriceEffectiveDate?: string,
        // The quantity of the product that is reserved for sell-on-google ads. Supported only for online products.
        sellOnGoogleQuantity?: number,
    }
    
    interface InventorySetResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#inventorySetResponse".
        kind?: string,
    }
    
    interface LoyaltyPoints {
        // Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters.
        name?: string,
        // The retailer's loyalty points in absolute value.
        pointsValue?: string,
        // The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is left out, it defaults to 1.0.
        ratio?: number,
    }
    
    interface Order {
        // Whether the order was acknowledged.
        acknowledged?: boolean,
        // The details of the customer who placed the order.
        customer?: OrderCustomer,
        // The details for the delivery.
        deliveryDetails?: OrderDeliveryDetails,
        // The REST id of the order. Globally unique.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#order".
        kind?: string,
        // Line items that are ordered.
        lineItems?: OrderLineItem[],        
        // 
        merchantId?: string,
        // Merchant-provided id of the order.
        merchantOrderId?: string,
        // The net amount for the order. For example, if an order was originally for a grand total of $100 and a refund was issued for $20, the net amount will be $80.
        netAmount?: Price,
        // The details of the payment method.
        paymentMethod?: OrderPaymentMethod,
        // The status of the payment.
        paymentStatus?: string,
        // The date when the order was placed, in ISO 8601 format.
        placedDate?: string,
        // The details of the merchant provided promotions applied to the order. More details about the program are  here.
        promotions?: OrderPromotion[],        
        // Refunds for the order.
        refunds?: OrderRefund[],        
        // Shipments of the order.
        shipments?: OrderShipment[],        
        // The total cost of shipping for all items.
        shippingCost?: Price,
        // The tax for the total shipping cost.
        shippingCostTax?: Price,
        // The requested shipping option.
        shippingOption?: string,
        // The status of the order.
        status?: string,
    }
    
    interface OrderAddress {
        // CLDR country code (e.g. "US").
        country?: string,
        // Strings representing the lines of the printed label for mailing the order, for example:
        // John Smith
        // 1600 Amphitheatre Parkway
        // Mountain View, CA, 94043
        // United States
        fullAddress?: string[],        
        // Whether the address is a post office box.
        isPostOfficeBox?: boolean,
        // City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).
        locality?: string,
        // Postal Code or ZIP (e.g. "94043").
        postalCode?: string,
        // Name of the recipient.
        recipientName?: string,
        // Top-level administrative subdivision of the country (e.g. "CA").
        region?: string,
        // Street-level part of the address.
        streetAddress?: string[],        
    }
    
    interface OrderCancellation {
        // The actor that created the cancellation.
        actor?: string,
        // Date on which the cancellation has been created, in ISO 8601 format.
        creationDate?: string,
        // The quantity that was canceled.
        quantity?: number,
        // The reason for the cancellation.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrderCustomer {
        // Email address of the customer.
        email?: string,
        // If set, this indicates the user had a choice to opt in or out of providing marketing rights to the merchant. If unset, this indicates the user has already made this choice in a previous purchase, and was thus not shown the marketing right opt in/out checkbox during the Purchases on Google checkout flow.
        explicitMarketingPreference?: boolean,
        // Full name of the customer.
        fullName?: string,
    }
    
    interface OrderDeliveryDetails {
        // The delivery address
        address?: OrderAddress,
        // The phone number of the person receiving the delivery.
        phoneNumber?: string,
    }
    
    interface OrderLineItem {
        // Cancellations of the line item.
        cancellations?: OrderCancellation[],        
        // The id of the line item.
        id?: string,
        // Total price for the line item. For example, if two items for $10 are purchased, the total price will be $20.
        price?: Price,
        // Product data from the time of the order placement.
        product?: OrderLineItemProduct,
        // Number of items canceled.
        quantityCanceled?: number,
        // Number of items delivered.
        quantityDelivered?: number,
        // Number of items ordered.
        quantityOrdered?: number,
        // Number of items pending.
        quantityPending?: number,
        // Number of items returned.
        quantityReturned?: number,
        // Number of items shipped.
        quantityShipped?: number,
        // Details of the return policy for the line item.
        returnInfo?: OrderLineItemReturnInfo,
        // Returns of the line item.
        returns?: OrderReturn[],        
        // Details of the requested shipping for the line item.
        shippingDetails?: OrderLineItemShippingDetails,
        // Total tax amount for the line item. For example, if two items are purchased, and each have a cost tax of $2, the total tax amount will be $4.
        tax?: Price,
    }
    
    interface OrderLineItemProduct {
        // Brand of the item.
        brand?: string,
        // The item's channel (online or local).
        channel?: string,
        // Condition or state of the item.
        condition?: string,
        // The two-letter ISO 639-1 language code for the item.
        contentLanguage?: string,
        // Global Trade Item Number (GTIN) of the item.
        gtin?: string,
        // The REST id of the product.
        id?: string,
        // URL of an image of the item.
        imageLink?: string,
        // Shared identifier for all variants of the same product.
        itemGroupId?: string,
        // Manufacturer Part Number (MPN) of the item.
        mpn?: string,
        // An identifier of the item.
        offerId?: string,
        // Price of the item.
        price?: Price,
        // URL to the cached image shown to the user when order was placed.
        shownImage?: string,
        // The CLDR territory code of the target country of the product.
        targetCountry?: string,
        // The title of the product.
        title?: string,
        // Variant attributes for the item. These are dimensions of the product, such as color, gender, material, pattern, and size. You can find a comprehensive list of variant attributes here.
        variantAttributes?: OrderLineItemProductVariantAttribute[],        
    }
    
    interface OrderLineItemProductVariantAttribute {
        // The dimension of the variant.
        dimension?: string,
        // The value for the dimension.
        value?: string,
    }
    
    interface OrderLineItemReturnInfo {
        // How many days later the item can be returned.
        daysToReturn?: number,
        // Whether the item is returnable.
        isReturnable?: boolean,
        // URL of the item return policy.
        policyUrl?: string,
    }
    
    interface OrderLineItemShippingDetails {
        // The delivery by date, in ISO 8601 format.
        deliverByDate?: string,
        // Details of the shipping method.
        method?: OrderLineItemShippingDetailsMethod,
        // The ship by date, in ISO 8601 format.
        shipByDate?: string,
    }
    
    interface OrderLineItemShippingDetailsMethod {
        // The carrier for the shipping. Optional.
        carrier?: string,
        // Maximum transit time.
        maxDaysInTransit?: number,
        // The name of the shipping method.
        methodName?: string,
        // Minimum transit time.
        minDaysInTransit?: number,
    }
    
    interface OrderPaymentMethod {
        // The billing address.
        billingAddress?: OrderAddress,
        // The card expiration month (January = 1, February = 2 etc.).
        expirationMonth?: number,
        // The card expiration year (4-digit, e.g. 2015).
        expirationYear?: number,
        // The last four digits of the card number.
        lastFourDigits?: string,
        // The billing phone number.
        phoneNumber?: string,
        // The type of instrument (VISA, Mastercard, etc).
        type?: string,
    }
    
    interface OrderPromotion {
        // 
        benefits?: OrderPromotionBenefit[],        
        // The date and time frame when the promotion is active and ready for validation review. Note that the promotion live time may be delayed for a few hours due to the validation review.
        // Start date and end date are separated by a forward slash (/). The start date is specified by the format (YYYY-MM-DD), followed by the letter ?T?, the time of the day when the sale starts (in Greenwich Mean Time, GMT), followed by an expression of the time zone for the sale. The end date is in the same format.
        effectiveDates?: string,
        // Optional. The text code that corresponds to the promotion when applied on the retailer?s website.
        genericRedemptionCode?: string,
        // The unique ID of the promotion.
        id?: string,
        // The full title of the promotion.
        longTitle?: string,
        // Whether the promotion is applicable to all products or only specific products.
        productApplicability?: string,
        // Indicates that the promotion is valid online.
        redemptionChannel?: string,
    }
    
    interface OrderPromotionBenefit {
        // The discount in the order price when the promotion is applied.
        discount?: Price,
        // The OfferId(s) that were purchased in this order and map to this specific benefit of the promotion.
        offerIds?: string[],        
        // Further describes the benefit of the promotion. Note that we will expand on this enumeration as we support new promotion sub-types.
        subType?: string,
        // The impact on tax when the promotion is applied.
        taxImpact?: Price,
        // Describes whether the promotion applies to products (e.g. 20% off) or to shipping (e.g. Free Shipping).
        type?: string,
    }
    
    interface OrderRefund {
        // The actor that created the refund.
        actor?: string,
        // The amount that is refunded.
        amount?: Price,
        // Date on which the item has been created, in ISO 8601 format.
        creationDate?: string,
        // The reason for the refund.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrderReturn {
        // The actor that created the refund.
        actor?: string,
        // Date on which the item has been created, in ISO 8601 format.
        creationDate?: string,
        // Quantity that is returned.
        quantity?: number,
        // The reason for the return.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrderShipment {
        // The carrier handling the shipment.
        carrier?: string,
        // Date on which the shipment has been created, in ISO 8601 format.
        creationDate?: string,
        // Date on which the shipment has been delivered, in ISO 8601 format. Present only if status is delievered
        deliveryDate?: string,
        // The id of the shipment.
        id?: string,
        // The line items that are shipped.
        lineItems?: OrderShipmentLineItemShipment[],        
        // The status of the shipment.
        status?: string,
        // The tracking id for the shipment.
        trackingId?: string,
    }
    
    interface OrderShipmentLineItemShipment {
        // The id of the line item that is shipped.
        lineItemId?: string,
        // The quantity that is shipped.
        quantity?: number,
    }
    
    interface OrdersAcknowledgeRequest {
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
    }
    
    interface OrdersAcknowledgeResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersAcknowledgeResponse".
        kind?: string,
    }
    
    interface OrdersAdvanceTestOrderResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersAdvanceTestOrderResponse".
        kind?: string,
    }
    
    interface OrdersCancelLineItemRequest {
        // Amount to refund for the cancelation. Optional. If not set, Google will calculate the default based on the price and tax of the items involved. The amount must not be larger than the net amount left on the order.
        amount?: Price,
        // The ID of the line item to cancel.
        lineItemId?: string,
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
        // The quantity to cancel.
        quantity?: number,
        // The reason for the cancellation.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersCancelLineItemResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelLineItemResponse".
        kind?: string,
    }
    
    interface OrdersCancelRequest {
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
        // The reason for the cancellation.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersCancelResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelResponse".
        kind?: string,
    }
    
    interface OrdersCreateTestOrderRequest {
        // The test order template to use. Specify as an alternative to testOrder as a shortcut for retrieving a template and then creating an order using that template.
        templateName?: string,
        // The test order to create.
        testOrder?: TestOrder,
    }
    
    interface OrdersCreateTestOrderResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestOrderResponse".
        kind?: string,
        // The ID of the newly created test order.
        orderId?: string,
    }
    
    interface OrdersCustomBatchRequest {
        // The request entries to be processed in the batch.
        entries?: OrdersCustomBatchRequestEntry[],        
    }
    
    interface OrdersCustomBatchRequestEntry {
        // An entry ID, unique within the batch request.
        batchId?: number,
        // Required for cancel method.
        cancel?: OrdersCustomBatchRequestEntryCancel,
        // Required for cancelLineItem method.
        cancelLineItem?: OrdersCustomBatchRequestEntryCancelLineItem,
        // The ID of the managing account.
        merchantId?: string,
        // The merchant order id. Required for updateMerchantOrderId and getByMerchantOrderId methods.
        merchantOrderId?: string,
        // The method to apply.
        method?: string,
        // The ID of the operation. Unique across all operations for a given order. Required for all methods beside get and getByMerchantOrderId.
        operationId?: string,
        // The ID of the order. Required for all methods beside getByMerchantOrderId.
        orderId?: string,
        // Required for refund method.
        refund?: OrdersCustomBatchRequestEntryRefund,
        // Required for returnLineItem method.
        returnLineItem?: OrdersCustomBatchRequestEntryReturnLineItem,
        // Required for shipLineItems method.
        shipLineItems?: OrdersCustomBatchRequestEntryShipLineItems,
        // Required for updateShipment method.
        updateShipment?: OrdersCustomBatchRequestEntryUpdateShipment,
    }
    
    interface OrdersCustomBatchRequestEntryCancel {
        // The reason for the cancellation.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersCustomBatchRequestEntryCancelLineItem {
        // Amount to refund for the cancelation. Optional. If not set, Google will calculate the default based on the price and tax of the items involved. The amount must not be larger than the net amount left on the order.
        amount?: Price,
        // The ID of the line item to cancel.
        lineItemId?: string,
        // The quantity to cancel.
        quantity?: number,
        // The reason for the cancellation.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersCustomBatchRequestEntryRefund {
        // The amount that is refunded.
        amount?: Price,
        // The reason for the refund.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersCustomBatchRequestEntryReturnLineItem {
        // The ID of the line item to return.
        lineItemId?: string,
        // The quantity to return.
        quantity?: number,
        // The reason for the return.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersCustomBatchRequestEntryShipLineItems {
        // The carrier handling the shipment.
        carrier?: string,
        // Line items to ship.
        lineItems?: OrderShipmentLineItemShipment[],        
        // The ID of the shipment.
        shipmentId?: string,
        // The tracking id for the shipment.
        trackingId?: string,
    }
    
    interface OrdersCustomBatchRequestEntryUpdateShipment {
        // The carrier handling the shipment. Not updated if missing.
        carrier?: string,
        // The ID of the shipment.
        shipmentId?: string,
        // New status for the shipment. Not updated if missing.
        status?: string,
        // The tracking id for the shipment. Not updated if missing.
        trackingId?: string,
    }
    
    interface OrdersCustomBatchResponse {
        // The result of the execution of the batch requests.
        entries?: OrdersCustomBatchResponseEntry[],        
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersCustomBatchResponse".
        kind?: string,
    }
    
    interface OrdersCustomBatchResponseEntry {
        // The ID of the request entry this entry responds to.
        batchId?: number,
        // A list of errors defined if and only if the request failed.
        errors?: Errors,
        // The status of the execution. Only defined if the method is not get or getByMerchantOrderId and if the request was successful.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersCustomBatchResponseEntry".
        kind?: string,
        // The retrieved order. Only defined if the method is get and if the request was successful.
        order?: Order,
    }
    
    interface OrdersGetByMerchantOrderIdResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersGetByMerchantOrderIdResponse".
        kind?: string,
        // The requested order.
        order?: Order,
    }
    
    interface OrdersGetTestOrderTemplateResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersGetTestOrderTemplateResponse".
        kind?: string,
        // The requested test order template.
        template?: TestOrder,
    }
    
    interface OrdersListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersListResponse".
        kind?: string,
        // The token for the retrieval of the next page of orders.
        nextPageToken?: string,
        // 
        resources?: Order[],        
    }
    
    interface OrdersRefundRequest {
        // The amount that is refunded.
        amount?: Price,
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
        // The reason for the refund.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersRefundResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersRefundResponse".
        kind?: string,
    }
    
    interface OrdersReturnLineItemRequest {
        // The ID of the line item to return.
        lineItemId?: string,
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
        // The quantity to return.
        quantity?: number,
        // The reason for the return.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersReturnLineItemResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnLineItemResponse".
        kind?: string,
    }
    
    interface OrdersShipLineItemsRequest {
        // The carrier handling the shipment.
        carrier?: string,
        // Line items to ship.
        lineItems?: OrderShipmentLineItemShipment[],        
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
        // The ID of the shipment.
        shipmentId?: string,
        // The tracking id for the shipment.
        trackingId?: string,
    }
    
    interface OrdersShipLineItemsResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersShipLineItemsResponse".
        kind?: string,
    }
    
    interface OrdersUpdateMerchantOrderIdRequest {
        // The merchant order id to be assigned to the order. Must be unique per merchant.
        merchantOrderId?: string,
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
    }
    
    interface OrdersUpdateMerchantOrderIdResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateMerchantOrderIdResponse".
        kind?: string,
    }
    
    interface OrdersUpdateShipmentRequest {
        // The carrier handling the shipment. Not updated if missing.
        carrier?: string,
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
        // The ID of the shipment.
        shipmentId?: string,
        // New status for the shipment. Not updated if missing.
        status?: string,
        // The tracking id for the shipment. Not updated if missing.
        trackingId?: string,
    }
    
    interface OrdersUpdateShipmentResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateShipmentResponse".
        kind?: string,
    }
    
    interface Price {
        // The currency of the price.
        currency?: string,
        // The price represented as a number.
        value?: string,
    }
    
    interface Product {
        // Additional URLs of images of the item.
        additionalImageLinks?: string[],        
        // Set to true if the item is targeted towards adults.
        adult?: boolean,
        // Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise.
        adwordsGrouping?: string,
        // Similar to adwords_grouping, but only works on CPC.
        adwordsLabels?: string[],        
        // Allows advertisers to override the item URL when the product is shown within the context of Product Ads.
        adwordsRedirect?: string,
        // Target age group of the item.
        ageGroup?: string,
        // Specifies the intended aspects for the product.
        aspects?: ProductAspect[],        
        // Availability status of the item.
        availability?: string,
        // The day a pre-ordered product becomes available for delivery, in ISO 8601 format.
        availabilityDate?: string,
        // Brand of the item.
        brand?: string,
        // The item's channel (online or local).
        channel?: string,
        // Color of the item.
        color?: string,
        // Condition or state of the item.
        condition?: string,
        // The two-letter ISO 639-1 language code for the item.
        contentLanguage?: string,
        // A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (e.g., { "name": "size type", "type": "text", "value": "regular" }). This is useful for submitting attributes not explicitly exposed by the API.
        customAttributes?: ProductCustomAttribute[],        
        // A list of custom (merchant-provided) custom attribute groups.
        customGroups?: ProductCustomGroup[],        
        // Custom label 0 for custom grouping of items in a Shopping campaign.
        customLabel0?: string,
        // Custom label 1 for custom grouping of items in a Shopping campaign.
        customLabel1?: string,
        // Custom label 2 for custom grouping of items in a Shopping campaign.
        customLabel2?: string,
        // Custom label 3 for custom grouping of items in a Shopping campaign.
        customLabel3?: string,
        // Custom label 4 for custom grouping of items in a Shopping campaign.
        customLabel4?: string,
        // Description of the item.
        description?: string,
        // Specifies the intended destinations for the product.
        destinations?: ProductDestination[],        
        // An identifier for an item for dynamic remarketing campaigns.
        displayAdsId?: string,
        // URL directly to your item's landing page for dynamic remarketing campaigns.
        displayAdsLink?: string,
        // Advertiser-specified recommendations.
        displayAdsSimilarIds?: string[],        
        // Title of an item for dynamic remarketing campaigns.
        displayAdsTitle?: string,
        // Offer margin for dynamic remarketing campaigns.
        displayAdsValue?: number,
        // The energy efficiency class as defined in EU directive 2010/30/EU.
        energyEfficiencyClass?: string,
        // Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in productstatuses as googleExpirationDate and might be earlier if expirationDate is too far in the future.
        expirationDate?: string,
        // Target gender of the item.
        gender?: string,
        // Google's category of the item (see Google product taxonomy).
        googleProductCategory?: string,
        // Global Trade Item Number (GTIN) of the item.
        gtin?: string,
        // The REST id of the product.
        id?: string,
        // False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada.
        identifierExists?: boolean,
        // URL of an image of the item.
        imageLink?: string,
        // Number and amount of installments to pay for an item. Brazil only.
        installment?: Installment,
        // Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price.
        isBundle?: boolean,
        // Shared identifier for all variants of the same product.
        itemGroupId?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#product".
        kind?: string,
        // URL directly linking to your item's page on your website.
        link?: string,
        // Loyalty points that users receive after purchasing the item. Japan only.
        loyaltyPoints?: LoyaltyPoints,
        // The material of which the item is made.
        material?: string,
        // Link to a mobile-optimized version of the landing page.
        mobileLink?: string,
        // Manufacturer Part Number (MPN) of the item.
        mpn?: string,
        // The number of identical products in a merchant-defined multipack.
        multipack?: string,
        // An identifier of the item.
        offerId?: string,
        // Whether an item is available for purchase only online.
        onlineOnly?: boolean,
        // The item's pattern (e.g. polka dots).
        pattern?: string,
        // Price of the item.
        price?: Price,
        // Your category of the item (formatted as in product feeds specification).
        productType?: string,
        // The unique ID of a promotion.
        promotionIds?: string[],        
        // Advertised sale price of the item.
        salePrice?: Price,
        // Date range during which the item is on sale (see product feed specifications).
        salePriceEffectiveDate?: string,
        // The quantity of the product that is reserved for sell-on-google ads.
        sellOnGoogleQuantity?: string,
        // Shipping rules.
        shipping?: ProductShipping[],        
        // Height of the item for shipping.
        shippingHeight?: ProductShippingDimension,
        // The shipping label of the product, used to group product in account-level shipping rules.
        shippingLabel?: string,
        // Length of the item for shipping.
        shippingLength?: ProductShippingDimension,
        // Weight of the item for shipping.
        shippingWeight?: ProductShippingWeight,
        // Width of the item for shipping.
        shippingWidth?: ProductShippingDimension,
        // System in which the size is specified. Recommended for apparel items.
        sizeSystem?: string,
        // The cut of the item. Recommended for apparel items.
        sizeType?: string,
        // Size of the item.
        sizes?: string[],        
        // The CLDR territory code for the item.
        targetCountry?: string,
        // Tax information.
        taxes?: ProductTax[],        
        // Title of the item.
        title?: string,
        // The preference of the denominator of the unit price.
        unitPricingBaseMeasure?: ProductUnitPricingBaseMeasure,
        // The measure and dimension of an item.
        unitPricingMeasure?: ProductUnitPricingMeasure,
        // The read-only list of intended destinations which passed validation.
        validatedDestinations?: string[],        
        // Read-only warnings.
        warnings?: Error[],        
    }
    
    interface ProductAspect {
        // The name of the aspect.
        aspectName?: string,
        // The name of the destination. Leave out to apply to all destinations.
        destinationName?: string,
        // Whether the aspect is required, excluded or should be validated.
        intention?: string,
    }
    
    interface ProductCustomAttribute {
        // The name of the attribute. Underscores will be replaced by spaces upon insertion.
        name?: string,
        // The type of the attribute.
        type?: string,
        // Free-form unit of the attribute. Unit can only be used for values of type INT or FLOAT.
        unit?: string,
        // The value of the attribute.
        value?: string,
    }
    
    interface ProductCustomGroup {
        // The sub-attributes.
        attributes?: ProductCustomAttribute[],        
        // The name of the group. Underscores will be replaced by spaces upon insertion.
        name?: string,
    }
    
    interface ProductDestination {
        // The name of the destination.
        destinationName?: string,
        // Whether the destination is required, excluded or should be validated.
        intention?: string,
    }
    
    interface ProductShipping {
        // The CLDR territory code of the country to which an item will ship.
        country?: string,
        // The location where the shipping is applicable, represented by a location group name.
        locationGroupName?: string,
        // The numeric id of a location that the shipping rate applies to as defined in the AdWords API.
        locationId?: string,
        // The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by a * wildcard, a range between two postal codes or two postal code prefixes of equal length.
        postalCode?: string,
        // Fixed shipping price, represented as a number.
        price?: Price,
        // The geographic region to which a shipping rate applies (e.g. zip code).
        region?: string,
        // A free-form description of the service class or delivery speed.
        service?: string,
    }
    
    interface ProductShippingDimension {
        // The unit of value.
        // 
        // Acceptable values are:  
        // - "cm" 
        // - "in"
        unit?: string,
        // The dimension of the product used to calculate the shipping cost of the item.
        value?: number,
    }
    
    interface ProductShippingWeight {
        // The unit of value.
        unit?: string,
        // The weight of the product used to calculate the shipping cost of the item.
        value?: number,
    }
    
    interface ProductStatus {
        // Date on which the item has been created, in ISO 8601 format.
        creationDate?: string,
        // A list of data quality issues associated with the product.
        dataQualityIssues?: ProductStatusDataQualityIssue[],        
        // The intended destinations for the product.
        destinationStatuses?: ProductStatusDestinationStatus[],        
        // Date on which the item expires in Google Shopping, in ISO 8601 format.
        googleExpirationDate?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#productStatus".
        kind?: string,
        // Date on which the item has been last updated, in ISO 8601 format.
        lastUpdateDate?: string,
        // The link to the product.
        link?: string,
        // The id of the product for which status is reported.
        productId?: string,
        // The title of the product.
        title?: string,
    }
    
    interface ProductStatusDataQualityIssue {
        // A more detailed error string.
        detail?: string,
        // The fetch status for landing_page_errors.
        fetchStatus?: string,
        // The id of the data quality issue.
        id?: string,
        // The attribute name that is relevant for the issue.
        location?: string,
        // The severity of the data quality issue.
        severity?: string,
        // The time stamp of the data quality issue.
        timestamp?: string,
        // The value of that attribute that was found on the landing page
        valueOnLandingPage?: string,
        // The value the attribute had at time of evaluation.
        valueProvided?: string,
    }
    
    interface ProductStatusDestinationStatus {
        // The destination's approval status.
        approvalStatus?: string,
        // The name of the destination
        destination?: string,
        // Whether the destination is required, excluded, selected by default or should be validated.
        intention?: string,
    }
    
    interface ProductTax {
        // The country within which the item is taxed, specified as a CLDR territory code.
        country?: string,
        // The numeric id of a location that the tax rate applies to as defined in the AdWords API.
        locationId?: string,
        // The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using * wildcard, a range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94*, 94002-95460, 94*-95*.
        postalCode?: string,
        // The percentage of tax rate that applies to the item price.
        rate?: number,
        // The geographic region to which the tax rate applies.
        region?: string,
        // Set to true if tax is charged on shipping.
        taxShip?: boolean,
    }
    
    interface ProductUnitPricingBaseMeasure {
        // The unit of the denominator.
        unit?: string,
        // The denominator of the unit price.
        value?: string,
    }
    
    interface ProductUnitPricingMeasure {
        // The unit of the measure.
        unit?: string,
        // The measure of an item.
        value?: number,
    }
    
    interface ProductsCustomBatchRequest {
        // The request entries to be processed in the batch.
        entries?: ProductsCustomBatchRequestEntry[],        
    }
    
    interface ProductsCustomBatchRequestEntry {
        // An entry ID, unique within the batch request.
        batchId?: number,
        // The ID of the managing account.
        merchantId?: string,
        // 
        method?: string,
        // The product to insert. Only required if the method is insert.
        product?: Product,
        // The ID of the product to get or delete. Only defined if the method is get or delete.
        productId?: string,
    }
    
    interface ProductsCustomBatchResponse {
        // The result of the execution of the batch requests.
        entries?: ProductsCustomBatchResponseEntry[],        
        // Identifies what kind of resource this is. Value: the fixed string "content#productsCustomBatchResponse".
        kind?: string,
    }
    
    interface ProductsCustomBatchResponseEntry {
        // The ID of the request entry this entry responds to.
        batchId?: number,
        // A list of errors defined if and only if the request failed.
        errors?: Errors,
        // Identifies what kind of resource this is. Value: the fixed string "content#productsCustomBatchResponseEntry".
        kind?: string,
        // The inserted product. Only defined if the method is insert and if the request was successful.
        product?: Product,
    }
    
    interface ProductsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#productsListResponse".
        kind?: string,
        // The token for the retrieval of the next page of products.
        nextPageToken?: string,
        // 
        resources?: Product[],        
    }
    
    interface ProductstatusesCustomBatchRequest {
        // The request entries to be processed in the batch.
        entries?: ProductstatusesCustomBatchRequestEntry[],        
    }
    
    interface ProductstatusesCustomBatchRequestEntry {
        // An entry ID, unique within the batch request.
        batchId?: number,
        // The ID of the managing account.
        merchantId?: string,
        // 
        method?: string,
        // The ID of the product whose status to get.
        productId?: string,
    }
    
    interface ProductstatusesCustomBatchResponse {
        // The result of the execution of the batch requests.
        entries?: ProductstatusesCustomBatchResponseEntry[],        
        // Identifies what kind of resource this is. Value: the fixed string "content#productstatusesCustomBatchResponse".
        kind?: string,
    }
    
    interface ProductstatusesCustomBatchResponseEntry {
        // The ID of the request entry this entry responds to.
        batchId?: number,
        // A list of errors, if the request failed.
        errors?: Errors,
        // Identifies what kind of resource this is. Value: the fixed string "content#productstatusesCustomBatchResponseEntry".
        kind?: string,
        // The requested product status. Only defined if the request was successful.
        productStatus?: ProductStatus,
    }
    
    interface ProductstatusesListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#productstatusesListResponse".
        kind?: string,
        // The token for the retrieval of the next page of products statuses.
        nextPageToken?: string,
        // 
        resources?: ProductStatus[],        
    }
    
    interface TestOrder {
        // The details of the customer who placed the order.
        customer?: TestOrderCustomer,
        // Identifies what kind of resource this is. Value: the fixed string "content#testOrder".
        kind?: string,
        // Line items that are ordered. At least one line item must be provided.
        lineItems?: TestOrderLineItem[],        
        // The details of the payment method.
        paymentMethod?: TestOrderPaymentMethod,
        // Identifier of one of the predefined delivery addresses for the delivery.
        predefinedDeliveryAddress?: string,
        // The details of the merchant provided promotions applied to the order. More details about the program are  here.
        promotions?: OrderPromotion[],        
        // The total cost of shipping for all items.
        shippingCost?: Price,
        // The tax for the total shipping cost.
        shippingCostTax?: Price,
        // The requested shipping option.
        shippingOption?: string,
    }
    
    interface TestOrderCustomer {
        // Email address of the customer.
        email?: string,
        // If set, this indicates the user had a choice to opt in or out of providing marketing rights to the merchant. If unset, this indicates the user has already made this choice in a previous purchase, and was thus not shown the marketing right opt in/out checkbox during the Purchases on Google checkout flow. Optional.
        explicitMarketingPreference?: boolean,
        // Full name of the customer.
        fullName?: string,
    }
    
    interface TestOrderLineItem {
        // Product data from the time of the order placement.
        product?: TestOrderLineItemProduct,
        // Number of items ordered.
        quantityOrdered?: number,
        // Details of the return policy for the line item.
        returnInfo?: OrderLineItemReturnInfo,
        // Details of the requested shipping for the line item.
        shippingDetails?: OrderLineItemShippingDetails,
        // Unit tax for the line item.
        unitTax?: Price,
    }
    
    interface TestOrderLineItemProduct {
        // Brand of the item.
        brand?: string,
        // The item's channel.
        channel?: string,
        // Condition or state of the item.
        condition?: string,
        // The two-letter ISO 639-1 language code for the item.
        contentLanguage?: string,
        // Global Trade Item Number (GTIN) of the item. Optional.
        gtin?: string,
        // URL of an image of the item.
        imageLink?: string,
        // Shared identifier for all variants of the same product. Optional.
        itemGroupId?: string,
        // Manufacturer Part Number (MPN) of the item. Optional.
        mpn?: string,
        // An identifier of the item.
        offerId?: string,
        // The price for the product.
        price?: Price,
        // The CLDR territory code of the target country of the product.
        targetCountry?: string,
        // The title of the product.
        title?: string,
        // Variant attributes for the item. Optional.
        variantAttributes?: OrderLineItemProductVariantAttribute[],        
    }
    
    interface TestOrderPaymentMethod {
        // The card expiration month (January = 1, February = 2 etc.).
        expirationMonth?: number,
        // The card expiration year (4-digit, e.g. 2015).
        expirationYear?: number,
        // The last four digits of the card number.
        lastFourDigits?: string,
        // The billing address.
        predefinedBillingAddress?: string,
        // The type of instrument. Note that real orders might have different values than the four values accepted by createTestOrder.
        type?: string,
    }
    
    interface Weight {
        // The weight unit.
        unit?: string,
        // The weight represented as a number.
        value?: string,
    }
    
    interface AccountsResource {
        // Returns information about the authenticated user.
        authinfo (request: {        
        }) : gapi.client.Request<AccountsAuthInfoResponse>;        
        
        // Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
        custombatch (request: {        
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
        }) : gapi.client.Request<AccountsCustomBatchResponse>;        
        
        // Deletes a Merchant Center sub-account.
        delete (request: {        
            // The ID of the account.
            accountId: string,
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
            // The ID of the managing account.
            merchantId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a Merchant Center account.
        get (request: {        
            // The ID of the account.
            accountId: string,
            // The ID of the managing account.
            merchantId: string,
        }) : gapi.client.Request<Account>;        
        
        // Creates a Merchant Center sub-account.
        insert (request: {        
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
            // The ID of the managing account.
            merchantId: string,
        }) : gapi.client.Request<Account>;        
        
        // Lists the sub-accounts in your Merchant Center account.
        list (request: {        
            // The maximum number of accounts to return in the response, used for paging.
            maxResults?: number,
            // The ID of the managing account.
            merchantId: string,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<AccountsListResponse>;        
        
        // Updates a Merchant Center account. This method supports patch semantics.
        patch (request: {        
            // The ID of the account.
            accountId: string,
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
            // The ID of the managing account.
            merchantId: string,
        }) : gapi.client.Request<Account>;        
        
        // Updates a Merchant Center account.
        update (request: {        
            // The ID of the account.
            accountId: string,
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
            // The ID of the managing account.
            merchantId: string,
        }) : gapi.client.Request<Account>;        
        
    }
    
    
    interface AccountshippingResource {
        // Retrieves and updates the shipping settings of multiple accounts in a single request.
        custombatch (request: {        
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
        }) : gapi.client.Request<AccountshippingCustomBatchResponse>;        
        
        // Retrieves the shipping settings of the account.
        get (request: {        
            // The ID of the account for which to get/update account shipping settings.
            accountId: string,
            // The ID of the managing account.
            merchantId: string,
        }) : gapi.client.Request<AccountShipping>;        
        
        // Lists the shipping settings of the sub-accounts in your Merchant Center account.
        list (request: {        
            // The maximum number of shipping settings to return in the response, used for paging.
            maxResults?: number,
            // The ID of the managing account.
            merchantId: string,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<AccountshippingListResponse>;        
        
        // Updates the shipping settings of the account. This method supports patch semantics.
        patch (request: {        
            // The ID of the account for which to get/update account shipping settings.
            accountId: string,
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
            // The ID of the managing account.
            merchantId: string,
        }) : gapi.client.Request<AccountShipping>;        
        
        // Updates the shipping settings of the account.
        update (request: {        
            // The ID of the account for which to get/update account shipping settings.
            accountId: string,
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
            // The ID of the managing account.
            merchantId: string,
        }) : gapi.client.Request<AccountShipping>;        
        
    }
    
    
    interface AccountstatusesResource {
        // 
        custombatch (request: {        
        }) : gapi.client.Request<AccountstatusesCustomBatchResponse>;        
        
        // Retrieves the status of a Merchant Center account.
        get (request: {        
            // The ID of the account.
            accountId: string,
            // The ID of the managing account.
            merchantId: string,
        }) : gapi.client.Request<AccountStatus>;        
        
        // Lists the statuses of the sub-accounts in your Merchant Center account.
        list (request: {        
            // The maximum number of account statuses to return in the response, used for paging.
            maxResults?: number,
            // The ID of the managing account.
            merchantId: string,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<AccountstatusesListResponse>;        
        
    }
    
    
    interface AccounttaxResource {
        // Retrieves and updates tax settings of multiple accounts in a single request.
        custombatch (request: {        
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
        }) : gapi.client.Request<AccounttaxCustomBatchResponse>;        
        
        // Retrieves the tax settings of the account.
        get (request: {        
            // The ID of the account for which to get/update account tax settings.
            accountId: string,
            // The ID of the managing account.
            merchantId: string,
        }) : gapi.client.Request<AccountTax>;        
        
        // Lists the tax settings of the sub-accounts in your Merchant Center account.
        list (request: {        
            // The maximum number of tax settings to return in the response, used for paging.
            maxResults?: number,
            // The ID of the managing account.
            merchantId: string,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<AccounttaxListResponse>;        
        
        // Updates the tax settings of the account. This method supports patch semantics.
        patch (request: {        
            // The ID of the account for which to get/update account tax settings.
            accountId: string,
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
            // The ID of the managing account.
            merchantId: string,
        }) : gapi.client.Request<AccountTax>;        
        
        // Updates the tax settings of the account.
        update (request: {        
            // The ID of the account for which to get/update account tax settings.
            accountId: string,
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
            // The ID of the managing account.
            merchantId: string,
        }) : gapi.client.Request<AccountTax>;        
        
    }
    
    
    interface DatafeedsResource {
        // 
        custombatch (request: {        
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
        }) : gapi.client.Request<DatafeedsCustomBatchResponse>;        
        
        // Deletes a datafeed from your Merchant Center account.
        delete (request: {        
            // 
            datafeedId: string,
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
            // 
            merchantId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a datafeed from your Merchant Center account.
        get (request: {        
            // 
            datafeedId: string,
            // 
            merchantId: string,
        }) : gapi.client.Request<Datafeed>;        
        
        // Registers a datafeed with your Merchant Center account.
        insert (request: {        
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
            // 
            merchantId: string,
        }) : gapi.client.Request<Datafeed>;        
        
        // Lists the datafeeds in your Merchant Center account.
        list (request: {        
            // The maximum number of products to return in the response, used for paging.
            maxResults?: number,
            // The ID of the managing account.
            merchantId: string,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<DatafeedsListResponse>;        
        
        // Updates a datafeed of your Merchant Center account. This method supports patch semantics.
        patch (request: {        
            // 
            datafeedId: string,
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
            // 
            merchantId: string,
        }) : gapi.client.Request<Datafeed>;        
        
        // Updates a datafeed of your Merchant Center account.
        update (request: {        
            // 
            datafeedId: string,
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
            // 
            merchantId: string,
        }) : gapi.client.Request<Datafeed>;        
        
    }
    
    
    interface DatafeedstatusesResource {
        // 
        custombatch (request: {        
        }) : gapi.client.Request<DatafeedstatusesCustomBatchResponse>;        
        
        // Retrieves the status of a datafeed from your Merchant Center account.
        get (request: {        
            // 
            datafeedId: string,
            // 
            merchantId: string,
        }) : gapi.client.Request<DatafeedStatus>;        
        
        // Lists the statuses of the datafeeds in your Merchant Center account.
        list (request: {        
            // The maximum number of products to return in the response, used for paging.
            maxResults?: number,
            // The ID of the managing account.
            merchantId: string,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<DatafeedstatusesListResponse>;        
        
    }
    
    
    interface InventoryResource {
        // Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products.
        custombatch (request: {        
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
        }) : gapi.client.Request<InventoryCustomBatchResponse>;        
        
        // Updates price and availability of a product in your Merchant Center account. This operation does not update the expiration date of the product.
        set (request: {        
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
            // The ID of the managing account.
            merchantId: string,
            // The ID of the product for which to update price and availability.
            productId: string,
            // The code of the store for which to update price and availability. Use online to update price and availability of an online product.
            storeCode: string,
        }) : gapi.client.Request<InventorySetResponse>;        
        
    }
    
    
    interface OrdersResource {
        // Marks an order as acknowledged.
        acknowledge (request: {        
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order.
            orderId: string,
        }) : gapi.client.Request<OrdersAcknowledgeResponse>;        
        
        // Sandbox only. Moves a test order from state "inProgress" to state "pendingShipment".
        advancetestorder (request: {        
            // The ID of the managing account.
            merchantId: string,
            // The ID of the test order to modify.
            orderId: string,
        }) : gapi.client.Request<OrdersAdvanceTestOrderResponse>;        
        
        // Cancels all line items in an order.
        cancel (request: {        
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order to cancel.
            orderId: string,
        }) : gapi.client.Request<OrdersCancelResponse>;        
        
        // Cancels a line item.
        cancellineitem (request: {        
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order.
            orderId: string,
        }) : gapi.client.Request<OrdersCancelLineItemResponse>;        
        
        // Sandbox only. Creates a test order.
        createtestorder (request: {        
            // The ID of the managing account.
            merchantId: string,
        }) : gapi.client.Request<OrdersCreateTestOrderResponse>;        
        
        // Retrieves or modifies multiple orders in a single request.
        custombatch (request: {        
        }) : gapi.client.Request<OrdersCustomBatchResponse>;        
        
        // Retrieves an order from your Merchant Center account.
        get (request: {        
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order.
            orderId: string,
        }) : gapi.client.Request<Order>;        
        
        // Retrieves an order using merchant order id.
        getbymerchantorderid (request: {        
            // The ID of the managing account.
            merchantId: string,
            // The merchant order id to be looked for.
            merchantOrderId: string,
        }) : gapi.client.Request<OrdersGetByMerchantOrderIdResponse>;        
        
        // Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
        gettestordertemplate (request: {        
            // The ID of the managing account.
            merchantId: string,
            // The name of the template to retrieve.
            templateName: string,
        }) : gapi.client.Request<OrdersGetTestOrderTemplateResponse>;        
        
        // Lists the orders in your Merchant Center account.
        list (request: {        
            // Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged.
            // We recommend using this filter set to false, in conjunction with the acknowledge call, such that only un-acknowledged orders are returned.
            acknowledged?: boolean,
            // The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page.
            // Known issue: All List calls will return all Orders without limit regardless of the value of this field.
            maxResults?: number,
            // The ID of the managing account.
            merchantId: string,
            // The ordering of the returned list. The only supported value are placedDate desc and placedDate asc for now, which returns orders sorted by placement date. "placedDate desc" stands for listing orders by placement date, from oldest to most recent. "placedDate asc" stands for listing orders by placement date, from most recent to oldest. In future releases we'll support other sorting criteria.
            orderBy?: string,
            // The token returned by the previous request.
            pageToken?: string,
            // Obtains orders placed before this date (exclusively), in ISO 8601 format.
            placedDateEnd?: string,
            // Obtains orders placed after this date (inclusively), in ISO 8601 format.
            placedDateStart?: string,
            // Obtains orders that match any of the specified statuses. Multiple values can be specified with comma separation. Additionally, please note that active is a shortcut for pendingShipment and partiallyShipped, and completed is a shortcut for shipped , partiallyDelivered, delivered, partiallyReturned, returned, and canceled.
            statuses?: string,
        }) : gapi.client.Request<OrdersListResponse>;        
        
        // Refund a portion of the order, up to the full amount paid.
        refund (request: {        
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order to refund.
            orderId: string,
        }) : gapi.client.Request<OrdersRefundResponse>;        
        
        // Returns a line item.
        returnlineitem (request: {        
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order.
            orderId: string,
        }) : gapi.client.Request<OrdersReturnLineItemResponse>;        
        
        // Marks line item(s) as shipped.
        shiplineitems (request: {        
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order.
            orderId: string,
        }) : gapi.client.Request<OrdersShipLineItemsResponse>;        
        
        // Updates the merchant order ID for a given order.
        updatemerchantorderid (request: {        
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order.
            orderId: string,
        }) : gapi.client.Request<OrdersUpdateMerchantOrderIdResponse>;        
        
        // Updates a shipment's status, carrier, and/or tracking ID.
        updateshipment (request: {        
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order.
            orderId: string,
        }) : gapi.client.Request<OrdersUpdateShipmentResponse>;        
        
    }
    
    
    interface ProductsResource {
        // Retrieves, inserts, and deletes multiple products in a single request.
        custombatch (request: {        
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
        }) : gapi.client.Request<ProductsCustomBatchResponse>;        
        
        // Deletes a product from your Merchant Center account.
        delete (request: {        
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
            // The ID of the managing account.
            merchantId: string,
            // The ID of the product.
            productId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a product from your Merchant Center account.
        get (request: {        
            // The ID of the managing account.
            merchantId: string,
            // The ID of the product.
            productId: string,
        }) : gapi.client.Request<Product>;        
        
        // Uploads a product to your Merchant Center account.
        insert (request: {        
            // Flag to run the request in dry-run mode.
            dryRun?: boolean,
            // The ID of the managing account.
            merchantId: string,
        }) : gapi.client.Request<Product>;        
        
        // Lists the products in your Merchant Center account.
        list (request: {        
            // Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
            includeInvalidInsertedItems?: boolean,
            // The maximum number of products to return in the response, used for paging.
            maxResults?: number,
            // The ID of the managing account.
            merchantId: string,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<ProductsListResponse>;        
        
    }
    
    
    interface ProductstatusesResource {
        // Gets the statuses of multiple products in a single request.
        custombatch (request: {        
        }) : gapi.client.Request<ProductstatusesCustomBatchResponse>;        
        
        // Gets the status of a product from your Merchant Center account.
        get (request: {        
            // The ID of the managing account.
            merchantId: string,
            // The ID of the product.
            productId: string,
        }) : gapi.client.Request<ProductStatus>;        
        
        // Lists the statuses of the products in your Merchant Center account.
        list (request: {        
            // Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
            includeInvalidInsertedItems?: boolean,
            // The maximum number of product statuses to return in the response, used for paging.
            maxResults?: number,
            // The ID of the managing account.
            merchantId: string,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<ProductstatusesListResponse>;        
        
    }
    
}

declare module gapi.client.content {
    var accounts: gapi.client.content.v2.AccountsResource; 
    
    var accountshipping: gapi.client.content.v2.AccountshippingResource; 
    
    var accountstatuses: gapi.client.content.v2.AccountstatusesResource; 
    
    var accounttax: gapi.client.content.v2.AccounttaxResource; 
    
    var datafeeds: gapi.client.content.v2.DatafeedsResource; 
    
    var datafeedstatuses: gapi.client.content.v2.DatafeedstatusesResource; 
    
    var inventory: gapi.client.content.v2.InventoryResource; 
    
    var orders: gapi.client.content.v2.OrdersResource; 
    
    var products: gapi.client.content.v2.ProductsResource; 
    
    var productstatuses: gapi.client.content.v2.ProductstatusesResource; 
    
}
