# Typescript typings for YouTube Data API
Programmatic access to YouTube features.
For detailed description please check [documentation](https://developers.google.com/youtube/v3).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for YouTube Data API:
```
typings install gapi.client.youtube --save 
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
gapi.client.load('youtube', 'v3', () => {
    // now we can use gapi.client.youtube
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your YouTube account
        'https://www.googleapis.com/auth/youtube',
    
        // Manage your YouTube account
        'https://www.googleapis.com/auth/youtube.force-ssl',
    
        // View your YouTube account
        'https://www.googleapis.com/auth/youtube.readonly',
    
        // Manage your YouTube videos
        'https://www.googleapis.com/auth/youtube.upload',
    
        // View and manage your assets and associated content on YouTube
        'https://www.googleapis.com/auth/youtubepartner',
    
        // View private information of your YouTube channel relevant during the audit process with a YouTube partner
        'https://www.googleapis.com/auth/youtubepartner-channel-audit',
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

After that you can use YouTube Data API resources:

```typescript
gapi.client.youtube.activities.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.captions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.channelBanners.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.channelSections.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.channels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.commentThreads.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.comments.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.fanFundingEvents.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.guideCategories.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.i18nLanguages.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.i18nRegions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.liveBroadcasts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.liveChatBans.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.liveChatMessages.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.liveChatModerators.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.liveStreams.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.playlistItems.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.playlists.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.search.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.sponsors.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.subscriptions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.thumbnails.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.videoAbuseReportReasons.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.videoCategories.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.videos.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.youtube.watermarks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```