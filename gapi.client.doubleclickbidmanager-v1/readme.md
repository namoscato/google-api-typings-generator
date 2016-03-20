# Typescript typings for DoubleClick Bid Manager API
API for viewing and managing your reports in DoubleClick Bid Manager.
For detailed description please check [documentation](https://developers.google.com/bid-manager/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for DoubleClick Bid Manager API:
```
typings install gapi.client.doubleclickbidmanager --save 
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
gapi.client.load('doubleclickbidmanager', 'v1', () => {
    // now we can use gapi.client.doubleclickbidmanager
    // ... 
});
```



After that you can use DoubleClick Bid Manager API resources:

```typescript
gapi.client.doubleclickbidmanager.lineitems.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.doubleclickbidmanager.queries.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.doubleclickbidmanager.reports.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.doubleclickbidmanager.rubicon.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```