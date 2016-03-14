# Typescript typings for Translate API
Lets you translate text from one language to another
For detailed description please check [documentation](https://developers.google.com/translate/v2/using_rest).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Translate API:
```
typings install gapi.client.translate --save 
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
gapi.client.load('translate', 'v2', () => {
    // now we can use gapi.client.translate
    // ... 
});```



After that you can use Translate API resources:

```typescript
gapi.client.detections.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.languages.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.translations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```