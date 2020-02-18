# TypeScript typings for Cloud Run API v1
Deploy and manage user provided container images that scale automatically based on HTTP traffic.
For detailed description please check [documentation](https://cloud.google.com/run/).

## Installing

Install typings for Cloud Run API:
```
npm install @types/gapi.client.run@v1 --save-dev
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
gapi.client.load('run', 'v1', () => {
    // now we can use gapi.client.run
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

After that you can use Cloud Run API resources:

```typescript
```