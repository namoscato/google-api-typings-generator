# Typescript typings for Compute Engine API
API for the Google Compute Engine service.
For detailed description please check [documentation](https://developers.google.com/compute/docs/reference/latest/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Compute Engine API:
```
typings install gapi.client.compute --save 
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
gapi.client.load('compute', 'beta', () => {
    // now we can use gapi.client.compute
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
    
        // View and manage your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute',
    
        // View your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute.readonly',
    
        // Manage your data and permissions in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.full_control',
    
        // View your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_only',
    
        // Manage your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_write',
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

After that you can use Compute Engine API resources:

```typescript
gapi.client.compute.addresses.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.autoscalers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.backendServices.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.diskTypes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.disks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.firewalls.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.forwardingRules.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.globalAddresses.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.globalForwardingRules.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.globalOperations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.httpHealthChecks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.httpsHealthChecks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.images.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.instanceGroupManagers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.instanceGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.instanceTemplates.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.instances.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.licenses.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.machineTypes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.networks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.projects.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.regionOperations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.regions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.routers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.routes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.snapshots.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.sslCertificates.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.subnetworks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.targetHttpProxies.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.targetHttpsProxies.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.targetInstances.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.targetPools.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.targetVpnGateways.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.urlMaps.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.vpnTunnels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.zoneOperations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.compute.zones.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```