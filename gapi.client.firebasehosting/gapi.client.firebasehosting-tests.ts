/* This is stub file for gapi.client.firebasehosting definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('firebasehosting', 'v1beta1', () => {
        /** now we can use gapi.client.firebasehosting */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** View your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform.read-only',
            /** View and administer all your Firebase data and settings */
            'https://www.googleapis.com/auth/firebase',
            /** View all your Firebase data and settings */
            'https://www.googleapis.com/auth/firebase.readonly',
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
        /** Gets the Hosting metadata for a specific site. */
        await gapi.client.firebasehosting.sites.getConfig({
            name: "Test string",
        });
        /** Deletes the existing domain mapping on the specified site. */
        await gapi.client.firebasehosting.sites.domains.delete({
            name: "Test string",
        });
        /** Lists the domains for the specified site. */
        await gapi.client.firebasehosting.sites.domains.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /** Gets a domain mapping on the specified site. */
        await gapi.client.firebasehosting.sites.domains.get({
            name: "Test string",
        });
        /**
         * Updates the specified domain mapping, creating the mapping as if it does
         * not exist.
         */
        await gapi.client.firebasehosting.sites.domains.update({
            name: "Test string",
        }, {
            domainName: "Test string",
            domainRedirect: {
                domainName: "Test string",
                type: "Test string",
            },
            provisioning: {
                certChallengeDiscoveredTxt: [
                    "Test string"                ],
                certChallengeDns: {
                    domainName: "Test string",
                    token: "Test string",
                },
                certChallengeHttp: {
                    path: "Test string",
                    token: "Test string",
                },
                certStatus: "Test string",
                discoveredIps: [
                    "Test string"                ],
                dnsFetchTime: "Test string",
                dnsStatus: "Test string",
                expectedIps: [
                    "Test string"                ],
            },
            site: "Test string",
            status: "Test string",
            updateTime: "Test string",
        });
        /** Creates a domain mapping on the specified site. */
        await gapi.client.firebasehosting.sites.domains.create({
            parent: "Test string",
        }, {
            domainName: "Test string",
            domainRedirect: {
                domainName: "Test string",
                type: "Test string",
            },
            provisioning: {
                certChallengeDiscoveredTxt: [
                    "Test string"                ],
                certChallengeDns: {
                    domainName: "Test string",
                    token: "Test string",
                },
                certChallengeHttp: {
                    path: "Test string",
                    token: "Test string",
                },
                certStatus: "Test string",
                discoveredIps: [
                    "Test string"                ],
                dnsFetchTime: "Test string",
                dnsStatus: "Test string",
                expectedIps: [
                    "Test string"                ],
            },
            site: "Test string",
            status: "Test string",
            updateTime: "Test string",
        });
        /** Lists the releases that have been created on the specified site. */
        await gapi.client.firebasehosting.sites.releases.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /**
         * Creates a new release which makes the content of the specified version
         * actively display on the site.
         */
        await gapi.client.firebasehosting.sites.releases.create({
            parent: "Test string",
            versionName: "Test string",
        }, {
            message: "Test string",
            name: "Test string",
            releaseTime: "Test string",
            releaseUser: {
                email: "Test string",
                imageUrl: "Test string",
            },
            type: "Test string",
            version: {
                config: {
                    appAssociation: "Test string",
                    cleanUrls: true,
                    headers: [
                        {
                            glob: "Test string",
                            headers: {
                                A: "Test string"                            },
                            regex: "Test string",
                        }                    ],
                    redirects: [
                        {
                            glob: "Test string",
                            location: "Test string",
                            regex: "Test string",
                            statusCode: 42,
                        }                    ],
                    rewrites: [
                        {
                            dynamicLinks: true,
                            function: "Test string",
                            glob: "Test string",
                            path: "Test string",
                            regex: "Test string",
                            run: {
                                region: "Test string",
                                serviceId: "Test string",
                            },
                        }                    ],
                    trailingSlashBehavior: "Test string",
                },
                createTime: "Test string",
                createUser: {
                    email: "Test string",
                    imageUrl: "Test string",
                },
                deleteTime: "Test string",
                deleteUser: {
                    email: "Test string",
                    imageUrl: "Test string",
                },
                fileCount: "Test string",
                finalizeTime: "Test string",
                finalizeUser: {
                    email: "Test string",
                    imageUrl: "Test string",
                },
                labels: {
                    A: "Test string"                },
                name: "Test string",
                preview: {
                    active: true,
                    expireTime: "Test string",
                },
                status: "Test string",
                versionBytes: "Test string",
            },
        });
        /** Creates a new version for a site. */
        await gapi.client.firebasehosting.sites.versions.create({
            parent: "Test string",
            sizeBytes: "Test string",
            versionId: "Test string",
        }, {
            config: {
                appAssociation: "Test string",
                cleanUrls: true,
                headers: [
                    {
                        glob: "Test string",
                        headers: {
                            A: "Test string"                        },
                        regex: "Test string",
                    }                ],
                redirects: [
                    {
                        glob: "Test string",
                        location: "Test string",
                        regex: "Test string",
                        statusCode: 42,
                    }                ],
                rewrites: [
                    {
                        dynamicLinks: true,
                        function: "Test string",
                        glob: "Test string",
                        path: "Test string",
                        regex: "Test string",
                        run: {
                            region: "Test string",
                            serviceId: "Test string",
                        },
                    }                ],
                trailingSlashBehavior: "Test string",
            },
            createTime: "Test string",
            createUser: {
                email: "Test string",
                imageUrl: "Test string",
            },
            deleteTime: "Test string",
            deleteUser: {
                email: "Test string",
                imageUrl: "Test string",
            },
            fileCount: "Test string",
            finalizeTime: "Test string",
            finalizeUser: {
                email: "Test string",
                imageUrl: "Test string",
            },
            labels: {
                A: "Test string"            },
            name: "Test string",
            preview: {
                active: true,
                expireTime: "Test string",
            },
            status: "Test string",
            versionBytes: "Test string",
        });
        /** Lists the remaining files to be uploaded for the specified version. */
        await gapi.client.firebasehosting.sites.versions.files.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            status: "Test string",
        });
        /**
         * Creates a new version on the target site using the content
         * of the specified version.
         */
        await gapi.client.firebasehosting.sites.versions.clone({
            parent: "Test string",
        }, {
            exclude: {
                regexes: [
                    "Test string"                ],
            },
            finalize: true,
            include: {
                regexes: [
                    "Test string"                ],
            },
            sourceVersion: "Test string",
        });
        /** Lists the remaining files to be uploaded for the specified version. */
        await gapi.client.firebasehosting.sites.versions.files.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            status: "Test string",
        });
        /**
         * Updates the specified metadata for a version. Note that this method will
         * fail with `FAILED_PRECONDITION` in the event of an invalid state
         * transition. The only valid transition for a version is currently from a
         * `CREATED` status to a `FINALIZED` status.
         * Use [`DeleteVersion`](../sites.versions/delete) to set the status of a
         * version to `DELETED`.
         */
        await gapi.client.firebasehosting.sites.versions.patch({
            name: "Test string",
            updateMask: "Test string",
        }, {
            config: {
                appAssociation: "Test string",
                cleanUrls: true,
                headers: [
                    {
                        glob: "Test string",
                        headers: {
                            A: "Test string"                        },
                        regex: "Test string",
                    }                ],
                redirects: [
                    {
                        glob: "Test string",
                        location: "Test string",
                        regex: "Test string",
                        statusCode: 42,
                    }                ],
                rewrites: [
                    {
                        dynamicLinks: true,
                        function: "Test string",
                        glob: "Test string",
                        path: "Test string",
                        regex: "Test string",
                        run: {
                            region: "Test string",
                            serviceId: "Test string",
                        },
                    }                ],
                trailingSlashBehavior: "Test string",
            },
            createTime: "Test string",
            createUser: {
                email: "Test string",
                imageUrl: "Test string",
            },
            deleteTime: "Test string",
            deleteUser: {
                email: "Test string",
                imageUrl: "Test string",
            },
            fileCount: "Test string",
            finalizeTime: "Test string",
            finalizeUser: {
                email: "Test string",
                imageUrl: "Test string",
            },
            labels: {
                A: "Test string"            },
            name: "Test string",
            preview: {
                active: true,
                expireTime: "Test string",
            },
            status: "Test string",
            versionBytes: "Test string",
        });
        /** Lists the remaining files to be uploaded for the specified version. */
        await gapi.client.firebasehosting.sites.versions.files.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            status: "Test string",
        });
        /** Adds content files to a version. */
        await gapi.client.firebasehosting.sites.versions.populateFiles({
            parent: "Test string",
        }, {
            files: {
                A: "Test string"            },
        });
        /** Lists the remaining files to be uploaded for the specified version. */
        await gapi.client.firebasehosting.sites.versions.files.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            status: "Test string",
        });
        /** Deletes the specified version. */
        await gapi.client.firebasehosting.sites.versions.delete({
            name: "Test string",
        });
        /** Lists the remaining files to be uploaded for the specified version. */
        await gapi.client.firebasehosting.sites.versions.files.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            status: "Test string",
        });
        /**
         * Lists the versions that have been created on the specified site.
         * Will include filtering in the future.
         */
        await gapi.client.firebasehosting.sites.versions.list({
            filter: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /** Lists the remaining files to be uploaded for the specified version. */
        await gapi.client.firebasehosting.sites.versions.files.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            status: "Test string",
        });
        /** Sets the Hosting metadata for a specific site. */
        await gapi.client.firebasehosting.sites.updateConfig({
            name: "Test string",
            updateMask: "Test string",
        }, {
            maxVersions: "Test string",
        });
        /** Deletes the existing domain mapping on the specified site. */
        await gapi.client.firebasehosting.sites.domains.delete({
            name: "Test string",
        });
        /** Lists the domains for the specified site. */
        await gapi.client.firebasehosting.sites.domains.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /** Gets a domain mapping on the specified site. */
        await gapi.client.firebasehosting.sites.domains.get({
            name: "Test string",
        });
        /**
         * Updates the specified domain mapping, creating the mapping as if it does
         * not exist.
         */
        await gapi.client.firebasehosting.sites.domains.update({
            name: "Test string",
        }, {
            domainName: "Test string",
            domainRedirect: {
                domainName: "Test string",
                type: "Test string",
            },
            provisioning: {
                certChallengeDiscoveredTxt: [
                    "Test string"                ],
                certChallengeDns: {
                    domainName: "Test string",
                    token: "Test string",
                },
                certChallengeHttp: {
                    path: "Test string",
                    token: "Test string",
                },
                certStatus: "Test string",
                discoveredIps: [
                    "Test string"                ],
                dnsFetchTime: "Test string",
                dnsStatus: "Test string",
                expectedIps: [
                    "Test string"                ],
            },
            site: "Test string",
            status: "Test string",
            updateTime: "Test string",
        });
        /** Creates a domain mapping on the specified site. */
        await gapi.client.firebasehosting.sites.domains.create({
            parent: "Test string",
        }, {
            domainName: "Test string",
            domainRedirect: {
                domainName: "Test string",
                type: "Test string",
            },
            provisioning: {
                certChallengeDiscoveredTxt: [
                    "Test string"                ],
                certChallengeDns: {
                    domainName: "Test string",
                    token: "Test string",
                },
                certChallengeHttp: {
                    path: "Test string",
                    token: "Test string",
                },
                certStatus: "Test string",
                discoveredIps: [
                    "Test string"                ],
                dnsFetchTime: "Test string",
                dnsStatus: "Test string",
                expectedIps: [
                    "Test string"                ],
            },
            site: "Test string",
            status: "Test string",
            updateTime: "Test string",
        });
        /** Lists the releases that have been created on the specified site. */
        await gapi.client.firebasehosting.sites.releases.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /**
         * Creates a new release which makes the content of the specified version
         * actively display on the site.
         */
        await gapi.client.firebasehosting.sites.releases.create({
            parent: "Test string",
            versionName: "Test string",
        }, {
            message: "Test string",
            name: "Test string",
            releaseTime: "Test string",
            releaseUser: {
                email: "Test string",
                imageUrl: "Test string",
            },
            type: "Test string",
            version: {
                config: {
                    appAssociation: "Test string",
                    cleanUrls: true,
                    headers: [
                        {
                            glob: "Test string",
                            headers: {
                                A: "Test string"                            },
                            regex: "Test string",
                        }                    ],
                    redirects: [
                        {
                            glob: "Test string",
                            location: "Test string",
                            regex: "Test string",
                            statusCode: 42,
                        }                    ],
                    rewrites: [
                        {
                            dynamicLinks: true,
                            function: "Test string",
                            glob: "Test string",
                            path: "Test string",
                            regex: "Test string",
                            run: {
                                region: "Test string",
                                serviceId: "Test string",
                            },
                        }                    ],
                    trailingSlashBehavior: "Test string",
                },
                createTime: "Test string",
                createUser: {
                    email: "Test string",
                    imageUrl: "Test string",
                },
                deleteTime: "Test string",
                deleteUser: {
                    email: "Test string",
                    imageUrl: "Test string",
                },
                fileCount: "Test string",
                finalizeTime: "Test string",
                finalizeUser: {
                    email: "Test string",
                    imageUrl: "Test string",
                },
                labels: {
                    A: "Test string"                },
                name: "Test string",
                preview: {
                    active: true,
                    expireTime: "Test string",
                },
                status: "Test string",
                versionBytes: "Test string",
            },
        });
        /** Creates a new version for a site. */
        await gapi.client.firebasehosting.sites.versions.create({
            parent: "Test string",
            sizeBytes: "Test string",
            versionId: "Test string",
        }, {
            config: {
                appAssociation: "Test string",
                cleanUrls: true,
                headers: [
                    {
                        glob: "Test string",
                        headers: {
                            A: "Test string"                        },
                        regex: "Test string",
                    }                ],
                redirects: [
                    {
                        glob: "Test string",
                        location: "Test string",
                        regex: "Test string",
                        statusCode: 42,
                    }                ],
                rewrites: [
                    {
                        dynamicLinks: true,
                        function: "Test string",
                        glob: "Test string",
                        path: "Test string",
                        regex: "Test string",
                        run: {
                            region: "Test string",
                            serviceId: "Test string",
                        },
                    }                ],
                trailingSlashBehavior: "Test string",
            },
            createTime: "Test string",
            createUser: {
                email: "Test string",
                imageUrl: "Test string",
            },
            deleteTime: "Test string",
            deleteUser: {
                email: "Test string",
                imageUrl: "Test string",
            },
            fileCount: "Test string",
            finalizeTime: "Test string",
            finalizeUser: {
                email: "Test string",
                imageUrl: "Test string",
            },
            labels: {
                A: "Test string"            },
            name: "Test string",
            preview: {
                active: true,
                expireTime: "Test string",
            },
            status: "Test string",
            versionBytes: "Test string",
        });
        /** Lists the remaining files to be uploaded for the specified version. */
        await gapi.client.firebasehosting.sites.versions.files.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            status: "Test string",
        });
        /**
         * Creates a new version on the target site using the content
         * of the specified version.
         */
        await gapi.client.firebasehosting.sites.versions.clone({
            parent: "Test string",
        }, {
            exclude: {
                regexes: [
                    "Test string"                ],
            },
            finalize: true,
            include: {
                regexes: [
                    "Test string"                ],
            },
            sourceVersion: "Test string",
        });
        /** Lists the remaining files to be uploaded for the specified version. */
        await gapi.client.firebasehosting.sites.versions.files.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            status: "Test string",
        });
        /**
         * Updates the specified metadata for a version. Note that this method will
         * fail with `FAILED_PRECONDITION` in the event of an invalid state
         * transition. The only valid transition for a version is currently from a
         * `CREATED` status to a `FINALIZED` status.
         * Use [`DeleteVersion`](../sites.versions/delete) to set the status of a
         * version to `DELETED`.
         */
        await gapi.client.firebasehosting.sites.versions.patch({
            name: "Test string",
            updateMask: "Test string",
        }, {
            config: {
                appAssociation: "Test string",
                cleanUrls: true,
                headers: [
                    {
                        glob: "Test string",
                        headers: {
                            A: "Test string"                        },
                        regex: "Test string",
                    }                ],
                redirects: [
                    {
                        glob: "Test string",
                        location: "Test string",
                        regex: "Test string",
                        statusCode: 42,
                    }                ],
                rewrites: [
                    {
                        dynamicLinks: true,
                        function: "Test string",
                        glob: "Test string",
                        path: "Test string",
                        regex: "Test string",
                        run: {
                            region: "Test string",
                            serviceId: "Test string",
                        },
                    }                ],
                trailingSlashBehavior: "Test string",
            },
            createTime: "Test string",
            createUser: {
                email: "Test string",
                imageUrl: "Test string",
            },
            deleteTime: "Test string",
            deleteUser: {
                email: "Test string",
                imageUrl: "Test string",
            },
            fileCount: "Test string",
            finalizeTime: "Test string",
            finalizeUser: {
                email: "Test string",
                imageUrl: "Test string",
            },
            labels: {
                A: "Test string"            },
            name: "Test string",
            preview: {
                active: true,
                expireTime: "Test string",
            },
            status: "Test string",
            versionBytes: "Test string",
        });
        /** Lists the remaining files to be uploaded for the specified version. */
        await gapi.client.firebasehosting.sites.versions.files.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            status: "Test string",
        });
        /** Adds content files to a version. */
        await gapi.client.firebasehosting.sites.versions.populateFiles({
            parent: "Test string",
        }, {
            files: {
                A: "Test string"            },
        });
        /** Lists the remaining files to be uploaded for the specified version. */
        await gapi.client.firebasehosting.sites.versions.files.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            status: "Test string",
        });
        /** Deletes the specified version. */
        await gapi.client.firebasehosting.sites.versions.delete({
            name: "Test string",
        });
        /** Lists the remaining files to be uploaded for the specified version. */
        await gapi.client.firebasehosting.sites.versions.files.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            status: "Test string",
        });
        /**
         * Lists the versions that have been created on the specified site.
         * Will include filtering in the future.
         */
        await gapi.client.firebasehosting.sites.versions.list({
            filter: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /** Lists the remaining files to be uploaded for the specified version. */
        await gapi.client.firebasehosting.sites.versions.files.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            status: "Test string",
        });
    }
});
