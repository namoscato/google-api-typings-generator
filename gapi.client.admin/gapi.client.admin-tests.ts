/* This is stub file for gapi.client.admin definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('admin', 'reports_v1', () => {
        /** now we can use gapi.client.admin */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View audit reports for your G Suite domain */
            'https://www.googleapis.com/auth/admin.reports.audit.readonly',
            /** View usage reports for your G Suite domain */
            'https://www.googleapis.com/auth/admin.reports.usage.readonly',
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
        /**
         * Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application.
         * For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters,
         * see the activity parameters reference guides.
         */
        await gapi.client.admin.activities.list({
            actorIpAddress: "Test string",
            applicationName: "Test string",
            customerId: "Test string",
            endTime: "Test string",
            eventName: "Test string",
            filters: "Test string",
            maxResults: 42,
            orgUnitID: "Test string",
            pageToken: "Test string",
            startTime: "Test string",
            userKey: "Test string",
        });
        /** Start receiving notifications for account activities. For more information, see Receiving Push Notifications. */
        await gapi.client.admin.activities.watch({
            actorIpAddress: "Test string",
            applicationName: "Test string",
            customerId: "Test string",
            endTime: "Test string",
            eventName: "Test string",
            filters: "Test string",
            maxResults: 42,
            orgUnitID: "Test string",
            pageToken: "Test string",
            startTime: "Test string",
            userKey: "Test string",
        }, {
            address: "Test string",
            expiration: "Test string",
            id: "Test string",
            kind: "Test string",
            params: {
                A: "Test string"            },
            payload: true,
            resourceId: "Test string",
            resourceUri: "Test string",
            token: "Test string",
            type: "Test string",
        });
        /** Stop watching resources through this channel */
        await gapi.client.admin.channels.stop(, {
            address: "Test string",
            expiration: "Test string",
            id: "Test string",
            kind: "Test string",
            params: {
                A: "Test string"            },
            payload: true,
            resourceId: "Test string",
            resourceUri: "Test string",
            token: "Test string",
            type: "Test string",
        });
        /**
         * Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage
         * Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides.
         */
        await gapi.client.admin.customerUsageReports.get({
            customerId: "Test string",
            date: "Test string",
            pageToken: "Test string",
            parameters: "Test string",
        });
        /**
         * Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the
         * Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.
         */
        await gapi.client.admin.entityUsageReports.get({
            customerId: "Test string",
            date: "Test string",
            entityKey: "Test string",
            entityType: "Test string",
            filters: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            parameters: "Test string",
        });
        /**
         * Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage
         * Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.
         */
        await gapi.client.admin.userUsageReport.get({
            customerId: "Test string",
            date: "Test string",
            filters: "Test string",
            maxResults: 42,
            orgUnitID: "Test string",
            pageToken: "Test string",
            parameters: "Test string",
            userKey: "Test string",
        });
    }
});
