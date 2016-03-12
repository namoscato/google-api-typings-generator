// Type definitions for Google Google Compute Engine Autoscaler API v1beta2
// Project: http://developers.google.com/compute/docs/autoscaler
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.autoscaler {
    
    interface Autoscaler {
        // Configuration parameters for autoscaling algorithm.
        autoscalingPolicy?: AutoscalingPolicy,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional textual description of the resource provided by the client.
        description?: string,
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // Type of resource.
        kind?: string,
        // Name of the Autoscaler resource. Must be unique per project and zone.
        name?: string,
        // [Output Only] A self-link to the Autoscaler configuration resource.
        selfLink?: string,
        // URL to the entity which will be autoscaled. Currently the only supported value is ReplicaPool?s URL. Note: it is illegal to specify multiple Autoscalers for the same target.
        target?: string,
    }
    
    interface AutoscalerListResponse {
        // Autoscaler resources.
        items?: Autoscaler[],        
        // Type of resource.
        kind?: string,
        // [Output only] A token used to continue a truncated list request.
        nextPageToken?: string,
    }
    
    interface AutoscalingPolicy {
        // The number of seconds that the Autoscaler should wait between two succeeding changes to the number of virtual machines. You should define an interval that is at least as long as the initialization time of a virtual machine and the time it may take for replica pool to create the virtual machine. The default is 60 seconds.
        coolDownPeriodSec?: number,
        // Exactly one utilization policy should be provided. Configuration parameters of CPU based autoscaling policy.
        cpuUtilization?: AutoscalingPolicyCpuUtilization,
        // Configuration parameters of autoscaling based on custom metric.
        customMetricUtilizations?: AutoscalingPolicyCustomMetricUtilization[],        
        // Configuration parameters of autoscaling based on load balancer.
        loadBalancingUtilization?: AutoscalingPolicyLoadBalancingUtilization,
        // The maximum number of replicas that the Autoscaler can scale up to.
        maxNumReplicas?: number,
        // The minimum number of replicas that the Autoscaler can scale down to.
        minNumReplicas?: number,
    }
    
    interface AutoscalingPolicyCpuUtilization {
        // The target utilization that the Autoscaler should maintain. It is represented as a fraction of used cores. For example: 6 cores used in 8-core VM are represented here as 0.75. Must be a float value between (0, 1]. If not defined, the default is 0.8.
        utilizationTarget?: number,
    }
    
    interface AutoscalingPolicyCustomMetricUtilization {
        // Identifier of the metric. It should be a Cloud Monitoring metric. The metric can not have negative values. The metric should be an utilization metric (increasing number of VMs handling requests x times should reduce average value of the metric roughly x times). For example you could use: compute.googleapis.com/instance/network/received_bytes_count.
        metric?: string,
        // Target value of the metric which Autoscaler should maintain. Must be a positive value.
        utilizationTarget?: number,
        // Defines type in which utilization_target is expressed.
        utilizationTargetType?: string,
    }
    
    interface AutoscalingPolicyLoadBalancingUtilization {
        // Fraction of backend capacity utilization (set in HTTP load balancing configuration) that Autoscaler should maintain. Must be a positive float value. If not defined, the default is 0.8. For example if your maxRatePerInstance capacity (in HTTP Load Balancing configuration) is set at 10 and you would like to keep number of instances such that each instance receives 7 QPS on average, set this to 0.7.
        utilizationTarget?: number,
    }
    
    interface DeprecationStatus {
        // 
        deleted?: string,
        // 
        deprecated?: string,
        // 
        obsolete?: string,
        // 
        replacement?: string,
        // 
        state?: string,
    }
    
    interface Operation {
        // 
        clientOperationId?: string,
        // 
        creationTimestamp?: string,
        // 
        endTime?: string,
        // 
        error?: {        
            // 
            errors?: {            
                // 
                code?: string,
                // 
                location?: string,
                // 
                message?: string,
            }[],            
        },        
        // 
        httpErrorMessage?: string,
        // 
        httpErrorStatusCode?: number,
        // 
        id?: string,
        // 
        insertTime?: string,
        // [Output Only] Type of the resource. Always compute#Operation for Operation resources.
        kind?: string,
        // 
        name?: string,
        // 
        operationType?: string,
        // 
        progress?: number,
        // 
        region?: string,
        // 
        selfLink?: string,
        // 
        startTime?: string,
        // 
        status?: string,
        // 
        statusMessage?: string,
        // 
        targetId?: string,
        // 
        targetLink?: string,
        // 
        user?: string,
        // 
        warnings?: {        
            // 
            code?: string,
            // 
            data?: {            
                // 
                key?: string,
                // 
                value?: string,
            }[],            
            // 
            message?: string,
        }[],        
        // 
        zone?: string,
    }
    
    interface OperationList {
        // 
        id?: string,
        // 
        items?: Operation[],        
        // [Output Only] Type of resource. Always compute#operations for Operations resource.
        kind?: string,
        // 
        nextPageToken?: string,
        // 
        selfLink?: string,
    }
    
    interface Zone {
        // 
        creationTimestamp?: string,
        // 
        deprecated?: DeprecationStatus,
        // 
        description?: string,
        // 
        id?: string,
        // [Output Only] Type of the resource. Always kind#zone for zones.
        kind?: string,
        // 
        maintenanceWindows?: {        
            // 
            beginTime?: string,
            // 
            description?: string,
            // 
            endTime?: string,
            // 
            name?: string,
        }[],        
        // 
        name?: string,
        // 
        region?: string,
        // [Output Only] Server defined URL for the resource.
        selfLink?: string,
        // 
        status?: string,
    }
    
    interface ZoneList {
        // 
        id?: string,
        // 
        items?: Zone[],        
        // Type of resource.
        kind?: string,
        // 
        nextPageToken?: string,
        // Server defined URL for this resource (output only).
        selfLink?: string,
    }
    
    interface AutoscalersResource {
        // Deletes the specified Autoscaler resource.
        delete (request: {        
            // Name of the Autoscaler resource.
            autoscaler: string,
            // Project ID of Autoscaler resource.
            project: string,
            // Zone name of Autoscaler resource.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets the specified Autoscaler resource.
        get (request: {        
            // Name of the Autoscaler resource.
            autoscaler: string,
            // Project ID of Autoscaler resource.
            project: string,
            // Zone name of Autoscaler resource.
            zone: string,
        }) : gapi.client.Request<Autoscaler>;        
        
        // Adds new Autoscaler resource.
        insert (request: {        
            // Project ID of Autoscaler resource.
            project: string,
            // Zone name of Autoscaler resource.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists all Autoscaler resources in this zone.
        list (request: {        
            // 
            filter?: string,
            // 
            maxResults?: number,
            // 
            pageToken?: string,
            // Project ID of Autoscaler resource.
            project: string,
            // Zone name of Autoscaler resource.
            zone: string,
        }) : gapi.client.Request<AutoscalerListResponse>;        
        
        // Update the entire content of the Autoscaler resource. This method supports patch semantics.
        patch (request: {        
            // Name of the Autoscaler resource.
            autoscaler: string,
            // Project ID of Autoscaler resource.
            project: string,
            // Zone name of Autoscaler resource.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Update the entire content of the Autoscaler resource.
        update (request: {        
            // Name of the Autoscaler resource.
            autoscaler: string,
            // Project ID of Autoscaler resource.
            project: string,
            // Zone name of Autoscaler resource.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface ZoneOperationsResource {
        // Deletes the specified zone-specific operation resource.
        delete (request: {        
            // 
            operation: string,
            // 
            project: string,
            // 
            zone: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves the specified zone-specific operation resource.
        get (request: {        
            // 
            operation: string,
            // 
            project: string,
            // 
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of operation resources contained within the specified zone.
        list (request: {        
            // 
            filter?: string,
            // 
            maxResults?: number,
            // 
            pageToken?: string,
            // 
            project: string,
            // 
            zone: string,
        }) : gapi.client.Request<OperationList>;        
        
    }
    
    
    interface ZonesResource {
        // 
        list (request: {        
            // 
            filter?: string,
            // 
            maxResults?: number,
            // 
            pageToken?: string,
            // 
            project: string,
        }) : gapi.client.Request<ZoneList>;        
        
    }
    
}

declare module gapi.client.autoscaler {
    var autoscalers: gapi.client.autoscaler.AutoscalersResource; 
    
    var zoneOperations: gapi.client.autoscaler.ZoneOperationsResource; 
    
    var zones: gapi.client.autoscaler.ZonesResource; 
    
}
