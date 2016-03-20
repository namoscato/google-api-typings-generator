# Typescript typings for Google Apps Script Execution API
An API for executing Google Apps Script projects.
For detailed description please check [documentation](https://developers.google.com/apps-script/execution/rest/v1/run).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Apps Script Execution API:
```
typings install gapi.client.script --save 
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
gapi.client.load('script', 'v1', () => {
    // now we can use gapi.client.script
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your mail
        'https://mail.google.com/',
    
        // Manage your calendars
        'https://www.google.com/calendar/feeds',
    
        // Manage your contacts
        'https://www.google.com/m8/feeds',
    
        // View and manage the provisioning of groups on your domain
        'https://www.googleapis.com/auth/admin.directory.group',
    
        // View and manage the provisioning of users on your domain
        'https://www.googleapis.com/auth/admin.directory.user',
    
        // View and manage the files in your Google Drive
        'https://www.googleapis.com/auth/drive',
    
        // View and manage your forms in Google Drive
        'https://www.googleapis.com/auth/forms',
    
        // View and manage forms that this application has been installed in
        'https://www.googleapis.com/auth/forms.currentonly',
    
        // View and manage your Google Groups
        'https://www.googleapis.com/auth/groups',
    
        // View your email address
        'https://www.googleapis.com/auth/userinfo.email',
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

After that you can use Google Apps Script Execution API resources:

```typescript
gapi.client.scripts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```