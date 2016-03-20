# Typescript typings for Content API for Shopping
Manages product items, inventory, and Merchant Center accounts for Google Shopping.
For detailed description please check [documentation](https://developers.google.com/shopping-content).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Content API for Shopping:
```
typings install gapi.client.content --save 
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
gapi.client.load('content', 'v2', () => {
    // now we can use gapi.client.content
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your product listings and accounts for Google Shopping
        'https://www.googleapis.com/auth/content',
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

After that you can use Content API for Shopping resources:

```typescript
gapi.client.content.accounts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.content.accountshipping.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.content.accountstatuses.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.content.accounttax.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.content.datafeeds.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.content.datafeedstatuses.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.content.inventory.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.content.orders.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.content.products.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.content.productstatuses.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```