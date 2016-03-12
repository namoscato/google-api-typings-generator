// Type definitions for Google Google OAuth2 API v1
// Project: https://developers.google.com/accounts/docs/OAuth2
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.oauth2 {
    
    interface Jwk {
        // 
        keys?: {        
            // 
            alg?: string,
            // 
            e?: string,
            // 
            kid?: string,
            // 
            kty?: string,
            // 
            n?: string,
            // 
            use?: string,
        }[],        
    }
    
    interface Raw {
        // 
        keyvalues?: {        
            // 
            algorithm?: string,
            // 
            exponent?: string,
            // 
            keyid?: string,
            // 
            modulus?: string,
        }[],        
    }
    
    interface Tokeninfo {
        // The access type granted with this token. It can be offline or online.
        access_type?: string,
        // Who is the intended audience for this token. In general the same as issued_to.
        audience?: string,
        // The email address of the user. Present only if the email scope is present in the request.
        email?: string,
        // Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request.
        email_verified?: boolean,
        // The expiry time of the token, as number of seconds left until expiry.
        expires_in?: number,
        // The issue time of the token, as number of seconds.
        issued_at?: number,
        // To whom was the token issued to. In general the same as audience.
        issued_to?: string,
        // Who issued the token.
        issuer?: string,
        // Nonce of the id token.
        nonce?: string,
        // The space separated list of scopes granted to this token.
        scope?: string,
        // The obfuscated user id.
        user_id?: string,
        // Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request.
        verified_email?: boolean,
    }
    
    interface Userinfoplus {
        // The user's email address.
        email?: string,
        // The user's last name.
        family_name?: string,
        // The user's gender.
        gender?: string,
        // The user's first name.
        given_name?: string,
        // The hosted domain e.g. example.com if the user is Google apps user.
        hd?: string,
        // The obfuscated ID of the user.
        id?: string,
        // URL of the profile page.
        link?: string,
        // The user's preferred locale.
        locale?: string,
        // The user's full name.
        name?: string,
        // URL of the user's picture image.
        picture?: string,
        // Boolean flag which is true if the email address is verified. Always verified because we only return the user's primary email address.
        verified_email?: boolean,
    }
    
    interface X509 {
    }
    
    interface MeResource {
        // Get user info
        get (request: {        
        }) : gapi.client.Request<Userinfoplus>;        
        
    }
    
    
    interface V2Resource {
        me: MeResource,
    }
    
    
    interface UserinfoResource {
        // Get user info
        get (request: {        
        }) : gapi.client.Request<Userinfoplus>;        
        
        v2: V2Resource,
    }
    
}

declare module gapi.client.oauth2 {
    var userinfo: gapi.client.oauth2.UserinfoResource; 
    
}
