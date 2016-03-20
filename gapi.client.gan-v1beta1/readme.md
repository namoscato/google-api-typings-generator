# Typescript typings for Google Affiliate Network API
Lets you have programmatic access to your Google Affiliate Network data.
For detailed description please check [documentation](https://developers.google.com/affiliate-network/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Affiliate Network API:
```
typings install gapi.client.gan --save 
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
gapi.client.load('gan', 'v1beta1', () => {
    // now we can use gapi.client.gan
    // ... 
});
```



After that you can use Google Affiliate Network API resources:

```typescript
gapi.client.gan.advertisers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.gan.ccOffers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.gan.events.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.gan.links.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.gan.publishers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.gan.reports.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```