# Typescript typings for Calendar API
Manipulates events and other calendar data.
For detailed description please check [documentation](https://developers.google.com/google-apps/calendar/firstapp).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Calendar API:
```
typings install gapi.client.calendar --save 
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
gapi.client.load('calendar', 'v3', () => {
    // now we can use gapi.client.calendar
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your calendars
        'https://www.googleapis.com/auth/calendar',
    
        // View your calendars
        'https://www.googleapis.com/auth/calendar.readonly',
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

After that you can use Calendar API resources:

```typescript
gapi.client.calendar.acl.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.calendar.calendarList.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.calendar.calendars.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.calendar.channels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.calendar.colors.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.calendar.events.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.calendar.freebusy.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.calendar.settings.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```