# TypeScript typings for Cloud Search API v1
Cloud Search provides cloud-based search capabilities over G Suite data.  The Cloud Search API allows indexing of non-G Suite data into Cloud Search.
For detailed description please check [documentation](https://developers.google.com/cloud-search/docs/guides/).

## Installing

Install typings for Cloud Search API:
```
npm install @types/gapi.client.cloudsearch@v1 --save-dev
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
gapi.client.load('cloudsearch', 'v1', () => {
    // now we can use gapi.client.cloudsearch
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Index and serve your organization's data with Cloud Search
        'https://www.googleapis.com/auth/cloud_search',
    
        // Index and serve your organization's data with Cloud Search
        'https://www.googleapis.com/auth/cloud_search.debug',
    
        // Index and serve your organization's data with Cloud Search
        'https://www.googleapis.com/auth/cloud_search.indexing',
    
        // Search your organization's data in the Cloud Search index
        'https://www.googleapis.com/auth/cloud_search.query',
    
        // Index and serve your organization's data with Cloud Search
        'https://www.googleapis.com/auth/cloud_search.settings',
    
        // Index and serve your organization's data with Cloud Search
        'https://www.googleapis.com/auth/cloud_search.settings.indexing',
    
        // Index and serve your organization's data with Cloud Search
        'https://www.googleapis.com/auth/cloud_search.settings.query',
    
        // Index and serve your organization's data with Cloud Search
        'https://www.googleapis.com/auth/cloud_search.stats',
    
        // Index and serve your organization's data with Cloud Search
        'https://www.googleapis.com/auth/cloud_search.stats.indexing',
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

After that you can use Cloud Search API resources:

```typescript 
    
/* 
Uploads media for indexing.

The upload endpoint supports direct and resumable upload protocols and
is intended for large items that can not be
[inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent).
To index large content:

1. Call
   indexing.datasources.items.upload
   with the resource name to begin an upload session and retrieve the
   UploadItemRef.
1. Call media.upload to upload the content using the same resource name from step 1.
1. Call indexing.datasources.items.index
   to index the item. Populate the
   [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent)
   with the UploadItemRef from step 1.


For additional information, see
[Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest).

  **Note:** This API requires a service account to execute.  
*/
await gapi.client.media.upload({ resourceName: "resourceName",  }); 
    
/* 
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.  
*/
await gapi.client.operations.get({ name: "name",  }); 
    
/* 
The Cloud Search Query API provides the search method, which returns
the most relevant results from a user query.  The results can come from
G Suite Apps, such as Gmail or Google Drive, or they can come from data
that you have indexed from a third party.

**Note:** This API requires a standard end user account to execute.
A service account can't perform Query API requests directly; to use a
service account to perform queries, set up [G Suite domain-wide delegation
of
authority](https://developers.google.com/cloud-search/docs/guides/delegation/).  
*/
await gapi.client.query.search({  }); 
    
/* 
Provides suggestions for autocompleting the query.

**Note:** This API requires a standard end user account to execute.
A service account can't perform Query API requests directly; to use a
service account to perform queries, set up [G Suite domain-wide delegation
of
authority](https://developers.google.com/cloud-search/docs/guides/delegation/).  
*/
await gapi.client.query.suggest({  }); 
    
/* 
Gets indexed item statistics aggreggated across all data sources. This
API only returns statistics for previous dates; it doesn't return
statistics for the current day.

**Note:** This API requires a standard end user account to execute.  
*/
await gapi.client.stats.getIndex({  }); 
    
/* 
Get the query statistics for customer.

**Note:** This API requires a standard end user account to execute.  
*/
await gapi.client.stats.getQuery({  }); 
    
/* 
Get the # of search sessions, % of successful sessions with a click query
statistics for customer.

**Note:** This API requires a standard end user account to execute.  
*/
await gapi.client.stats.getSession({  }); 
    
/* 
Get the users statistics for customer.

**Note:** This API requires a standard end user account to execute.  
*/
await gapi.client.stats.getUser({  });
```