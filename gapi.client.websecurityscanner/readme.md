# TypeScript typings for Web Security Scanner API v1
Scans your Compute and App Engine apps for common web vulnerabilities.
For detailed description please check [documentation](https://cloud.google.com/security-scanner/).

## Installing

Install typings for Web Security Scanner API:
```
npm install @types/gapi.client.websecurityscanner@v1 --save-dev
```

## Usage

You need to initialize Google API client in your code:
```typescript
gapi.load("client", () => { 
    // now we can use gapi.client
    // ... 
});
```

Then load api client wrapper:
```typescript
gapi.client.load('websecurityscanner', 'v1', () => {
    // now we can use gapi.client.websecurityscanner
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    ],
    immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        /* handle successful authorization */
    } else {
        /* handle authorization error */
    }
});            
```

After that you can use Web Security Scanner API resources:

```typescript
```