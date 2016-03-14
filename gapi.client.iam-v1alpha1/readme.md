# Typescript typings for Google Identity and Access Management API
Manages identity and access control for Google Cloud Platform resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls.
For detailed description please check [documentation](https://cloud.google.com/iam/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Identity and Access Management API:
```
typings install gapi.client.iam --save 
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
gapi.client.load('iam', 'v1alpha1', () => {
    // now we can use gapi.client.iam
    // ... 
});```



After that you can use Google Identity and Access Management API resources:

```typescript```