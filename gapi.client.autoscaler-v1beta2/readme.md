# Typescript typings for Google Compute Engine Autoscaler API
The Google Compute Engine Autoscaler API provides autoscaling for groups of Cloud VMs.
For detailed description please check [documentation](http://developers.google.com/compute/docs/autoscaler).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Compute Engine Autoscaler API:
```
typings install gapi.client.autoscaler --save 
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
gapi.client.load('autoscaler', 'v1beta2', () => {
    // now we can use gapi.client.autoscaler
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute',
    
        // View your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute.readonly',
    ],
    immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        /* handle succesfull authorization */
    } else {
        /* handle authorization error */
    }
});            
```

After that you can use Google Compute Engine Autoscaler API resources:

```typescript
gapi.client.autoscalers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.zoneOperations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.zones.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```