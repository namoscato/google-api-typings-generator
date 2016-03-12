// Type definitions for Google Compute Engine API beta
// Project: https://developers.google.com/compute/docs/reference/latest/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.compute {
    
    interface AccessConfig {
        // [Output Only] Type of the resource. Always compute#accessConfig for access configs.
        kind?: string,
        // Name of this access configuration.
        name?: string,
        // An external IP address associated with this instance. Specify an unused static external IP address available to the project or leave this field undefined to use an IP from a shared ephemeral IP address pool. If you specify a static external IP address, it must live in the same region as the zone of the instance.
        natIP?: string,
        // The type of configuration. The default and only option is ONE_TO_ONE_NAT.
        type?: string,
    }
    
    interface Address {
        // The static external IP address represented by this resource.
        address?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#address for addresses.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] URL of the region where the regional address resides. This field is not applicable to global addresses.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] The status of the address, which can be either IN_USE or RESERVED. An address that is RESERVED is currently reserved and available to use. An IN_USE address is currently being used by another resource and is not available.
        status?: string,
        // [Output Only] The URLs of the resources that are using this address.
        users?: string[],        
    }
    
    interface AddressAggregatedList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] A map of scoped address lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#addressAggregatedList for aggregated lists of addresses.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface AddressList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of addresses.
        items?: Address[],        
        // [Output Only] Type of resource. Always compute#addressList for lists of addresses.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface AddressesScopedList {
        // [Output Only] List of addresses contained in this scope.
        addresses?: Address[],        
        // [Output Only] Informational warning which replaces the list of addresses when the list is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface AttachedDisk {
        // Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance).
        autoDelete?: boolean,
        // Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem.
        boot?: boolean,
        // Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance.
        // 
        // If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disks-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks.
        deviceName?: string,
        // Encrypts or decrypts a disk using a customer-supplied encryption key.
        // 
        // If you are creating a new disk, this field encrypts the disk using a customer-supplied encryption key. If you are attaching an existing disk that is already encrypted, this field decrypts the disk using the customer-supplied encryption key.
        // 
        // If you encrypt a new disk using a customer-supplied encryption key, you must provide the same key again when you attempt to use this resource at a later time. For example, you must provide the key when you create a snapshot or an image from the disk or when you attach the disk to a virtual machine instance.
        // 
        // If no customer-supplied encryption key is provided at creation, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the disk later.
        diskEncryptionKey?: CustomerEncryptionKey,
        // Assigns a zero-based index to this disk, where 0 is reserved for the boot disk. For example, if you have many disks attached to an instance, each disk would have a unique index number. If not specified, the server will choose an appropriate value.
        index?: number,
        // [Input Only] Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new instance.
        // 
        // This property is mutually exclusive with the source property; you can only define one or the other, but not both.
        initializeParams?: AttachedDiskInitializeParams,
        // Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance.
        interface?: string,
        // [Output Only] Type of the resource. Always compute#attachedDisk for attached disks.
        kind?: string,
        // [Output Only] Any valid publicly visible licenses.
        licenses?: string[],        
        // The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If not specified, the default is to attach the disk in READ_WRITE mode.
        mode?: string,
        // Specifies a valid partial or full URL to an existing Persistent Disk resource. This field is only applicable for persistent disks.
        source?: string,
        // Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT.
        type?: string,
    }
    
    interface AttachedDiskInitializeParams {
        // Specifies the disk name. If not specified, the default is to use the name of the instance.
        diskName?: string,
        // Specifies the size of the disk in base-2 GB.
        diskSizeGb?: string,
        // [Deprecated] Storage type of the disk.
        diskStorageType?: string,
        // Specifies the disk type to use to create the instance. If not specified, the default is pd-standard, specified using the full URL. For example:
        // 
        // https://www.googleapis.com/compute/v1/projects/project/zones/zone/diskTypes/pd-standard 
        // 
        // Other values include pd-ssd and local-ssd. If you define this field, you can provide either the full or partial URL. For example, the following are valid values:  
        // - https://www.googleapis.com/compute/v1/projects/project/zones/zone/diskTypes/diskType 
        // - projects/project/zones/zone/diskTypes/diskType 
        // - zones/zone/diskTypes/diskType
        diskType?: string,
        // A source image used to create the disk. You can provide a private (custom) image, and Compute Engine will use the corresponding image from your project. For example:
        // 
        // global/images/my-private-image 
        // 
        // Or you can provide an image from a publicly-available project. For example, to use a Debian image from the debian-cloud project, make sure to include the project in the URL:
        // 
        // projects/debian-cloud/global/images/debian-7-wheezy-vYYYYMMDD 
        // 
        // where vYYYYMMDD is the image version. The fully-qualified URL will also work in both cases.
        sourceImage?: string,
        // The customer-supplied encryption key of the source image. This key is required if the source image is protected by a customer-supplied encryption key.
        // 
        // If the incorrect key is provided, the operation will fail.
        sourceImageEncryptionKey?: CustomerEncryptionKey,
    }
    
    interface Autoscaler {
        // The configuration parameters for the autoscaling algorithm. You can define one or more of the policies for an autoscaler: cpuUtilization, customMetricUtilizations, and loadBalancingUtilization.
        // 
        // If none of these are specified, the default will be to autoscale based on cpuUtilization to 0.8 or 80%.
        autoscalingPolicy?: AutoscalingPolicy,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#autoscaler for autoscalers.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // URL of the managed instance group that this autoscaler will scale.
        target?: string,
        // [Output Only] URL of the zone where the instance group resides.
        zone?: string,
    }
    
    interface AutoscalerAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A map of scoped autoscaler lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#autoscalerAggregatedList for aggregated lists of autoscalers.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface AutoscalerList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of Autoscaler resources.
        items?: Autoscaler[],        
        // [Output Only] Type of resource. Always compute#autoscalerList for lists of autoscalers.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface AutoscalersScopedList {
        // [Output Only] List of autoscalers contained in this scope.
        autoscalers?: Autoscaler[],        
        // [Output Only] Informational warning which replaces the list of autoscalers when the list is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface AutoscalingPolicy {
        // The number of seconds that the autoscaler should wait before it starts collecting information from a new instance. This prevents the autoscaler from collecting information when the instance is initializing, during which the collected usage would not be reliable. The default time autoscaler waits is 60 seconds.
        // 
        // Virtual machine initialization times might vary because of numerous factors. We recommend that you test how long an instance may take to initialize. To do this, create an instance and time the startup process.
        coolDownPeriodSec?: number,
        // Defines the CPU utilization policy that allows the autoscaler to scale based on the average CPU utilization of a managed instance group.
        cpuUtilization?: AutoscalingPolicyCpuUtilization,
        // Configuration parameters of autoscaling based on a custom metric.
        customMetricUtilizations?: AutoscalingPolicyCustomMetricUtilization[],        
        // Configuration parameters of autoscaling based on load balancer.
        loadBalancingUtilization?: AutoscalingPolicyLoadBalancingUtilization,
        // The maximum number of instances that the autoscaler can scale up to. This is required when creating or updating an autoscaler. The maximum number of replicas should not be lower than minimal number of replicas.
        maxNumReplicas?: number,
        // The minimum number of replicas that the autoscaler can scale down to. This cannot be less than 0. If not provided, autoscaler will choose a default value depending on maximum number of instances allowed.
        minNumReplicas?: number,
    }
    
    interface AutoscalingPolicyCpuUtilization {
        // The target CPU utilization that the autoscaler should maintain. Must be a float value in the range (0, 1]. If not specified, the default is 0.8.
        // 
        // If the CPU level is below the target utilization, the autoscaler scales down the number of instances until it reaches the minimum number of instances you specified or until the average CPU of your instances reaches the target utilization.
        // 
        // If the average CPU is above the target utilization, the autoscaler scales up until it reaches the maximum number of instances you specified or until the average utilization reaches the target utilization.
        utilizationTarget?: number,
    }
    
    interface AutoscalingPolicyCustomMetricUtilization {
        // The identifier of the Cloud Monitoring metric. The metric cannot have negative values and should be a utilization metric, which means that the number of virtual machines handling requests should increase or decrease proportionally to the metric. The metric must also have a label of compute.googleapis.com/resource_id with the value of the instance's unique ID, although this alone does not guarantee that the metric is valid.
        // 
        // For example, the following is a valid metric:
        // compute.googleapis.com/instance/network/received_bytes_count
        // 
        // 
        // The following is not a valid metric because it does not increase or decrease based on usage:
        // compute.googleapis.com/instance/cpu/reserved_cores
        metric?: string,
        // Target value of the metric which autoscaler should maintain. Must be a positive value.
        utilizationTarget?: number,
        // Defines how target utilization value is expressed for a Cloud Monitoring metric. Either GAUGE, DELTA_PER_SECOND, or DELTA_PER_MINUTE. If not specified, the default is GAUGE.
        utilizationTargetType?: string,
    }
    
    interface AutoscalingPolicyLoadBalancingUtilization {
        // Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain. Must be a positive float value. If not defined, the default is 0.8.
        utilizationTarget?: number,
    }
    
    interface Backend {
        // Specifies the balancing mode for this backend. For global HTTP(S) load balancing, the default is UTILIZATION. Valid values are UTILIZATION and RATE.
        balancingMode?: string,
        // A multiplier applied to the group's maximum servicing capacity (either UTILIZATION or RATE). Default value is 1, which means the group will serve up to 100% of its configured CPU or RPS (depending on balancingMode). A setting of 0 means the group is completely drained, offering 0% of its available CPU or RPS. Valid range is [0.0,1.0].
        capacityScaler?: number,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // The fully-qualified URL of a zonal Instance Group resource. This instance group defines the list of instances that serve traffic. Member virtual machine instances from each instance group must live in the same zone as the instance group itself. No two backends in a backend service are allowed to use same Instance Group resource.
        // 
        // Note that you must specify an Instance Group resource using the fully-qualified URL, rather than a partial URL.
        group?: string,
        // The max requests per second (RPS) of the group. Can be used with either RATE or UTILIZATION balancing modes, but required if RATE mode. For RATE mode, either maxRate or maxRatePerInstance must be set.
        maxRate?: number,
        // The max requests per second (RPS) that a single backend instance can handle.This is used to calculate the capacity of the group. Can be used in either balancing mode. For RATE mode, either maxRate or maxRatePerInstance must be set.
        maxRatePerInstance?: number,
        // Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. The default is 0.8. Valid range is [0.0, 1.0].
        maxUtilization?: number,
    }
    
    interface BackendService {
        // The list of backends that serve this BackendService.
        backends?: Backend[],        
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // If true, enable Cloud CDN for this BackendService.
        enableCDN?: boolean,
        // Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a BackendService. An up-to-date fingerprint must be provided in order to update the BackendService.
        fingerprint?: string,
        // The list of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService. Currently at most one health check can be specified, and a health check is required.
        healthChecks?: string[],        
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of resource. Always compute#backendService for backend services.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // Deprecated in favor of portName. The TCP port to connect on the backend. The default value is 80.
        port?: number,
        // Name of backend port. The same name should appear in the instance groups referenced by this service. Required.
        portName?: string,
        // The protocol this BackendService uses to communicate with backends.
        // 
        // Possible values are HTTP, HTTPS, HTTP2, TCP and SSL.
        protocol?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // How many seconds to wait for the backend before considering it a failed request. Default is 30 seconds.
        timeoutSec?: number,
    }
    
    interface BackendServiceGroupHealth {
        // 
        healthStatus?: HealthStatus[],        
        // [Output Only] Type of resource. Always compute#backendServiceGroupHealth for the health of backend services.
        kind?: string,
    }
    
    interface BackendServiceList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of BackendService resources.
        items?: BackendService[],        
        // [Output Only] Type of resource. Always compute#backendServiceList for lists of backend services.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface CacheInvalidationRule {
        // 
        path?: string,
    }
    
    interface CustomerEncryptionKey {
        // Specifies a 256-bit customer-supplied encryption key, encoded in base64 to either encrypt or decrypt this resource.
        rawKey?: string,
        // Specifies a base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.
        // 
        // The key must meet the following requirements before you can provide it to Compute Engine:  
        // - The key is wrapped using a RSA public key certificate provided by Google. 
        // - After being wrapped, the key must be encoded in base64 encoding.  Get the RSA public key certificate provided by Google at:
        // https://cloud-certs.storage.googleapis.com/google-cloud-csek-ingress.pem
        rsaEncryptedKey?: string,
        // [Output only] The base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
        sha256?: string,
    }
    
    interface DeprecationStatus {
        // An optional RFC3339 timestamp on or after which the deprecation state of this resource will be changed to DELETED.
        deleted?: string,
        // An optional RFC3339 timestamp on or after which the deprecation state of this resource will be changed to DEPRECATED.
        deprecated?: string,
        // An optional RFC3339 timestamp on or after which the deprecation state of this resource will be changed to OBSOLETE.
        obsolete?: string,
        // The URL of the suggested replacement for a deprecated resource. The suggested replacement resource must be the same kind of resource as the deprecated resource.
        replacement?: string,
        // The deprecation state of this resource. This can be DEPRECATED, OBSOLETE, or DELETED. Operations which create a new resource using a DEPRECATED resource will return successfully, but with a warning indicating the deprecated resource and recommending its replacement. Operations which use OBSOLETE or DELETED resources will be rejected and result in an error.
        state?: string,
    }
    
    interface Disk {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // Encrypts the disk using a customer-supplied encryption key.
        // 
        // If you encrypt the disk using a customer-supplied encryption key, and you want to use the disk later (e.g. to create a disk snapshot or an image, or to attach the disk to a virtual machine), you must provide the same key in your request. If you provide an incorrect key, or no key, the operation will fail.
        // 
        // Customer-supplied encryption keys do not protect access to metadata of the disk.
        // 
        // If no customer-supplied encryption key is provided at creation, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the disk later.
        diskEncryptionKey?: CustomerEncryptionKey,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#disk for disks.
        kind?: string,
        // A fingerprint for the labels being applied to this disk, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in order to update or change labels.
        // 
        // To see the latest fingerprint, make get() request to the disk.
        labelFingerprint?: string,
        // Labels to apply to this disk. These can be later modified by the setLabels method. Each label key & value must comply with RFC1035. Label values may be empty.
        labels?: any,
        // [Output Only] Last attach timestamp in RFC3339 text format.
        lastAttachTimestamp?: string,
        // [Output Only] Last detach timestamp in RFC3339 text format.
        lastDetachTimestamp?: string,
        // [Output Only] Any applicable publicly visible licenses.
        licenses?: string[],        
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // Internal use only.
        options?: string,
        // [Output Only] Server-defined fully-qualified URL for this resource.
        selfLink?: string,
        // Size of the persistent disk, specified in GB. You can specify this field when creating a persistent disk using the sourceImage or sourceSnapshot parameter, or specify it alone to create an empty persistent disk.
        // 
        // If you specify this field along with sourceImage or sourceSnapshot, the value of sizeGb must not be less than the size of the sourceImage or the size of the snapshot.
        sizeGb?: string,
        // The source image used to create this disk. If the source image is deleted from the system, this field will not be set, even if an image with the same name has been re-created.
        // 
        // When creating a disk, you can provide a private (custom) image using the following input, and Compute Engine will use the corresponding image from your project. For example:
        // 
        // global/images/my-private-image 
        // 
        // Or you can provide an image from a publicly-available project. For example, to use a Debian image from the debian-cloud project, make sure to include the project in the URL:
        // 
        // projects/debian-cloud/global/images/debian-7-wheezy-vYYYYMMDD 
        // 
        // where vYYYYMMDD is the image version. The fully-qualified URL will also work in both cases.
        // 
        // You can also specify the latest image for a private image family by replacing the image name suffix with family/family-name. For example:
        // 
        // global/images/family/my-private-family 
        // 
        // Or you can specify an image family from a publicly-available project. For example, to use the latest Debian 7 from the debian-cloud project, make sure to include the project in the URL:
        // 
        // projects/debian-cloud/global/images/family/debian-7
        sourceImage?: string,
        // The customer-supplied encryption key of the source image. This key is required if the source image is protected by a customer-supplied encryption key.
        // 
        // If the incorrect key is provided, the operation will fail.
        sourceImageEncryptionKey?: CustomerEncryptionKey,
        // [Output Only] The ID value of the image used to create this disk. This value identifies the exact image that was used to create this persistent disk. For example, if you created the persistent disk from an image that was later deleted and recreated under the same name, the source image ID would identify the exact version of the image that was used.
        sourceImageId?: string,
        // The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values:  
        // - https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot 
        // - projects/project/global/snapshots/snapshot 
        // - global/snapshots/snapshot
        sourceSnapshot?: string,
        // The customer-supplied encryption key of the source snapshot. This key is required if the source snapshot is protected by a customer-supplied encryption key.
        // 
        // If the incorrect key is provided, the operation will fail.
        sourceSnapshotEncryptionKey?: CustomerEncryptionKey,
        // [Output Only] The unique ID of the snapshot used to create this disk. This value identifies the exact snapshot that was used to create this persistent disk. For example, if you created the persistent disk from a snapshot that was later deleted and recreated under the same name, the source snapshot ID would identify the exact version of the snapshot that was used.
        sourceSnapshotId?: string,
        // [Output Only] The status of disk creation. Applicable statuses includes: CREATING, FAILED, READY, RESTORING.
        status?: string,
        // [Deprecated] Storage type of the persistent disk.
        storageType?: string,
        // URL of the disk type resource describing which disk type to use to create the disk. Provide this when creating the disk.
        type?: string,
        // [Output Only] Links to the users of the disk (attached instances) in form: project/zones/zone/instances/instance
        users?: string[],        
        // [Output Only] URL of the zone where the disk resides.
        zone?: string,
    }
    
    interface DiskAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A map of scoped disk lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#diskAggregatedList for aggregated lists of persistent disks.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface DiskList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of persistent disks.
        items?: Disk[],        
        // [Output Only] Type of resource. Always compute#diskList for lists of disks.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface DiskType {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] Server-defined default disk size in GB.
        defaultDiskSizeGb?: string,
        // [Output Only] The deprecation status associated with this disk type.
        deprecated?: DeprecationStatus,
        // [Output Only] An optional description of this resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#diskType for disk types.
        kind?: string,
        // [Output Only] Name of the resource.
        name?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] An optional textual description of the valid disk size, such as "10GB-10TB".
        validDiskSize?: string,
        // [Output Only] URL of the zone where the disk type resides.
        zone?: string,
    }
    
    interface DiskTypeAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A map of scoped disk type lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#diskTypeAggregatedList.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface DiskTypeList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Disk Type resources.
        items?: DiskType[],        
        // [Output Only] Type of resource. Always compute#diskTypeList for disk types.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface DiskTypesScopedList {
        // [Output Only] List of disk types contained in this scope.
        diskTypes?: DiskType[],        
        // [Output Only] Informational warning which replaces the list of disk types when the list is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface DisksResizeRequest {
        // The new size of the persistent disk, which is specified in GB.
        sizeGb?: string,
    }
    
    interface DisksScopedList {
        // [Output Only] List of disks contained in this scope.
        disks?: Disk[],        
        // [Output Only] Informational warning which replaces the list of disks when the list is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface Firewall {
        // The list of rules specified by this firewall. Each rule specifies a protocol and port-range tuple that describes a permitted connection.
        allowed?: {        
            // The IP protocol that is allowed for this rule. The protocol type is required when creating a firewall rule. This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, sctp), or the IP protocol number.
            IPProtocol?: string,
            // An optional list of ports which are allowed. This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, connections through any port are allowed
            // 
            // Example inputs include: ["22"], ["80","443"], and ["12345-12349"].
            ports?: string[],            
        }[],        
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Ony] Type of the resource. Always compute#firewall for firewall rules.
        kind?: string,
        // Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // URL of the network resource for this firewall rule. If not specified when creating a firewall rule, the default network is used:
        // global/networks/default
        // If you choose to specify this property, you can specify the network as a full or partial URL. For example, the following are all valid URLs:  
        // - https://www.googleapis.com/compute/v1/projects/myproject/global/networks/my-network 
        // - projects/myproject/global/networks/my-network 
        // - global/networks/default
        network?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // The IP address blocks that this rule applies to, expressed in CIDR format. One or both of sourceRanges and sourceTags may be set.
        // 
        // If both properties are set, an inbound connection is allowed if the range matches the sourceRanges OR the tag of the source matches the sourceTags property. The connection does not need to match both properties.
        sourceRanges?: string[],        
        // A list of instance tags which this rule applies to. One or both of sourceRanges and sourceTags may be set.
        // 
        // If both properties are set, an inbound connection is allowed if the range matches the sourceRanges OR the tag of the source matches the sourceTags property. The connection does not need to match both properties.
        sourceTags?: string[],        
        // A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[]. If no targetTags are specified, the firewall rule applies to all instances on the specified network.
        targetTags?: string[],        
    }
    
    interface FirewallList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Firewall resources.
        items?: Firewall[],        
        // [Output Only] Type of resource. Always compute#firewallList for lists of firewalls.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface ForwardingRule {
        // Value of the reserved IP address that this forwarding rule is serving on behalf of. For global forwarding rules, the address must be a global IP; for regional forwarding rules, the address must live in the same region as the forwarding rule. If left empty (default value), an ephemeral IP from the same scope (global or regional) will be assigned.
        IPAddress?: string,
        // The IP protocol to which this rule applies. Valid options are TCP, UDP, ESP, AH or SCTP.
        IPProtocol?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#forwardingRule for Forwarding Rule resources.
        kind?: string,
        // Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // Applicable only when IPProtocol is TCP, UDP, or SCTP, only packets addressed to ports in the specified range will be forwarded to target. Forwarding rules with the same [IPAddress, IPProtocol] pair must have disjoint port ranges.
        portRange?: string,
        // [Output Only] URL of the region where the regional forwarding rule resides. This field is not applicable to global forwarding rules.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // The URL of the target resource to receive the matched traffic. For regional forwarding rules, this target must live in the same region as the forwarding rule. For global forwarding rules, this target must be a global TargetHttpProxy or TargetHttpsProxy resource. The forwarded traffic must be of a type appropriate to the target object. For example, TargetHttpProxy requires HTTP traffic, and TargetHttpsProxy requires HTTPS traffic.
        target?: string,
    }
    
    interface ForwardingRuleAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A map of scoped forwarding rule lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#forwardingRuleAggregatedList for lists of forwarding rules.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface ForwardingRuleList {
        // [Output Only] Unique identifier for the resource. Set by the server.
        id?: string,
        // A list of ForwardingRule resources.
        items?: ForwardingRule[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface ForwardingRulesScopedList {
        // List of forwarding rules contained in this scope.
        forwardingRules?: ForwardingRule[],        
        // Informational warning which replaces the list of forwarding rules when the list is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface GlobalSetLabelsRequest {
        // Fingerprint of the previous set of labels for this resource, used to detect conflicts.
        labelFingerprint?: string,
        // The new labels for the resource.
        labels?: any,
    }
    
    interface HealthCheckReference {
        // 
        healthCheck?: string,
    }
    
    interface HealthStatus {
        // Health state of the instance.
        healthState?: string,
        // URL of the instance resource.
        instance?: string,
        // The IP address represented by this resource.
        ipAddress?: string,
        // The port on the instance.
        port?: number,
    }
    
    interface HostRule {
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // The list of host patterns to match. They must be valid hostnames, except * will match any string of ([a-z0-9-.]*). In that case, * must be the first character and must be followed in the pattern by either - or ..
        hosts?: string[],        
        // The name of the PathMatcher to use to match the path portion of the URL if the hostRule matches the URL's host portion.
        pathMatcher?: string,
    }
    
    interface HttpHealthCheck {
        // How often (in seconds) to send a health check. The default value is 5 seconds.
        checkIntervalSec?: number,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
        healthyThreshold?: number,
        // The value of the host header in the HTTP health check request. If left empty (default value), the public IP on behalf of which this health check is performed will be used.
        host?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#httpHealthCheck for HTTP health checks.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // The TCP port number for the HTTP health check request. The default value is 80.
        port?: number,
        // The request path of the HTTP health check request. The default value is /.
        requestPath?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have greater value than checkIntervalSec.
        timeoutSec?: number,
        // A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.
        unhealthyThreshold?: number,
    }
    
    interface HttpHealthCheckList {
        // [Output Only] Unique identifier for the resource. Defined by the server.
        id?: string,
        // A list of HttpHealthCheck resources.
        items?: HttpHealthCheck[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface HttpsHealthCheck {
        // How often (in seconds) to send a health check. The default value is 5 seconds.
        checkIntervalSec?: number,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
        healthyThreshold?: number,
        // The value of the host header in the HTTPS health check request. If left empty (default value), the public IP on behalf of which this health check is performed will be used.
        host?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // Type of the resource.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // The TCP port number for the HTTPS health check request. The default value is 443.
        port?: number,
        // The request path of the HTTPS health check request. The default value is "/".
        requestPath?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have a greater value than checkIntervalSec.
        timeoutSec?: number,
        // A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.
        unhealthyThreshold?: number,
    }
    
    interface HttpsHealthCheckList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // A list of HttpsHealthCheck resources.
        items?: HttpsHealthCheck[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface Image {
        // Size of the image tar.gz archive stored in Google Cloud Storage (in bytes).
        archiveSizeBytes?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // The deprecation status associated with this image.
        deprecated?: DeprecationStatus,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // Size of the image when restored onto a persistent disk (in GB).
        diskSizeGb?: string,
        // Image family for the resource; provided by the client when the resource is created.
        family?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // Encrypts the image using a customer-supplied encryption key.
        // 
        // If you encrypt an image using a customer-supplied encryption key, and you want to use the image later (e.g. to create a disk from the image), you must provide the same key used encrypt the image in your future request. If you provide an incorrect key, or no key, the operation will fail.
        // 
        // Customer-supplied encryption keys do not protect access to metadata of the disk.
        // 
        // If no customer-supplied encryption key is provided at creation, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the image later.
        imageEncryptionKey?: CustomerEncryptionKey,
        // [Output Only] Type of the resource. Always compute#image for images.
        kind?: string,
        // A fingerprint for the labels being applied to this image, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in order to update or change labels.
        // 
        // To see the latest fingerprint, make get() request to retrieve the image.
        labelFingerprint?: string,
        // Labels to apply to this image. These can be later modified by the setLabels method. Each label key & value must comply with RFC1035. Label values may be empty.
        labels?: any,
        // Any applicable publicly visible licenses.
        licenses?: string[],        
        // Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // The parameters of the raw disk image.
        rawDisk?: {        
            // The format used to encode and transmit the block device, which should be TAR. This is just a container and transmission format and not a runtime format. Provided by the client when the disk image is created.
            containerType?: string,
            // An optional SHA1 checksum of the disk image before unpackaging; provided by the client when the disk image is created.
            sha1Checksum?: string,
            // The full Google Cloud Storage URL where the disk image is stored. You must provide either this property or the sourceDisk property but not both.
            source?: string,
        },        
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // URL of the The source disk used to create this image. This can be a full or valid partial URL. You must provide either this property or the rawDisk.source property but not both to create an image. For example, the following are valid values:  
        // - https://www.googleapis.com/compute/v1/projects/project/zones/zone/disk/disk 
        // - projects/project/zones/zone/disk/disk 
        // - zones/zone/disks/disk
        sourceDisk?: string,
        // Specifies the customer-supplied encryption key of the source disk. This key is required if the source disk is protected by a customer-supplied encryption key.
        // 
        // If the incorrect key is provided the operation will fail.
        sourceDiskEncryptionKey?: CustomerEncryptionKey,
        // The ID value of the disk used to create this image. This value may be used to determine whether the image was taken from the current or a previous instance of a given disk name.
        sourceDiskId?: string,
        // The type of the image used to create this disk. The default and only value is RAW
        sourceType?: string,
        // [Output Only] The status of the image. An image can be used to create other resources, such as instances, only after the image has been successfully created and the status is set to READY. Possible values are FAILED, PENDING, or READY.
        status?: string,
    }
    
    interface ImageList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Image resources.
        items?: Image[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface Instance {
        // Allows this instance to send and receive packets with non-matching destination or source IPs. This is required if you plan to use this instance to forward routes. For more information, see Enabling IP Forwarding.
        canIpForward?: boolean,
        // [Output Only] The CPU platform used by this instance.
        cpuPlatform?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // Array of disks associated with this instance. Persistent disks must be created before you can assign them.
        disks?: AttachedDisk[],        
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#instance for instances.
        kind?: string,
        // A fingerprint for this request, which is essentially a hash of the metadata's contents and used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in order to update or change metadata.
        // 
        // To see the latest fingerprint, make get() request to the instance.
        labelFingerprint?: string,
        // Labels to apply to this instance. These can be later modified by the setLabels method. Each label key/value pair must comply with RFC1035. Label values may be empty.
        labels?: any,
        // Full or partial URL of the machine type resource to use for this instance, in the format: zones/zone/machineTypes/machine-type. This is provided by the client when the instance is created. For example, the following is a valid partial url to a predefined machine type:
        // 
        // zones/us-central1-f/machineTypes/n1-standard-1 
        // 
        // To create a custom machine type, provide a URL to a machine type in the following format, where CPUS is 1 or an even number up to 32 (2, 4, 6, ... 24, etc), and MEMORY is the total memory for this instance. Memory must be a multiple of 256 MB and must be supplied in MB (e.g. 5 GB of memory is 5120 MB):
        // 
        // zones/zone/machineTypes/custom-CPUS-MEMORY 
        // 
        // For example: zones/us-central1-f/machineTypes/custom-4-5120 
        // 
        // For a full list of restrictions, read the Specifications for custom machine types.
        machineType?: string,
        // The metadata key/value pairs assigned to this instance. This includes custom metadata and predefined keys.
        metadata?: Metadata,
        // The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // An array of configurations for this interface. This specifies how this interface is configured to interact with other network services, such as connecting to the internet.
        networkInterfaces?: NetworkInterface[],        
        // Scheduling options for this instance.
        scheduling?: Scheduling,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
        // A list of service accounts, with their specified scopes, authorized for this instance. Service accounts generate access tokens that can be accessed through the metadata server and used to authenticate applications on the instance. See Authenticating from Google Compute Engine for more information.
        serviceAccounts?: ServiceAccount[],        
        // [Output Only] The status of the instance. One of the following values: PROVISIONING, STAGING, RUNNING, STOPPING, and TERMINATED.
        status?: string,
        // [Output Only] An optional, human-readable explanation of the status.
        statusMessage?: string,
        // A list of tags to apply to this instance. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during instance creation. The tags can be later modified by the setTags method. Each tag within the list must comply with RFC1035.
        tags?: Tags,
        // [Output Only] URL of the zone where the instance resides.
        zone?: string,
    }
    
    interface InstanceAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A map of scoped instance lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#instanceAggregatedList for aggregated lists of Instance resources.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface InstanceGroup {
        // [Output Only] The creation timestamp for this instance group in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The fingerprint of the named ports. The system uses this fingerprint to detect conflicts when multiple users change the named ports concurrently.
        fingerprint?: string,
        // [Output Only] A unique identifier for this resource type. The server generates this identifier.
        id?: string,
        // [Output Only] The resource type, which is always compute#instanceGroup for instance groups.
        kind?: string,
        // The name of the instance group. The name must be 1-63 characters long, and comply with RFC1035.
        name?: string,
        // Assigns a name to a port number. For example: {name: "http", port: 80}
        // 
        // This allows the system to reference ports by the assigned name instead of a port number. Named ports can also contain multiple ports. For example: [{name: "http", port: 80},{name: "http", port: 8080}] 
        // 
        // Named ports apply to all instances in this instance group.
        namedPorts?: NamedPort[],        
        // The URL of the network to which all instances in the instance group belong.
        network?: string,
        // [Output Only] The URL for this instance group. The server generates this URL.
        selfLink?: string,
        // [Output Only] The total number of instances in the instance group.
        size?: number,
        // The URL of the subnetwork to which all instances in the instance group belong.
        subnetwork?: string,
        // [Output Only] The URL of the zone where the instance group is located.
        zone?: string,
    }
    
    interface InstanceGroupAggregatedList {
        // [Output Only] A unique identifier for this aggregated list of instance groups. The server generates this identifier.
        id?: string,
        // A map of scoped instance group lists.
        items?: any,
        // [Output Only] The resource type, which is always compute#instanceGroupAggregatedList for aggregated lists of instance groups.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] The URL for this resource type. The server generates this URL.
        selfLink?: string,
    }
    
    interface InstanceGroupList {
        // [Output Only] A unique identifier for this list of instance groups. The server generates this identifier.
        id?: string,
        // A list of instance groups.
        items?: InstanceGroup[],        
        // [Output Only] The resource type, which is always compute#instanceGroupList for instance group lists.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] The URL for this resource type. The server generates this URL.
        selfLink?: string,
    }
    
    interface InstanceGroupManager {
        // The autohealing policy for this managed instance group. You can specify only one value.
        autoHealingPolicies?: InstanceGroupManagerAutoHealingPolicy[],        
        // The base instance name to use for instances in this group. The value must be 1-58 characters long. Instances are named by appending a hyphen and a random four-character string to the base instance name. The base instance name must comply with RFC1035.
        baseInstanceName?: string,
        // [Output Only] The creation timestamp for this managed instance group in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] The list of instance actions and the number of instances in this managed instance group that are scheduled for each of those actions.
        currentActions?: InstanceGroupManagerActionsSummary,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The fingerprint of the target pools information. You can use this optional field for optimistic locking when you update the target pool entries.
        fingerprint?: string,
        // [Output Only] A unique identifier for this resource type. The server generates this identifier.
        id?: string,
        // [Output Only] The URL of the Instance Group resource.
        instanceGroup?: string,
        // The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the managed instance group.
        instanceTemplate?: string,
        // [Output Only] The resource type, which is always compute#instanceGroupManager for managed instance groups.
        kind?: string,
        // The name of the managed instance group. The name must be 1-63 characters long, and comply with RFC1035.
        name?: string,
        // Named ports configured for the Instance Groups complementary to this Instance Group Manager.
        namedPorts?: NamedPort[],        
        // [Output Only] The URL for this managed instance group. The server defines this URL.
        selfLink?: string,
        // The URLs for all TargetPool resources to which instances in the instanceGroup field are added. The target pools automatically apply to all of the instances in the managed instance group.
        targetPools?: string[],        
        // The target number of running instances for this managed instance group. Deleting or abandoning instances reduces this number. Resizing the group changes this number.
        targetSize?: number,
        // The name of the zone where the managed instance group is located.
        zone?: string,
    }
    
    interface InstanceGroupManagerActionsSummary {
        // [Output Only] The total number of instances in the managed instance group that are scheduled to be abandoned. Abandoning an instance removes it from the managed instance group without deleting it.
        abandoning?: number,
        // [Output Only] The number of instances in the managed instance group that are scheduled to be created or are currently being created. If the group fails to create one of these instances, it tries again until it creates the instance successfully.
        creating?: number,
        // [Output Only] The number of instances in the managed instance group that are scheduled to be deleted or are currently being deleted.
        deleting?: number,
        // [Output Only] The number of instances in the managed instance group that are running and have no scheduled actions.
        none?: number,
        // [Output Only] The number of instances in the managed instance group that are scheduled to be recreated or are currently being being recreated. Recreating an instance deletes the existing root persistent disk and creates a new disk from the image that is defined in the instance template.
        recreating?: number,
        // [Output Only] The number of instances in the managed instance group that are being reconfigured with properties that do not require a restart or a recreate action. For example, setting or removing target pools for the instance.
        refreshing?: number,
        // [Output Only] The number of instances in the managed instance group that are scheduled to be restarted or are currently being restarted.
        restarting?: number,
    }
    
    interface InstanceGroupManagerAggregatedList {
        // [Output Only] A unique identifier for this aggregated list of managed instance groups. The server generates this identifier.
        id?: string,
        // [Output Only] A map of filtered managed instance group lists.
        items?: any,
        // [Output Only] The resource type, which is always compute#instanceGroupManagerAggregatedList for an aggregated list of managed instance groups.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] The URL for this resource type. The server generates this URL.
        selfLink?: string,
    }
    
    interface InstanceGroupManagerAutoHealingPolicy {
        // The URL for the HealthCheck that signals autohealing.
        healthCheck?: string,
        // The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. This initial delay allows instances to initialize and run their startup scripts before the instance group determines that they are UNHEALTHY. This prevents the managed instance group from recreating its instances prematurely.
        initialDelaySec?: number,
    }
    
    interface InstanceGroupManagerList {
        // [Output Only] A unique identifier for this resource type. The server generates this identifier.
        id?: string,
        // [Output Only] A list of managed instance groups.
        items?: InstanceGroupManager[],        
        // [Output Only] The resource type, which is always compute#instanceGroupManagerList for a list of managed instance groups.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] The URL for this resource type. The server generates this URL.
        selfLink?: string,
    }
    
    interface InstanceGroupManagersAbandonInstancesRequest {
        // The URL for one or more instances to abandon from the managed instance group.
        instances?: string[],        
    }
    
    interface InstanceGroupManagersDeleteInstancesRequest {
        // The list of instances to delete from this managed instance group. Specify one or more instance URLs.
        instances?: string[],        
    }
    
    interface InstanceGroupManagersListManagedInstancesResponse {
        // [Output Only] The list of instances in the managed instance group.
        managedInstances?: ManagedInstance[],        
    }
    
    interface InstanceGroupManagersRecreateInstancesRequest {
        // The URL for one or more instances to recreate.
        instances?: string[],        
    }
    
    interface InstanceGroupManagersScopedList {
        // [Output Only] The list of managed instance groups that are contained in the specified project and zone.
        instanceGroupManagers?: InstanceGroupManager[],        
        // [Output Only] The warning that replaces the list of managed instance groups when the list is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface InstanceGroupManagersSetAutoHealingRequest {
        // 
        autoHealingPolicies?: InstanceGroupManagerAutoHealingPolicy[],        
    }
    
    interface InstanceGroupManagersSetInstanceTemplateRequest {
        // The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the managed instance group.
        instanceTemplate?: string,
    }
    
    interface InstanceGroupManagersSetTargetPoolsRequest {
        // The fingerprint of the target pools information. Use this optional property to prevent conflicts when multiple users change the target pools settings concurrently. Obtain the fingerprint with the instanceGroupManagers.get method. Then, include the fingerprint in your request to ensure that you do not overwrite changes that were applied from another concurrent request.
        fingerprint?: string,
        // The list of target pool URLs that instances in this managed instance group belong to. The managed instance group applies these target pools to all of the instances in the group. Existing instances and new instances in the group all receive these target pool settings.
        targetPools?: string[],        
    }
    
    interface InstanceGroupsAddInstancesRequest {
        // The list of instances to add to the instance group.
        instances?: InstanceReference[],        
    }
    
    interface InstanceGroupsListInstances {
        // [Output Only] A unique identifier for this list of instance groups. The server generates this identifier.
        id?: string,
        // [Output Only] A list of instances and any named ports that are assigned to those instances.
        items?: InstanceWithNamedPorts[],        
        // [Output Only] The resource type, which is always compute#instanceGroupsListInstances for lists of instance groups.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] The URL for this list of instance groups. The server generates this URL.
        selfLink?: string,
    }
    
    interface InstanceGroupsListInstancesRequest {
        // A filter for the state of the instances in the instance group. Valid options are ALL or RUNNING. If you do not specify this parameter the list includes all instances regardless of their state.
        instanceState?: string,
    }
    
    interface InstanceGroupsRemoveInstancesRequest {
        // The list of instances to remove from the instance group.
        instances?: InstanceReference[],        
    }
    
    interface InstanceGroupsScopedList {
        // [Output Only] The list of instance groups that are contained in this scope.
        instanceGroups?: InstanceGroup[],        
        // [Output Only] An informational warning that replaces the list of instance groups when the list is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface InstanceGroupsSetNamedPortsRequest {
        // The fingerprint of the named ports information for this instance group. Use this optional property to prevent conflicts when multiple users change the named ports settings concurrently. Obtain the fingerprint with the instanceGroups.get method. Then, include the fingerprint in your request to ensure that you do not overwrite changes that were applied from another concurrent request.
        fingerprint?: string,
        // The list of named ports to set for this instance group.
        namedPorts?: NamedPort[],        
    }
    
    interface InstanceList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of instances.
        items?: Instance[],        
        // [Output Only] Type of resource. Always compute#instanceList for lists of Instance resources.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface InstanceProperties {
        // Enables instances created based on this template to send packets with source IP addresses other than their own and receive packets with destination IP addresses other than their own. If these instances will be used as an IP gateway or it will be set as the next-hop in a Route resource, specify true. If unsure, leave this set to false. See the canIpForward documentation for more information.
        canIpForward?: boolean,
        // An optional text description for the instances that are created from this instance template.
        description?: string,
        // An array of disks that are associated with the instances that are created from this template.
        disks?: AttachedDisk[],        
        // The machine type to use for instances that are created from this template.
        machineType?: string,
        // The metadata key/value pairs to assign to instances that are created from this template. These pairs can consist of custom metadata or predefined keys. See Project and instance metadata for more information.
        metadata?: Metadata,
        // An array of network access configurations for this interface.
        networkInterfaces?: NetworkInterface[],        
        // Specifies the scheduling options for the instances that are created from this template.
        scheduling?: Scheduling,
        // A list of service accounts with specified scopes. Access tokens for these service accounts are available to the instances that are created from this template. Use metadata queries to obtain the access tokens for these instances.
        serviceAccounts?: ServiceAccount[],        
        // A list of tags to apply to the instances that are created from this template. The tags identify valid sources or targets for network firewalls. The setTags method can modify this list of tags. Each tag within the list must comply with RFC1035.
        tags?: Tags,
    }
    
    interface InstanceReference {
        // The URL for a specific instance.
        instance?: string,
    }
    
    interface InstanceTemplate {
        // [Output Only] The creation timestamp for this instance template in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] A unique identifier for this instance template. The server defines this identifier.
        id?: string,
        // [Output Only] The resource type, which is always compute#instanceTemplate for instance templates.
        kind?: string,
        // Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // The instance properties for this instance template.
        properties?: InstanceProperties,
        // [Output Only] The URL for this instance template. The server defines this URL.
        selfLink?: string,
    }
    
    interface InstanceTemplateList {
        // [Output Only] A unique identifier for this instance template. The server defines this identifier.
        id?: string,
        // [Output Only] list of InstanceTemplate resources.
        items?: InstanceTemplate[],        
        // [Output Only] The resource type, which is always compute#instanceTemplatesListResponse for instance template lists.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] The URL for this instance template list. The server defines this URL.
        selfLink?: string,
    }
    
    interface InstanceWithNamedPorts {
        // [Output Only] The URL of the instance.
        instance?: string,
        // [Output Only] The named ports that belong to this instance group.
        namedPorts?: NamedPort[],        
        // [Output Only] The status of the instance.
        status?: string,
    }
    
    interface InstancesScopedList {
        // [Output Only] List of instances contained in this scope.
        instances?: Instance[],        
        // [Output Only] Informational warning which replaces the list of instances when the list is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface InstancesSetLabelsRequest {
        // Fingerprint of the previous set of labels for this resource, used to prevent conflicts. Provide the latest fingerprint value when making a request to add or change labels.
        labelFingerprint?: string,
        // The new labels for the resource, in the form of key/value pairs.
        labels?: any,
    }
    
    interface InstancesSetMachineTypeRequest {
        // Full or partial URL of the machine type resource. See Machine Types for a full list of machine types. For example: zones/us-central1-f/machineTypes/n1-standard-1
        machineType?: string,
    }
    
    interface License {
        // [Output Only] If true, the customer will be charged license fee for running software that contains this license on an instance.
        chargesUseFee?: boolean,
        // [Output Only] Type of resource. Always compute#license for licenses.
        kind?: string,
        // [Output Only] Name of the resource. The name is 1-63 characters long and complies with RFC1035.
        name?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface MachineType {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] The deprecation status associated with this machine type.
        deprecated?: DeprecationStatus,
        // [Output Only] An optional textual description of the resource.
        description?: string,
        // [Output Only] The number of virtual CPUs that are available to the instance.
        guestCpus?: number,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] The type of the resource. Always compute#machineType for machine types.
        kind?: string,
        // [Output Only] Maximum persistent disks allowed.
        maximumPersistentDisks?: number,
        // [Output Only] Maximum total persistent disks size (GB) allowed.
        maximumPersistentDisksSizeGb?: string,
        // [Output Only] The amount of physical memory available to the instance, defined in MB.
        memoryMb?: number,
        // [Output Only] Name of the resource.
        name?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] The name of the zone where the machine type resides, such as us-central1-a.
        zone?: string,
    }
    
    interface MachineTypeAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A map of scoped machine type lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#machineTypeAggregatedList for aggregated lists of machine types.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface MachineTypeList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Machine Type resources.
        items?: MachineType[],        
        // [Output Only] Type of resource. Always compute#machineTypeList for lists of machine types.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface MachineTypesScopedList {
        // [Output Only] List of machine types contained in this scope.
        machineTypes?: MachineType[],        
        // [Output Only] An informational warning that appears when the machine types list is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface ManagedInstance {
        // [Output Only] The current action that the managed instance group has scheduled for the instance. Possible values: 
        // - NONE The instance is running, and the managed instance group does not have any scheduled actions for this instance. 
        // - CREATING The managed instance group is creating this instance. If the group fails to create this instance, it will try again until it is successful. 
        // - CREATING_WITHOUT_RETRIES The managed instance group is attempting to create this instance only once. If the group fails to create this instance, it does not try again and the group's target_size value is decreased. 
        // - RECREATING The managed instance group is recreating this instance. 
        // - DELETING The managed instance group is permanently deleting this instance. 
        // - ABANDONING The managed instance group is abandoning this instance. The instance will be removed from the instance group and from any target pools that are associated with this group. 
        // - RESTARTING The managed instance group is restarting the instance. 
        // - REFRESHING The managed instance group is applying configuration changes to the instance without stopping it. For example, the group can update the target pool list for an instance without stopping that instance.
        currentAction?: string,
        // [Output only] The unique identifier for this resource. This field is empty when instance does not exist.
        id?: string,
        // [Output Only] The URL of the instance. The URL can exist even if the instance has not yet been created.
        instance?: string,
        // [Output Only] The status of the instance. This field is empty when the instance does not exist.
        instanceStatus?: string,
        // [Output Only] Information about the last attempt to create or delete the instance.
        lastAttempt?: ManagedInstanceLastAttempt,
    }
    
    interface ManagedInstanceLastAttempt {
        // [Output Only] Encountered errors during the last attempt to create or delete the instance.
        errors?: {        
            // [Output Only] The array of errors encountered while processing this operation.
            errors?: {            
                // [Output Only] The error type identifier for this error.
                code?: string,
                // [Output Only] Indicates the field in the request that caused the error. This property is optional.
                location?: string,
                // [Output Only] An optional, human-readable error message.
                message?: string,
            }[],            
        },        
    }
    
    interface Metadata {
        // Specifies a fingerprint for this request, which is essentially a hash of the metadata's contents and used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in order to update or change metadata.
        fingerprint?: string,
        // Array of key/value pairs. The total size of all keys and values must be less than 512 KB.
        items?: {        
            // Key for the metadata entry. Keys must conform to the following regexp: [a-zA-Z0-9-_]+, and be less than 128 bytes in length. This is reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project.
            key?: string,
            // Value for the metadata entry. These are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on values is that their size must be less than or equal to 32768 bytes.
            value?: string,
        }[],        
        // [Output Only] Type of the resource. Always compute#metadata for metadata.
        kind?: string,
    }
    
    interface NamedPort {
        // The name for this named port. The name must be 1-63 characters long, and comply with RFC1035.
        name?: string,
        // The port number, which can be a value between 1 and 65535.
        port?: number,
    }
    
    interface Network {
        // The range of internal addresses that are legal on this network. This range is a CIDR specification, for example: 192.168.0.0/16. Provided by the client when the network is created.
        IPv4Range?: string,
        // When set to true, the network is created in "auto subnet mode". When set to false, the network is in "custom subnet mode".
        // 
        // In "auto subnet mode", a newly created network is assigned the default CIDR of 10.128.0.0/9 and it automatically creates one subnetwork per region.
        autoCreateSubnetworks?: boolean,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // A gateway address for default routing to other networks. This value is read only and is selected by the Google Compute Engine, typically as the first usable address in the IPv4Range.
        gatewayIPv4?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#network for networks.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] Server-defined fully-qualified URLs for all subnetworks in this network.
        subnetworks?: string[],        
    }
    
    interface NetworkInterface {
        // An array of configurations for this interface. Currently, ONE_TO_ONE_NAT is the only access config supported. If there are no accessConfigs specified, then this instance will have no external internet access.
        accessConfigs?: AccessConfig[],        
        // [Output Only] The name of the network interface, generated by the server. For network devices, these are eth0, eth1, etc.
        name?: string,
        // URL of the network resource for this instance. This is required for creating an instance but optional when creating a firewall rule. If not specified when creating a firewall rule, the default network is used:
        // 
        // global/networks/default 
        // 
        // If you specify this property, you can specify the network as a full or partial URL. For example, the following are all valid URLs:  
        // - https://www.googleapis.com/compute/v1/projects/project/global/networks/network 
        // - projects/project/global/networks/network 
        // - global/networks/default
        network?: string,
        // [Output Only] An optional IPV4 internal network address assigned to the instance for this network interface.
        networkIP?: string,
        // The URL of the Subnetwork resource for this instance. If the network resource is in legacy mode, do not provide this property. If the network is in auto subnet mode, providing the subnetwork is optional. If the network is in custom subnet mode, then this field should be specified. If you specify this property, you can specify the subnetwork as a full or partial URL. For example, the following are all valid URLs:  
        // - https://www.googleapis.com/compute/v1/projects/project/zones/zone/subnetworks/subnetwork 
        // - zones/zone/subnetworks/subnetwork
        subnetwork?: string,
    }
    
    interface NetworkList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Network resources.
        items?: Network[],        
        // [Output Only] Type of resource. Always compute#networkList for lists of networks.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource .
        selfLink?: string,
    }
    
    interface Operation {
        // [Output Only] Reserved for future use.
        clientOperationId?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] A textual description of the operation, which is set when the operation is created.
        description?: string,
        // [Output Only] The time that this operation was completed. This value is in RFC3339 text format.
        endTime?: string,
        // [Output Only] If errors are generated during processing of the operation, this field will be populated.
        error?: {        
            // [Output Only] The array of errors encountered while processing this operation.
            errors?: {            
                // [Output Only] The error type identifier for this error.
                code?: string,
                // [Output Only] Indicates the field in the request that caused the error. This property is optional.
                location?: string,
                // [Output Only] An optional, human-readable error message.
                message?: string,
            }[],            
        },        
        // [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as NOT FOUND.
        httpErrorMessage?: string,
        // [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a 404 means the resource was not found.
        httpErrorStatusCode?: number,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] The time that this operation was requested. This value is in RFC3339 text format.
        insertTime?: string,
        // [Output Only] Type of the resource. Always compute#operation for operation resources.
        kind?: string,
        // [Output Only] Name of the resource.
        name?: string,
        // [Output Only] The type of operation, such as insert, update, or delete, and so on.
        operationType?: string,
        // [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.
        progress?: number,
        // [Output Only] The URL of the region where the operation resides. Only available when performing regional operations.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.
        startTime?: string,
        // [Output Only] The status of the operation, which can be one of the following: PENDING, RUNNING, or DONE.
        status?: string,
        // [Output Only] An optional textual description of the current status of the operation.
        statusMessage?: string,
        // [Output Only] The unique target ID, which identifies a specific incarnation of the target resource.
        targetId?: string,
        // [Output Only] The URL of the resource that the operation modifies.
        targetLink?: string,
        // [Output Only] User who requested the operation, for example: user@example.com.
        user?: string,
        // [Output Only] If warning messages are generated during processing of the operation, this field will be populated.
        warnings?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        }[],        
        // [Output Only] The URL of the zone where the operation resides. Only available when performing per-zone operations.
        zone?: string,
    }
    
    interface OperationAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A map of scoped operation lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#operationAggregatedList for aggregated lists of operations.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface OperationList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Operation resources.
        items?: Operation[],        
        // [Output Only] Type of resource. Always compute#operations for Operations resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface OperationsScopedList {
        // [Output Only] List of operations contained in this scope.
        operations?: Operation[],        
        // [Output Only] Informational warning which replaces the list of operations when the list is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface PathMatcher {
        // The full or partial URL to the BackendService resource. This will be used if none of the pathRules defined by this PathMatcher is matched by the URL's path portion. For example, the following are all valid URLs to a BackendService resource:  
        // - https://www.googleapis.com/compute/v1/projects/project/global/backendServices/backendService 
        // - compute/v1/projects/project/global/backendServices/backendService 
        // - global/backendServices/backendService
        defaultService?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // The name to which this PathMatcher is referred by the HostRule.
        name?: string,
        // The list of path rules.
        pathRules?: PathRule[],        
    }
    
    interface PathRule {
        // The list of path patterns to match. Each must start with / and the only place a * is allowed is at the end following a /. The string fed to the path matcher does not include any text after the first ? or #, and those chars are not allowed here.
        paths?: string[],        
        // The URL of the BackendService resource if this rule is matched.
        service?: string,
    }
    
    interface Project {
        // Metadata key/value pairs available to all instances contained in this project. See Custom metadata for more information.
        commonInstanceMetadata?: Metadata,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] Default service account used by VMs running in this project.
        defaultServiceAccount?: string,
        // An optional textual description of the resource.
        description?: string,
        // Restricted features enabled for use on this project.
        enabledFeatures?: string[],        
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server. This is not the project ID, and is just a unique ID used by Compute Engine to identify resources.
        id?: string,
        // [Output Only] Type of the resource. Always compute#project for projects.
        kind?: string,
        // The project ID. For example: my-example-project. Use the project ID to make requests to Compute Engine.
        name?: string,
        // [Output Only] Quotas assigned to this project.
        quotas?: Quota[],        
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // The naming prefix for daily usage reports and the Google Cloud Storage bucket where they are stored.
        usageExportLocation?: UsageExportLocation,
    }
    
    interface Quota {
        // [Output Only] Quota limit for this metric.
        limit?: number,
        // [Output Only] Name of the quota metric.
        metric?: string,
        // [Output Only] Current usage of this metric.
        usage?: number,
    }
    
    interface Region {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] The deprecation status associated with this region.
        deprecated?: DeprecationStatus,
        // [Output Only] Textual description of the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#region for regions.
        kind?: string,
        // [Output Only] Name of the resource.
        name?: string,
        // [Output Only] Quotas assigned to this region.
        quotas?: Quota[],        
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] Status of the region, either UP or DOWN.
        status?: string,
        // [Output Only] A list of zones available in this region, in the form of resource URLs.
        zones?: string[],        
    }
    
    interface RegionList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Region resources.
        items?: Region[],        
        // [Output Only] Type of resource. Always compute#regionList for lists of regions.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface ResourceGroupReference {
        // A URI referencing one of the resource views listed in the backend service.
        group?: string,
    }
    
    interface Route {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // The destination range of outgoing packets that this route applies to.
        destRange?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of this resource. Always compute#routes for Route resources.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // Fully-qualified URL of the network that this route applies to.
        network?: string,
        // The URL to a gateway that should handle matching packets. You can only specify the internet gateway using a full or partial valid URL:  projects/<project-id>/global/gateways/default-internet-gateway
        nextHopGateway?: string,
        // The URL to an instance that should handle matching packets. You can specify this as a full or partial URL. For example:
        // https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/
        nextHopInstance?: string,
        // The network IP address of an instance that should handle matching packets.
        nextHopIp?: string,
        // The URL of the local network if it should handle matching packets.
        nextHopNetwork?: string,
        // The URL to a VpnTunnel that should handle matching packets.
        nextHopVpnTunnel?: string,
        // The priority of this route. Priority is used to break ties in cases where there is more than one matching route of equal prefix length. In the case of two routes with equal prefix length, the one with the lowest-numbered priority value wins. Default value is 1000. Valid range is 0 through 65535.
        priority?: number,
        // [Output Only] Server-defined fully-qualified URL for this resource.
        selfLink?: string,
        // A list of instance tags to which this route applies.
        tags?: string[],        
        // [Output Only] If potential misconfigurations are detected for this route, this field will be populated with warning messages.
        warnings?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        }[],        
    }
    
    interface RouteList {
        // [Output Only] Unique identifier for the resource. Defined by the server.
        id?: string,
        // [Output Only] A list of Route resources.
        items?: Route[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface Router {
        // 
        bgp?: RouterBgp,
        // 
        bgpPeers?: RouterBgpPeer[],        
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // 
        interfaces?: RouterInterface[],        
        // [Output Only] Type of resource. Always compute#router for routers.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // URI of the network to which this router belongs.
        network?: string,
        // [Output Only] URI of the region where the router resides.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface RouterAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A map of scoped router lists.
        items?: any,
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface RouterBgp {
        // Local BGP Autonomous System Number (ASN). Can be a constant public ASN value for Google, or a customer-specified private ASN. In either case, the value will be fixed for this router resource. All VPN tunnels that link to this router will have the same local ASN.
        asn?: number,
    }
    
    interface RouterBgpPeer {
        // The priority of routes advertised to this BGP peer. In the case where there is more than one matching route of maximum length, the routes with lowest priority value win.
        advertisedRoutePriority?: number,
        // Name of the interface the BGP peer is associated with.
        interfaceName?: string,
        // IP address of the interface inside Google Cloud Platform.
        ipAddress?: string,
        // Name of this BGP peer. The name must be 1-63 characters long and comply with RFC1035.
        name?: string,
        // Peer BGP Autonomous System Number (ASN). For VPN use case, this value can be different for every tunnel.
        peerAsn?: number,
        // IP address of the BGP interface outside Google cloud.
        peerIpAddress?: string,
    }
    
    interface RouterInterface {
        // IP address and range of the interface. The value should be a CIDR-formatted string, for example: 169.254.0.1/30. NOTE: Do NOT truncate address, as it represents IP address of interface.
        ipRange?: string,
        // URI of linked VPN tunnel. It must be in the same region as the router. Each interface can have at most one linked resource.
        linkedVpnTunnel?: string,
        // Name of this interface entry. The name must be 1-63 characters long and comply with RFC1035.
        name?: string,
    }
    
    interface RouterList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of Router resources.
        items?: Router[],        
        // [Output Only] Type of resource. Always compute#router for routers.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface RouterStatus {
        // Best routes for this router.
        bestRoutes?: Route[],        
        // 
        bgpPeerStatus?: RouterStatusBgpPeerStatus[],        
        // URI of the network to which this router belongs.
        network?: string,
    }
    
    interface RouterStatusBgpPeerStatus {
        // Routes that were advertised to the remote BGP peer
        advertisedRoutes?: Route[],        
        // IP address of the local BGP interface.
        ipAddress?: string,
        // URL of the VPN tunnel that this BGP peer controls.
        linkedVpnTunnel?: string,
        // Name of this BGP peer. Unique within the routes resource.
        name?: string,
        // Number of routes learned from the remote BGP Peer.
        numLearnedRoutes?: number,
        // IP address of the remote BGP interface.
        peerIpAddress?: string,
        // BGP state as specified in RFC1771.
        state?: string,
        // Status of the BGP peer: {UP, DOWN}
        status?: string,
        // Time this session has been up. Format: 14 years, 51 weeks, 6 days, 23 hours, 59 minutes, 59 seconds
        uptime?: string,
        // Time this session has been up, in seconds. Format: 145
        uptimeSeconds?: string,
    }
    
    interface RouterStatusResponse {
        // Type of resource.
        kind?: string,
        // 
        result?: RouterStatus,
    }
    
    interface RoutersScopedList {
        // List of routers contained in this scope.
        routers?: Router[],        
        // Informational warning which replaces the list of routers when the list is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface Scheduling {
        // Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). You can only set the automatic restart option for standard instances. Preemptible instances cannot be automatically restarted.
        automaticRestart?: boolean,
        // Defines the maintenance behavior for this instance. For standard instances, the default behavior is MIGRATE. For preemptible instances, the default and only possible behavior is TERMINATE. For more information, see Setting Instance Scheduling Options.
        onHostMaintenance?: string,
        // Whether the instance is preemptible.
        preemptible?: boolean,
    }
    
    interface SerialPortOutput {
        // [Output Only] The contents of the console output.
        contents?: string,
        // [Output Only] Type of the resource. Always compute#serialPortOutput for serial port output.
        kind?: string,
        // [Output Only] The position of the next byte of content from the serial console output. Use this value in the next request as the start parameter.
        next?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] The starting byte position of the output that was returned. This should match the start parameter sent with the request. If the serial console output exceeds the size of the buffer, older output will be overwritten by newer content and the start values will be mismatched.
        start?: string,
    }
    
    interface ServiceAccount {
        // Email address of the service account.
        email?: string,
        // The list of scopes to be made available for this service account.
        scopes?: string[],        
    }
    
    interface Snapshot {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] Size of the snapshot, specified in GB.
        diskSizeGb?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#snapshot for Snapshot resources.
        kind?: string,
        // A fingerprint for the labels being applied to this snapshot, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in order to update or change labels.
        // 
        // To see the latest fingerprint, make get() request to the snapshot.
        labelFingerprint?: string,
        // Labels to apply to this snapshot. These can be later modified by the setLabels method. Each label key & value must comply with RFC1035. Label values may be empty.
        labels?: any,
        // [Output Only] A list of public visible licenses that apply to this snapshot. This can be because the original image had licenses attached (such as a Windows image).
        licenses?: string[],        
        // Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // Encrypts the snapshot using a customer-supplied encryption key.
        // 
        // If you encrypt a snapshot using a customer-supplied encryption key and you want to use the snapshot later, you must provide the same key that you used to encrypt the snapshot. For example, you must provide the encryption key when you create a disk from the encrypted snapshot in a future request. If you provide an incorrect key, or no key, the request will fail.
        // 
        // Customer-supplied encryption keys do not protect access to metadata of the disk.
        // 
        // If no customer-supplied encryption key is provided at creation, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the snapshot later.
        snapshotEncryptionKey?: CustomerEncryptionKey,
        // [Output Only] The source disk used to create this snapshot.
        sourceDisk?: string,
        // Specifies the customer-supplied encryption key of the source disk. This key is required if the source disk is protected by a customer-supplied encryption key.
        // 
        // If the incorrect key is provided, the request will fail.
        sourceDiskEncryptionKey?: CustomerEncryptionKey,
        // [Output Only] The ID value of the disk used to create this snapshot. This value may be used to determine whether the snapshot was taken from the current or a previous instance of a given disk name.
        sourceDiskId?: string,
        // [Output Only] The status of the snapshot. This can be CREATING, DELETING, FAILED, READY, or UPLOADING.
        status?: string,
        // [Output Only] A size of the the storage used by the snapshot. As snapshots share storage, this number is expected to change with snapshot creation/deletion.
        storageBytes?: string,
        // [Output Only] An indicator whether storageBytes is in a stable state or it is being adjusted as a result of shared storage reallocation. This status can either be UPDATING, meaning the size of the snapshot is being updated, or UP_TO_DATE, meaning the size of the snapshot is up-to-date.
        storageBytesStatus?: string,
    }
    
    interface SnapshotList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Snapshot resources.
        items?: Snapshot[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface SslCertificate {
        // A local certificate file. The certificate must be in PEM format. The certificate chain must be no greater than 5 certs long. The chain must include at least one intermediate cert.
        certificate?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#sslCertificate for SSL certificates.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // A write-only private key in PEM format. Only insert RPCs will include this field.
        privateKey?: string,
        // [Output only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface SslCertificateList {
        // [Output Only] Unique identifier for the resource. Defined by the server.
        id?: string,
        // A list of SslCertificate resources.
        items?: SslCertificate[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface Subnetwork {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The gateway address for default routes to reach destination addresses outside this subnetwork.
        gatewayAddress?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // The range of internal addresses that are owned by this subnetwork. Provide this property when you create the subnetwork. For example, 10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and non-overlapping within a network.
        ipCidrRange?: string,
        // [Output Only] Type of the resource. Always compute#subnetwork for Subnetwork resources.
        kind?: string,
        // The name of the resource, provided by the client when initially creating the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // The URL of the network to which this subnetwork belongs, provided by the client when initially creating the subnetwork. Only networks that are in the distributed mode can have subnetworks.
        network?: string,
        // [Output Only] URL of the region where the Subnetwork resides.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface SubnetworkAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output] A map of scoped Subnetwork lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#subnetworkAggregatedList for aggregated lists of subnetworks.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface SubnetworkList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // The Subnetwork resources.
        items?: Subnetwork[],        
        // [Output Only] Type of resource. Always compute#subnetworkList for lists of subnetworks.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface SubnetworksScopedList {
        // List of subnetworks contained in this scope.
        subnetworks?: Subnetwork[],        
        // An informational warning that appears when the list of addresses is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface Tags {
        // Specifies a fingerprint for this request, which is essentially a hash of the metadata's contents and used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in order to update or change metadata.
        // 
        // To see the latest fingerprint, make get() request to the instance.
        fingerprint?: string,
        // An array of tags. Each tag must be 1-63 characters long, and comply with RFC1035.
        items?: string[],        
    }
    
    interface TargetHttpProxy {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of resource. Always compute#targetHttpProxy for target HTTP proxies.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // URL to the UrlMap resource that defines the mapping from URL to the BackendService.
        urlMap?: string,
    }
    
    interface TargetHttpProxyList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of TargetHttpProxy resources.
        items?: TargetHttpProxy[],        
        // Type of resource. Always compute#targetHttpProxyList for lists of target HTTP proxies.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetHttpsProxiesSetSslCertificatesRequest {
        // New set of SslCertificate resources to associate with this TargetHttpsProxy resource. Currently exactly one SslCertificate resource must be specified.
        sslCertificates?: string[],        
    }
    
    interface TargetHttpsProxy {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of resource. Always compute#targetHttpsProxy for target HTTPS proxies.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. Currently, exactly one SSL certificate must be specified.
        sslCertificates?: string[],        
        // A fully-qualified or valid partial URL to the UrlMap resource that defines the mapping from URL to the BackendService. For example, the following are all valid URLs for specifying a URL map:  
        // - https://www.googleapis.compute/v1/projects/project/global/urlMaps/url-map 
        // - projects/project/global/urlMaps/url-map 
        // - global/urlMaps/url-map
        urlMap?: string,
    }
    
    interface TargetHttpsProxyList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of TargetHttpsProxy resources.
        items?: TargetHttpsProxy[],        
        // Type of resource. Always compute#targetHttpsProxyList for lists of target HTTPS proxies.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetInstance {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A URL to the virtual machine instance that handles traffic for this target instance. When creating a target instance, you can provide the fully-qualified URL or a valid partial URL to the desired virtual machine. For example, the following are all valid URLs: 
        // - https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance 
        // - projects/project/zones/zone/instances/instance 
        // - zones/zone/instances/instance
        instance?: string,
        // [Output Only] The type of the resource. Always compute#targetInstance for target instances.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // NAT option controlling how IPs are NAT'ed to the instance. Currently only NO_NAT (default value) is supported.
        natPolicy?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] URL of the zone where the target instance resides.
        zone?: string,
    }
    
    interface TargetInstanceAggregatedList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // A map of scoped target instance lists.
        items?: any,
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetInstanceList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of TargetInstance resources.
        items?: TargetInstance[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetInstancesScopedList {
        // List of target instances contained in this scope.
        targetInstances?: TargetInstance[],        
        // Informational warning which replaces the list of addresses when the list is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface TargetPool {
        // This field is applicable only when the containing target pool is serving a forwarding rule as the primary pool, and its failoverRatio field is properly set to a value between [0, 1].
        // 
        // backupPool and failoverRatio together define the fallback behavior of the primary target pool: if the ratio of the healthy instances in the primary pool is at or below failoverRatio, traffic arriving at the load-balanced IP will be directed to the backup pool.
        // 
        // In case where failoverRatio and backupPool are not set, or all the instances in the backup pool are unhealthy, the traffic will be directed back to the primary pool in the "force" mode, where traffic will be spread to the healthy instances with the best effort, or to all instances when no instance is healthy.
        backupPool?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // This field is applicable only when the containing target pool is serving a forwarding rule as the primary pool (i.e., not as a backup pool to some other target pool). The value of the field must be in [0, 1].
        // 
        // If set, backupPool must also be set. They together define the fallback behavior of the primary target pool: if the ratio of the healthy instances in the primary pool is at or below this number, traffic arriving at the load-balanced IP will be directed to the backup pool.
        // 
        // In case where failoverRatio is not set or all the instances in the backup pool are unhealthy, the traffic will be directed back to the primary pool in the "force" mode, where traffic will be spread to the healthy instances with the best effort, or to all instances when no instance is healthy.
        failoverRatio?: number,
        // A list of URLs to the HttpHealthCheck resource. A member instance in this pool is considered healthy if and only if all specified health checks pass. An empty list means all member instances will be considered healthy at all times.
        healthChecks?: string[],        
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of resource URLs to the virtual machine instances serving this pool. They must live in zones contained in the same region as this pool.
        instances?: string[],        
        // [Output Only] Type of the resource. Always compute#targetPool for target pools.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] URL of the region where the target pool resides.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // Sesssion affinity option, must be one of the following values:
        // NONE: Connections from the same client IP may go to any instance in the pool.
        // CLIENT_IP: Connections from the same client IP will go to the same instance in the pool while that instance remains healthy.
        // CLIENT_IP_PROTO: Connections from the same client IP with the same IP protocol will go to the same instance in the pool while that instance remains healthy.
        sessionAffinity?: string,
    }
    
    interface TargetPoolAggregatedList {
        // [Output Only] Unique identifier for the resource. Defined by the server.
        id?: string,
        // [Output Only] A map of scoped target pool lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#targetPoolAggregatedList for aggregated lists of target pools.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetPoolInstanceHealth {
        // 
        healthStatus?: HealthStatus[],        
        // [Output Only] Type of resource. Always compute#targetPoolInstanceHealth when checking the health of an instance.
        kind?: string,
    }
    
    interface TargetPoolList {
        // [Output Only] Unique identifier for the resource. Defined by the server.
        id?: string,
        // A list of TargetPool resources.
        items?: TargetPool[],        
        // [Output Only] Type of resource. Always compute#targetPoolList for lists of target pools.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetPoolsAddHealthCheckRequest {
        // A list of HttpHealthCheck resources to add to the target pool.
        healthChecks?: HealthCheckReference[],        
    }
    
    interface TargetPoolsAddInstanceRequest {
        // A full or partial URL to an instance to add to this target pool. This can be a full or partial URL. For example, the following are valid URLs:  
        // - https://www.googleapis.com/compute/v1/projects/project-id/zones/zone/instances/instance-name 
        // - projects/project-id/zones/zone/instances/instance-name 
        // - zones/zone/instances/instance-name
        instances?: InstanceReference[],        
    }
    
    interface TargetPoolsRemoveHealthCheckRequest {
        // Health check URL to be removed. This can be a full or valid partial URL. For example, the following are valid URLs:  
        // - https://www.googleapis.com/compute/beta/projects/project/global/httpHealthChecks/health-check 
        // - projects/project/global/httpHealthChecks/health-check 
        // - global/httpHealthChecks/health-check
        healthChecks?: HealthCheckReference[],        
    }
    
    interface TargetPoolsRemoveInstanceRequest {
        // URLs of the instances to be removed from target pool.
        instances?: InstanceReference[],        
    }
    
    interface TargetPoolsScopedList {
        // List of target pools contained in this scope.
        targetPools?: TargetPool[],        
        // Informational warning which replaces the list of addresses when the list is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface TargetReference {
        // 
        target?: string,
    }
    
    interface TargetVpnGateway {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] A list of URLs to the ForwardingRule resources. ForwardingRules are created using compute.forwardingRules.insert and associated to a VPN gateway.
        forwardingRules?: string[],        
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // URL of the network to which this VPN gateway is attached. Provided by the client when the VPN gateway is created.
        network?: string,
        // [Output Only] URL of the region where the target VPN gateway resides.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] The status of the VPN gateway.
        status?: string,
        // [Output Only] A list of URLs to VpnTunnel resources. VpnTunnels are created using compute.vpntunnels.insert method and associated to a VPN gateway.
        tunnels?: string[],        
    }
    
    interface TargetVpnGatewayAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A map of scoped target vpn gateway lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface TargetVpnGatewayList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of TargetVpnGateway resources.
        items?: TargetVpnGateway[],        
        // [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface TargetVpnGatewaysScopedList {
        // [Output Only] List of target vpn gateways contained in this scope.
        targetVpnGateways?: TargetVpnGateway[],        
        // [Output Only] Informational warning which replaces the list of addresses when the list is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface TestFailure {
        // 
        actualService?: string,
        // 
        expectedService?: string,
        // 
        host?: string,
        // 
        path?: string,
    }
    
    interface TestPermissionsRequest {
        // The set of permissions to check for the 'resource'. Permissions with wildcards (such as '*' or 'storage.*') are not allowed.
        permissions?: string[],        
    }
    
    interface TestPermissionsResponse {
        // A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
        permissions?: string[],        
    }
    
    interface UrlMap {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // The URL of the BackendService resource if none of the hostRules match.
        defaultService?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a UrlMap. An up-to-date fingerprint must be provided in order to update the UrlMap.
        fingerprint?: string,
        // The list of HostRules to use against the URL.
        hostRules?: HostRule[],        
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#urlMaps for url maps.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // The list of named PathMatchers to use against the URL.
        pathMatchers?: PathMatcher[],        
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // The list of expected URL mappings. Request to update this UrlMap will succeed only all of the test cases pass.
        tests?: UrlMapTest[],        
    }
    
    interface UrlMapList {
        // [Output Only] Unique identifier for the resource. Set by the server.
        id?: string,
        // A list of UrlMap resources.
        items?: UrlMap[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface UrlMapReference {
        // 
        urlMap?: string,
    }
    
    interface UrlMapTest {
        // Description of this test case.
        description?: string,
        // Host portion of the URL.
        host?: string,
        // Path portion of the URL.
        path?: string,
        // Expected BackendService resource the given URL should be mapped to.
        service?: string,
    }
    
    interface UrlMapValidationResult {
        // 
        loadErrors?: string[],        
        // Whether the given UrlMap can be successfully loaded. If false, 'loadErrors' indicates the reasons.
        loadSucceeded?: boolean,
        // 
        testFailures?: TestFailure[],        
        // If successfully loaded, this field indicates whether the test passed. If false, 'testFailures's indicate the reason of failure.
        testPassed?: boolean,
    }
    
    interface UrlMapsValidateRequest {
        // Content of the UrlMap to be validated.
        resource?: UrlMap,
    }
    
    interface UrlMapsValidateResponse {
        // 
        result?: UrlMapValidationResult,
    }
    
    interface UsageExportLocation {
        // The name of an existing bucket in Cloud Storage where the usage report object is stored. The Google Service Account is granted write access to this bucket. This can either be the bucket name by itself, such as example-bucket, or the bucket name with gs:// or https://storage.googleapis.com/ in front of it, such as gs://example-bucket.
        bucketName?: string,
        // An optional prefix for the name of the usage report object stored in bucketName. If not supplied, defaults to usage. The report is stored as a CSV file named report_name_prefix_gce_YYYYMMDD.csv where YYYYMMDD is the day of the usage according to Pacific Time. If you supply a prefix, it should conform to Cloud Storage object naming conventions.
        reportNamePrefix?: string,
    }
    
    interface VpnTunnel {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] Detailed status message for the VPN tunnel.
        detailedStatus?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. Acceptable IKE versions are 1 or 2. Default version is 2.
        ikeVersion?: number,
        // [Output Only] Type of resource. Always compute#vpnTunnel for VPN tunnels.
        kind?: string,
        // Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. The value should be a CIDR formatted string, for example: 192.168.0.0/16. The ranges should be disjoint.
        localTrafficSelector?: string[],        
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // IP address of the peer VPN gateway.
        peerIp?: string,
        // [Output Only] URL of the region where the VPN tunnel resides.
        region?: string,
        // URL of router resource to be used for dynamic routing.
        router?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.
        sharedSecret?: string,
        // Hash of the shared secret.
        sharedSecretHash?: string,
        // [Output Only] The status of the VPN tunnel.
        status?: string,
        // URL of the VPN gateway with which this VPN tunnel is associated. Provided by the client when the VPN tunnel is created.
        targetVpnGateway?: string,
    }
    
    interface VpnTunnelAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A map of scoped vpn tunnel lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#vpnTunnel for VPN tunnels.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface VpnTunnelList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of VpnTunnel resources.
        items?: VpnTunnel[],        
        // [Output Only] Type of resource. Always compute#vpnTunnel for VPN tunnels.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface VpnTunnelsScopedList {
        // List of vpn tunnels contained in this scope.
        vpnTunnels?: VpnTunnel[],        
        // Informational warning which replaces the list of addresses when the list is empty.
        warning?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        },        
    }
    
    interface Zone {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] The deprecation status associated with this zone.
        deprecated?: DeprecationStatus,
        // [Output Only] Textual description of the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#zone for zones.
        kind?: string,
        // [Output Only] Any scheduled maintenance windows for this zone. When the zone is in a maintenance window, all resources which reside in the zone will be unavailable. For more information, see Maintenance Windows
        maintenanceWindows?: {        
            // [Output Only] Starting time of the maintenance window, in RFC3339 format.
            beginTime?: string,
            // [Output Only] Textual description of the maintenance window.
            description?: string,
            // [Output Only] Ending time of the maintenance window, in RFC3339 format.
            endTime?: string,
            // [Output Only] Name of the maintenance window.
            name?: string,
        }[],        
        // [Output Only] Name of the resource.
        name?: string,
        // [Output Only] Full URL reference to the region which hosts the zone.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] Status of the zone, either UP or DOWN.
        status?: string,
    }
    
    interface ZoneList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] A list of Zone resources.
        items?: Zone[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface ZoneSetLabelsRequest {
        // Fingerprint of the previous set of labels for this resource, used to detect conflicts.
        labelFingerprint?: string,
        // The new labels for the resource.
        labels?: any,
    }
    
    interface AddressesResource {
        // Retrieves an aggregated list of addresses.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<AddressAggregatedList>;        
        
        // Deletes the specified address resource.
        delete (request: {        
            // Name of the address resource to delete.
            address: string,
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified address resource.
        get (request: {        
            // Name of the address resource to return.
            address: string,
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Address>;        
        
        // Creates an address resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of addresses contained within the specified region.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<AddressList>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // The name of the region for this request.
            region: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface AutoscalersResource {
        // Retrieves an aggregated list of autoscalers.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<AutoscalerAggregatedList>;        
        
        // Deletes the specified autoscaler.
        delete (request: {        
            // Name of the autoscaler to delete.
            autoscaler: string,
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified autoscaler resource. Get a list of available autoscalers by making a list() request.
        get (request: {        
            // Name of the autoscaler to return.
            autoscaler: string,
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Autoscaler>;        
        
        // Creates an autoscaler in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of autoscalers contained within the specified zone.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<AutoscalerList>;        
        
        // Updates an autoscaler in the specified project using the data included in the request. This method supports patch semantics.
        patch (request: {        
            // Name of the autoscaler to update.
            autoscaler: string,
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
        // Updates an autoscaler in the specified project using the data included in the request.
        update (request: {        
            // Name of the autoscaler to update.
            autoscaler?: string,
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface BackendServicesResource {
        // Deletes the specified BackendService resource.
        delete (request: {        
            // Name of the BackendService resource to delete.
            backendService: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified BackendService resource. Get a list of available backend services by making a list() request.
        get (request: {        
            // Name of the BackendService resource to return.
            backendService: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<BackendService>;        
        
        // Gets the most recent health check results for this BackendService.
        getHealth (request: {        
            // Name of the BackendService resource to which the queried instance belongs.
            backendService: string,
            // 
            project: string,
        }) : gapi.client.Request<BackendServiceGroupHealth>;        
        
        // Creates a BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to keep in mind when creating a backend service. Read  Restrictions and Guidelines for more information.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of BackendService resources available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<BackendServiceList>;        
        
        // Updates the entire content of the BackendService resource. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information. This method supports patch semantics.
        patch (request: {        
            // Name of the BackendService resource to update.
            backendService: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
        // Updates the entire content of the BackendService resource. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information.
        update (request: {        
            // Name of the BackendService resource to update.
            backendService: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface DiskTypesResource {
        // Retrieves an aggregated list of disk types.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<DiskTypeAggregatedList>;        
        
        // Returns the specified disk type. Get a list of available disk types by making a list() request.
        get (request: {        
            // Name of the disk type to return.
            diskType: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<DiskType>;        
        
        // Retrieves a list of disk types available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<DiskTypeList>;        
        
    }
    
    
    interface DisksResource {
        // Retrieves an aggregated list of persistent disks.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<DiskAggregatedList>;        
        
        // Creates a snapshot of a specified persistent disk.
        createSnapshot (request: {        
            // Name of the persistent disk to snapshot.
            disk: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
        delete (request: {        
            // Name of the persistent disk to delete.
            disk: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns a specified persistent disk. Get a list of available persistent disks by making a list() request.
        get (request: {        
            // Name of the persistent disk to return.
            disk: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Disk>;        
        
        // Creates a persistent disk in the specified project using the data in the request. You can create a disk with a sourceImage, a sourceSnapshot, or create an empty 200 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Optional. Source image to restore onto a disk.
            sourceImage?: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of persistent disks contained within the specified zone.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<DiskList>;        
        
        // Resizes the specified persistent disk.
        resize (request: {        
            // The name of the persistent disk.
            disk: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the labels on the target disk.
        setLabels (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface FirewallsResource {
        // Deletes the specified firewall.
        delete (request: {        
            // Name of the firewall rule to delete.
            firewall: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified firewall.
        get (request: {        
            // Name of the firewall rule to return.
            firewall: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Firewall>;        
        
        // Creates a firewall rule in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of firewall rules available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<FirewallList>;        
        
        // Updates the specified firewall rule with the data included in the request. This method supports patch semantics.
        patch (request: {        
            // Name of the firewall rule to update.
            firewall: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
        // Updates the specified firewall rule with the data included in the request.
        update (request: {        
            // Name of the firewall rule to update.
            firewall: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface ForwardingRulesResource {
        // Retrieves an aggregated list of forwarding rules.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<ForwardingRuleAggregatedList>;        
        
        // Deletes the specified ForwardingRule resource.
        delete (request: {        
            // Name of the ForwardingRule resource to delete.
            forwardingRule: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified ForwardingRule resource.
        get (request: {        
            // Name of the ForwardingRule resource to return.
            forwardingRule: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<ForwardingRule>;        
        
        // Creates a ForwardingRule resource in the specified project and region using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of ForwardingRule resources available to the specified project and region.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<ForwardingRuleList>;        
        
        // Changes target URL for forwarding rule. The new target should be of the same type as the old target.
        setTarget (request: {        
            // Name of the ForwardingRule resource in which target is to be set.
            forwardingRule: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // The name of the region for this request.
            region: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface GlobalAddressesResource {
        // Deletes the specified address resource.
        delete (request: {        
            // Name of the address resource to delete.
            address: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified address resource. Get a list of available addresses by making a list() request.
        get (request: {        
            // Name of the address resource to return.
            address: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Address>;        
        
        // Creates an address resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of global addresses.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<AddressList>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface GlobalForwardingRulesResource {
        // Deletes the specified ForwardingRule resource.
        delete (request: {        
            // Name of the ForwardingRule resource to delete.
            forwardingRule: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified ForwardingRule resource. Get a list of available forwarding rules by making a list() request.
        get (request: {        
            // Name of the ForwardingRule resource to return.
            forwardingRule: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<ForwardingRule>;        
        
        // Creates a ForwardingRule resource in the specified project and region using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of ForwardingRule resources available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<ForwardingRuleList>;        
        
        // Changes target URL for forwarding rule. The new target should be of the same type as the old target.
        setTarget (request: {        
            // Name of the ForwardingRule resource in which target is to be set.
            forwardingRule: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface GlobalOperationsResource {
        // Retrieves an aggregated list of all operations.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<OperationAggregatedList>;        
        
        // Deletes the specified Operations resource.
        delete (request: {        
            // Name of the Operations resource to delete.
            operation: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves the specified Operations resource. Get a list of operations by making a list() request.
        get (request: {        
            // Name of the Operations resource to return.
            operation: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of Operation resources contained within the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<OperationList>;        
        
    }
    
    
    interface HttpHealthChecksResource {
        // Deletes the specified HttpHealthCheck resource.
        delete (request: {        
            // Name of the HttpHealthCheck resource to delete.
            httpHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified HttpHealthCheck resource. Get a list of available HTTP health checks by making a list() request.
        get (request: {        
            // Name of the HttpHealthCheck resource to return.
            httpHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<HttpHealthCheck>;        
        
        // Creates a HttpHealthCheck resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of HttpHealthCheck resources available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<HttpHealthCheckList>;        
        
        // Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.
        patch (request: {        
            // Name of the HttpHealthCheck resource to update.
            httpHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
        // Updates a HttpHealthCheck resource in the specified project using the data included in the request.
        update (request: {        
            // Name of the HttpHealthCheck resource to update.
            httpHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface HttpsHealthChecksResource {
        // Deletes the specified HttpsHealthCheck resource.
        delete (request: {        
            // Name of the HttpsHealthCheck resource to delete.
            httpsHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified HttpsHealthCheck resource. Get a list of available HTTPS health checks by making a list() request.
        get (request: {        
            // Name of the HttpsHealthCheck resource to return.
            httpsHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<HttpsHealthCheck>;        
        
        // Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of HttpsHealthCheck resources available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<HttpsHealthCheckList>;        
        
        // Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.
        patch (request: {        
            // Name of the HttpsHealthCheck resource to update.
            httpsHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
        // Updates a HttpsHealthCheck resource in the specified project using the data included in the request.
        update (request: {        
            // Name of the HttpsHealthCheck resource to update.
            httpsHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface ImagesResource {
        // Deletes the specified image.
        delete (request: {        
            // Name of the image resource to delete.
            image: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the deprecation status of an image.
        // 
        // If an empty request body is given, clears the deprecation status instead.
        deprecate (request: {        
            // Image name.
            image: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified image. Get a list of available images by making a list() request.
        get (request: {        
            // Name of the image resource to return.
            image: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Image>;        
        
        // Returns the latest undeprecated image for an image family.
        getFromFamily (request: {        
            // Name of the image resource to return.
            family: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Image>;        
        
        // Creates an image in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of private images available to the specified project. Private images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 7. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.
        // 
        // See Accessing images for more information.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<ImageList>;        
        
        // Sets the labels on the target image.
        setLabels (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface InstanceGroupManagersResource {
        // Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.
        abandonInstances (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of managed instance groups and groups them by zone.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<InstanceGroupManagerAggregatedList>;        
        
        // Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read  Deleting an instance group for more information.
        delete (request: {        
            // The name of the managed instance group to delete.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method.
        deleteInstances (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns all of the details about the specified managed instance group. Get a list of available managed instance groups by making a list() request.
        get (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<InstanceGroupManager>;        
        
        // Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // The name of the zone where you want to create the managed instance group.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of managed instance groups that are contained within the specified project and zone.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<InstanceGroupManagerList>;        
        
        // Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action.
        listManagedInstances (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<InstanceGroupManagersListManagedInstancesResponse>;        
        
        // Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.
        recreateInstances (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.
        resize (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The number of running instances that the managed instance group should maintain at any given time. The group automatically adds or removes instances to maintain the number of instances specified by this parameter.
            size: number,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Modifies the autohealing policies.
        setAutoHealingPolicies (request: {        
            // The name of the instance group manager.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you recreate them.
        setInstanceTemplate (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
        setTargetPools (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface InstanceGroupsResource {
        // Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read  Adding instances for more information.
        addInstances (request: {        
            // The name of the instance group where you are adding instances.
            instanceGroup: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of instance groups and sorts them by zone.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<InstanceGroupAggregatedList>;        
        
        // Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read  Deleting an instance group for more information.
        delete (request: {        
            // The name of the instance group to delete.
            instanceGroup: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified instance group. Get a list of available instance groups by making a list() request.
        get (request: {        
            // The name of the instance group.
            instanceGroup: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the instance group is located.
            zone: string,
        }) : gapi.client.Request<InstanceGroup>;        
        
        // Creates an instance group in the specified project using the parameters that are included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // The name of the zone where you want to create the instance group.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of instance groups that are located in the specified project and zone.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the instance group is located.
            zone: string,
        }) : gapi.client.Request<InstanceGroupList>;        
        
        // Lists the instances in the specified instance group.
        listInstances (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The name of the instance group from which you want to generate a list of included instances.
            instanceGroup: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the instance group is located.
            zone: string,
        }) : gapi.client.Request<InstanceGroupsListInstances>;        
        
        // Removes one or more instances from the specified instance group, but does not delete those instances.
        removeInstances (request: {        
            // The name of the instance group where the specified instances will be removed.
            instanceGroup: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the named ports for the specified instance group.
        setNamedPorts (request: {        
            // The name of the instance group where the named ports are updated.
            instanceGroup: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface InstanceTemplatesResource {
        // Deletes the specified instance template. If you delete an instance template that is being referenced from another instance group, the instance group will not be able to create or recreate virtual machine instances. Deleting an instance template is permanent and cannot be undone.
        delete (request: {        
            // The name of the instance template to delete.
            instanceTemplate: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified instance template. Get a list of available instance templates by making a list() request.
        get (request: {        
            // The name of the instance template.
            instanceTemplate: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<InstanceTemplate>;        
        
        // Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of instance templates that are contained within the specified project and zone.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<InstanceTemplateList>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface InstancesResource {
        // Adds an access config to an instance's network interface.
        addAccessConfig (request: {        
            // The instance name for this request.
            instance: string,
            // The name of the network interface to add to this instance.
            networkInterface: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves aggregated list of instances.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<InstanceAggregatedList>;        
        
        // Attaches a Disk resource to an instance.
        attachDisk (request: {        
            // The instance name for this request.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes the specified Instance resource. For more information, see Stopping or Deleting an Instance.
        delete (request: {        
            // Name of the instance resource to delete.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes an access config from an instance's network interface.
        deleteAccessConfig (request: {        
            // The name of the access config to delete.
            accessConfig: string,
            // The instance name for this request.
            instance: string,
            // The name of the network interface.
            networkInterface: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Detaches a disk from an instance.
        detachDisk (request: {        
            // Disk device name to detach.
            deviceName: string,
            // Instance name.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified Instance resource. Get a list of available instances by making a list() request.
        get (request: {        
            // Name of the instance resource to return.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Instance>;        
        
        // Returns the specified instance's serial port output.
        getSerialPortOutput (request: {        
            // Name of the instance scoping this request.
            instance: string,
            // Specifies which COM or serial port to retrieve data from.
            port?: number,
            // Project ID for this request.
            project: string,
            // For the initial request, leave this field unspecified. For subsequent calls, this field should be set to the next value that was returned in the previous call.
            start?: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<SerialPortOutput>;        
        
        // Creates an instance resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of instances contained within the specified zone.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<InstanceList>;        
        
        // Performs a hard reset on the instance.
        reset (request: {        
            // Name of the instance scoping this request.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the auto-delete flag for a disk attached to an instance.
        setDiskAutoDelete (request: {        
            // Whether to auto-delete the disk when the instance is deleted.
            autoDelete: boolean,
            // The device name of the disk to modify.
            deviceName: string,
            // The instance name.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets labels for the specified instance to the data included in the request.
        setLabels (request: {        
            // Name of the instance scoping this request.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Changes the machine type for a stopped instance to the machine type specified in the request.
        setMachineType (request: {        
            // Name of the instance scoping this request.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets metadata for the specified instance to the data included in the request.
        setMetadata (request: {        
            // Name of the instance scoping this request.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets an instance's scheduling options.
        setScheduling (request: {        
            // Instance name.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets tags for the specified instance to the data included in the request.
        setTags (request: {        
            // Name of the instance scoping this request.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.
        start (request: {        
            // Name of the instance resource to start.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur per-minute, virtual machine usage charges while they are stopped, but any resources that the virtual machine is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.
        stop (request: {        
            // Name of the instance resource to stop.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface LicensesResource {
        // Returns the specified License resource. Get a list of available licenses by making a list() request.
        get (request: {        
            // Name of the License resource to return.
            license: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<License>;        
        
    }
    
    
    interface MachineTypesResource {
        // Retrieves an aggregated list of machine types.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<MachineTypeAggregatedList>;        
        
        // Returns the specified machine type. Get a list of available machine types by making a list() request.
        get (request: {        
            // Name of the machine type to return.
            machineType: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<MachineType>;        
        
        // Retrieves a list of machine types available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<MachineTypeList>;        
        
    }
    
    
    interface NetworksResource {
        // Deletes the specified network.
        delete (request: {        
            // Name of the network to delete.
            network: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified network. Get a list of available networks by making a list() request.
        get (request: {        
            // Name of the network to return.
            network: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Network>;        
        
        // Creates a network in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of networks available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<NetworkList>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface ProjectsResource {
        // Returns the specified Project resource.
        get (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Project>;        
        
        // Sets metadata common to all instances within the specified project using the data included in the request.
        setCommonInstanceMetadata (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.
        setUsageExportBucket (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface RegionOperationsResource {
        // Deletes the specified region-specific Operations resource.
        delete (request: {        
            // Name of the Operations resource to delete.
            operation: string,
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves the specified region-specific Operations resource.
        get (request: {        
            // Name of the Operations resource to return.
            operation: string,
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of Operation resources contained within the specified region.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<OperationList>;        
        
    }
    
    
    interface RegionsResource {
        // Returns the specified Region resource. Get a list of available regions by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region resource to return.
            region: string,
        }) : gapi.client.Request<Region>;        
        
        // Retrieves the list of region resources available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<RegionList>;        
        
    }
    
    
    interface RoutersResource {
        // Retrieves an aggregated list of routers.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<RouterAggregatedList>;        
        
        // Deletes the specified Router resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the Router resource to delete.
            router: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified Router resource. Get a list of available routers by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the Router resource to return.
            router: string,
        }) : gapi.client.Request<Router>;        
        
        // Retrieves runtime information of the specified router.
        getRouterStatus (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the Router resource to query.
            router: string,
        }) : gapi.client.Request<RouterStatusResponse>;        
        
        // Creates a Router resource in the specified project and region using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of Router resources available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<RouterList>;        
        
        // Updates the entire content of the Router resource. This method supports patch semantics.
        patch (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the Router resource to update.
            router: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // The name of the region for this request.
            region: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
        // Updates the entire content of the Router resource.
        update (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the Router resource to update.
            router: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface RoutesResource {
        // Deletes the specified Route resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the Route resource to delete.
            route: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified Route resource. Get a list of available routes by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the Route resource to return.
            route: string,
        }) : gapi.client.Request<Route>;        
        
        // Creates a Route resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of Route resources available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<RouteList>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface SnapshotsResource {
        // Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot.
        // 
        // For more information, see Deleting snaphots.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the Snapshot resource to delete.
            snapshot: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified Snapshot resource. Get a list of available snapshots by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the Snapshot resource to return.
            snapshot: string,
        }) : gapi.client.Request<Snapshot>;        
        
        // Retrieves the list of Snapshot resources contained within the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<SnapshotList>;        
        
        // Sets the labels on the target snapshot.
        setLabels (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface SslCertificatesResource {
        // Deletes the specified SslCertificate resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the SslCertificate resource to delete.
            sslCertificate: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified SslCertificate resource. Get a list of available SSL certificates by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the SslCertificate resource to return.
            sslCertificate: string,
        }) : gapi.client.Request<SslCertificate>;        
        
        // Creates a SslCertificate resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of SslCertificate resources available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<SslCertificateList>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface SubnetworksResource {
        // Retrieves an aggregated list of subnetworks.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<SubnetworkAggregatedList>;        
        
        // Deletes the specified subnetwork.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the Subnetwork resource to delete.
            subnetwork: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified subnetwork. Get a list of available subnetworks by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the Subnetwork resource to return.
            subnetwork: string,
        }) : gapi.client.Request<Subnetwork>;        
        
        // Creates a subnetwork in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of subnetworks available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<SubnetworkList>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // The name of the region for this request.
            region: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface TargetHttpProxiesResource {
        // Deletes the specified TargetHttpProxy resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetHttpProxy resource to delete.
            targetHttpProxy: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified TargetHttpProxy resource. Get a list of available target HTTP proxies by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetHttpProxy resource to return.
            targetHttpProxy: string,
        }) : gapi.client.Request<TargetHttpProxy>;        
        
        // Creates a TargetHttpProxy resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of TargetHttpProxy resources available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<TargetHttpProxyList>;        
        
        // Changes the URL map for TargetHttpProxy.
        setUrlMap (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetHttpProxy to set a URL map for.
            targetHttpProxy: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface TargetHttpsProxiesResource {
        // Deletes the specified TargetHttpsProxy resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetHttpsProxy resource to delete.
            targetHttpsProxy: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified TargetHttpsProxy resource. Get a list of available target HTTPS proxies by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetHttpsProxy resource to return.
            targetHttpsProxy: string,
        }) : gapi.client.Request<TargetHttpsProxy>;        
        
        // Creates a TargetHttpsProxy resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of TargetHttpsProxy resources available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<TargetHttpsProxyList>;        
        
        // Replaces SslCertificates for TargetHttpsProxy.
        setSslCertificates (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetHttpsProxy resource to set an SslCertificates resource for.
            targetHttpsProxy: string,
        }) : gapi.client.Request<Operation>;        
        
        // Changes the URL map for TargetHttpsProxy.
        setUrlMap (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetHttpsProxy resource whose URL map is to be set.
            targetHttpsProxy: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface TargetInstancesResource {
        // Retrieves an aggregated list of target instances.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<TargetInstanceAggregatedList>;        
        
        // Deletes the specified TargetInstance resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetInstance resource to delete.
            targetInstance: string,
            // Name of the zone scoping this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified TargetInstance resource. Get a list of available target instances by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetInstance resource to return.
            targetInstance: string,
            // Name of the zone scoping this request.
            zone: string,
        }) : gapi.client.Request<TargetInstance>;        
        
        // Creates a TargetInstance resource in the specified project and zone using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the zone scoping this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of TargetInstance resources available to the specified project and zone.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // Name of the zone scoping this request.
            zone: string,
        }) : gapi.client.Request<TargetInstanceList>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface TargetPoolsResource {
        // Adds health check URLs to a target pool.
        addHealthCheck (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the target pool to add a health check to.
            targetPool: string,
        }) : gapi.client.Request<Operation>;        
        
        // Adds an instance to a target pool.
        addInstance (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the TargetPool resource to add instances to.
            targetPool: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves an aggregated list of target pools.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<TargetPoolAggregatedList>;        
        
        // Deletes the specified target pool.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the TargetPool resource to delete.
            targetPool: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified target pool. Get a list of available target pools by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the TargetPool resource to return.
            targetPool: string,
        }) : gapi.client.Request<TargetPool>;        
        
        // Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.
        getHealth (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the TargetPool resource to which the queried instance belongs.
            targetPool: string,
        }) : gapi.client.Request<TargetPoolInstanceHealth>;        
        
        // Creates a target pool in the specified project and region using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of target pools available to the specified project and region.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<TargetPoolList>;        
        
        // Removes health check URL from a target pool.
        removeHealthCheck (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the target pool to remove health checks from.
            targetPool: string,
        }) : gapi.client.Request<Operation>;        
        
        // Removes instance URL from a target pool.
        removeInstance (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the TargetPool resource to remove instances from.
            targetPool: string,
        }) : gapi.client.Request<Operation>;        
        
        // Changes a backup target pool's configurations.
        setBackup (request: {        
            // New failoverRatio value for the target pool.
            failoverRatio?: number,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the TargetPool resource to set a backup pool for.
            targetPool: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // The name of the region for this request.
            region: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface TargetVpnGatewaysResource {
        // Retrieves an aggregated list of target VPN gateways.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<TargetVpnGatewayAggregatedList>;        
        
        // Deletes the specified target VPN gateway.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the target VPN gateway to delete.
            targetVpnGateway: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified target VPN gateway. Get a list of available target VPN gateways by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the target VPN gateway to return.
            targetVpnGateway: string,
        }) : gapi.client.Request<TargetVpnGateway>;        
        
        // Creates a target VPN gateway in the specified project and region using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of target VPN gateways available to the specified project and region.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<TargetVpnGatewayList>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // The name of the region for this request.
            region: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface UrlMapsResource {
        // Deletes the specified UrlMap resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the UrlMap resource to delete.
            urlMap: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified UrlMap resource. Get a list of available URL maps by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the UrlMap resource to return.
            urlMap: string,
        }) : gapi.client.Request<UrlMap>;        
        
        // Creates a UrlMap resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap.
        invalidateCache (request: {        
            // Project ID for this request.
            project: string,
            // Name of the UrlMap scoping this request.
            urlMap: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of UrlMap resources available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<UrlMapList>;        
        
        // Updates the entire content of the UrlMap resource. This method supports patch semantics.
        patch (request: {        
            // Project ID for this request.
            project: string,
            // Name of the UrlMap resource to update.
            urlMap: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
        // Updates the entire content of the UrlMap resource.
        update (request: {        
            // Project ID for this request.
            project: string,
            // Name of the UrlMap resource to update.
            urlMap: string,
        }) : gapi.client.Request<Operation>;        
        
        // Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.
        validate (request: {        
            // Project ID for this request.
            project: string,
            // Name of the UrlMap resource to be validated as.
            urlMap: string,
        }) : gapi.client.Request<UrlMapsValidateResponse>;        
        
    }
    
    
    interface VpnTunnelsResource {
        // Retrieves an aggregated list of VPN tunnels.
        aggregatedList (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<VpnTunnelAggregatedList>;        
        
        // Deletes the specified VpnTunnel resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the VpnTunnel resource to delete.
            vpnTunnel: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified VpnTunnel resource. Get a list of available VPN tunnels by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the VpnTunnel resource to return.
            vpnTunnel: string,
        }) : gapi.client.Request<VpnTunnel>;        
        
        // Creates a VpnTunnel resource in the specified project and region using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of VpnTunnel resources contained in the specified project and region.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<VpnTunnelList>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // The name of the region for this request.
            region: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface ZoneOperationsResource {
        // Deletes the specified zone-specific Operations resource.
        delete (request: {        
            // Name of the Operations resource to delete.
            operation: string,
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves the specified zone-specific Operations resource.
        get (request: {        
            // Name of the Operations resource to return.
            operation: string,
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of Operation resources contained within the specified zone.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // Name of the zone for request.
            zone: string,
        }) : gapi.client.Request<OperationList>;        
        
    }
    
    
    interface ZonesResource {
        // Returns the specified Zone resource. Get a list of available zones by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the zone resource to return.
            zone: string,
        }) : gapi.client.Request<Zone>;        
        
        // Retrieves the list of Zone resources available to the specified project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<ZoneList>;        
        
    }
    
}

declare module gapi.client.compute {
    var addresses: gapi.client.compute.AddressesResource; 
    
    var autoscalers: gapi.client.compute.AutoscalersResource; 
    
    var backendServices: gapi.client.compute.BackendServicesResource; 
    
    var diskTypes: gapi.client.compute.DiskTypesResource; 
    
    var disks: gapi.client.compute.DisksResource; 
    
    var firewalls: gapi.client.compute.FirewallsResource; 
    
    var forwardingRules: gapi.client.compute.ForwardingRulesResource; 
    
    var globalAddresses: gapi.client.compute.GlobalAddressesResource; 
    
    var globalForwardingRules: gapi.client.compute.GlobalForwardingRulesResource; 
    
    var globalOperations: gapi.client.compute.GlobalOperationsResource; 
    
    var httpHealthChecks: gapi.client.compute.HttpHealthChecksResource; 
    
    var httpsHealthChecks: gapi.client.compute.HttpsHealthChecksResource; 
    
    var images: gapi.client.compute.ImagesResource; 
    
    var instanceGroupManagers: gapi.client.compute.InstanceGroupManagersResource; 
    
    var instanceGroups: gapi.client.compute.InstanceGroupsResource; 
    
    var instanceTemplates: gapi.client.compute.InstanceTemplatesResource; 
    
    var instances: gapi.client.compute.InstancesResource; 
    
    var licenses: gapi.client.compute.LicensesResource; 
    
    var machineTypes: gapi.client.compute.MachineTypesResource; 
    
    var networks: gapi.client.compute.NetworksResource; 
    
    var projects: gapi.client.compute.ProjectsResource; 
    
    var regionOperations: gapi.client.compute.RegionOperationsResource; 
    
    var regions: gapi.client.compute.RegionsResource; 
    
    var routers: gapi.client.compute.RoutersResource; 
    
    var routes: gapi.client.compute.RoutesResource; 
    
    var snapshots: gapi.client.compute.SnapshotsResource; 
    
    var sslCertificates: gapi.client.compute.SslCertificatesResource; 
    
    var subnetworks: gapi.client.compute.SubnetworksResource; 
    
    var targetHttpProxies: gapi.client.compute.TargetHttpProxiesResource; 
    
    var targetHttpsProxies: gapi.client.compute.TargetHttpsProxiesResource; 
    
    var targetInstances: gapi.client.compute.TargetInstancesResource; 
    
    var targetPools: gapi.client.compute.TargetPoolsResource; 
    
    var targetVpnGateways: gapi.client.compute.TargetVpnGatewaysResource; 
    
    var urlMaps: gapi.client.compute.UrlMapsResource; 
    
    var vpnTunnels: gapi.client.compute.VpnTunnelsResource; 
    
    var zoneOperations: gapi.client.compute.ZoneOperationsResource; 
    
    var zones: gapi.client.compute.ZonesResource; 
    
}
