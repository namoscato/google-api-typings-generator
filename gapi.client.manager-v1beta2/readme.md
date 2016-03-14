# Typescript typings for Deployment Manager API
The Deployment Manager API allows users to declaratively configure, deploy and run complex solutions on the Google Cloud Platform.
For detailed description please check [documentation](https://developers.google.com/deployment-manager/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Deployment Manager API:
```
typings install gapi.client.manager --save 
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
gapi.client.load('manager', 'v1beta2', () => {
    // now we can use gapi.client.manager
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your applications deployed on Google App Engine
        'https://www.googleapis.com/auth/appengine.admin',
    
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
        // View your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform.read-only',
    
        // View and manage your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute',
    
        // Manage your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_write',
    
        // View and manage your Google Cloud Platform management resources and deployment status information
        'https://www.googleapis.com/auth/ndev.cloudman',
    
        // View your Google Cloud Platform management resources and deployment status information
        'https://www.googleapis.com/auth/ndev.cloudman.readonly',
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

After that you can use Deployment Manager API resources:

```typescript
gapi.client.deployments.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.templates.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```