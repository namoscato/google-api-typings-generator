// Type definitions for Google Google Container Engine API v1
// Project: https://cloud.google.com/container-engine/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.container {
    
    interface ListClustersResponse {
        // A list of clusters in the project in the specified zone, or across all ones.
        clusters?: Cluster[],        
    }
    
    interface Cluster {
        // The name of this cluster. The name must be unique within this project and zone, and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter.
        name?: string,
        // An optional description of this cluster.
        description?: string,
        // The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](/compute/docs/resource-quotas) is sufficient for this number of instances. You must also have available firewall and routes quota.
        initialNodeCount?: number,
        // Parameters used in creating the cluster's nodes. See the descriptions of the child properties of `nodeConfig`. If unspecified, the defaults for all child properties are used.
        nodeConfig?: NodeConfig,
        // The authentication information for accessing the master.
        masterAuth?: MasterAuth,
        // The logging service that the cluster should write logs to. Currently available options: * "logging.googleapis.com" - the Google Cloud Logging service * "none" - no logs will be exported from the cluster * "" - default value; the default is "logging.googleapis.com"
        loggingService?: string,
        // The monitoring service that the cluster should write metrics to. Currently available options: * "monitoring.googleapis.com" - the Google Cloud Monitoring service * "none" - no metrics will be exported from the cluster * "" - default value; the default is "monitoring.googleapis.com"
        monitoringService?: string,
        // The name of the Google Compute Engine [network](/compute/docs/networking#networks_1) to which the cluster is connected. If left unspecified, the "default" network will be used.
        network?: string,
        // The IP address range of the container pods in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`.
        clusterIpv4Cidr?: string,
        // [Output only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output only] The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
        zone?: string,
        // [Output only] The IP address of this cluster's Kubernetes master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information.
        endpoint?: string,
        // [Output only] The software version of Kubernetes master and kubelets used in the cluster when it was first created. The version can be upgraded over time.
        initialClusterVersion?: string,
        // [Output only] The current software version of the master endpoint.
        currentMasterVersion?: string,
        // [Output only] The current version of the node software components. If they are currently at different versions because they're in the process of being upgraded, this reflects the minimum version of any of them.
        currentNodeVersion?: string,
        // [Output only] The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
        createTime?: string,
        // [Output only] The current status of this cluster.
        status?: string,
        // [Output only] Additional information about the current status of this cluster, if available.
        statusMessage?: string,
        // [Output only] The size of the address space on each node for hosting containers. This is provisioned from within the container_ipv4_cidr range.
        nodeIpv4CidrSize?: number,
        // [Output only] The IP address range of the Kubernetes services in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last /16 from the container CIDR.
        servicesIpv4Cidr?: string,
        // [Output only] The resource URLs of [instance groups](/compute/docs/instance-groups/) associated with this cluster.
        instanceGroupUrls?: string[],        
    }
    
    interface NodeConfig {
        // The name of a Google Compute Engine [machine type](/compute/docs/machine-types) (e.g. `n1-standard-1`). If unspecified, the default machine type is `n1-standard-1`.
        machineType?: string,
        // Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB.
        diskSizeGb?: number,
        // The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with *gcr.io*. If unspecified, no scopes are added.
        oauthScopes?: string[],        
    }
    
    interface MasterAuth {
        // The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
        username?: string,
        // The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. Because the master endpoint is open to the internet, you should create a strong password.
        password?: string,
        // [Output only] Base64 encoded public certificate that is the root of trust for the cluster.
        clusterCaCertificate?: string,
        // [Output only] Base64 encoded public certificate used by clients to authenticate to the cluster endpoint.
        clientCertificate?: string,
        // [Output only] Base64 encoded private key used by clients to authenticate to the cluster endpoint.
        clientKey?: string,
    }
    
    interface CreateClusterRequest {
        // A [cluster resource](/container-engine/reference/rest/v1/projects.zones.clusters)
        cluster?: Cluster,
    }
    
    interface Operation {
        // The server-assigned ID for the operation.
        name?: string,
        // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the operation is taking place.
        zone?: string,
        // The operation type.
        operationType?: string,
        // The current status of the operation.
        status?: string,
        // If an error has occurred, a textual description of the error.
        statusMessage?: string,
        // Server-defined URL for the resource.
        selfLink?: string,
        // Server-defined URL for the target of the operation.
        targetLink?: string,
    }
    
    interface UpdateClusterRequest {
        // A description of the update.
        update?: ClusterUpdate,
    }
    
    interface ClusterUpdate {
        // The Kubernetes version to change the nodes to (typically an upgrade). Use "-" to upgrade to the latest version supported by the server.
        desiredNodeVersion?: string,
    }
    
    interface ListOperationsResponse {
        // A list of operations in the project in the specified zone.
        operations?: Operation[],        
    }
    
    interface ServerConfig {
        // What version this server deploys by default.
        defaultClusterVersion?: string,
        // List of valid node upgrade target versions.
        validNodeVersions?: string[],        
    }
    
    interface ClustersResource {
        // Lists all clusters owned by a project in either the specified zone or all zones.
        list (request: {        
            // The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides, or "-" for all zones.
            zone: string,
        }) : gapi.client.Request<ListClustersResponse>;        
        
        // Gets a specific cluster.
        get (request: {        
            // The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
            zone: string,
            // The name of the cluster to retrieve.
            clusterId: string,
        }) : gapi.client.Request<Cluster>;        
        
        // Creates a cluster, consisting of the specified number and type of Google Compute Engine instances, plus a Kubernetes master endpoint. By default, the cluster is created in the project's [default network](/compute/docs/networking#networks_1). One firewall is added for the cluster. After cluster creation, the cluster creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range is being used by the cluster.
        create (request: {        
            // The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Update settings of a specific cluster.
        update (request: {        
            // The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
            zone: string,
            // The name of the cluster to upgrade.
            clusterId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted.
        delete (request: {        
            // The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
            zone: string,
            // The name of the cluster to delete.
            clusterId: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface OperationsResource {
        // Lists all operations in a project in a specific zone or all zones.
        list (request: {        
            // The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for, or "-" for all zones.
            zone: string,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
        // Gets the specified operation.
        get (request: {        
            // The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
            zone: string,
            // The server-assigned `name` of the operation.
            operationId: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface ZonesResource {
        // Returns configuration info about the Container Engine service.
        getServerconfig (request: {        
            // The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for, or "-" for all zones.
            zone: string,
        }) : gapi.client.Request<ServerConfig>;        
        
        clusters: ClustersResource,
        operations: OperationsResource,
    }
    
    
    interface ProjectsResource {
        zones: ZonesResource,
    }
    
}

declare module gapi.client.container {
    var projects: gapi.client.container.ProjectsResource; 
    
}
