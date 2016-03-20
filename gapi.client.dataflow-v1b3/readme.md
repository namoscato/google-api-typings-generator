# Typescript typings for Google Dataflow API
Google Cloud Dataflow is a simple, flexible, and powerful system you can use to perform data processing tasks.
For detailed description please check [documentation](https://cloud.google.com/dataflow).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Dataflow API:
```
typings install gapi.client.dataflow --save 
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
gapi.client.load('dataflow', 'v1b3', () => {
    // now we can use gapi.client.dataflow
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
    
        // View your email address
        'https://www.googleapis.com/auth/userinfo.email',
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

After that you can use Google Dataflow API resources:

```typescript
gapi.client.projects.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```