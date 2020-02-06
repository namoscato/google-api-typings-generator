/* This is stub file for gapi.client.doubleclicksearch definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('doubleclicksearch', 'v2', () => {
        /** now we can use gapi.client.doubleclicksearch */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your advertising data in DoubleClick Search */
            'https://www.googleapis.com/auth/doubleclicksearch',
        ];
        const immediate = false;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle successful authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
    });

    async function run() {
        /** Retrieves a list of conversions from a DoubleClick Search engine account. */
        await gapi.client.doubleclicksearch.conversion.get({
            adGroupId: "Test string",
            adId: "Test string",
            advertiserId: "Test string",
            agencyId: "Test string",
            campaignId: "Test string",
            criterionId: "Test string",
            endDate: 42,
            engineAccountId: "Test string",
            rowCount: 42,
            startDate: 42,
            startRow: 42,
        });
        /** Inserts a batch of new conversions into DoubleClick Search. */
        await gapi.client.doubleclicksearch.conversion.insert(, {
            conversion: [
                {
                    adGroupId: "Test string",
                    adId: "Test string",
                    advertiserId: "Test string",
                    agencyId: "Test string",
                    attributionModel: "Test string",
                    campaignId: "Test string",
                    channel: "Test string",
                    clickId: "Test string",
                    conversionId: "Test string",
                    conversionModifiedTimestamp: "Test string",
                    conversionTimestamp: "Test string",
                    countMillis: "Test string",
                    criterionId: "Test string",
                    currencyCode: "Test string",
                    customDimension: [
                        {
                            name: "Test string",
                            value: "Test string",
                        }                    ],
                    customMetric: [
                        {
                            name: "Test string",
                            value: 42,
                        }                    ],
                    deviceType: "Test string",
                    dsConversionId: "Test string",
                    engineAccountId: "Test string",
                    floodlightOrderId: "Test string",
                    inventoryAccountId: "Test string",
                    productCountry: "Test string",
                    productGroupId: "Test string",
                    productId: "Test string",
                    productLanguage: "Test string",
                    quantityMillis: "Test string",
                    revenueMicros: "Test string",
                    segmentationId: "Test string",
                    segmentationName: "Test string",
                    segmentationType: "Test string",
                    state: "Test string",
                    storeId: "Test string",
                    type: "Test string",
                }            ],
            kind: "Test string",
        });
        /** Updates a batch of conversions in DoubleClick Search. This method supports patch semantics. */
        await gapi.client.doubleclicksearch.conversion.patch({
            advertiserId: "Test string",
            agencyId: "Test string",
            endDate: 42,
            engineAccountId: "Test string",
            rowCount: 42,
            startDate: 42,
            startRow: 42,
        }, {
            conversion: [
                {
                    adGroupId: "Test string",
                    adId: "Test string",
                    advertiserId: "Test string",
                    agencyId: "Test string",
                    attributionModel: "Test string",
                    campaignId: "Test string",
                    channel: "Test string",
                    clickId: "Test string",
                    conversionId: "Test string",
                    conversionModifiedTimestamp: "Test string",
                    conversionTimestamp: "Test string",
                    countMillis: "Test string",
                    criterionId: "Test string",
                    currencyCode: "Test string",
                    customDimension: [
                        {
                            name: "Test string",
                            value: "Test string",
                        }                    ],
                    customMetric: [
                        {
                            name: "Test string",
                            value: 42,
                        }                    ],
                    deviceType: "Test string",
                    dsConversionId: "Test string",
                    engineAccountId: "Test string",
                    floodlightOrderId: "Test string",
                    inventoryAccountId: "Test string",
                    productCountry: "Test string",
                    productGroupId: "Test string",
                    productId: "Test string",
                    productLanguage: "Test string",
                    quantityMillis: "Test string",
                    revenueMicros: "Test string",
                    segmentationId: "Test string",
                    segmentationName: "Test string",
                    segmentationType: "Test string",
                    state: "Test string",
                    storeId: "Test string",
                    type: "Test string",
                }            ],
            kind: "Test string",
        });
        /** Updates a batch of conversions in DoubleClick Search. */
        await gapi.client.doubleclicksearch.conversion.update(, {
            conversion: [
                {
                    adGroupId: "Test string",
                    adId: "Test string",
                    advertiserId: "Test string",
                    agencyId: "Test string",
                    attributionModel: "Test string",
                    campaignId: "Test string",
                    channel: "Test string",
                    clickId: "Test string",
                    conversionId: "Test string",
                    conversionModifiedTimestamp: "Test string",
                    conversionTimestamp: "Test string",
                    countMillis: "Test string",
                    criterionId: "Test string",
                    currencyCode: "Test string",
                    customDimension: [
                        {
                            name: "Test string",
                            value: "Test string",
                        }                    ],
                    customMetric: [
                        {
                            name: "Test string",
                            value: 42,
                        }                    ],
                    deviceType: "Test string",
                    dsConversionId: "Test string",
                    engineAccountId: "Test string",
                    floodlightOrderId: "Test string",
                    inventoryAccountId: "Test string",
                    productCountry: "Test string",
                    productGroupId: "Test string",
                    productId: "Test string",
                    productLanguage: "Test string",
                    quantityMillis: "Test string",
                    revenueMicros: "Test string",
                    segmentationId: "Test string",
                    segmentationName: "Test string",
                    segmentationType: "Test string",
                    state: "Test string",
                    storeId: "Test string",
                    type: "Test string",
                }            ],
            kind: "Test string",
        });
        /** Updates the availabilities of a batch of floodlight activities in DoubleClick Search. */
        await gapi.client.doubleclicksearch.conversion.updateAvailability(, {
            availabilities: [
                {
                    advertiserId: "Test string",
                    agencyId: "Test string",
                    availabilityTimestamp: "Test string",
                    segmentationId: "Test string",
                    segmentationName: "Test string",
                    segmentationType: "Test string",
                }            ],
        });
        /** Generates and returns a report immediately. */
        await gapi.client.doubleclicksearch.reports.generate(, {
            columns: [
                {
                    columnName: "Test string",
                    customDimensionName: "Test string",
                    customMetricName: "Test string",
                    endDate: "Test string",
                    groupByColumn: true,
                    headerText: "Test string",
                    platformSource: "Test string",
                    productReportPerspective: "Test string",
                    savedColumnName: "Test string",
                    startDate: "Test string",
                }            ],
            downloadFormat: "Test string",
            filters: [
                {
                    column: {
                        columnName: "Test string",
                        customDimensionName: "Test string",
                        customMetricName: "Test string",
                        endDate: "Test string",
                        groupByColumn: true,
                        headerText: "Test string",
                        platformSource: "Test string",
                        productReportPerspective: "Test string",
                        savedColumnName: "Test string",
                        startDate: "Test string",
                    },
                    operator: "Test string",
                    values: [
                        42                    ],
                }            ],
            includeDeletedEntities: true,
            includeRemovedEntities: true,
            maxRowsPerFile: 42,
            orderBy: [
                {
                    column: {
                        columnName: "Test string",
                        customDimensionName: "Test string",
                        customMetricName: "Test string",
                        endDate: "Test string",
                        groupByColumn: true,
                        headerText: "Test string",
                        platformSource: "Test string",
                        productReportPerspective: "Test string",
                        savedColumnName: "Test string",
                        startDate: "Test string",
                    },
                    sortOrder: "Test string",
                }            ],
            reportScope: {
                adGroupId: "Test string",
                adId: "Test string",
                advertiserId: "Test string",
                agencyId: "Test string",
                campaignId: "Test string",
                engineAccountId: "Test string",
                keywordId: "Test string",
            },
            reportType: "Test string",
            rowCount: 42,
            startRow: 42,
            statisticsCurrency: "Test string",
            timeRange: {
                changedAttributesSinceTimestamp: "Test string",
                changedMetricsSinceTimestamp: "Test string",
                endDate: "Test string",
                startDate: "Test string",
            },
            verifySingleTimeZone: true,
        });
        /** Polls for the status of a report request. */
        await gapi.client.doubleclicksearch.reports.get({
            reportId: "Test string",
        });
        /** Downloads a report file encoded in UTF-8. */
        await gapi.client.doubleclicksearch.reports.getFile({
            reportFragment: 42,
            reportId: "Test string",
        });
        /** Inserts a report request into the reporting system. */
        await gapi.client.doubleclicksearch.reports.request(, {
            columns: [
                {
                    columnName: "Test string",
                    customDimensionName: "Test string",
                    customMetricName: "Test string",
                    endDate: "Test string",
                    groupByColumn: true,
                    headerText: "Test string",
                    platformSource: "Test string",
                    productReportPerspective: "Test string",
                    savedColumnName: "Test string",
                    startDate: "Test string",
                }            ],
            downloadFormat: "Test string",
            filters: [
                {
                    column: {
                        columnName: "Test string",
                        customDimensionName: "Test string",
                        customMetricName: "Test string",
                        endDate: "Test string",
                        groupByColumn: true,
                        headerText: "Test string",
                        platformSource: "Test string",
                        productReportPerspective: "Test string",
                        savedColumnName: "Test string",
                        startDate: "Test string",
                    },
                    operator: "Test string",
                    values: [
                        42                    ],
                }            ],
            includeDeletedEntities: true,
            includeRemovedEntities: true,
            maxRowsPerFile: 42,
            orderBy: [
                {
                    column: {
                        columnName: "Test string",
                        customDimensionName: "Test string",
                        customMetricName: "Test string",
                        endDate: "Test string",
                        groupByColumn: true,
                        headerText: "Test string",
                        platformSource: "Test string",
                        productReportPerspective: "Test string",
                        savedColumnName: "Test string",
                        startDate: "Test string",
                    },
                    sortOrder: "Test string",
                }            ],
            reportScope: {
                adGroupId: "Test string",
                adId: "Test string",
                advertiserId: "Test string",
                agencyId: "Test string",
                campaignId: "Test string",
                engineAccountId: "Test string",
                keywordId: "Test string",
            },
            reportType: "Test string",
            rowCount: 42,
            startRow: 42,
            statisticsCurrency: "Test string",
            timeRange: {
                changedAttributesSinceTimestamp: "Test string",
                changedMetricsSinceTimestamp: "Test string",
                endDate: "Test string",
                startDate: "Test string",
            },
            verifySingleTimeZone: true,
        });
        /** Retrieve the list of saved columns for a specified advertiser. */
        await gapi.client.doubleclicksearch.savedColumns.list({
            advertiserId: "Test string",
            agencyId: "Test string",
        });
    }
});
