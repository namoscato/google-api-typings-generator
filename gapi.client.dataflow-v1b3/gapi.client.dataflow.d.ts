// Type definitions for Google Google Dataflow API v1b3
// Project: https://cloud.google.com/dataflow
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.dataflow {
    
    interface Job {
        // The unique ID of this job. This field is set by the Dataflow service when the Job is created, and is immutable for the life of the Job.
        id?: string,
        // The project which owns the job.
        projectId?: string,
        // The user-specified Dataflow job name. Only one Job with a given name may exist in a project at any given time. If a caller attempts to create a Job with the same name as an already-existing Job, the attempt will return the existing Job. The name must match the regular expression [a-z]([-a-z0-9]{0,38}[a-z0-9])?
        name?: string,
        // The type of dataflow job.
        type?: string,
        // Environment for the job.
        environment?: Environment,
        // The top-level steps that constitute the entire job.
        steps?: Step[],        
        // The current state of the job. Jobs are created in the JOB_STATE_STOPPED state unless otherwise specified. A job in the JOB_STATE_RUNNING state may asynchronously enter a terminal state. Once a job has reached a terminal state, no further state updates may be made. This field may be mutated by the Dataflow service; callers cannot mutate it.
        currentState?: string,
        // The timestamp associated with the current state.
        currentStateTime?: string,
        // The job's requested state. UpdateJob may be used to switch between the JOB_STATE_STOPPED and JOB_STATE_RUNNING states, by setting requested_state. UpdateJob may also be used to directly set a job's requested state to JOB_STATE_CANCELLED or JOB_STATE_DONE, irrevocably terminating the job if it has not already reached a terminal state.
        requestedState?: string,
        // Information about how the Dataflow service will actually run the job.
        executionInfo?: JobExecutionInfo,
        // Timestamp when job was initially created. Immutable, set by the Dataflow service.
        createTime?: string,
        // If this job is an update of an existing job, this field will be the ID of the job it replaced. When sending a CreateJobRequest, you can update a job by specifying it here. The job named here will be stopped, and its intermediate state transferred to this job.
        replaceJobId?: string,
        // Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.
        transformNameMapping?: any,
        // Client's unique identifier of the job, re-used by SDK across retried attempts. If this field is set, the service will ensure its uniqueness. That is, the request to create a job will fail if the service has knowledge of a previously submitted job with the same client's id and job name. The caller may, for example, use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it.
        clientRequestId?: string,
        // If another job is an update of this job (and thus, this job is in JOB_STATE_UPDATED), this field will contain the ID of that job.
        replacedByJobId?: string,
        // A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
        tempFiles?: string[],        
    }
    
    interface Environment {
        // The prefix of the resources the system should use for temporary storage. The system will append the suffix "/temp-{JOBNAME} to this resource prefix, where {JOBNAME} is the value of the job_name field. The resulting bucket and object prefix is used as the prefix of the resources used to store temporary data needed during the job execution. NOTE: This will override the value in taskrunner_settings. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
        tempStoragePrefix?: string,
        // The type of cluster manager API to use. If unknown or unspecified, the service will attempt to choose a reasonable default. This should be in the form of the API service name, e.g. "compute.googleapis.com".
        clusterManagerApiService?: string,
        // The list of experiments to enable.
        experiments?: string[],        
        // Worker pools. At least one "harness" worker pool must be specified in order for the job to have workers.
        workerPools?: WorkerPool[],        
        // A description of the process that generated the request.
        userAgent?: any,
        // A structure describing which components and their versions of the service are required in order to run the job.
        version?: any,
        // The dataset for the current project where various workflow related tables are stored. The supported resource type is: Google BigQuery: bigquery.googleapis.com/{dataset}
        dataset?: string,
        // The Dataflow SDK pipeline options specified by the user. These options are passed through the service and are used to recreate the SDK pipeline options on the worker in a language agnostic and platform independent way.
        sdkPipelineOptions?: any,
        // Experimental settings.
        internalExperiments?: any,
    }
    
    interface WorkerPool {
        // The kind of the worker pool; currently only 'harness' and 'shuffle' are supported.
        kind?: string,
        // Number of Google Compute Engine workers in this pool needed to execute the job. If zero or unspecified, the service will attempt to choose a reasonable default.
        numWorkers?: number,
        // Packages to be installed on workers.
        packages?: Package[],        
        // The default package set to install. This allows the service to select a default set of packages which are useful to worker harnesses written in a particular language.
        defaultPackageSet?: string,
        // Machine type (e.g. "n1-standard-1"). If empty or unspecified, the service will attempt to choose a reasonable default.
        machineType?: string,
        // Sets the policy for determining when to turndown worker pool. Allowed values are: TEARDOWN_ALWAYS, TEARDOWN_ON_SUCCESS, and TEARDOWN_NEVER. TEARDOWN_ALWAYS means workers are always torn down regardless of whether the job succeeds. TEARDOWN_ON_SUCCESS means workers are torn down if the job succeeds. TEARDOWN_NEVER means the workers are never torn down. If the workers are not torn down by the service, they will continue to run and use Google Compute Engine VM resources in the user's project until they are explicitly terminated by the user. Because of this, Google recommends using the TEARDOWN_ALWAYS policy except for small, manually supervised test jobs. If unknown or unspecified, the service will attempt to choose a reasonable default.
        teardownPolicy?: string,
        // Size of root disk for VMs, in GB. If zero or unspecified, the service will attempt to choose a reasonable default.
        diskSizeGb?: number,
        // Type of root disk for VMs. If empty or unspecified, the service will attempt to choose a reasonable default.
        diskType?: string,
        // Fully qualified source image for disks.
        diskSourceImage?: string,
        // Zone to run the worker pools in. If empty or unspecified, the service will attempt to choose a reasonable default.
        zone?: string,
        // Settings passed through to Google Compute Engine workers when using the standard Dataflow task runner. Users should ignore this field.
        taskrunnerSettings?: TaskRunnerSettings,
        // The action to take on host maintenance, as defined by the Google Compute Engine API.
        onHostMaintenance?: string,
        // Data disks that are used by a VM in this workflow.
        dataDisks?: Disk[],        
        // Metadata to set on the Google Compute Engine VMs.
        metadata?: any,
        // Settings for autoscaling of this WorkerPool.
        autoscalingSettings?: AutoscalingSettings,
        // Extra arguments for this worker pool.
        poolArgs?: any,
        // Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".
        network?: string,
        // Subnetwork to which VMs will be assigned, if desired. Expected to be of the form "zones/ZONE/subnetworks/SUBNETWORK".
        subnetwork?: string,
        // Docker container image that executes Dataflow worker harness, residing in Google Container Registry. Required.
        workerHarnessContainerImage?: string,
    }
    
    interface Package {
        // The name of the package.
        name?: string,
        // The resource to read the package from. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket} bucket.storage.googleapis.com/
        location?: string,
    }
    
    interface TaskRunnerSettings {
        // The UNIX user ID on the worker VM to use for tasks launched by taskrunner; e.g. "root".
        taskUser?: string,
        // The UNIX group ID on the worker VM to use for tasks launched by taskrunner; e.g. "wheel".
        taskGroup?: string,
        // OAuth2 scopes to be requested by the taskrunner in order to access the dataflow API.
        oauthScopes?: string[],        
        // The base URL for the taskrunner to use when accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/"
        baseUrl?: string,
        // API version of endpoint, e.g. "v1b3"
        dataflowApiVersion?: string,
        // Settings to pass to the parallel worker harness.
        parallelWorkerSettings?: WorkerSettings,
        // Location on the worker for task-specific subdirectories.
        baseTaskDir?: string,
        // Do we continue taskrunner if an exception is hit?
        continueOnException?: boolean,
        // Send taskrunner log into to Google Compute Engine VM serial console?
        logToSerialconsole?: boolean,
        // Also send taskrunner log info to stderr?
        alsologtostderr?: boolean,
        // Indicates where to put logs. If this is not specified, the logs will not be uploaded. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
        logUploadLocation?: string,
        // Directory on the VM to store logs.
        logDir?: string,
        // The prefix of the resources the taskrunner should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
        tempStoragePrefix?: string,
        // Command to launch the worker harness.
        harnessCommand?: string,
        // Store the workflow in this file.
        workflowFileName?: string,
        // Store preprocessing commands in this file.
        commandlinesFileName?: string,
        // ID string of VM.
        vmId?: string,
        // Suggested backend language.
        languageHint?: string,
        // Streaming worker main class name.
        streamingWorkerMainClass?: string,
    }
    
    interface WorkerSettings {
        // The base URL for accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/"
        baseUrl?: string,
        // Send work progress updates to service.
        reportingEnabled?: boolean,
        // The Dataflow service path relative to the root URL, for example, "dataflow/v1b3/projects".
        servicePath?: string,
        // The Shuffle service path relative to the root URL, for example, "shuffle/v1beta1".
        shuffleServicePath?: string,
        // ID of the worker running this pipeline.
        workerId?: string,
        // The prefix of the resources the system should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
        tempStoragePrefix?: string,
    }
    
    interface Disk {
        // Size of disk in GB. If zero or unspecified, the service will attempt to choose a reasonable default.
        sizeGb?: number,
        // Disk storage type, as defined by Google Compute Engine. This must be a disk type appropriate to the project and zone in which the workers will run. If unknown or unspecified, the service will attempt to choose a reasonable default. For example, the standard persistent disk type is a resource name typically ending in "pd-standard". If SSD persistent disks are available, the resource name typically ends with "pd-ssd". The actual valid values are defined the Google Compute Engine API, not by the Dataflow API; consult the Google Compute Engine documentation for more information about determining the set of available disk types for a particular project and zone. Google Compute Engine Disk types are local to a particular project in a particular zone, and so the resource name will typically look something like this: compute.googleapis.com/projects/
        // /zones//diskTypes/pd-standard
        diskType?: string,
        // Directory in a VM where disk is mounted.
        mountPoint?: string,
    }
    
    interface AutoscalingSettings {
        // The algorithm to use for autoscaling.
        algorithm?: string,
        // The maximum number of workers to cap scaling at.
        maxNumWorkers?: number,
    }
    
    interface Step {
        // The kind of step in the dataflow Job.
        kind?: string,
        // Name identifying the step. This must be unique for each step with respect to all other steps in the dataflow Job.
        name?: string,
        // Named properties associated with the step. Each kind of predefined step has its own required set of properties.
        properties?: any,
    }
    
    interface JobExecutionInfo {
        // A mapping from each stage to the information about that stage.
        stages?: any,
    }
    
    interface JobExecutionStageInfo {
        // The steps associated with the execution stage. Note that stages may have several steps, and that a given step might be run by more than one stage.
        stepName?: string[],        
    }
    
    interface ListJobsResponse {
        // A subset of the requested job information.
        jobs?: Job[],        
        // Set if there may be more results than fit in this response.
        nextPageToken?: string,
    }
    
    interface ListJobMessagesResponse {
        // Messages in ascending timestamp order.
        jobMessages?: JobMessage[],        
        // The token to obtain the next page of results if there are more.
        nextPageToken?: string,
    }
    
    interface JobMessage {
        // Identifies the message. This is automatically generated by the service; the caller should treat it as an opaque string.
        id?: string,
        // The timestamp of the message.
        time?: string,
        // The text of the message.
        messageText?: string,
        // Importance level of the message.
        messageImportance?: string,
    }
    
    interface JobMetrics {
        // Timestamp as of which metric values are current.
        metricTime?: string,
        // All metrics for this job.
        metrics?: MetricUpdate[],        
    }
    
    interface MetricUpdate {
        // Name of the metric.
        name?: MetricStructuredName,
        // Metric aggregation kind. The possible metric aggregation kinds are "Sum", "Max", "Min", "Mean", "Set", "And", and "Or". The specified aggregation kind is case-insensitive. If omitted, this is not an aggregated value but instead a single metric sample value.
        kind?: string,
        // True if this metric is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this metric is reported as a delta that is not associated with any WorkItem.
        cumulative?: boolean,
        // Worker-computed aggregate value for aggregation kinds "Sum", "Max", "Min", "And", and "Or". The possible value types are Long, Double, and Boolean.
        scalar?: any,
        // Worker-computed aggregate value for the "Mean" aggregation kind. This holds the sum of the aggregated values and is used in combination with mean_count below to obtain the actual mean aggregate value. The only possible value types are Long and Double.
        meanSum?: any,
        // Worker-computed aggregate value for the "Mean" aggregation kind. This holds the count of the aggregated values and is used in combination with mean_sum above to obtain the actual mean aggregate value. The only possible value type is Long.
        meanCount?: any,
        // Worker-computed aggregate value for the "Set" aggregation kind. The only possible value type is a list of Values whose type can be Long, Double, or String, according to the metric's type. All Values in the list must be of the same type.
        set?: any,
        // Worker-computed aggregate value for internal use by the Dataflow service.
        internal?: any,
        // Timestamp associated with the metric value. Optional when workers are reporting work progress; it will be filled in responses from the metrics API.
        updateTime?: string,
    }
    
    interface MetricStructuredName {
        // Origin (namespace) of metric name. May be blank for user-define metrics; will be "dataflow" for metrics defined by the Dataflow service or SDK.
        origin?: string,
        // Worker-defined metric name.
        name?: string,
        // Zero or more labeled fields which identify the part of the job this metric is associated with, such as the name of a step or collection. For example, built-in counters associated with steps will have context['step'] = . Counters associated with PCollections in the SDK will have context['pcollection'] =
        // .
        context?: any,
    }
    
    interface ReportWorkItemStatusRequest {
        // The ID of the worker reporting the WorkItem status. If this does not match the ID of the worker which the Dataflow service believes currently has the lease on the WorkItem, the report will be dropped (with an error response).
        workerId?: string,
        // The order is unimportant, except that the order of the WorkItemServiceState messages in the ReportWorkItemStatusResponse corresponds to the order of WorkItemStatus messages here.
        workItemStatuses?: WorkItemStatus[],        
        // The current timestamp at the worker.
        currentWorkerTime?: string,
    }
    
    interface WorkItemStatus {
        // Identifies the WorkItem.
        workItemId?: string,
        // The report index. When a WorkItem is leased, the lease will contain an initial report index. When a WorkItem's status is reported to the system, the report should be sent with that report index, and the response will contain the index the worker should use for the next report. Reports received with unexpected index values will be rejected by the service. In order to preserve idempotency, the worker should not alter the contents of a report, even if the worker must submit the same report multiple times before getting back a response. The worker should not submit a subsequent report until the response for the previous report had been received from the service.
        reportIndex?: string,
        // Amount of time the worker requests for its lease.
        requestedLeaseDuration?: string,
        // True if the WorkItem was completed (successfully or unsuccessfully).
        completed?: boolean,
        // Specifies errors which occurred during processing. If errors are provided, and completed = true, then the WorkItem is considered to have failed.
        errors?: Status[],        
        // Worker output metrics (counters) for this WorkItem.
        metricUpdates?: MetricUpdate[],        
        // The worker's progress through this WorkItem.
        reportedProgress?: ApproximateReportedProgress,
        // A worker may split an active map task in two parts, "primary" and "residual", continuing to process the primary part and returning the residual part into the pool of available work. This event is called a "dynamic split" and is critical to the dynamic work rebalancing feature. The two obtained sub-tasks are called "parts" of the split. The parts, if concatenated, must represent the same input as would be read by the current task if the split did not happen. The exact way in which the original task is decomposed into the two parts is specified either as a position demarcating them (stop_position), or explicitly as two DerivedSources, if this task consumes a user-defined source type (dynamic_source_split). The "current" task is adjusted as a result of the split: after a task with range [A, B) sends a stop_position update at C, its range is considered to be [A, C), e.g.: * Progress should be interpreted relative to the new range, e.g. "75% completed" means "75% of [A, C) completed" * The worker should interpret proposed_stop_position relative to the new range, e.g. "split at 68%" should be interpreted as "split at 68% of [A, C)". * If the worker chooses to split again using stop_position, only stop_positions in [A, C) will be accepted. * Etc. dynamic_source_split has similar semantics: e.g., if a task with source S splits using dynamic_source_split into {P, R} (where P and R must be together equivalent to S), then subsequent progress and proposed_stop_position should be interpreted relative to P, and in a potential subsequent dynamic_source_split into {P', R'}, P' and R' must be together equivalent to P, etc.
        stopPosition?: Position,
        // See documentation of stop_position.
        dynamicSourceSplit?: DynamicSourceSplit,
        // If the work item represented a SourceOperationRequest, and the work is completed, contains the result of the operation.
        sourceOperationResponse?: SourceOperationResponse,
        // DEPRECATED in favor of dynamic_source_split.
        sourceFork?: SourceFork,
        // DEPRECATED in favor of reported_progress.
        progress?: ApproximateProgress,
    }
    
    interface Status {
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
        message?: string,
        // A list of messages that carry the error details. There will be a common set of message types for APIs to use.
        details?: any[],        
    }
    
    interface ApproximateReportedProgress {
        // A Position within the work to represent a progress.
        position?: Position,
        // Completion as fraction of the input consumed, from 0.0 (beginning, nothing consumed), to 1.0 (end of the input, entire input consumed).
        fractionConsumed?: number,
        // Total amount of parallelism in the input of this WorkItem that has not been consumed yet (i.e. can be delegated to a new WorkItem via dynamic splitting). "Amount of parallelism" refers to how many non-empty parts of the input can be read in parallel. This does not necessarily equal number of records. An input that can be read in parallel down to the individual records is called "perfectly splittable". An example of non-perfectly parallelizable input is a block-compressed file format where a block of records has to be read as a whole, but different blocks can be read in parallel. Examples: * If we have read 30 records out of 50 in a perfectly splittable 50-record input, this value should be 20. * If we are reading through block 3 in a block-compressed file consisting of 5 blocks, this value should be 2 (since blocks 4 and 5 can be processed in parallel by new work items via dynamic splitting). * If we are reading through the last block in a block-compressed file, or reading or processing the last record in a perfectly splittable input, this value should be 0, because the remainder of the work item cannot be further split.
        remainingParallelism?: ReportedParallelism,
        // Total amount of parallelism in the portion of input of this work item that has already been consumed. In the first two examples above (see remaining_parallelism), the value should be 30 or 3 respectively. The sum of remaining_parallelism and consumed_parallelism should equal the total amount of parallelism in this work item. If specified, must be finite.
        consumedParallelism?: ReportedParallelism,
    }
    
    interface Position {
        // Position is past all other positions. Also useful for the end position of an unbounded range.
        end?: boolean,
        // Position is a string key, ordered lexicographically.
        key?: string,
        // Position is a byte offset.
        byteOffset?: string,
        // Position is a record index.
        recordIndex?: string,
        // CloudPosition is a base64 encoded BatchShufflePosition (with FIXED sharding).
        shufflePosition?: string,
        // CloudPosition is a concat position.
        concatPosition?: ConcatPosition,
    }
    
    interface ConcatPosition {
        // Index of the inner source.
        index?: number,
        // Position within the inner source.
        position?: Position,
    }
    
    interface ReportedParallelism {
        // Specifies whether the parallelism is infinite. If true, "value" is ignored. Infinite parallelism means the service will assume that the work item can always be split into more non-empty work items by dynamic splitting. This is a work-around for lack of support for infinity by the current JSON-based Java RPC stack.
        isInfinite?: boolean,
        // Specifies the level of parallelism in case it is finite.
        value?: number,
    }
    
    interface DynamicSourceSplit {
        // Primary part (continued to be processed by worker). Specified relative to the previously-current source. Becomes current.
        primary?: DerivedSource,
        // Residual part (returned to the pool of work). Specified relative to the previously-current source.
        residual?: DerivedSource,
    }
    
    interface DerivedSource {
        // Specification of the source.
        source?: Source,
        // What source to base the produced source on (if any).
        derivationMode?: string,
    }
    
    interface Source {
        // The source to read from, plus its parameters.
        spec?: any,
        // The codec to use to decode data read from the source.
        codec?: any,
        // While splitting, sources may specify the produced bundles as differences against another source, in order to save backend-side memory and allow bigger jobs. For details, see SourceSplitRequest. To support this use case, the full set of parameters of the source is logically obtained by taking the latest explicitly specified value of each parameter in the order: base_specs (later items win), spec (overrides anything in base_specs).
        baseSpecs?: any[],        
        // Optionally, metadata for this source can be supplied right away, avoiding a SourceGetMetadataOperation roundtrip (see SourceOperationRequest). This field is meaningful only in the Source objects populated by the user (e.g. when filling in a DerivedSource). Source objects supplied by the framework to the user don't have this field populated.
        metadata?: SourceMetadata,
        // Setting this value to true hints to the framework that the source doesn't need splitting, and using SourceSplitRequest on it would yield SOURCE_SPLIT_OUTCOME_USE_CURRENT. E.g. a file splitter may set this to true when splitting a single file into a set of byte ranges of appropriate size, and set this to false when splitting a filepattern into individual files. However, for efficiency, a file splitter may decide to produce file subranges directly from the filepattern to avoid a splitting round-trip. See SourceSplitRequest for an overview of the splitting process. This field is meaningful only in the Source objects populated by the user (e.g. when filling in a DerivedSource). Source objects supplied by the framework to the user don't have this field populated.
        doesNotNeedSplitting?: boolean,
    }
    
    interface SourceMetadata {
        // Whether this source is known to produce key/value pairs with the (encoded) keys in lexicographically sorted order.
        producesSortedKeys?: boolean,
        // Specifies that the size of this source is known to be infinite (this is a streaming source).
        infinite?: boolean,
        // An estimate of the total size (in bytes) of the data that would be read from this source. This estimate is in terms of external storage size, before any decompression or other processing done by the reader.
        estimatedSizeBytes?: string,
    }
    
    interface SourceOperationResponse {
        // A response to a request to split a source.
        split?: SourceSplitResponse,
        // A response to a request to get metadata about a source.
        getMetadata?: SourceGetMetadataResponse,
    }
    
    interface SourceSplitResponse {
        // Indicates whether splitting happened and produced a list of bundles. If this is USE_CURRENT_SOURCE_AS_IS, the current source should be processed "as is" without splitting. "bundles" is ignored in this case. If this is SPLITTING_HAPPENED, then "bundles" contains a list of bundles into which the source was split.
        outcome?: string,
        // If outcome is SPLITTING_HAPPENED, then this is a list of bundles into which the source was split. Otherwise this field is ignored. This list can be empty, which means the source represents an empty input.
        bundles?: DerivedSource[],        
        // DEPRECATED in favor of bundles.
        shards?: SourceSplitShard[],        
    }
    
    interface SourceSplitShard {
        // DEPRECATED
        source?: Source,
        // DEPRECATED
        derivationMode?: string,
    }
    
    interface SourceGetMetadataResponse {
        // The computed metadata.
        metadata?: SourceMetadata,
    }
    
    interface SourceFork {
        // DEPRECATED
        primary?: SourceSplitShard,
        // DEPRECATED
        residual?: SourceSplitShard,
        // DEPRECATED
        primarySource?: DerivedSource,
        // DEPRECATED
        residualSource?: DerivedSource,
    }
    
    interface ApproximateProgress {
        // Obsolete.
        position?: Position,
        // Obsolete.
        percentComplete?: number,
        // Obsolete.
        remainingTime?: string,
    }
    
    interface ReportWorkItemStatusResponse {
        // A set of messages indicating the service-side state for each WorkItem whose status was reported, in the same order as the WorkItemStatus messages in the ReportWorkItemStatusRequest which resulting in this response.
        workItemServiceStates?: WorkItemServiceState[],        
    }
    
    interface WorkItemServiceState {
        // The progress point in the WorkItem where the Dataflow service suggests that the worker truncate the task.
        splitRequest?: ApproximateSplitRequest,
        // Time at which the current lease will expire.
        leaseExpireTime?: string,
        // New recommended reporting interval.
        reportStatusInterval?: string,
        // Other data returned by the service, specific to the particular worker harness.
        harnessData?: any,
        // The index value to use for the next report sent by the worker. Note: If the report call fails for whatever reason, the worker should reuse this index for subsequent report attempts.
        nextReportIndex?: string,
        // Obsolete, always empty.
        suggestedStopPosition?: Position,
        // DEPRECATED in favor of split_request.
        suggestedStopPoint?: ApproximateProgress,
    }
    
    interface ApproximateSplitRequest {
        // A Position at which to split the work item.
        position?: Position,
        // A fraction at which to split the work item, from 0.0 (beginning of the input) to 1.0 (end of the input).
        fractionConsumed?: number,
    }
    
    interface LeaseWorkItemRequest {
        // Filter for WorkItem type.
        workItemTypes?: string[],        
        // Worker capabilities. WorkItems might be limited to workers with specific capabilities.
        workerCapabilities?: string[],        
        // The initial lease period.
        requestedLeaseDuration?: string,
        // The current timestamp at the worker.
        currentWorkerTime?: string,
        // Identifies the worker leasing work -- typically the ID of the virtual machine running the worker.
        workerId?: string,
    }
    
    interface LeaseWorkItemResponse {
        // A list of the leased WorkItems.
        workItems?: WorkItem[],        
    }
    
    interface WorkItem {
        // Identifies this WorkItem.
        id?: string,
        // Identifies the cloud project this WorkItem belongs to.
        projectId?: string,
        // Identifies the workflow job this WorkItem belongs to.
        jobId?: string,
        // Any required packages that need to be fetched in order to execute this WorkItem.
        packages?: Package[],        
        // Additional information for MapTask WorkItems.
        mapTask?: MapTask,
        // Additional information for SeqMapTask WorkItems.
        seqMapTask?: SeqMapTask,
        // Additional information for ShellTask WorkItems.
        shellTask?: ShellTask,
        // Additional information for StreamingSetupTask WorkItems.
        streamingSetupTask?: StreamingSetupTask,
        // Additional information for source operation WorkItems.
        sourceOperationTask?: SourceOperationRequest,
        // Additional information for StreamingComputationTask WorkItems.
        streamingComputationTask?: StreamingComputationTask,
        // Recommended reporting interval.
        reportStatusInterval?: string,
        // Time when the lease on this Work will expire.
        leaseExpireTime?: string,
        // Work item-specific configuration as an opaque blob.
        configuration?: string,
        // The initial index to use when reporting the status of the WorkItem.
        initialReportIndex?: string,
    }
    
    interface MapTask {
        // The instructions in the MapTask.
        instructions?: ParallelInstruction[],        
        // System-defined name of this MapTask. Unique across the workflow.
        systemName?: string,
        // System-defined name of the stage containing this MapTask. Unique across the workflow.
        stageName?: string,
    }
    
    interface ParallelInstruction {
        // System-defined name of this operation. Unique across the workflow.
        systemName?: string,
        // User-provided name of this operation.
        name?: string,
        // Additional information for Read instructions.
        read?: ReadInstruction,
        // Additional information for Write instructions.
        write?: WriteInstruction,
        // Additional information for ParDo instructions.
        parDo?: ParDoInstruction,
        // Additional information for PartialGroupByKey instructions.
        partialGroupByKey?: PartialGroupByKeyInstruction,
        // Additional information for Flatten instructions.
        flatten?: FlattenInstruction,
        // Describes the outputs of the instruction.
        outputs?: InstructionOutput[],        
    }
    
    interface ReadInstruction {
        // The source to read from.
        source?: Source,
    }
    
    interface WriteInstruction {
        // The input.
        input?: InstructionInput,
        // The sink to write to.
        sink?: Sink,
    }
    
    interface InstructionInput {
        // The index (origin zero) of the parallel instruction that produces the output to be consumed by this input. This index is relative to the list of instructions in this input's instruction's containing MapTask.
        producerInstructionIndex?: number,
        // The output index (origin zero) within the producer.
        outputNum?: number,
    }
    
    interface Sink {
        // The sink to write to, plus its parameters.
        spec?: any,
        // The codec to use to encode data written to the sink.
        codec?: any,
    }
    
    interface ParDoInstruction {
        // The input.
        input?: InstructionInput,
        // Zero or more side inputs.
        sideInputs?: SideInputInfo[],        
        // The user function to invoke.
        userFn?: any,
        // The number of outputs.
        numOutputs?: number,
        // Information about each of the outputs, if user_fn is a MultiDoFn.
        multiOutputInfos?: MultiOutputInfo[],        
    }
    
    interface SideInputInfo {
        // The source(s) to read element(s) from to get the value of this side input. If more than one source, then the elements are taken from the sources, in the specified order if order matters. At least one source is required.
        sources?: Source[],        
        // How to interpret the source element(s) as a side input value.
        kind?: any,
        // The id of the tag the user code will access this side input by; this should correspond to the tag of some MultiOutputInfo.
        tag?: string,
    }
    
    interface MultiOutputInfo {
        // The id of the tag the user code will emit to this output by; this should correspond to the tag of some SideInputInfo.
        tag?: string,
    }
    
    interface PartialGroupByKeyInstruction {
        // Describes the input to the partial group-by-key instruction.
        input?: InstructionInput,
        // The codec to use for interpreting an element in the input PTable.
        inputElementCodec?: any,
        // The value combining function to invoke.
        valueCombiningFn?: any,
        // Zero or more side inputs.
        sideInputs?: SideInputInfo[],        
    }
    
    interface FlattenInstruction {
        // Describes the inputs to the flatten instruction.
        inputs?: InstructionInput[],        
    }
    
    interface InstructionOutput {
        // The user-provided name of this output.
        name?: string,
        // System-defined name of this output. Unique across the workflow.
        systemName?: string,
        // The codec to use to encode data being written via this output.
        codec?: any,
    }
    
    interface SeqMapTask {
        // Information about each of the inputs.
        inputs?: SideInputInfo[],        
        // The user function to invoke.
        userFn?: any,
        // Information about each of the outputs.
        outputInfos?: SeqMapTaskOutputInfo[],        
        // The user-provided name of the SeqDo operation.
        name?: string,
        // System-defined name of the SeqDo operation. Unique across the workflow.
        systemName?: string,
        // System-defined name of the stage containing the SeqDo operation. Unique across the workflow.
        stageName?: string,
    }
    
    interface SeqMapTaskOutputInfo {
        // The id of the TupleTag the user code will tag the output value by.
        tag?: string,
        // The sink to write the output value to.
        sink?: Sink,
    }
    
    interface ShellTask {
        // The shell command to run.
        command?: string,
        // Exit code for the task.
        exitCode?: number,
    }
    
    interface StreamingSetupTask {
        // The TCP port on which the worker should listen for messages from other streaming computation workers.
        receiveWorkPort?: number,
        // The TCP port used by the worker to communicate with the Dataflow worker harness.
        workerHarnessPort?: number,
        // The global topology of the streaming Dataflow job.
        streamingComputationTopology?: TopologyConfig,
        // The user has requested drain.
        drain?: boolean,
    }
    
    interface TopologyConfig {
        // The computations associated with a streaming Dataflow job.
        computations?: ComputationTopology[],        
        // The disks assigned to a streaming Dataflow job.
        dataDiskAssignments?: DataDiskAssignment[],        
        // Maps user stage names to stable computation names.
        userStageToComputationNameMap?: any,
        // The size (in bits) of keys that will be assigned to source messages.
        forwardingKeyBits?: number,
    }
    
    interface ComputationTopology {
        // The system stage name.
        systemStageName?: string,
        // The ID of the computation.
        computationId?: string,
        // The user stage name.
        userStageName?: string,
        // The key ranges processed by the computation.
        keyRanges?: KeyRangeLocation[],        
        // The inputs to the computation.
        inputs?: StreamLocation[],        
        // The outputs from the computation.
        outputs?: StreamLocation[],        
        // The state family values.
        stateFamilies?: StateFamilyConfig[],        
    }
    
    interface KeyRangeLocation {
        // The start (inclusive) of the key range.
        start?: string,
        // The end (exclusive) of the key range.
        end?: string,
        // The physical location of this range assignment to be used for streaming computation cross-worker message delivery.
        deliveryEndpoint?: string,
        // The location of the persistent state for this range, as a persistent directory in the worker local filesystem.
        persistentDirectory?: string,
        // The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1".
        dataDisk?: string,
    }
    
    interface StreamLocation {
        // The stream is part of another computation within the current streaming Dataflow job.
        streamingStageLocation?: StreamingStageLocation,
        // The stream is a pubsub stream.
        pubsubLocation?: PubsubLocation,
        // The stream is a streaming side input.
        sideInputLocation?: StreamingSideInputLocation,
        // The stream is a custom source.
        customSourceLocation?: CustomSourceLocation,
    }
    
    interface StreamingStageLocation {
        // Identifies the particular stream within the streaming Dataflow job.
        streamId?: string,
    }
    
    interface PubsubLocation {
        // A pubsub topic, in the form of "pubsub.googleapis.com/topics/
        // /"
        topic?: string,
        // A pubsub subscription, in the form of "pubsub.googleapis.com/subscriptions/
        // /"
        subscription?: string,
        // If set, contains a pubsub label from which to extract record timestamps. If left empty, record timestamps will be generated upon arrival.
        timestampLabel?: string,
        // If set, contains a pubsub label from which to extract record ids. If left empty, record deduplication will be strictly best effort.
        idLabel?: string,
        // Indicates whether the pipeline allows late-arriving data.
        dropLateData?: boolean,
        // If set, specifies the pubsub subscription that will be used for tracking custom time timestamps for watermark estimation.
        trackingSubscription?: string,
    }
    
    interface StreamingSideInputLocation {
        // Identifies the particular side input within the streaming Dataflow job.
        tag?: string,
        // Identifies the state family where this side input is stored.
        stateFamily?: string,
    }
    
    interface CustomSourceLocation {
        // Whether this source is stateful.
        stateful?: boolean,
    }
    
    interface StateFamilyConfig {
        // The state family value.
        stateFamily?: string,
        // If true, this family corresponds to a read operation.
        isRead?: boolean,
    }
    
    interface DataDiskAssignment {
        // VM instance name the data disks mounted to, for example "myproject-1014-104817-4c2-harness-0".
        vmInstance?: string,
        // Mounted data disks. The order is important a data disk's 0-based index in this list defines which persistent directory the disk is mounted to, for example the list of { "myproject-1014-104817-4c2-harness-0-disk-0" }, { "myproject-1014-104817-4c2-harness-0-disk-1" }.
        dataDisks?: string[],        
    }
    
    interface SourceOperationRequest {
        // Information about a request to split a source.
        split?: SourceSplitRequest,
        // Information about a request to get metadata about a source.
        getMetadata?: SourceGetMetadataRequest,
    }
    
    interface SourceSplitRequest {
        // Specification of the source to be split.
        source?: Source,
        // Hints for tuning the splitting process.
        options?: SourceSplitOptions,
    }
    
    interface SourceSplitOptions {
        // The source should be split into a set of bundles where the estimated size of each is approximately this many bytes.
        desiredBundleSizeBytes?: string,
        // DEPRECATED in favor of desired_bundle_size_bytes.
        desiredShardSizeBytes?: string,
    }
    
    interface SourceGetMetadataRequest {
        // Specification of the source whose metadata should be computed.
        source?: Source,
    }
    
    interface StreamingComputationTask {
        // A type of streaming computation task.
        taskType?: string,
        // Describes the set of data disks this task should apply to.
        dataDisks?: MountedDataDisk[],        
        // Contains ranges of a streaming computation this task should apply to.
        computationRanges?: StreamingComputationRanges[],        
    }
    
    interface MountedDataDisk {
        // The name of the data disk. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1".
        dataDisk?: string,
    }
    
    interface StreamingComputationRanges {
        // The ID of the computation.
        computationId?: string,
        // Data disk assignments for ranges from this computation.
        rangeAssignments?: KeyRangeDataDiskAssignment[],        
    }
    
    interface KeyRangeDataDiskAssignment {
        // The start (inclusive) of the key range.
        start?: string,
        // The end (exclusive) of the key range.
        end?: string,
        // The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1".
        dataDisk?: string,
    }
    
    interface SendWorkerMessagesRequest {
        // The WorkerMessages to send.
        workerMessages?: WorkerMessage[],        
    }
    
    interface WorkerMessage {
        // Labels are used to group WorkerMessages. For example, a worker_message about a particular container might have the labels: { "JOB_ID": "2015-04-22", "WORKER_ID": "wordcount-vm-2015…" "CONTAINER_TYPE": "worker", "CONTAINER_ID": "ac1234def"} Label tags typically correspond to Label enum values. However, for ease of development other strings can be used as tags. LABEL_UNSPECIFIED should not be used here.
        labels?: any,
        // The timestamp of the worker_message.
        time?: string,
        // The health of a worker.
        workerHealthReport?: WorkerHealthReport,
        // A worker message code.
        workerMessageCode?: WorkerMessageCode,
    }
    
    interface WorkerHealthReport {
        // Whether the VM is healthy.
        vmIsHealthy?: boolean,
        // The time the VM was booted.
        vmStartupTime?: string,
        // The interval at which the worker is sending health reports. The default value of 0 should be interpreted as the field is not being explicitly set by the worker.
        reportInterval?: string,
        // The pods running on the worker. See: http://kubernetes.io/v1.1/docs/api-reference/v1/definitions.html#_v1_pod This field is used by the worker to send the status of the indvidual containers running on each worker.
        pods?: any[],        
    }
    
    interface WorkerMessageCode {
        // The code is a string intended for consumption by a machine that identifies the type of message being sent. Examples: 1. "HARNESS_STARTED" might be used to indicate the worker harness has started. 2. "GCS_DOWNLOAD_ERROR" might be used to indicate an error downloading a GCS file as part of the boot process of one of the worker containers. This is a string and not an enum to make it easy to add new codes without waiting for an API change.
        code?: string,
        // Parameters contains specific information about the code. This is a struct to allow parameters of different types. Examples: 1. For a "HARNESS_STARTED" message parameters might provide the name of the worker and additional data like timing information. 2. For a "GCS_DOWNLOAD_ERROR" parameters might contain fields listing the GCS objects being downloaded and fields containing errors. In general complex data structures should be avoided. If a worker needs to send a specific and complicated data structure then please consider defining a new proto and adding it to the data oneof in WorkerMessageResponse. Conventions: Parameters should only be used for information that isn't typically passed as a label. hostname and other worker identifiers should almost always be passed as labels since they will be included on most messages.
        parameters?: any,
    }
    
    interface SendWorkerMessagesResponse {
        // The servers response to the worker messages.
        workerMessageResponses?: WorkerMessageResponse[],        
    }
    
    interface WorkerMessageResponse {
        // The service's response to a worker's health report.
        workerHealthReportResponse?: WorkerHealthReportResponse,
    }
    
    interface WorkerHealthReportResponse {
        // A positive value indicates the worker should change its reporting interval to the specified value. The default value of zero means no change in report rate is requested by the server.
        reportInterval?: string,
    }
    
    interface MessagesResource {
        // Request the job status.
        list (request: {        
            // A project id.
            projectId: string,
            // The job to get messages about.
            jobId: string,
            // Filter to only get messages with importance >= level
            minimumImportance?: string,
            // If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
            pageSize?: number,
            // If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
            pageToken?: string,
            // If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
            startTime?: string,
            // Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
            endTime?: string,
        }) : gapi.client.Request<ListJobMessagesResponse>;        
        
    }
    
    
    interface WorkItemsResource {
        // Reports the status of dataflow WorkItems leased by a worker.
        reportStatus (request: {        
            // The project which owns the WorkItem's job.
            projectId: string,
            // The job which the WorkItem is part of.
            jobId: string,
        }) : gapi.client.Request<ReportWorkItemStatusResponse>;        
        
        // Leases a dataflow WorkItem to run.
        lease (request: {        
            // Identifies the project this worker belongs to.
            projectId: string,
            // Identifies the workflow job this worker belongs to.
            jobId: string,
        }) : gapi.client.Request<LeaseWorkItemResponse>;        
        
    }
    
    
    interface JobsResource {
        // Creates a dataflow job.
        create (request: {        
            // The project which owns the job.
            projectId: string,
            // Level of information requested in response.
            view?: string,
            // DEPRECATED. This field is now on the Job message.
            replaceJobId?: string,
        }) : gapi.client.Request<Job>;        
        
        // Gets the state of the specified dataflow job.
        get (request: {        
            // The project which owns the job.
            projectId: string,
            // Identifies a single job.
            jobId: string,
            // Level of information requested in response.
            view?: string,
        }) : gapi.client.Request<Job>;        
        
        // Updates the state of an existing dataflow job.
        update (request: {        
            // The project which owns the job.
            projectId: string,
            // Identifies a single job.
            jobId: string,
        }) : gapi.client.Request<Job>;        
        
        // List the jobs of a project
        list (request: {        
            // The project which owns the jobs.
            projectId: string,
            // Level of information requested in response. Default is SUMMARY.
            view?: string,
            // If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
            pageSize?: number,
            // Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
            pageToken?: string,
        }) : gapi.client.Request<ListJobsResponse>;        
        
        // Request the job status.
        getMetrics (request: {        
            // A project id.
            projectId: string,
            // The job to get messages for.
            jobId: string,
            // Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.
            startTime?: string,
        }) : gapi.client.Request<JobMetrics>;        
        
        messages: MessagesResource,
        workItems: WorkItemsResource,
    }
    
    
    interface ProjectsResource {
        // Send a worker_message to the service.
        workerMessages (request: {        
            // The project to send the WorkerMessages to.
            projectId: string,
        }) : gapi.client.Request<SendWorkerMessagesResponse>;        
        
        jobs: JobsResource,
    }
    
}

declare module gapi.client.dataflow {
    var projects: gapi.client.dataflow.ProjectsResource; 
    
}
