# Typescript typings for DCM/DFA Reporting And Trafficking API
Manage your DoubleClick Campaign Manager ad campaigns and reports.
For detailed description please check [documentation](https://developers.google.com/doubleclick-advertisers/reporting/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for DCM/DFA Reporting And Trafficking API:
```
typings install gapi.client.dfareporting --save 
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
gapi.client.load('dfareporting', 'v2.4', () => {
    // now we can use gapi.client.dfareporting
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage DoubleClick for Advertisers reports
        'https://www.googleapis.com/auth/dfareporting',
    
        // View and manage your DoubleClick Campaign Manager's (DCM) display ad campaigns
        'https://www.googleapis.com/auth/dfatrafficking',
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

After that you can use DCM/DFA Reporting And Trafficking API resources:

```typescript
gapi.client.dfareporting.accountActiveAdSummaries.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.accountPermissionGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.accountPermissions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.accountUserProfiles.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.accounts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.ads.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.advertiserGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.advertisers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.browsers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.campaignCreativeAssociations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.campaigns.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.changeLogs.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.cities.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.connectionTypes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.contentCategories.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.countries.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.creativeAssets.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.creativeFieldValues.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.creativeFields.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.creativeGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.creatives.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.dimensionValues.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.directorySiteContacts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.directorySites.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.eventTags.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.files.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.floodlightActivities.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.floodlightActivityGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.floodlightConfigurations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.inventoryItems.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.landingPages.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.metros.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.mobileCarriers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.operatingSystemVersions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.operatingSystems.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.orderDocuments.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.orders.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.placementGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.placementStrategies.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.placements.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.platformTypes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.postalCodes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.projects.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.regions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.remarketingListShares.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.remarketingLists.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.reports.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.sites.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.sizes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.subaccounts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.targetableRemarketingLists.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.userProfiles.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.userRolePermissionGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.userRolePermissions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dfareporting.userRoles.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```