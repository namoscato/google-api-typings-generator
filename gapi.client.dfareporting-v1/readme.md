# Typescript typings for DFA Reporting API
Lets you create, run and download reports.
For detailed description please check [documentation](https://developers.google.com/doubleclick-advertisers/reporting/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for DFA Reporting API:
```
typings install gapi.client.dfareporting --save 
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
gapi.client.load('dfareporting', 'v1', () => {
    // now we can use gapi.client.dfareporting
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage DoubleClick for Advertisers reports
        'https://www.googleapis.com/auth/dfareporting',
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

After that you can use DFA Reporting API resources:

```typescript
gapi.client.dimensionValues.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.files.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.reports.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.userProfiles.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```