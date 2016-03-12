// Type definitions for Google Google Cloud Trace API v1
// Project: https://cloud.google.com/tools/cloud-trace
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.cloudtrace {
    
    interface ListTracesResponse {
        // List of trace records returned.
        traces?: Trace[],        
        // If defined, indicates that there are more traces that match the request and that this value should be passed to the next request to continue retrieving additional traces.
        nextPageToken?: string,
    }
    
    interface Trace {
        // Project ID of the Cloud project where the trace data is stored.
        projectId?: string,
        // Globally unique identifier for the trace. This identifier is a 128-bit numeric value formatted as a 32-byte hex string.
        traceId?: string,
        // Collection of spans in the trace.
        spans?: TraceSpan[],        
    }
    
    interface TraceSpan {
        // Identifier for the span. This identifier must be unique within a trace.
        spanId?: string,
        // Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `RPC_CLIENT` and `RPC_SERVER` to identify queueing latency associated with the span.
        kind?: string,
        // Name of the trace. The trace name is sanitized and displayed in the Cloud Trace tool in the Google Developers Console. The name may be a method name or some other per-call site name. For the same executable and the same call point, a best practice is to use a consistent name, which makes it easier to correlate cross-trace spans.
        name?: string,
        // Start time of the span in nanoseconds from the UNIX epoch.
        startTime?: string,
        // End time of the span in nanoseconds from the UNIX epoch.
        endTime?: string,
        // ID of the parent span, if any. Optional.
        parentSpanId?: string,
        // Collection of labels associated with the span.
        labels?: any,
    }
    
    interface Traces {
        // List of traces.
        traces?: Trace[],        
    }
    
    interface Empty {
    }
    
    interface TracesResource {
        // Returns of a list of traces that match the specified filter conditions.
        list (request: {        
            // ID of the Cloud project where the trace data is stored.
            projectId: string,
            // Type of data returned for traces in the list. Optional. Default is `MINIMAL`.
            view?: string,
            // Maximum number of traces to return. If not specified or <= 0, the implementation selects a reasonable value. The implementation may return fewer traces than the requested page size. Optional.
            pageSize?: number,
            // Token identifying the page of results to return. If provided, use the value of the `next_page_token` field from a previous request. Optional.
            pageToken?: string,
            // End of the time interval (inclusive) during which the trace data was collected from the application.
            startTime?: string,
            // Start of the time interval (inclusive) during which the trace data was collected from the application.
            endTime?: string,
            // An optional filter for the request.
            filter?: string,
            // Field used to sort the returned traces. Optional. Can be one of the following: * `trace_id` * `name` (`name` field of root span in the trace) * `duration` (difference between `end_time` and `start_time` fields of the root span) * `start` (`start_time` field of the root span) Descending order can be specified by appending `desc` to the sort field (for example, `name desc`). Only one sort field is permitted.
            orderBy?: string,
        }) : gapi.client.Request<ListTracesResponse>;        
        
        // Gets a single trace by its ID.
        get (request: {        
            // ID of the Cloud project where the trace data is stored.
            projectId: string,
            // ID of the trace to return.
            traceId: string,
        }) : gapi.client.Request<Trace>;        
        
    }
    
    
    interface ProjectsResource {
        // Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.
        patchTraces (request: {        
            // ID of the Cloud project where the trace data is stored.
            projectId: string,
        }) : gapi.client.Request<Empty>;        
        
        traces: TracesResource,
    }
    
}

declare module gapi.client.cloudtrace {
    var projects: gapi.client.cloudtrace.ProjectsResource; 
    
}
