// Type definitions for Google Google Identity Toolkit API v3
// Project: https://developers.google.com/identity-toolkit/v3/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.identitytoolkit.v3 {
    
    interface CreateAuthUriResponse {
        // all providers the user has once used to do federated login
        allProviders?: string[],        
        // The URI used by the IDP to authenticate the user.
        authUri?: string,
        // True if captcha is required.
        captchaRequired?: boolean,
        // True if the authUri is for user's existing provider.
        forExistingProvider?: boolean,
        // The fixed string identitytoolkit#CreateAuthUriResponse".
        kind?: string,
        // The provider ID of the auth URI.
        providerId?: string,
        // Whether the user is registered if the identifier is an email.
        registered?: boolean,
        // Session ID which should be passed in the following verifyAssertion request.
        sessionId?: string,
    }
    
    interface DeleteAccountResponse {
        // The fixed string "identitytoolkit#DeleteAccountResponse".
        kind?: string,
    }
    
    interface DownloadAccountResponse {
        // The fixed string "identitytoolkit#DownloadAccountResponse".
        kind?: string,
        // The next page token. To be used in a subsequent request to return the next page of results.
        nextPageToken?: string,
        // The user accounts data.
        users?: UserInfo[],        
    }
    
    interface EmailTemplate {
        // Email body.
        body?: string,
        // Email body format.
        format?: string,
        // From address of the email.
        from?: string,
        // From display name.
        fromDisplayName?: string,
        // Reply-to address.
        replyTo?: string,
        // Subject of the email.
        subject?: string,
    }
    
    interface GetAccountInfoResponse {
        // The fixed string "identitytoolkit#GetAccountInfoResponse".
        kind?: string,
        // The info of the users.
        users?: UserInfo[],        
    }
    
    interface GetOobConfirmationCodeResponse {
        // The email address that the email is sent to.
        email?: string,
        // The fixed string "identitytoolkit#GetOobConfirmationCodeResponse".
        kind?: string,
        // The code to be send to the user.
        oobCode?: string,
    }
    
    interface GetRecaptchaParamResponse {
        // The fixed string "identitytoolkit#GetRecaptchaParamResponse".
        kind?: string,
        // Site key registered at recaptcha.
        recaptchaSiteKey?: string,
        // The stoken field for the recaptcha widget, used to request captcha challenge.
        recaptchaStoken?: string,
    }
    
    interface IdentitytoolkitRelyingpartyCreateAuthUriRequest {
        // The app ID of the mobile app, base64(CERT_SHA1):PACKAGE_NAME for Android, BUNDLE_ID for iOS.
        appId?: string,
        // The relying party OAuth client ID.
        clientId?: string,
        // The opaque value used by the client to maintain context info between the authentication request and the IDP callback.
        context?: string,
        // The URI to which the IDP redirects the user after the federated login flow.
        continueUri?: string,
        // The email or federated ID of the user.
        identifier?: string,
        // The developer's consumer key for OpenId OAuth Extension
        oauthConsumerKey?: string,
        // Additional oauth scopes, beyond the basid user profile, that the user would be prompted to grant
        oauthScope?: string,
        // Optional realm for OpenID protocol. The sub string "scheme://domain:port" of the param "continueUri" is used if this is not set.
        openidRealm?: string,
        // The native app package for OTA installation.
        otaApp?: string,
        // The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier.
        providerId?: string,
    }
    
    interface IdentitytoolkitRelyingpartyDeleteAccountRequest {
        // GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
        delegatedProjectNumber?: string,
        // The GITKit token or STS id token of the authenticated user.
        idToken?: string,
        // The local ID of the user.
        localId?: string,
    }
    
    interface IdentitytoolkitRelyingpartyDownloadAccountRequest {
        // GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
        delegatedProjectNumber?: string,
        // The max number of results to return in the response.
        maxResults?: number,
        // The token for the next page. This should be taken from the previous response.
        nextPageToken?: string,
    }
    
    interface IdentitytoolkitRelyingpartyGetAccountInfoRequest {
        // GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
        delegatedProjectNumber?: string,
        // The list of emails of the users to inquiry.
        email?: string[],        
        // The GITKit token of the authenticated user.
        idToken?: string,
        // The list of local ID's of the users to inquiry.
        localId?: string[],        
    }
    
    interface IdentitytoolkitRelyingpartyGetProjectConfigResponse {
        // Whether to allow password user sign in or sign up.
        allowPasswordUser?: boolean,
        // Browser API key, needed when making http request to Apiary.
        apiKey?: string,
        // Authorized domains.
        authorizedDomains?: string[],        
        // Change email template.
        changeEmailTemplate?: EmailTemplate,
        // OAuth2 provider configuration.
        idpConfig?: IdpConfig[],        
        // Project ID of the relying party.
        projectId?: string,
        // Reset password email template.
        resetPasswordTemplate?: EmailTemplate,
        // Whether to use email sending provided by Firebear.
        useEmailSending?: boolean,
        // Verify email template.
        verifyEmailTemplate?: EmailTemplate,
    }
    
    interface IdentitytoolkitRelyingpartyGetPublicKeysResponse {
    }
    
    interface IdentitytoolkitRelyingpartyResetPasswordRequest {
        // The email address of the user.
        email?: string,
        // The new password inputted by the user.
        newPassword?: string,
        // The old password inputted by the user.
        oldPassword?: string,
        // The confirmation code.
        oobCode?: string,
    }
    
    interface IdentitytoolkitRelyingpartySetAccountInfoRequest {
        // The captcha challenge.
        captchaChallenge?: string,
        // Response to the captcha.
        captchaResponse?: string,
        // GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
        delegatedProjectNumber?: string,
        // The attributes users request to delete.
        deleteAttribute?: string[],        
        // The IDPs the user request to delete.
        deleteProvider?: string[],        
        // Whether to disable the user.
        disableUser?: boolean,
        // The name of the user.
        displayName?: string,
        // The email of the user.
        email?: string,
        // Mark the email as verified or not.
        emailVerified?: boolean,
        // The GITKit token of the authenticated user.
        idToken?: string,
        // Instance id token of the app.
        instanceId?: string,
        // The local ID of the user.
        localId?: string,
        // The out-of-band code of the change email request.
        oobCode?: string,
        // The new password of the user.
        password?: string,
        // The photo url of the user.
        photoUrl?: string,
        // The associated IDPs of the user.
        provider?: string[],        
        // Whether return sts id token and refresh token instead of gitkit token.
        returnSecureToken?: boolean,
        // Mark the user to upgrade to federated login.
        upgradeToFederatedLogin?: boolean,
        // Timestamp in seconds for valid login token.
        validSince?: string,
    }
    
    interface IdentitytoolkitRelyingpartySetProjectConfigRequest {
        // Whether to allow password user sign in or sign up.
        allowPasswordUser?: boolean,
        // Browser API key, needed when making http request to Apiary.
        apiKey?: string,
        // Change email template.
        changeEmailTemplate?: EmailTemplate,
        // GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
        delegatedProjectNumber?: string,
        // Oauth2 provider configuration.
        idpConfig?: IdpConfig[],        
        // Reset password email template.
        resetPasswordTemplate?: EmailTemplate,
        // Whether to use email sending provided by Firebear.
        useEmailSending?: boolean,
        // Verify email template.
        verifyEmailTemplate?: EmailTemplate,
    }
    
    interface IdentitytoolkitRelyingpartySetProjectConfigResponse {
        // Project ID of the relying party.
        projectId?: string,
    }
    
    interface IdentitytoolkitRelyingpartySignOutUserRequest {
        // Instance id token of the app.
        instanceId?: string,
        // The local ID of the user.
        localId?: string,
    }
    
    interface IdentitytoolkitRelyingpartySignOutUserResponse {
        // The local ID of the user.
        localId?: string,
    }
    
    interface IdentitytoolkitRelyingpartySignupNewUserRequest {
        // The captcha challenge.
        captchaChallenge?: string,
        // Response to the captcha.
        captchaResponse?: string,
        // The name of the user.
        displayName?: string,
        // The email of the user.
        email?: string,
        // The GITKit token of the authenticated user.
        idToken?: string,
        // Instance id token of the app.
        instanceId?: string,
        // The new password of the user.
        password?: string,
        // Whether return sts id token and refresh token instead of gitkit token.
        returnSecureToken?: boolean,
    }
    
    interface IdentitytoolkitRelyingpartyUploadAccountRequest {
        // GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
        delegatedProjectNumber?: string,
        // The password hash algorithm.
        hashAlgorithm?: string,
        // Memory cost for hash calculation. Used by scrypt similar algorithms.
        memoryCost?: number,
        // Rounds for hash calculation. Used by scrypt and similar algorithms.
        rounds?: number,
        // The salt separator.
        saltSeparator?: string,
        // The key for to hash the password.
        signerKey?: string,
        // The account info to be stored.
        users?: UserInfo[],        
    }
    
    interface IdentitytoolkitRelyingpartyVerifyAssertionRequest {
        // GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
        delegatedProjectNumber?: string,
        // The GITKit token of the authenticated user.
        idToken?: string,
        // Instance id token of the app.
        instanceId?: string,
        // The GITKit token for the non-trusted IDP pending to be confirmed by the user.
        pendingIdToken?: string,
        // The post body if the request is a HTTP POST.
        postBody?: string,
        // The URI to which the IDP redirects the user back. It may contain federated login result params added by the IDP.
        requestUri?: string,
        // Whether to return refresh tokens.
        returnRefreshToken?: boolean,
        // Whether return sts id token and refresh token instead of gitkit token.
        returnSecureToken?: boolean,
        // Session ID, which should match the one in previous createAuthUri request.
        sessionId?: string,
    }
    
    interface IdentitytoolkitRelyingpartyVerifyCustomTokenRequest {
        // Instance id token of the app.
        instanceId?: string,
        // Whether return sts id token and refresh token instead of gitkit token.
        returnSecureToken?: boolean,
        // The custom token to verify
        token?: string,
    }
    
    interface IdentitytoolkitRelyingpartyVerifyPasswordRequest {
        // The captcha challenge.
        captchaChallenge?: string,
        // Response to the captcha.
        captchaResponse?: string,
        // GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
        delegatedProjectNumber?: string,
        // The email of the user.
        email?: string,
        // The GITKit token of the authenticated user.
        idToken?: string,
        // Instance id token of the app.
        instanceId?: string,
        // The password inputed by the user.
        password?: string,
        // The GITKit token for the non-trusted IDP, which is to be confirmed by the user.
        pendingIdToken?: string,
        // Whether return sts id token and refresh token instead of gitkit token.
        returnSecureToken?: boolean,
    }
    
    interface IdpConfig {
        // OAuth2 client ID.
        clientId?: string,
        // Whether this IDP is enabled.
        enabled?: boolean,
        // Percent of users who will be prompted/redirected federated login for this IDP.
        experimentPercent?: number,
        // OAuth2 provider.
        provider?: string,
    }
    
    interface Relyingparty {
        // The recaptcha response from the user.
        captchaResp?: string,
        // The recaptcha challenge presented to the user.
        challenge?: string,
        // The email of the user.
        email?: string,
        // The user's Gitkit login token for email change.
        idToken?: string,
        // The fixed string "identitytoolkit#relyingparty".
        kind?: string,
        // The new email if the code is for email change.
        newEmail?: string,
        // The request type.
        requestType?: string,
        // The IP address of the user.
        userIp?: string,
    }
    
    interface ResetPasswordResponse {
        // The user's email.
        email?: string,
        // The fixed string "identitytoolkit#ResetPasswordResponse".
        kind?: string,
    }
    
    interface SetAccountInfoResponse {
        // The name of the user.
        displayName?: string,
        // The email of the user.
        email?: string,
        // If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
        expiresIn?: string,
        // The Gitkit id token to login the newly sign up user.
        idToken?: string,
        // The fixed string "identitytoolkit#SetAccountInfoResponse".
        kind?: string,
        // The new email the user attempts to change to.
        newEmail?: string,
        // The photo url of the user.
        photoUrl?: string,
        // The user's profiles at the associated IdPs.
        providerUserInfo?: {        
            // The user's display name at the IDP.
            displayName?: string,
            // The user's photo url at the IDP.
            photoUrl?: string,
            // The IdP ID. For whitelisted IdPs it's a short domain name, e.g., google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier.
            providerId?: string,
        }[],        
        // If idToken is STS id token, then this field will be refresh token.
        refreshToken?: string,
    }
    
    interface SignupNewUserResponse {
        // The name of the user.
        displayName?: string,
        // The email of the user.
        email?: string,
        // If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
        expiresIn?: string,
        // The Gitkit id token to login the newly sign up user.
        idToken?: string,
        // The fixed string "identitytoolkit#SignupNewUserResponse".
        kind?: string,
        // The RP local ID of the user.
        localId?: string,
        // If idToken is STS id token, then this field will be refresh token.
        refreshToken?: string,
    }
    
    interface UploadAccountResponse {
        // The error encountered while processing the account info.
        error?: {        
            // The index of the malformed account, starting from 0.
            index?: number,
            // Detailed error message for the account info.
            message?: string,
        }[],        
        // The fixed string "identitytoolkit#UploadAccountResponse".
        kind?: string,
    }
    
    interface UserInfo {
        // Whether the user is disabled.
        disabled?: boolean,
        // The name of the user.
        displayName?: string,
        // The email of the user.
        email?: string,
        // Whether the email has been verified.
        emailVerified?: boolean,
        // The local ID of the user.
        localId?: string,
        // The user's hashed password.
        passwordHash?: string,
        // The timestamp when the password was last updated.
        passwordUpdatedAt?: number,
        // The URL of the user profile photo.
        photoUrl?: string,
        // The IDP of the user.
        providerUserInfo?: {        
            // The user's display name at the IDP.
            displayName?: string,
            // User's email at IDP.
            email?: string,
            // User's identifier at IDP.
            federatedId?: string,
            // The user's photo url at the IDP.
            photoUrl?: string,
            // The IdP ID. For white listed IdPs it's a short domain name, e.g., google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier.
            providerId?: string,
            // User's raw identifier directly returned from IDP.
            rawId?: string,
        }[],        
        // The user's password salt.
        salt?: string,
        // Timestamp in seconds for valid login token.
        validSince?: string,
        // Version of the user's password.
        version?: number,
    }
    
    interface VerifyAssertionResponse {
        // The action code.
        action?: string,
        // URL for OTA app installation.
        appInstallationUrl?: string,
        // The custom scheme used by mobile app.
        appScheme?: string,
        // The opaque value used by the client to maintain context info between the authentication request and the IDP callback.
        context?: string,
        // The birth date of the IdP account.
        dateOfBirth?: string,
        // The display name of the user.
        displayName?: string,
        // The email returned by the IdP. NOTE: The federated login user may not own the email.
        email?: string,
        // It's true if the email is recycled.
        emailRecycled?: boolean,
        // The value is true if the IDP is also the email provider. It means the user owns the email.
        emailVerified?: boolean,
        // If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
        expiresIn?: string,
        // The unique ID identifies the IdP account.
        federatedId?: string,
        // The first name of the user.
        firstName?: string,
        // The full name of the user.
        fullName?: string,
        // The ID token.
        idToken?: string,
        // It's the identifier param in the createAuthUri request if the identifier is an email. It can be used to check whether the user input email is different from the asserted email.
        inputEmail?: string,
        // The fixed string "identitytoolkit#VerifyAssertionResponse".
        kind?: string,
        // The language preference of the user.
        language?: string,
        // The last name of the user.
        lastName?: string,
        // The RP local ID if it's already been mapped to the IdP account identified by the federated ID.
        localId?: string,
        // Whether the assertion is from a non-trusted IDP and need account linking confirmation.
        needConfirmation?: boolean,
        // Whether need client to supply email to complete the federated login flow.
        needEmail?: boolean,
        // The nick name of the user.
        nickName?: string,
        // The OAuth2 access token.
        oauthAccessToken?: string,
        // The OAuth2 authorization code.
        oauthAuthorizationCode?: string,
        // The lifetime in seconds of the OAuth2 access token.
        oauthExpireIn?: number,
        // The user approved request token for the OpenID OAuth extension.
        oauthRequestToken?: string,
        // The scope for the OpenID OAuth extension.
        oauthScope?: string,
        // The OAuth1 access token secret.
        oauthTokenSecret?: string,
        // The original email stored in the mapping storage. It's returned when the federated ID is associated to a different email.
        originalEmail?: string,
        // The URI of the public accessible profiel picture.
        photoUrl?: string,
        // The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. If the "providerId" param is set to OpenID OP identifer other than the whilte listed IdPs the OP identifier is returned. If the "identifier" param is federated ID in the createAuthUri request. The domain part of the federated ID is returned.
        providerId?: string,
        // If idToken is STS id token, then this field will be refresh token.
        refreshToken?: string,
        // The timezone of the user.
        timeZone?: string,
        // When action is 'map', contains the idps which can be used for confirmation.
        verifiedProvider?: string[],        
    }
    
    interface VerifyCustomTokenResponse {
        // If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
        expiresIn?: string,
        // The GITKit token for authenticated user.
        idToken?: string,
        // The fixed string "identitytoolkit#VerifyCustomTokenResponse".
        kind?: string,
        // If idToken is STS id token, then this field will be refresh token.
        refreshToken?: string,
    }
    
    interface VerifyPasswordResponse {
        // The name of the user.
        displayName?: string,
        // The email returned by the IdP. NOTE: The federated login user may not own the email.
        email?: string,
        // If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
        expiresIn?: string,
        // The GITKit token for authenticated user.
        idToken?: string,
        // The fixed string "identitytoolkit#VerifyPasswordResponse".
        kind?: string,
        // The RP local ID if it's already been mapped to the IdP account identified by the federated ID.
        localId?: string,
        // The OAuth2 access token.
        oauthAccessToken?: string,
        // The OAuth2 authorization code.
        oauthAuthorizationCode?: string,
        // The lifetime in seconds of the OAuth2 access token.
        oauthExpireIn?: number,
        // The URI of the user's photo at IdP
        photoUrl?: string,
        // If idToken is STS id token, then this field will be refresh token.
        refreshToken?: string,
        // Whether the email is registered.
        registered?: boolean,
    }
    
    interface RelyingpartyResource {
        // Creates the URI used by the IdP to authenticate the user.
        createAuthUri (request: {        
        }) : gapi.client.Request<CreateAuthUriResponse>;        
        
        // Delete user account.
        deleteAccount (request: {        
        }) : gapi.client.Request<DeleteAccountResponse>;        
        
        // Batch download user accounts.
        downloadAccount (request: {        
        }) : gapi.client.Request<DownloadAccountResponse>;        
        
        // Returns the account info.
        getAccountInfo (request: {        
        }) : gapi.client.Request<GetAccountInfoResponse>;        
        
        // Get a code for user action confirmation.
        getOobConfirmationCode (request: {        
        }) : gapi.client.Request<GetOobConfirmationCodeResponse>;        
        
        // Get project configuration.
        getProjectConfig (request: {        
            // Delegated GCP project number of the request.
            delegatedProjectNumber?: string,
            // GCP project number of the request.
            projectNumber?: string,
        }) : gapi.client.Request<IdentitytoolkitRelyingpartyGetProjectConfigResponse>;        
        
        // Get token signing public key.
        getPublicKeys (request: {        
        }) : gapi.client.Request<IdentitytoolkitRelyingpartyGetPublicKeysResponse>;        
        
        // Get recaptcha secure param.
        getRecaptchaParam (request: {        
        }) : gapi.client.Request<GetRecaptchaParamResponse>;        
        
        // Reset password for a user.
        resetPassword (request: {        
        }) : gapi.client.Request<ResetPasswordResponse>;        
        
        // Set account info for a user.
        setAccountInfo (request: {        
        }) : gapi.client.Request<SetAccountInfoResponse>;        
        
        // Set project configuration.
        setProjectConfig (request: {        
        }) : gapi.client.Request<IdentitytoolkitRelyingpartySetProjectConfigResponse>;        
        
        // Sign out user.
        signOutUser (request: {        
        }) : gapi.client.Request<IdentitytoolkitRelyingpartySignOutUserResponse>;        
        
        // Signup new user.
        signupNewUser (request: {        
        }) : gapi.client.Request<SignupNewUserResponse>;        
        
        // Batch upload existing user accounts.
        uploadAccount (request: {        
        }) : gapi.client.Request<UploadAccountResponse>;        
        
        // Verifies the assertion returned by the IdP.
        verifyAssertion (request: {        
        }) : gapi.client.Request<VerifyAssertionResponse>;        
        
        // Verifies the developer asserted ID token.
        verifyCustomToken (request: {        
        }) : gapi.client.Request<VerifyCustomTokenResponse>;        
        
        // Verifies the user entered password.
        verifyPassword (request: {        
        }) : gapi.client.Request<VerifyPasswordResponse>;        
        
    }
    
}

declare module gapi.client.identitytoolkit {
    var relyingparty: gapi.client.identitytoolkit.v3.RelyingpartyResource; 
    
}
