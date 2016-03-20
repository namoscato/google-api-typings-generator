# Typescript typings for Google Cloud Network Performance Monitoring API
Reports latency data.
For detailed description please check [documentation]().

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Cloud Network Performance Monitoring API:
```
typings install gapi.client.cloudlatencytest --save 
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
gapi.client.load('cloudlatencytest', 'v2', () => {
    // now we can use gapi.client.cloudlatencytest
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View monitoring data for all of your Google Cloud and API projects
        'https://www.googleapis.com/auth/monitoring.readonly',
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

After that you can use Google Cloud Network Performance Monitoring API resources:

```typescript
gapi.client.cloudlatencytest.statscollection.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```