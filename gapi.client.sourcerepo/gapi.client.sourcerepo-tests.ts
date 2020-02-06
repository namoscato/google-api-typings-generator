/* This is stub file for gapi.client.sourcerepo definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('sourcerepo', 'v1', () => {
        /** now we can use gapi.client.sourcerepo */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** Manage your source code repositories */
            'https://www.googleapis.com/auth/source.full_control',
            /** View the contents of your source code repositories */
            'https://www.googleapis.com/auth/source.read_only',
            /** Manage the contents of your source code repositories */
            'https://www.googleapis.com/auth/source.read_write',
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
        /** Returns the Cloud Source Repositories configuration of the project. */
        await gapi.client.sourcerepo.projects.getConfig({
            name: "Test string",
        });
        /**
         * Gets the access control policy for a resource.
         * Returns an empty policy if the resource exists and does not have a policy
         * set.
         */
        await gapi.client.sourcerepo.projects.repos.getIamPolicy({
            "options.requestedPolicyVersion": 42,
            resource: "Test string",
        });
        /** Returns information about a repo. */
        await gapi.client.sourcerepo.projects.repos.get({
            name: "Test string",
        });
        /** Updates information about a repo. */
        await gapi.client.sourcerepo.projects.repos.patch({
            name: "Test string",
        }, {
            repo: {
                mirrorConfig: {
                    deployKeyId: "Test string",
                    url: "Test string",
                    webhookId: "Test string",
                },
                name: "Test string",
                pubsubConfigs: {
                    A: {
                        messageFormat: "Test string",
                        serviceAccountEmail: "Test string",
                        topic: "Test string",
                    }                },
                size: "Test string",
                url: "Test string",
            },
            updateMask: "Test string",
        });
        /**
         * Returns permissions that a caller has on the specified resource.
         * If the resource does not exist, this will return an empty set of
         * permissions, not a NOT_FOUND error.
         */
        await gapi.client.sourcerepo.projects.repos.testIamPermissions({
            resource: "Test string",
        }, {
            permissions: [
                "Test string"            ],
        });
        /** Deletes a repo. */
        await gapi.client.sourcerepo.projects.repos.delete({
            name: "Test string",
        });
        /**
         * Returns all repos belonging to a project. The sizes of the repos are
         * not set by ListRepos.  To get the size of a repo, use GetRepo.
         */
        await gapi.client.sourcerepo.projects.repos.list({
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * Synchronize a connected repo.
         *
         * The response contains SyncRepoMetadata in the metadata field.
         */
        await gapi.client.sourcerepo.projects.repos.sync({
            name: "Test string",
        }, {
        });
        /**
         * Sets the access control policy on the specified resource. Replaces any
         * existing policy.
         */
        await gapi.client.sourcerepo.projects.repos.setIamPolicy({
            resource: "Test string",
        }, {
            policy: {
                auditConfigs: [
                    {
                        auditLogConfigs: [
                            {
                                exemptedMembers: [
                                    "Test string"                                ],
                                logType: "Test string",
                            }                        ],
                        service: "Test string",
                    }                ],
                bindings: [
                    {
                        condition: {
                            description: "Test string",
                            expression: "Test string",
                            location: "Test string",
                            title: "Test string",
                        },
                        members: [
                            "Test string"                        ],
                        role: "Test string",
                    }                ],
                etag: "Test string",
                version: 42,
            },
            updateMask: "Test string",
        });
        /**
         * Creates a repo in the given project with the given name.
         *
         * If the named repository already exists, `CreateRepo` returns
         * `ALREADY_EXISTS`.
         */
        await gapi.client.sourcerepo.projects.repos.create({
            parent: "Test string",
        }, {
            mirrorConfig: {
                deployKeyId: "Test string",
                url: "Test string",
                webhookId: "Test string",
            },
            name: "Test string",
            pubsubConfigs: {
                A: {
                    messageFormat: "Test string",
                    serviceAccountEmail: "Test string",
                    topic: "Test string",
                }            },
            size: "Test string",
            url: "Test string",
        });
        /** Updates the Cloud Source Repositories configuration of the project. */
        await gapi.client.sourcerepo.projects.updateConfig({
            name: "Test string",
        }, {
            projectConfig: {
                enablePrivateKeyCheck: true,
                name: "Test string",
                pubsubConfigs: {
                    A: {
                        messageFormat: "Test string",
                        serviceAccountEmail: "Test string",
                        topic: "Test string",
                    }                },
            },
            updateMask: "Test string",
        });
        /**
         * Gets the access control policy for a resource.
         * Returns an empty policy if the resource exists and does not have a policy
         * set.
         */
        await gapi.client.sourcerepo.projects.repos.getIamPolicy({
            "options.requestedPolicyVersion": 42,
            resource: "Test string",
        });
        /** Returns information about a repo. */
        await gapi.client.sourcerepo.projects.repos.get({
            name: "Test string",
        });
        /** Updates information about a repo. */
        await gapi.client.sourcerepo.projects.repos.patch({
            name: "Test string",
        }, {
            repo: {
                mirrorConfig: {
                    deployKeyId: "Test string",
                    url: "Test string",
                    webhookId: "Test string",
                },
                name: "Test string",
                pubsubConfigs: {
                    A: {
                        messageFormat: "Test string",
                        serviceAccountEmail: "Test string",
                        topic: "Test string",
                    }                },
                size: "Test string",
                url: "Test string",
            },
            updateMask: "Test string",
        });
        /**
         * Returns permissions that a caller has on the specified resource.
         * If the resource does not exist, this will return an empty set of
         * permissions, not a NOT_FOUND error.
         */
        await gapi.client.sourcerepo.projects.repos.testIamPermissions({
            resource: "Test string",
        }, {
            permissions: [
                "Test string"            ],
        });
        /** Deletes a repo. */
        await gapi.client.sourcerepo.projects.repos.delete({
            name: "Test string",
        });
        /**
         * Returns all repos belonging to a project. The sizes of the repos are
         * not set by ListRepos.  To get the size of a repo, use GetRepo.
         */
        await gapi.client.sourcerepo.projects.repos.list({
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * Synchronize a connected repo.
         *
         * The response contains SyncRepoMetadata in the metadata field.
         */
        await gapi.client.sourcerepo.projects.repos.sync({
            name: "Test string",
        }, {
        });
        /**
         * Sets the access control policy on the specified resource. Replaces any
         * existing policy.
         */
        await gapi.client.sourcerepo.projects.repos.setIamPolicy({
            resource: "Test string",
        }, {
            policy: {
                auditConfigs: [
                    {
                        auditLogConfigs: [
                            {
                                exemptedMembers: [
                                    "Test string"                                ],
                                logType: "Test string",
                            }                        ],
                        service: "Test string",
                    }                ],
                bindings: [
                    {
                        condition: {
                            description: "Test string",
                            expression: "Test string",
                            location: "Test string",
                            title: "Test string",
                        },
                        members: [
                            "Test string"                        ],
                        role: "Test string",
                    }                ],
                etag: "Test string",
                version: 42,
            },
            updateMask: "Test string",
        });
        /**
         * Creates a repo in the given project with the given name.
         *
         * If the named repository already exists, `CreateRepo` returns
         * `ALREADY_EXISTS`.
         */
        await gapi.client.sourcerepo.projects.repos.create({
            parent: "Test string",
        }, {
            mirrorConfig: {
                deployKeyId: "Test string",
                url: "Test string",
                webhookId: "Test string",
            },
            name: "Test string",
            pubsubConfigs: {
                A: {
                    messageFormat: "Test string",
                    serviceAccountEmail: "Test string",
                    topic: "Test string",
                }            },
            size: "Test string",
            url: "Test string",
        });
    }
});
