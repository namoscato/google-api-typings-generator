// Type definitions for Google Google Affiliate Network API v1beta1
// Project: https://developers.google.com/affiliate-network/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.gan.v1beta1 {
    
    interface Advertiser {
        // True if the advertiser allows publisher created links, otherwise false.
        allowPublisherCreatedLinks?: boolean,
        // Category that this advertiser belongs to. A valid list of categories can be found here: http://www.google.com/support/affiliatenetwork/advertiser/bin/answer.py?hl=en&answer=107581
        category?: string,
        // The longest possible length of a commission (how long the cookies on the customer's browser last before they expire).
        commissionDuration?: number,
        // Email that this advertiser would like publishers to contact them with.
        contactEmail?: string,
        // Phone that this advertiser would like publishers to contact them with.
        contactPhone?: string,
        // The default link id for this advertiser.
        defaultLinkId?: string,
        // Description of the website the advertiser advertises from.
        description?: string,
        // The sum of fees paid to publishers divided by the total number of clicks over the past three months. This value should be multiplied by 100 at the time of display.
        epcNinetyDayAverage?: Money,
        // The sum of fees paid to publishers divided by the total number of clicks over the past seven days. This value should be multiplied by 100 at the time of display.
        epcSevenDayAverage?: Money,
        // The ID of this advertiser.
        id?: string,
        // The requested advertiser.
        item?: Advertiser,
        // Date that this advertiser was approved as a Google Affiliate Network advertiser.
        joinDate?: string,
        // The kind for an advertiser.
        kind?: string,
        // URL to the logo this advertiser uses on the Google Affiliate Network.
        logoUrl?: string,
        // List of merchant center ids for this advertiser
        merchantCenterIds?: string[],        
        // The name of this advertiser.
        name?: string,
        // A rank based on commissions paid to publishers over the past 90 days. A number between 1 and 4 where 4 means the top quartile (most money paid) and 1 means the bottom quartile (least money paid).
        payoutRank?: string,
        // Allows advertisers to submit product listings to Google Product Search.
        productFeedsEnabled?: boolean,
        // List of redirect URLs for this advertiser
        redirectDomains?: string[],        
        // URL of the website this advertiser advertises from.
        siteUrl?: string,
        // The status of the requesting publisher's relationship this advertiser.
        status?: string,
    }
    
    interface Advertisers {
        // The advertiser list.
        items?: Advertiser[],        
        // The kind for a page of advertisers.
        kind?: string,
        // The 'pageToken' to pass to the next request to get the next page, if there are more to retrieve.
        nextPageToken?: string,
    }
    
    interface CcOffer {
        // More marketing copy about the card's benefits. A summary field.
        additionalCardBenefits?: string[],        
        // Any extra fees levied on card holders.
        additionalCardHolderFee?: string,
        // The youngest a recipient of this card may be.
        ageMinimum?: number,
        // Text describing the details of the age minimum restriction.
        ageMinimumDetails?: string,
        // The ongoing annual fee, in dollars.
        annualFee?: number,
        // Text describing the annual fee, including any difference for the first year. A summary field.
        annualFeeDisplay?: string,
        // The largest number of units you may accumulate in a year.
        annualRewardMaximum?: number,
        // Possible categories for this card, eg "Low Interest" or "Good." A summary field.
        approvedCategories?: string[],        
        // Text describing the purchase APR. A summary field.
        aprDisplay?: string,
        // Text describing how the balance is computed. A summary field.
        balanceComputationMethod?: string,
        // Text describing the terms for balance transfers. A summary field.
        balanceTransferTerms?: string,
        // For cards with rewards programs, extra circumstances whereby additional rewards may be granted.
        bonusRewards?: {        
            // How many units of reward will be granted.
            amount?: number,
            // The circumstances under which this rule applies, for example, booking a flight via Orbitz.
            details?: string,
        }[],        
        // If you get coverage when you use the card for the given activity, this field describes it.
        carRentalInsurance?: string,
        // A list of what the issuer thinks are the most important benefits of the card. Usually summarizes the rewards program, if there is one. A summary field.
        cardBenefits?: string[],        
        // The issuer's name for the card, including any trademark or service mark designators. A summary field.
        cardName?: string,
        // What kind of credit card this is, for example secured or unsecured.
        cardType?: string,
        // Text describing the terms for cash advances. A summary field.
        cashAdvanceTerms?: string,
        // The high end for credit limits the issuer imposes on recipients of this card.
        creditLimitMax?: number,
        // The low end for credit limits the issuer imposes on recipients of this card.
        creditLimitMin?: number,
        // Text describing the credit ratings required for recipients of this card, for example "Excellent/Good." A summary field.
        creditRatingDisplay?: string,
        // Fees for defaulting on your payments.
        defaultFees?: {        
            // The type of charge, for example Purchases.
            category?: string,
            // The highest rate the issuer may charge for defaulting on debt in this category. Expressed as an absolute number, not as a percentage.
            maxRate?: number,
            // The lowest rate the issuer may charge for defaulting on debt in this category. Expressed as an absolute number, not as a percentage.
            minRate?: number,
            // Fixed or variable.
            rateType?: string,
        }[],        
        // A notice that, if present, is referenced via an asterisk by many of the other summary fields. If this field is present, it will always start with an asterisk ("*"), and must be prominently displayed with the offer. A summary field.
        disclaimer?: string,
        // If you get coverage when you use the card for the given activity, this field describes it.
        emergencyInsurance?: string,
        // Whether this card is only available to existing customers of the issuer.
        existingCustomerOnly?: boolean,
        // If you get coverage when you use the card for the given activity, this field describes it.
        extendedWarranty?: string,
        // The annual fee for the first year, if different from the ongoing fee. Optional.
        firstYearAnnualFee?: number,
        // If you get coverage when you use the card for the given activity, this field describes it.
        flightAccidentInsurance?: string,
        // Fee for each transaction involving a foreign currency.
        foreignCurrencyTransactionFee?: string,
        // If you get coverage when you use the card for the given activity, this field describes it.
        fraudLiability?: string,
        // Text describing the grace period before finance charges apply. A summary field.
        gracePeriodDisplay?: string,
        // The link to the image of the card that is shown on Connect Commerce. A summary field.
        imageUrl?: string,
        // Fee for setting up the card.
        initialSetupAndProcessingFee?: string,
        // Text describing the terms for introductory period balance transfers. A summary field.
        introBalanceTransferTerms?: string,
        // Text describing the terms for introductory period cash advances. A summary field.
        introCashAdvanceTerms?: string,
        // Text describing the terms for introductory period purchases. A summary field.
        introPurchaseTerms?: string,
        // Name of card issuer. A summary field.
        issuer?: string,
        // The Google Affiliate Network ID of the advertiser making this offer.
        issuerId?: string,
        // The generic link to the issuer's site.
        issuerWebsite?: string,
        // The kind for one credit card offer. A summary field.
        kind?: string,
        // The link to the issuer's page for this card. A summary field.
        landingPageUrl?: string,
        // Text describing how much a late payment will cost, eg "up to $35." A summary field.
        latePaymentFee?: string,
        // If you get coverage when you use the card for the given activity, this field describes it.
        luggageInsurance?: string,
        // The highest interest rate the issuer charges on this card. Expressed as an absolute number, not as a percentage.
        maxPurchaseRate?: number,
        // The lowest interest rate the issuer charges on this card. Expressed as an absolute number, not as a percentage.
        minPurchaseRate?: number,
        // Text describing how much missing the grace period will cost.
        minimumFinanceCharge?: string,
        // Which network (eg Visa) the card belongs to. A summary field.
        network?: string,
        // This offer's ID. A summary field.
        offerId?: string,
        // Whether a cash reward program lets you get cash back sooner than end of year or other longish period.
        offersImmediateCashReward?: boolean,
        // Fee for exceeding the card's charge limit.
        overLimitFee?: string,
        // Categories in which the issuer does not wish the card to be displayed. A summary field.
        prohibitedCategories?: string[],        
        // Text describing any additional details for the purchase rate. A summary field.
        purchaseRateAdditionalDetails?: string,
        // Fixed or variable.
        purchaseRateType?: string,
        // Text describing the fee for a payment that doesn't clear. A summary field.
        returnedPaymentFee?: string,
        // The company that redeems the rewards, if different from the issuer.
        rewardPartner?: string,
        // For cards with rewards programs, the unit of reward. For example, miles, cash back, points.
        rewardUnit?: string,
        // For cards with rewards programs, detailed rules about how the program works.
        rewards?: {        
            // Other limits, for example, if this rule only applies during an introductory period.
            additionalDetails?: string,
            // The number of units rewarded per purchase dollar.
            amount?: number,
            // The kind of purchases covered by this rule.
            category?: string,
            // How long rewards granted by this rule last.
            expirationMonths?: number,
            // The maximum purchase amount in the given category for this rule to apply.
            maxRewardTier?: number,
            // The minimum purchase amount in the given category before this rule applies.
            minRewardTier?: number,
        }[],        
        // Whether accumulated rewards ever expire.
        rewardsExpire?: boolean,
        // For airline miles rewards, tells whether blackout dates apply to the miles.
        rewardsHaveBlackoutDates?: boolean,
        // Fee for requesting a copy of your statement.
        statementCopyFee?: string,
        // The link to ping to register a click on this offer. A summary field.
        trackingUrl?: string,
        // If you get coverage when you use the card for the given activity, this field describes it.
        travelInsurance?: string,
        // When variable rates were last updated.
        variableRatesLastUpdated?: string,
        // How often variable rates are updated.
        variableRatesUpdateFrequency?: string,
    }
    
    interface CcOffers {
        // The credit card offers.
        items?: CcOffer[],        
        // The kind for a page of credit card offers.
        kind?: string,
    }
    
    interface Event {
        // The ID of advertiser for this event.
        advertiserId?: string,
        // The name of the advertiser for this event.
        advertiserName?: string,
        // The charge ID for this event. Only returned for charge events.
        chargeId?: string,
        // Charge type of the event (other|slotting_fee|monthly_minimum|tier_bonus|debit|credit). Only returned for charge events.
        chargeType?: string,
        // Amount of money exchanged during the transaction. Only returned for charge and conversion events.
        commissionableSales?: Money,
        // Earnings by the publisher.
        earnings?: Money,
        // The date-time this event was initiated as a RFC 3339 date-time value.
        eventDate?: string,
        // The kind for one event.
        kind?: string,
        // The ID of the member attached to this event. Only returned for conversion events.
        memberId?: string,
        // The date-time this event was last modified as a RFC 3339 date-time value.
        modifyDate?: string,
        // Fee that the advertiser paid to the Google Affiliate Network.
        networkFee?: Money,
        // The order ID for this event. Only returned for conversion events.
        orderId?: string,
        // Products associated with the event.
        products?: {        
            // Id of the category this product belongs to.
            categoryId?: string,
            // Name of the category this product belongs to.
            categoryName?: string,
            // Amount earned by the publisher on this product.
            earnings?: Money,
            // Fee that the advertiser paid to the Google Affiliate Network for this product.
            networkFee?: Money,
            // Fee that the advertiser paid to the publisehr for this product.
            publisherFee?: Money,
            // Quantity of this product bought/exchanged.
            quantity?: string,
            // Sku of this product.
            sku?: string,
            // Sku name of this product.
            skuName?: string,
            // Price per unit of this product.
            unitPrice?: Money,
        }[],        
        // Fee that the advertiser paid to the publisher.
        publisherFee?: Money,
        // The ID of the publisher for this event.
        publisherId?: string,
        // The name of the publisher for this event.
        publisherName?: string,
        // Status of the event (active|canceled). Only returned for charge and conversion events.
        status?: string,
        // Type of the event (action|transaction|charge).
        type?: string,
    }
    
    interface Events {
        // The event list.
        items?: Event[],        
        // The kind for a page of events.
        kind?: string,
        // The 'pageToken' to pass to the next request to get the next page, if there are more to retrieve.
        nextPageToken?: string,
    }
    
    interface Link {
        // The advertiser id for the advertiser who owns this link.
        advertiserId?: string,
        // Authorship
        authorship?: string,
        // Availability.
        availability?: string,
        // Tracking url for clicks.
        clickTrackingUrl?: string,
        // Date that this link was created.
        createDate?: string,
        // Description.
        description?: string,
        // The destination URL for the link.
        destinationUrl?: string,
        // Duration
        duration?: string,
        // Date that this link becomes inactive.
        endDate?: string,
        // The sum of fees paid to publishers divided by the total number of clicks over the past three months on this link. This value should be multiplied by 100 at the time of display.
        epcNinetyDayAverage?: Money,
        // The sum of fees paid to publishers divided by the total number of clicks over the past seven days on this link. This value should be multiplied by 100 at the time of display.
        epcSevenDayAverage?: Money,
        // The ID of this link.
        id?: string,
        // image alt text.
        imageAltText?: string,
        // Tracking url for impressions.
        impressionTrackingUrl?: string,
        // Flag for if this link is active.
        isActive?: boolean,
        // The kind for one entity.
        kind?: string,
        // The link type.
        linkType?: string,
        // The logical name for this link.
        name?: string,
        // Promotion Type
        promotionType?: string,
        // Special offers on the link.
        specialOffers?: {        
            // Whether there is a free gift
            freeGift?: boolean,
            // Whether there is free shipping
            freeShipping?: boolean,
            // Minimum purchase amount for free shipping promotion
            freeShippingMin?: Money,
            // Percent off on the purchase
            percentOff?: number,
            // Minimum purchase amount for percent off promotion
            percentOffMin?: Money,
            // Price cut on the purchase
            priceCut?: Money,
            // Minimum purchase amount for price cut promotion
            priceCutMin?: Money,
            // List of promotion code associated with the link
            promotionCodes?: string[],            
        },        
        // Date that this link becomes active.
        startDate?: string,
    }
    
    interface Links {
        // The links.
        items?: Link[],        
        // The kind for a page of links.
        kind?: string,
        // The next page token.
        nextPageToken?: string,
    }
    
    interface Money {
        // The amount of money.
        amount?: number,
        // The 3-letter code of the currency in question.
        currencyCode?: string,
    }
    
    interface Publisher {
        // Classification that this publisher belongs to. See this link for all publisher classifications: http://www.google.com/support/affiliatenetwork/advertiser/bin/answer.py?hl=en&answer=107625&ctx=cb&src=cb&cbid=-k5fihzthfaik&cbrank=4
        classification?: string,
        // The sum of fees paid to this publisher divided by the total number of clicks over the past three months. Values are multiplied by 100 for display purposes.
        epcNinetyDayAverage?: Money,
        // The sum of fees paid to this publisher divided by the total number of clicks over the past seven days. Values are multiplied by 100 for display purposes.
        epcSevenDayAverage?: Money,
        // The ID of this publisher.
        id?: string,
        // The requested publisher.
        item?: Publisher,
        // Date that this publisher was approved as a Google Affiliate Network publisher.
        joinDate?: string,
        // The kind for a publisher.
        kind?: string,
        // The name of this publisher.
        name?: string,
        // A rank based on commissions paid to this publisher over the past 90 days. A number between 1 and 4 where 4 means the top quartile (most money paid) and 1 means the bottom quartile (least money paid).
        payoutRank?: string,
        // Websites that this publisher uses to advertise.
        sites?: string[],        
        // The status of the requesting advertiser's relationship with this publisher.
        status?: string,
    }
    
    interface Publishers {
        // The entity list.
        items?: Publisher[],        
        // The kind for a page of entities.
        kind?: string,
        // The 'pageToken' to pass to the next request to get the next page, if there are more to retrieve.
        nextPageToken?: string,
    }
    
    interface Report {
        // The column names for the report
        column_names?: string[],        
        // The end of the date range for this report, exclusive.
        end_date?: string,
        // The kind for a report.
        kind?: string,
        // The number of matching rows before paging is applied.
        matching_row_count?: string,
        // The rows of data for the report
        rows?: any[][],        
        // The start of the date range for this report, inclusive.
        start_date?: string,
        // The totals rows for the report
        totals_rows?: any[][],        
        // The report type.
        type?: string,
    }
    
    interface AdvertisersResource {
        // Retrieves data about a single advertiser if that the requesting advertiser/publisher has access to it. Only publishers can lookup advertisers. Advertisers can request information about themselves by omitting the advertiserId query parameter.
        get (request: {        
            // The ID of the advertiser to look up. Optional.
            advertiserId?: string,
            // The role of the requester. Valid values: 'advertisers' or 'publishers'.
            role: string,
            // The ID of the requesting advertiser or publisher.
            roleId: string,
        }) : gapi.client.Request<Advertiser>;        
        
        // Retrieves data about all advertisers that the requesting advertiser/publisher has access to.
        list (request: {        
            // Caret(^) delimted list of advertiser categories. Valid categories are defined here: http://www.google.com/support/affiliatenetwork/advertiser/bin/answer.py?hl=en&answer=107581. Filters out all advertisers not in one of the given advertiser categories. Optional.
            advertiserCategory?: string,
            // Max number of items to return in this page. Optional. Defaults to 20.
            maxResults?: number,
            // Filters out all advertisers that have a ninety day EPC average lower than the given value (inclusive). Min value: 0.0. Optional.
            minNinetyDayEpc?: number,
            // A value between 1 and 4, where 1 represents the quartile of advertisers with the lowest ranks and 4 represents the quartile of advertisers with the highest ranks. Filters out all advertisers with a lower rank than the given quartile. For example if a 2 was given only advertisers with a payout rank of 25 or higher would be included. Optional.
            minPayoutRank?: number,
            // Filters out all advertisers that have a seven day EPC average lower than the given value (inclusive). Min value: 0.0. Optional.
            minSevenDayEpc?: number,
            // The value of 'nextPageToken' from the previous page. Optional.
            pageToken?: string,
            // Filters out all advertisers for which do not have the given relationship status with the requesting publisher.
            relationshipStatus?: string,
            // The role of the requester. Valid values: 'advertisers' or 'publishers'.
            role: string,
            // The ID of the requesting advertiser or publisher.
            roleId: string,
        }) : gapi.client.Request<Advertisers>;        
        
    }
    
    
    interface CcOffersResource {
        // Retrieves credit card offers for the given publisher.
        list (request: {        
            // The advertiser ID of a card issuer whose offers to include. Optional, may be repeated.
            advertiser?: string,
            // The set of fields to return.
            projection?: string,
            // The ID of the publisher in question.
            publisher: string,
        }) : gapi.client.Request<CcOffers>;        
        
    }
    
    
    interface EventsResource {
        // Retrieves event data for a given advertiser/publisher.
        list (request: {        
            // Caret(^) delimited list of advertiser IDs. Filters out all events that do not reference one of the given advertiser IDs. Only used when under publishers role. Optional.
            advertiserId?: string,
            // Filters out all charge events that are not of the given charge type. Valid values: 'other', 'slotting_fee', 'monthly_minimum', 'tier_bonus', 'credit', 'debit'. Optional.
            chargeType?: string,
            // Filters out all events later than given date. Optional. Defaults to 24 hours after eventMin.
            eventDateMax?: string,
            // Filters out all events earlier than given date. Optional. Defaults to 24 hours from current date/time.
            eventDateMin?: string,
            // Caret(^) delimited list of link IDs. Filters out all events that do not reference one of the given link IDs. Optional.
            linkId?: string,
            // Max number of offers to return in this page. Optional. Defaults to 20.
            maxResults?: number,
            // Caret(^) delimited list of member IDs. Filters out all events that do not reference one of the given member IDs. Optional.
            memberId?: string,
            // Filters out all events modified later than given date. Optional. Defaults to 24 hours after modifyDateMin, if modifyDateMin is explicitly set.
            modifyDateMax?: string,
            // Filters out all events modified earlier than given date. Optional. Defaults to 24 hours before the current modifyDateMax, if modifyDateMax is explicitly set.
            modifyDateMin?: string,
            // Caret(^) delimited list of order IDs. Filters out all events that do not reference one of the given order IDs. Optional.
            orderId?: string,
            // The value of 'nextPageToken' from the previous page. Optional.
            pageToken?: string,
            // Caret(^) delimited list of product categories. Filters out all events that do not reference a product in one of the given product categories. Optional.
            productCategory?: string,
            // Caret(^) delimited list of publisher IDs. Filters out all events that do not reference one of the given publishers IDs. Only used when under advertiser role. Optional.
            publisherId?: string,
            // The role of the requester. Valid values: 'advertisers' or 'publishers'.
            role: string,
            // The ID of the requesting advertiser or publisher.
            roleId: string,
            // Caret(^) delimited list of SKUs. Filters out all events that do not reference one of the given SKU. Optional.
            sku?: string,
            // Filters out all events that do not have the given status. Valid values: 'active', 'canceled'. Optional.
            status?: string,
            // Filters out all events that are not of the given type. Valid values: 'action', 'transaction', 'charge'. Optional.
            type?: string,
        }) : gapi.client.Request<Events>;        
        
    }
    
    
    interface LinksResource {
        // Retrieves data about a single link if the requesting advertiser/publisher has access to it. Advertisers can look up their own links. Publishers can look up visible links or links belonging to advertisers they are in a relationship with.
        get (request: {        
            // The ID of the link to look up.
            linkId: string,
            // The role of the requester. Valid values: 'advertisers' or 'publishers'.
            role: string,
            // The ID of the requesting advertiser or publisher.
            roleId: string,
        }) : gapi.client.Request<Link>;        
        
        // Inserts a new link.
        insert (request: {        
            // The role of the requester. Valid values: 'advertisers' or 'publishers'.
            role: string,
            // The ID of the requesting advertiser or publisher.
            roleId: string,
        }) : gapi.client.Request<Link>;        
        
        // Retrieves all links that match the query parameters.
        list (request: {        
            // Limits the resulting links to the ones belonging to the listed advertisers.
            advertiserId?: string,
            // The size of the given asset.
            assetSize?: string,
            // The role of the author of the link.
            authorship?: string,
            // The end of the create date range.
            createDateMax?: string,
            // The beginning of the create date range.
            createDateMin?: string,
            // The type of the link.
            linkType?: string,
            // Max number of items to return in this page. Optional. Defaults to 20.
            maxResults?: number,
            // The value of 'nextPageToken' from the previous page. Optional.
            pageToken?: string,
            // The promotion type.
            promotionType?: string,
            // The status of the relationship.
            relationshipStatus?: string,
            // The role of the requester. Valid values: 'advertisers' or 'publishers'.
            role: string,
            // The ID of the requesting advertiser or publisher.
            roleId: string,
            // Field for full text search across title and merchandising text, supports link id search.
            searchText?: string,
            // The end of the start date range.
            startDateMax?: string,
            // The beginning of the start date range.
            startDateMin?: string,
        }) : gapi.client.Request<Links>;        
        
    }
    
    
    interface PublishersResource {
        // Retrieves data about a single advertiser if that the requesting advertiser/publisher has access to it. Only advertisers can look up publishers. Publishers can request information about themselves by omitting the publisherId query parameter.
        get (request: {        
            // The ID of the publisher to look up. Optional.
            publisherId?: string,
            // The role of the requester. Valid values: 'advertisers' or 'publishers'.
            role: string,
            // The ID of the requesting advertiser or publisher.
            roleId: string,
        }) : gapi.client.Request<Publisher>;        
        
        // Retrieves data about all publishers that the requesting advertiser/publisher has access to.
        list (request: {        
            // Max number of items to return in this page. Optional. Defaults to 20.
            maxResults?: number,
            // Filters out all publishers that have a ninety day EPC average lower than the given value (inclusive). Min value: 0.0. Optional.
            minNinetyDayEpc?: number,
            // A value between 1 and 4, where 1 represents the quartile of publishers with the lowest ranks and 4 represents the quartile of publishers with the highest ranks. Filters out all publishers with a lower rank than the given quartile. For example if a 2 was given only publishers with a payout rank of 25 or higher would be included. Optional.
            minPayoutRank?: number,
            // Filters out all publishers that have a seven day EPC average lower than the given value (inclusive). Min value 0.0. Optional.
            minSevenDayEpc?: number,
            // The value of 'nextPageToken' from the previous page. Optional.
            pageToken?: string,
            // Caret(^) delimted list of publisher categories. Valid categories: (unclassified|community_and_content|shopping_and_promotion|loyalty_and_rewards|network|search_specialist|comparison_shopping|email). Filters out all publishers not in one of the given advertiser categories. Optional.
            publisherCategory?: string,
            // Filters out all publishers for which do not have the given relationship status with the requesting publisher.
            relationshipStatus?: string,
            // The role of the requester. Valid values: 'advertisers' or 'publishers'.
            role: string,
            // The ID of the requesting advertiser or publisher.
            roleId: string,
        }) : gapi.client.Request<Publishers>;        
        
    }
    
    
    interface ReportsResource {
        // Retrieves a report of the specified type.
        get (request: {        
            // The IDs of the advertisers to look up, if applicable.
            advertiserId?: string,
            // Whether or not to calculate totals rows. Optional.
            calculateTotals?: boolean,
            // The end date (exclusive), in RFC 3339 format, for the report data to be returned. Defaults to one day after startDate, if that is given, or today. Optional.
            endDate?: string,
            // Filters out all events that are not of the given type. Valid values: 'action', 'transaction', or 'charge'. Optional.
            eventType?: string,
            // Filters to capture one of given link IDs. Optional.
            linkId?: string,
            // Max number of items to return in this page. Optional. Defaults to return all results.
            maxResults?: number,
            // Filters to capture one of the given order IDs. Optional.
            orderId?: string,
            // The IDs of the publishers to look up, if applicable.
            publisherId?: string,
            // The type of report being requested. Valid values: 'order_delta'. Required.
            reportType: string,
            // The role of the requester. Valid values: 'advertisers' or 'publishers'.
            role: string,
            // The ID of the requesting advertiser or publisher.
            roleId: string,
            // The start date (inclusive), in RFC 3339 format, for the report data to be returned. Defaults to one day before endDate, if that is given, or yesterday. Optional.
            startDate?: string,
            // Offset on which to return results when paging. Optional.
            startIndex?: number,
            // Filters out all events that do not have the given status. Valid values: 'active', 'canceled', or 'invalid'. Optional.
            status?: string,
        }) : gapi.client.Request<Report>;        
        
    }
    
}

declare module gapi.client.gan {
    var advertisers: gapi.client.gan.v1beta1.AdvertisersResource; 
    
    var ccOffers: gapi.client.gan.v1beta1.CcOffersResource; 
    
    var events: gapi.client.gan.v1beta1.EventsResource; 
    
    var links: gapi.client.gan.v1beta1.LinksResource; 
    
    var publishers: gapi.client.gan.v1beta1.PublishersResource; 
    
    var reports: gapi.client.gan.v1beta1.ReportsResource; 
    
}
