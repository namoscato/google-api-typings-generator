# Typescript typings for Google Proximity Beacon API
This API provides services to register, manage, index, and search beacons.
For detailed description please check [documentation](https://developers.google.com/beacons/proximity/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Proximity Beacon API:
```
typings install gapi.client.proximitybeacon --save 
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
gapi.client.load('proximitybeacon', 'v1beta1', () => {
    // now we can use gapi.client.proximitybeacon
    // ... 
});```



After that you can use Google Proximity Beacon API resources:

```typescript
gapi.client.beacons.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.namespaces.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.beaconinfo.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```