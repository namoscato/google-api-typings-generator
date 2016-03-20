# Typescript typings for Google Classroom API
Google Classroom API
For detailed description please check [documentation](https://developers.google.com/classroom/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Classroom API:
```
typings install gapi.client.classroom --save 
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
gapi.client.load('classroom', 'v1', () => {
    // now we can use gapi.client.classroom
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your Google Classroom classes
        'https://www.googleapis.com/auth/classroom.courses',
    
        // View your Google Classroom classes
        'https://www.googleapis.com/auth/classroom.courses.readonly',
    
        // View the email addresses of people in your classes
        'https://www.googleapis.com/auth/classroom.profile.emails',
    
        // View the profile photos of people in your classes
        'https://www.googleapis.com/auth/classroom.profile.photos',
    
        // Manage your Google Classroom class rosters
        'https://www.googleapis.com/auth/classroom.rosters',
    
        // View your Google Classroom class rosters
        'https://www.googleapis.com/auth/classroom.rosters.readonly',
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

After that you can use Google Classroom API resources:

```typescript
gapi.client.classroom.courses.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.classroom.invitations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.classroom.userProfiles.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```