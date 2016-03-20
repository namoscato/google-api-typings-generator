# Typescript typings for Freebase Search
Find Freebase entities using textual queries and other constraints.
For detailed description please check [documentation](https://developers.google.com/freebase/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Freebase Search:
```
typings install gapi.client.freebase --save 
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
gapi.client.load('freebase', 'v1', () => {
    // now we can use gapi.client.freebase
    // ... 
});
```



After that you can use Freebase Search resources:

```typescript```