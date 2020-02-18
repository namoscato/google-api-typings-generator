# TypeScript typings for Firebase Management API v1beta1
The Firebase Management API enables programmatic setup and management of Firebase projects, including a project's Firebase resources and Firebase apps.
For detailed description please check [documentation](https://firebase.google.com).

## Installing

Install typings for Firebase Management API:
```
npm install @types/gapi.client.firebase@v1beta1 --save-dev
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
gapi.client.load('firebase', 'v1beta1', () => {
    // now we can use gapi.client.firebase
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
        // View your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform.read-only',
    
        // View and administer all your Firebase data and settings
        'https://www.googleapis.com/auth/firebase',
    
        // View all your Firebase data and settings
        'https://www.googleapis.com/auth/firebase.readonly',
    ],
    immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        /* handle successful authorization */
    } else {
        /* handle authorization error */
    }
});            
```

After that you can use Firebase Management API resources:

```typescript 
    
/* 
Returns a list of [Google Cloud Platform (GCP) `Projects`]
(https://cloud.google.com/resource-manager/reference/rest/v1/projects)
that are available to have Firebase resources added to them.
<br>
<br>A GCP `Project` will only be returned if:
<ol>
  <li><p>The caller has sufficient
         [Google IAM](https://cloud.google.com/iam) permissions to call
         AddFirebase.</p></li>
  <li><p>The GCP `Project` is not already a FirebaseProject.</p></li>
  <li><p>The GCP `Project` is not in an Organization which has policies
         that prevent Firebase resources from being added.</p></li>
</ol>  
*/
await gapi.client.availableProjects.list({  }); 
    
/* 
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.  
*/
await gapi.client.operations.get({ name: "name",  }); 
    
/* 
Adds Firebase resources to the specified existing
[Google Cloud Platform (GCP) `Project`]
(https://cloud.google.com/resource-manager/reference/rest/v1/projects).
<br>
<br>Since a FirebaseProject is actually also a GCP `Project`, a
`FirebaseProject` uses underlying GCP identifiers (most importantly,
the `projectId`) as its own for easy interop with GCP APIs.
<br>
<br>The result of this call is an [`Operation`](../../v1beta1/operations).
Poll the `Operation` to track the provisioning process by calling
GetOperation until
[`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When
`done` is `true`, the `Operation` has either succeeded or failed. If the
`Operation` succeeded, its
[`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to
a FirebaseProject; if the `Operation` failed, its
[`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a
google.rpc.Status. The `Operation` is automatically deleted after
completion, so there is no need to call
DeleteOperation.
<br>
<br>This method does not modify any billing account information on the
underlying GCP `Project`.
<br>
<br>To call `AddFirebase`, a member must be an Editor or Owner for the
existing GCP `Project`. Service accounts cannot call `AddFirebase`.  
*/
await gapi.client.projects.addFirebase({ project: "project",  }); 
    
/* 
Links a FirebaseProject with an existing
[Google Analytics account](http://www.google.com/analytics/).
<br>
<br>Using this call, you can either:
<ul>
<li>Specify an `analyticsAccountId` to provision a new Google Analytics
property within the specified account and associate the new property with
your `FirebaseProject`.</li>
<li>Specify an existing `analyticsPropertyId` to associate the property
with your `FirebaseProject`.</li>
</ul>
<br>
Note that when you call `AddGoogleAnalytics`:
<ol>
<li>The first check determines if any existing data streams in the
Google Analytics property correspond to any existing Firebase Apps in your
`FirebaseProject` (based on the `packageName` or `bundleId` associated with
the data stream). Then, as applicable, the data streams and apps are
linked. Note that this auto-linking only applies to Android Apps and iOS
Apps.</li>
<li>If no corresponding data streams are found for your Firebase Apps,
new data streams are provisioned in the Google Analytics property
for each of your Firebase Apps. Note that a new data stream is always
provisioned for a Web App even if it was previously associated with a
data stream in your Analytics property.</li>
</ol>
Learn more about the hierarchy and structure of Google Analytics
accounts in the
[Analytics
documentation](https://support.google.com/analytics/answer/9303323).
<br>
<br>The result of this call is an [`Operation`](../../v1beta1/operations).
Poll the `Operation` to track the provisioning process by calling
GetOperation until
[`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When
`done` is `true`, the `Operation` has either succeeded or failed. If the
`Operation` succeeded, its
[`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to
an AnalyticsDetails; if the `Operation` failed, its
[`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a
google.rpc.Status.
<br>
<br>To call `AddGoogleAnalytics`, a member must be an Owner for
the existing `FirebaseProject` and have the
[`Edit` permission](https://support.google.com/analytics/answer/2884495)
for the Google Analytics account.
<br>
<br>If a `FirebaseProject` already has Google Analytics enabled, and you
call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different
from the currently associated property, then the call will fail. Analytics
may have already been enabled in the Firebase console or by specifying
`timeZone` and `regionCode` in the call to
[`AddFirebase`](../../v1beta1/projects/addFirebase).  
*/
await gapi.client.projects.addGoogleAnalytics({ parent: "parent",  }); 
    
/* 
Gets the FirebaseProject identified by the specified resource name.  
*/
await gapi.client.projects.get({ name: "name",  }); 
    
/* 
Gets the configuration artifact used by servers to simplify initialization.
<br>
<br>Typically, this configuration is used with the Firebase Admin SDK
[initializeApp](https://firebase.google.com/docs/admin/setup#initialize_the_sdk)
command.  
*/
await gapi.client.projects.getAdminSdkConfig({ name: "name",  }); 
    
/* 
Gets the Google Analytics details currently associated with a
FirebaseProject.
<br>
<br>If the `FirebaseProject` is not yet linked to Google Analytics, then
the response to `GetAnalyticsDetails` is NOT_FOUND.  
*/
await gapi.client.projects.getAnalyticsDetails({ name: "name",  }); 
    
/* 
Lists each FirebaseProject accessible to the caller.
<br>
<br>The elements are returned in no particular order, but they will be a
consistent view of the Projects when additional requests are made with a
`pageToken`.
<br>
<br>This method is eventually consistent with Project mutations, which
means newly provisioned Projects and recent modifications to existing
Projects might not be reflected in the set of Projects. The list will
include only ACTIVE Projects.
<br>
<br>Use
GetFirebaseProject
for consistent reads as well as for additional Project details.  
*/
await gapi.client.projects.list({  }); 
    
/* 
Updates the attributes of the FirebaseProject identified by the
specified resource name.
<br>
<br>All [query parameters](#query-parameters) are required.  
*/
await gapi.client.projects.patch({ name: "name",  }); 
    
/* 
Unlinks the specified `FirebaseProject` from its Google Analytics account.
<br>
<br>This call removes the association of the specified `FirebaseProject`
with its current Google Analytics property. However, this call does not
delete the Google Analytics resources, such as the Google Analytics
property or any data streams.
<br>
<br>These resources may be re-associated later to the `FirebaseProject` by
calling
[`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) and
specifying the same `analyticsPropertyId`. For Android Apps and iOS Apps,
this call re-links data streams with their corresponding apps. However,
for Web Apps, this call provisions a <em>new</em> data stream for each Web
App.
<br>
<br>To call `RemoveAnalytics`, a member must be an Owner for
the `FirebaseProject`.  
*/
await gapi.client.projects.removeAnalytics({ parent: "parent",  }); 
    
/* 
A convenience method that lists all available Apps for the specified
FirebaseProject.
<br>
<br>Typically, interaction with an App should be done using the
platform-specific service, but some tool use-cases require a summary of all
known Apps (such as for App selector interfaces).  
*/
await gapi.client.projects.searchApps({ parent: "parent",  });
```