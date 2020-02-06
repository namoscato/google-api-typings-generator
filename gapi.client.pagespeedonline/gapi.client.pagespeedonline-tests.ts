/* This is stub file for gapi.client.pagespeedonline definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('pagespeedonline', 'v5', () => {
        /** now we can use gapi.client.pagespeedonline */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Associate you with your personal info on Google */
            'openid',
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
         * Runs PageSpeed analysis on the page at the specified URL, and returns
         * PageSpeed scores, a list of suggestions to make that page faster, and other
         * information.
         */
        await gapi.client.pagespeedonline.pagespeedapi.runpagespeed({
            captchaToken: "Test string",
            category: "Test string",
            locale: "Test string",
            strategy: "Test string",
            url: "Test string",
            utm_campaign: "Test string",
            utm_source: "Test string",
        });
    }
});
