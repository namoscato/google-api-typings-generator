# Typescript typings for Google Maps Coordinate API
Lets you view and manage jobs in a Coordinate team.
For detailed description please check [documentation](https://developers.google.com/coordinate/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Maps Coordinate API:
```
typings install gapi.client.coordinate --save 
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
gapi.client.load('coordinate', 'v1', () => {
    // now we can use gapi.client.coordinate
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your Google Maps Coordinate jobs
        'https://www.googleapis.com/auth/coordinate',
    
        // View your Google Coordinate jobs
        'https://www.googleapis.com/auth/coordinate.readonly',
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

After that you can use Google Maps Coordinate API resources:

```typescript
gapi.client.customFieldDef.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.jobs.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.location.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.schedule.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.team.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.worker.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```