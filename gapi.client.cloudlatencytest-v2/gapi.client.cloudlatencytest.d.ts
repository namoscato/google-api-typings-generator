// Type definitions for Google Google Cloud Network Performance Monitoring API v2
// Project: 
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.cloudlatencytest.v2 {
    
    interface AggregatedStats {
        // 
        stats?: Stats[],        
    }
    
    interface AggregatedStatsReply {
        // 
        testValue?: string,
    }
    
    interface DoubleValue {
        // 
        label?: string,
        // 
        value?: number,
    }
    
    interface IntValue {
        // 
        label?: string,
        // 
        value?: string,
    }
    
    interface Stats {
        // 
        doubleValues?: DoubleValue[],        
        // 
        intValues?: IntValue[],        
        // 
        stringValues?: StringValue[],        
        // 
        time?: number,
    }
    
    interface StatsReply {
        // 
        testValue?: string,
    }
    
    interface StringValue {
        // 
        label?: string,
        // 
        value?: string,
    }
    
    interface StatscollectionResource {
        // RPC to update the new TCP stats.
        updateaggregatedstats (request: {        
        }) : gapi.client.Request<AggregatedStatsReply>;        
        
        // RPC to update the new TCP stats.
        updatestats (request: {        
        }) : gapi.client.Request<StatsReply>;        
        
    }
    
}

declare module gapi.client.cloudlatencytest {
    var statscollection: gapi.client.cloudlatencytest.v2.StatscollectionResource; 
    
}
