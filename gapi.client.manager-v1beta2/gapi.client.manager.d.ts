// Type definitions for Google Deployment Manager API v1beta2
// Project: https://developers.google.com/deployment-manager/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.manager {
    
    interface AccessConfig {
        // Name of this access configuration.
        name?: string,
        // An external IP address associated with this instance.
        natIp?: string,
        // Type of this access configuration file. (Currently only ONE_TO_ONE_NAT is legal.)
        type?: string,
    }
    
    interface Action {
        // A list of commands to run sequentially for this action.
        commands?: string[],        
        // The timeout in milliseconds for this action to run.
        timeoutMs?: number,
    }
    
    interface AllowedRule {
        // ?tcp?, ?udp? or ?icmp?
        IPProtocol?: string,
        // List of ports or port ranges (Example inputs include: ["22"], [?33?, "12345-12349"].
        ports?: string[],        
    }
    
    interface AutoscalingModule {
        // 
        coolDownPeriodSec?: number,
        // 
        description?: string,
        // 
        maxNumReplicas?: number,
        // 
        minNumReplicas?: number,
        // 
        signalType?: string,
        // 
        targetModule?: string,
        // target_utilization should be in range [0,1].
        targetUtilization?: number,
    }
    
    interface AutoscalingModuleStatus {
        // [Output Only] The URL of the corresponding Autoscaling configuration.
        autoscalingConfigUrl?: string,
    }
    
    interface DeployState {
        // [Output Only] Human readable details about the current state.
        details?: string,
        // [Output Only] The status of the deployment. Possible values include: 
        // - UNKNOWN
        // - DEPLOYING
        // - DEPLOYED
        // - DEPLOYMENT_FAILED
        // - DELETING
        // - DELETED
        // - DELETE_FAILED
        status?: string,
    }
    
    interface Deployment {
        // [Output Only] The time when this deployment was created.
        creationDate?: string,
        // A user-supplied description of this Deployment.
        description?: string,
        // [Output Only] List of status for the modules in this deployment.
        modules?: any,
        // Name of this deployment. The name must conform to the following regular expression: [a-zA-Z0-9-_]{1,64}
        name?: string,
        // The set of parameter overrides to apply to the corresponding Template before deploying.
        overrides?: ParamOverride[],        
        // [Output Only] Current status of this deployment.
        state?: DeployState,
        // The name of the Template on which this deployment is based.
        templateName?: string,
    }
    
    interface DeploymentsListResponse {
        // 
        nextPageToken?: string,
        // 
        resources?: Deployment[],        
    }
    
    interface DiskAttachment {
        // The device name of this disk.
        deviceName?: string,
        // A zero-based index to assign to this disk, where 0 is reserved for the boot disk. If not specified, this is assigned by the server.
        index?: number,
    }
    
    interface EnvVariable {
        // Whether this variable is hidden or visible.
        hidden?: boolean,
        // Value of the environment variable.
        value?: string,
    }
    
    interface ExistingDisk {
        // Optional. How the disk will be attached to the Replica.
        attachment?: DiskAttachment,
        // The fully-qualified URL of the Persistent Disk resource. It must be in the same zone as the Pool.
        source?: string,
    }
    
    interface FirewallModule {
        // The allowed ports or port ranges.
        allowed?: AllowedRule[],        
        // The description of the firewall (optional)
        description?: string,
        // The NetworkModule to which this firewall should apply. If not specified, or if specified as 'default', this firewall will be applied to the 'default' network.
        network?: string,
        // Source IP ranges to apply this firewall to, see the GCE Spec for details on syntax
        sourceRanges?: string[],        
        // Source Tags to apply this firewall to, see the GCE Spec for details on syntax
        sourceTags?: string[],        
        // Target Tags to apply this firewall to, see the GCE Spec for details on syntax
        targetTags?: string[],        
    }
    
    interface FirewallModuleStatus {
        // [Output Only] The URL of the corresponding Firewall resource.
        firewallUrl?: string,
    }
    
    interface HealthCheckModule {
        // 
        checkIntervalSec?: number,
        // 
        description?: string,
        // 
        healthyThreshold?: number,
        // 
        host?: string,
        // 
        path?: string,
        // 
        port?: number,
        // 
        timeoutSec?: number,
        // 
        unhealthyThreshold?: number,
    }
    
    interface HealthCheckModuleStatus {
        // [Output Only] The HealthCheck URL.
        healthCheckUrl?: string,
    }
    
    interface LbModule {
        // 
        description?: string,
        // 
        healthChecks?: string[],        
        // 
        ipAddress?: string,
        // 
        ipProtocol?: string,
        // 
        portRange?: string,
        // 
        sessionAffinity?: string,
        // 
        targetModules?: string[],        
    }
    
    interface LbModuleStatus {
        // [Output Only] The URL of the corresponding ForwardingRule in GCE.
        forwardingRuleUrl?: string,
        // [Output Only] The URL of the corresponding TargetPool resource in GCE.
        targetPoolUrl?: string,
    }
    
    interface Metadata {
        // The fingerprint of the metadata.
        fingerPrint?: string,
        // A list of metadata items.
        items?: MetadataItem[],        
    }
    
    interface MetadataItem {
        // A metadata key.
        key?: string,
        // A metadata value.
        value?: string,
    }
    
    interface Module {
        // 
        autoscalingModule?: AutoscalingModule,
        // 
        firewallModule?: FirewallModule,
        // 
        healthCheckModule?: HealthCheckModule,
        // 
        lbModule?: LbModule,
        // 
        networkModule?: NetworkModule,
        // 
        replicaPoolModule?: ReplicaPoolModule,
        // The type of this module. Valid values ("AUTOSCALING", "FIREWALL", "HEALTH_CHECK", "LOAD_BALANCING", "NETWORK", "REPLICA_POOL")
        type?: string,
    }
    
    interface ModuleStatus {
        // [Output Only] The status of the AutoscalingModule, set for type AUTOSCALING.
        autoscalingModuleStatus?: AutoscalingModuleStatus,
        // [Output Only] The status of the FirewallModule, set for type FIREWALL.
        firewallModuleStatus?: FirewallModuleStatus,
        // [Output Only] The status of the HealthCheckModule, set for type HEALTH_CHECK.
        healthCheckModuleStatus?: HealthCheckModuleStatus,
        // [Output Only] The status of the LbModule, set for type LOAD_BALANCING.
        lbModuleStatus?: LbModuleStatus,
        // [Output Only] The status of the NetworkModule, set for type NETWORK.
        networkModuleStatus?: NetworkModuleStatus,
        // [Output Only] The status of the ReplicaPoolModule, set for type VM.
        replicaPoolModuleStatus?: ReplicaPoolModuleStatus,
        // [Output Only] The current state of the module.
        state?: DeployState,
        // [Output Only] The type of the module.
        type?: string,
    }
    
    interface NetworkInterface {
        // An array of configurations for this interface. This specifies how this interface is configured to interact with other network services
        accessConfigs?: AccessConfig[],        
        // Name of the interface.
        name?: string,
        // The name of the NetworkModule to which this interface applies. If not specified, or specified as 'default', this will use the 'default' network.
        network?: string,
        // An optional IPV4 internal network address to assign to the instance for this network interface.
        networkIp?: string,
    }
    
    interface NetworkModule {
        // Required; The range of internal addresses that are legal on this network. This range is a CIDR specification, for example: 192.168.0.0/16.
        IPv4Range?: string,
        // The description of the network.
        description?: string,
        // An optional address that is used for default routing to other networks. This must be within the range specified by IPv4Range, and is typicall the first usable address in that range. If not specified, the default value is the first usable address in IPv4Range.
        gatewayIPv4?: string,
    }
    
    interface NetworkModuleStatus {
        // [Output Only] The URL of the corresponding Network resource.
        networkUrl?: string,
    }
    
    interface NewDisk {
        // How the disk will be attached to the Replica.
        attachment?: DiskAttachment,
        // If true, then this disk will be deleted when the instance is deleted.
        autoDelete?: boolean,
        // If true, indicates that this is the root persistent disk.
        boot?: boolean,
        // Create the new disk using these parameters. The name of the disk will be <instance_name>-<five_random_charactersgt;.
        initializeParams?: NewDiskInitializeParams,
    }
    
    interface NewDiskInitializeParams {
        // The size of the created disk in gigabytes.
        diskSizeGb?: string,
        // Name of the disk type resource describing which disk type to use to create the disk. For example 'pd-ssd' or 'pd-standard'. Default is 'pd-standard'
        diskType?: string,
        // The fully-qualified URL of a source image to use to create this disk.
        sourceImage?: string,
    }
    
    interface ParamOverride {
        // A JSON Path expression that specifies which parameter should be overridden.
        path?: string,
        // The new value to assign to the overridden parameter.
        value?: string,
    }
    
    interface ReplicaPoolModule {
        // A list of environment variables.
        envVariables?: any,
        // The Health Checks to configure for the ReplicaPoolModule
        healthChecks?: string[],        
        // Number of replicas in this module.
        numReplicas?: number,
        // Information for a ReplicaPoolModule.
        replicaPoolParams?: ReplicaPoolParams,
        // [Output Only] The name of the Resource View associated with a ReplicaPoolModule. This field will be generated by the service.
        resourceView?: string,
    }
    
    interface ReplicaPoolModuleStatus {
        // [Output Only] The URL of the associated ReplicaPool resource.
        replicaPoolUrl?: string,
        // [Output Only] The URL of the Resource Group associated with this ReplicaPool.
        resourceViewUrl?: string,
    }
    
    interface ReplicaPoolParams {
        // ReplicaPoolParams specifications for use with ReplicaPools v1beta1.
        v1beta1?: ReplicaPoolParamsV1Beta1,
    }
    
    interface ReplicaPoolParamsV1Beta1 {
        // Whether these replicas should be restarted if they experience a failure. The default value is true.
        autoRestart?: boolean,
        // The base name for instances within this ReplicaPool.
        baseInstanceName?: string,
        // Enables IP Forwarding
        canIpForward?: boolean,
        // An optional textual description of the resource.
        description?: string,
        // A list of existing Persistent Disk resources to attach to each replica in the pool. Each disk will be attached in read-only mode to every replica.
        disksToAttach?: ExistingDisk[],        
        // A list of Disk resources to create and attach to each Replica in the Pool. Currently, you can only define one disk and it must be a root persistent disk. Note that Replica Pool will create a root persistent disk for each replica.
        disksToCreate?: NewDisk[],        
        // Name of the Action to be run during initialization of a ReplicaPoolModule.
        initAction?: string,
        // The machine type for this instance. Either a complete URL, or the resource name (e.g. n1-standard-1).
        machineType?: string,
        // The metadata key/value pairs assigned to this instance.
        metadata?: Metadata,
        // A list of network interfaces for the instance. Currently only one interface is supported by Google Compute Engine.
        networkInterfaces?: NetworkInterface[],        
        // 
        onHostMaintenance?: string,
        // A list of Service Accounts to enable for this instance.
        serviceAccounts?: ServiceAccount[],        
        // A list of tags to apply to the Google Compute Engine instance to identify resources.
        tags?: Tag,
        // The zone for this ReplicaPool.
        zone?: string,
    }
    
    interface ServiceAccount {
        // Service account email address.
        email?: string,
        // List of OAuth2 scopes to obtain for the service account.
        scopes?: string[],        
    }
    
    interface Tag {
        // The fingerprint of the tag.
        fingerPrint?: string,
        // Items contained in this tag.
        items?: string[],        
    }
    
    interface Template {
        // Action definitions for use in Module intents in this Template.
        actions?: any,
        // A user-supplied description of this Template.
        description?: string,
        // A list of modules for this Template.
        modules?: any,
        // Name of this Template. The name must conform to the expression: [a-zA-Z0-9-_]{1,64}
        name?: string,
    }
    
    interface TemplatesListResponse {
        // 
        nextPageToken?: string,
        // 
        resources?: Template[],        
    }
    
    interface DeploymentsResource {
        // 
        delete (request: {        
            // 
            deploymentName: string,
            // 
            projectId: string,
            // 
            region: string,
        }) : gapi.client.Request<void>;        
        
        // 
        get (request: {        
            // 
            deploymentName: string,
            // 
            projectId: string,
            // 
            region: string,
        }) : gapi.client.Request<Deployment>;        
        
        // 
        insert (request: {        
            // 
            projectId: string,
            // 
            region: string,
        }) : gapi.client.Request<Deployment>;        
        
        // 
        list (request: {        
            // Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
            maxResults?: number,
            // Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
            pageToken?: string,
            // 
            projectId: string,
            // 
            region: string,
        }) : gapi.client.Request<DeploymentsListResponse>;        
        
    }
    
    
    interface TemplatesResource {
        // 
        delete (request: {        
            // 
            projectId: string,
            // 
            templateName: string,
        }) : gapi.client.Request<void>;        
        
        // 
        get (request: {        
            // 
            projectId: string,
            // 
            templateName: string,
        }) : gapi.client.Request<Template>;        
        
        // 
        insert (request: {        
            // 
            projectId: string,
        }) : gapi.client.Request<Template>;        
        
        // 
        list (request: {        
            // Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
            maxResults?: number,
            // Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
            pageToken?: string,
            // 
            projectId: string,
        }) : gapi.client.Request<TemplatesListResponse>;        
        
    }
    
}

declare module gapi.client.manager {
    var deployments: gapi.client.manager.DeploymentsResource; 
    
    var templates: gapi.client.manager.TemplatesResource; 
    
}
