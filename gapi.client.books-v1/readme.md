# Typescript typings for Books API
Lets you search for books and manage your Google Books library.
For detailed description please check [documentation](https://developers.google.com/books/docs/v1/getting_started).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Books API:
```
typings install gapi.client.books --save 
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
gapi.client.load('books', 'v1', () => {
    // now we can use gapi.client.books
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your books
        'https://www.googleapis.com/auth/books',
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

After that you can use Books API resources:

```typescript
gapi.client.books.bookshelves.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.books.cloudloading.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.books.dictionary.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.books.layers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.books.myconfig.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.books.mylibrary.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.books.notification.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.books.onboarding.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.books.personalizedstream.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.books.promooffer.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.books.series.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.books.volumes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```