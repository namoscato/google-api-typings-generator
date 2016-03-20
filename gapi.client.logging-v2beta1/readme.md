# Typescript typings for Google Cloud Logging API
The Google Cloud Logging API lets you write log entries and manage your logs, log sinks and logs-based metrics.
For detailed description please check [documentation](https://cloud.google.com/logging/docs/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Cloud Logging API:
```
typings install gapi.client.logging --save 
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
gapi.client.load('logging', 'v2beta1', () => {
    // now we can use gapi.client.logging
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
    
        // View your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform.read-only',
    
        // Administrate log data for your projects
        'https://www.googleapis.com/auth/logging.admin',
    
        // View log data for your projects
        'https://www.googleapis.com/auth/logging.read',
    
        // Submit log data for your projects
        'https://www.googleapis.com/auth/logging.write',
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

After that you can use Google Cloud Logging API resources:

```typescript
gapi.client.logging.projects.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.logging.entries.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.logging.monitoredResourceDescriptors.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```