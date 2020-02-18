/* This is stub file for gapi.client.digitalassetlinks definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('digitalassetlinks', 'v1', () => {
        /** now we can use gapi.client.digitalassetlinks */

        run();
    });

    async function run() {
        /**
         * Determines whether the specified (directional) relationship exists between
         * the specified source and target assets.
         *
         * The relation describes the intent of the link between the two assets as
         * claimed by the source asset.  An example for such relationships is the
         * delegation of privileges or permissions.
         *
         * This command is most often used by infrastructure systems to check
         * preconditions for an action.  For example, a client may want to know if it
         * is OK to send a web URL to a particular mobile app instead. The client can
         * check for the relevant asset link from the website to the mobile app to
         * decide if the operation should be allowed.
         *
         * A note about security: if you specify a secure asset as the source, such as
         * an HTTPS website or an Android app, the API will ensure that any
         * statements used to generate the response have been made in a secure way by
         * the owner of that asset.  Conversely, if the source asset is an insecure
         * HTTP website (that is, the URL starts with `http://` instead of
         * `https://`), the API cannot verify its statements securely, and it is not
         * possible to ensure that the website's statements have not been altered by a
         * third party.  For more information, see the [Digital Asset Links technical
         * design
         * specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).
         */
        await gapi.client.digitalassetlinks.assetlinks.check({
            relation: "Test string",
            "source.androidApp.certificate.sha256Fingerprint": "Test string",
            "source.androidApp.packageName": "Test string",
            "source.web.site": "Test string",
            "target.androidApp.certificate.sha256Fingerprint": "Test string",
            "target.androidApp.packageName": "Test string",
            "target.web.site": "Test string",
        });
        /**
         * Retrieves a list of all statements from a given source that match the
         * specified target and statement string.
         *
         * The API guarantees that all statements with secure source assets, such as
         * HTTPS websites or Android apps, have been made in a secure way by the owner
         * of those assets, as described in the [Digital Asset Links technical design
         * specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).
         * Specifically, you should consider that for insecure websites (that is,
         * where the URL starts with `http://` instead of `https://`), this guarantee
         * cannot be made.
         *
         * The `List` command is most useful in cases where the API client wants to
         * know all the ways in which two assets are related, or enumerate all the
         * relationships from a particular source asset.  Example: a feature that
         * helps users navigate to related items.  When a mobile app is running on a
         * device, the feature would make it easy to navigate to the corresponding web
         * site or Google+ profile.
         */
        await gapi.client.digitalassetlinks.statements.list({
            relation: "Test string",
            "source.androidApp.certificate.sha256Fingerprint": "Test string",
            "source.androidApp.packageName": "Test string",
            "source.web.site": "Test string",
        });
    }
});