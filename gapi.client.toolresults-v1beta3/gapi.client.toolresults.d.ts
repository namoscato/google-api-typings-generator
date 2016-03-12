// Type definitions for Google Cloud Tool Results API v1beta3
// Project: https://developers.google.com/cloud-test-lab/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.toolresults.v1beta3 {
    
    interface Any {
        // A URL/resource name whose content describes the type of the serialized message.
        // 
        // For URLs which use the schema `http`, `https`, or no schema, the following restrictions and interpretations apply:
        // 
        // * If no schema is provided, `https` is assumed. * The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). * An HTTP GET on the URL must yield a [google.protobuf.Type][] value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.)
        // 
        // Schemas other than `http`, `https` (or the empty schema) might be used with implementation specific semantics.
        typeUrl?: string,
        // Must be valid serialized data of the above specified type.
        value?: string,
    }
    
    interface Duration {
        // Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 `seconds` field and a positive or negative `nanos` field. For durations of one second or more, a non-zero value for the `nanos` field must be of the same sign as the `seconds` field. Must be from -999,999,999 to +999,999,999 inclusive.
        nanos?: number,
        // Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive.
        seconds?: string,
    }
    
    interface Execution {
        // The time when the Execution status transitioned to COMPLETE.
        // 
        // This value will be set automatically when state transitions to COMPLETE.
        // 
        // - In response: set if the execution state is COMPLETE. - In create/update request: never set
        completionTime?: Timestamp,
        // The time when the Execution was created.
        // 
        // This value will be set automatically when CreateExecution is called.
        // 
        // - In response: always set - In create/update request: never set
        creationTime?: Timestamp,
        // A unique identifier within a History for this Execution.
        // 
        // Returns INVALID_ARGUMENT if this field is set or overwritten by the caller.
        // 
        // - In response always set - In create/update request: never set
        executionId?: string,
        // Classify the result, for example into SUCCESS or FAILURE
        // 
        // - In response: present if set by create/update request - In create/update request: optional
        outcome?: Outcome,
        // The initial state is IN_PROGRESS.
        // 
        // The only legal state transitions is from IN_PROGRESS to COMPLETE.
        // 
        // A PRECONDITION_FAILED will be returned if an invalid transition is requested.
        // 
        // The state can only be set to COMPLETE once. A FAILED_PRECONDITION will be returned if the state is set to COMPLETE multiple times.
        // 
        // If the state is set to COMPLETE, all the in-progress steps within the execution will be set as COMPLETE. If the outcome of the step is not set, the outcome will be set to INCONCLUSIVE.
        // 
        // - In response always set - In create/update request: optional
        state?: string,
        // TestExecution Matrix ID that the Test Service uses.
        // 
        // - In response: present if set by create - In create: optional - In update: never set
        testExecutionMatrixId?: string,
    }
    
    interface FailureDetail {
        // If the failure was severe because the system under test crashed.
        crashed?: boolean,
        // If an app is not installed and thus no test can be run with the app. This might be caused by trying to run a test on an unsupported platform.
        notInstalled?: boolean,
        // If a native process other than the app crashed.
        otherNativeCrash?: boolean,
        // If the test overran some time limit, and that is why it failed.
        timedOut?: boolean,
    }
    
    interface FileReference {
        // The URI of a file stored in Google Cloud Storage.
        // 
        // For example: http://storage.googleapis.com/mybucket/path/to/test.xml or in gsutil format: gs://mybucket/path/to/test.xml with version-specific info, gs://mybucket/path/to/test.xml#1360383693690000
        // 
        // An INVALID_ARGUMENT error will be returned if the URI format is not supported.
        // 
        // - In response: always set - In create/update request: always set
        fileUri?: string,
    }
    
    interface History {
        // A short human-readable (plain text) name to display in the UI. Maximum of 100 characters.
        // 
        // - In response: present if set during create. - In create request: optional
        displayName?: string,
        // A unique identifier within a project for this History.
        // 
        // Returns INVALID_ARGUMENT if this field is set or overwritten by the caller.
        // 
        // - In response always set - In create request: never set
        historyId?: string,
        // A name to uniquely identify a history within a project. Maximum of 100 characters.
        // 
        // - In response always set - In create request: always set
        name?: string,
    }
    
    interface Image {
        // An error explaining why the thumbnail could not be rendered.
        error?: Status,
        // A reference to the full-size, original image.
        // 
        // This is the same as the tool_outputs entry for the image under its Step.
        // 
        // Always set.
        sourceImage?: ToolOutputReference,
        // The step to which the image is attached.
        // 
        // Always set.
        stepId?: string,
        // The thumbnail.
        thumbnail?: Thumbnail,
    }
    
    interface InconclusiveDetail {
        // If the end user aborted the test execution before a pass or fail could be determined. For example, the user pressed ctrl-c which sent a kill signal to the test runner while the test was running.
        abortedByUser?: boolean,
        // If the test runner could not determine success or failure because the test depends on a component other than the system under test which failed.
        // 
        // For example, a mobile test requires provisioning a device where the test executes, and that provisioning can fail.
        infrastructureFailure?: boolean,
        // A native process crashed on the device, producing a tombstone. It is unclear whether the crash was related to the app under test.
        // 
        // For example, OpenGL crashed, but it is unclear if the app is responsible. TODO(yinfu): Remove after all reference from TestService are deleted.
        nativeCrash?: boolean,
    }
    
    interface ListExecutionsResponse {
        // Executions.
        // 
        // Always set.
        executions?: Execution[],        
        // A continuation token to resume the query at the next item.
        // 
        // Will only be set if there are more Executions to fetch.
        nextPageToken?: string,
    }
    
    interface ListHistoriesResponse {
        // Histories.
        histories?: History[],        
        // A continuation token to resume the query at the next item.
        // 
        // Will only be set if there are more histories to fetch.
        // 
        // Tokens are valid for up to one hour from the time of the first list request. For instance, if you make a list request at 1PM and use the token from this first request 10 minutes later, the token from this second response will only be valid for 50 minutes.
        nextPageToken?: string,
    }
    
    interface ListStepThumbnailsResponse {
        // A continuation token to resume the query at the next item.
        // 
        // If set, indicates that there are more thumbnails to read, by calling list again with this value in the page_token field.
        nextPageToken?: string,
        // A list of image data.
        // 
        // Images are returned in a deterministic order; they are ordered by these factors, in order of importance: * First, by their associated test case. Images without a test case are considered greater than images with one. * Second, by their creation time. Images without a creation time are greater than images with one. * Third, by the order in which they were added to the step (by calls to CreateStep or UpdateStep).
        thumbnails?: Image[],        
    }
    
    interface ListStepsResponse {
        // A continuation token to resume the query at the next item.
        // 
        // If set, indicates that there are more steps to read, by calling list again with this value in the page_token field.
        nextPageToken?: string,
        // Steps.
        steps?: Step[],        
    }
    
    interface Outcome {
        // More information about a FAILURE outcome.
        // 
        // Returns INVALID_ARGUMENT if this field is set but the summary is not FAILURE.
        // 
        // Optional
        failureDetail?: FailureDetail,
        // More information about an INCONCLUSIVE outcome.
        // 
        // Returns INVALID_ARGUMENT if this field is set but the summary is not INCONCLUSIVE.
        // 
        // Optional
        inconclusiveDetail?: InconclusiveDetail,
        // More information about a SKIPPED outcome.
        // 
        // Returns INVALID_ARGUMENT if this field is set but the summary is not SKIPPED.
        // 
        // Optional
        skippedDetail?: SkippedDetail,
        // More information about a SUCCESS outcome.
        // 
        // Returns INVALID_ARGUMENT if this field is set but the summary is not SUCCESS.
        // 
        // Optional
        successDetail?: SuccessDetail,
        // The simplest way to interpret a result.
        // 
        // Required
        summary?: string,
    }
    
    interface ProjectSettings {
        // The name of the Google Cloud Storage bucket to which results are written.
        // 
        // By default, this is unset.
        // 
        // In update request: optional In response: optional
        defaultBucket?: string,
        // The name of the project's settings.
        // 
        // Always of the form: projects/{project-id}/settings
        // 
        // In update request: never set In response: always set
        name?: string,
    }
    
    interface PublishXunitXmlFilesRequest {
        // URI of the Xunit XML files to publish.
        // 
        // The maximum size of the file this reference is pointing to is 50MB.
        // 
        // Required.
        xunitXmlFiles?: FileReference[],        
    }
    
    interface SkippedDetail {
        // If the App doesn't support the specific API level.
        incompatibleAppVersion?: boolean,
        // If the App doesn't run on the specific architecture, for example, x86.
        incompatibleArchitecture?: boolean,
        // If the requested OS version doesn't run on the specific device model.
        incompatibleDevice?: boolean,
    }
    
    interface Status {
        // The status code, which should be an enum value of [google.rpc.Code][].
        code?: number,
        // A list of messages that carry the error details. There will be a common set of message types for APIs to use.
        details?: Any[],        
        // A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][] field, or localized by the client.
        message?: string,
    }
    
    interface Step {
        // The time when the step status was set to complete.
        // 
        // This value will be set automatically when state transitions to COMPLETE.
        // 
        // - In response: set if the execution state is COMPLETE. - In create/update request: never set
        completionTime?: Timestamp,
        // The time when the step was created.
        // 
        // - In response: always set - In create/update request: never set
        creationTime?: Timestamp,
        // A description of this tool For example: mvn clean package -D skipTests=true
        // 
        // - In response: present if set by create/update request - In create/update request: optional
        description?: string,
        // How much the device resource is used to perform the test.
        // 
        // This is the device usage used for billing purpose, which is different from the run_duration, for example, infrastructure failure won't be charged for device usage.
        // 
        // PRECONDITION_FAILED will be returned if one attempts to set a device_usage on a step which already has this field set.
        // 
        // - In response: present if previously set. - In create request: optional - In update request: optional
        deviceUsageDuration?: Duration,
        // If the execution containing this step has any dimension_definition set, then this field allows the child to specify the values of the dimensions.
        // 
        // The keys must exactly match the dimension_definition of the execution.
        // 
        // For example, if the execution has `dimension_definition = ['attempt', 'device']` then a step must define values for those dimensions, eg. `dimension_value = ['attempt': '1', 'device': 'Nexus 6']`
        // 
        // If a step does not participate in one dimension of the matrix, the value for that dimension should be empty string. For example, if one of the tests is executed by a runner which does not support retries, the step could have `dimension_value = ['attempt': '', 'device': 'Nexus 6']`
        // 
        // If the step does not participate in any dimensions of the matrix, it may leave dimension_value unset.
        // 
        // A PRECONDITION_FAILED will be returned if any of the keys do not exist in the dimension_definition of the execution.
        // 
        // A PRECONDITION_FAILED will be returned if another step in this execution already has the same name and dimension_value, but differs on other data fields, for example, step field is different.
        // 
        // A PRECONDITION_FAILED will be returned if dimension_value is set, and there is a dimension_definition in the execution which is not specified as one of the keys.
        // 
        // - In response: present if set by create - In create request: optional - In update request: never set
        dimensionValue?: StepDimensionValueEntry[],        
        // Whether any of the outputs of this step are images whose thumbnails can be fetched with ListThumbnails.
        // 
        // - In response: always set - In create/update request: never set
        hasImages?: boolean,
        // Arbitrary user-supplied key/value pairs that are associated with the step.
        // 
        // Users are responsible for managing the key namespace such that keys don't accidentally collide.
        // 
        // An INVALID_ARGUMENT will be returned if the number of labels exceeds 100 or if the length of any of the keys or values exceeds 100 characters.
        // 
        // - In response: always set - In create request: optional - In update request: optional; any new key/value pair will be added to the map, and any new value for an existing key will update that key's value
        labels?: StepLabelsEntry[],        
        // A short human-readable name to display in the UI. Maximum of 100 characters. For example: Clean build
        // 
        // A PRECONDITION_FAILED will be returned upon creating a new step if it shares its name and dimension_value with an existing step. If two steps represent a similar action, but have different dimension values, they should share the same name. For instance, if the same set of tests is run on two different platforms, the two steps should have the same name.
        // 
        // - In response: always set - In create request: always set - In update request: never set
        name?: string,
        // Classification of the result, for example into SUCCESS or FAILURE
        // 
        // - In response: present if set by create/update request - In create/update request: optional
        outcome?: Outcome,
        // How long it took for this step to run.
        // 
        // If unset, this is set to the difference between creation_time and completion_time when the step is set to the COMPLETE state. In some cases, it is appropriate to set this value separately: For instance, if a step is created, but the operation it represents is queued for a few minutes before it executes, it would be appropriate not to include the time spent queued in its run_duration.
        // 
        // PRECONDITION_FAILED will be returned if one attempts to set a run_duration on a step which already has this field set.
        // 
        // - In response: present if previously set; always present on COMPLETE step - In create request: optional - In update request: optional
        runDuration?: Duration,
        // The initial state is IN_PROGRESS. The only legal state transitions are * IN_PROGRESS -> COMPLETE
        // 
        // A PRECONDITION_FAILED will be returned if an invalid transition is requested.
        // 
        // It is valid to create Step with a state set to COMPLETE. The state can only be set to COMPLETE once. A PRECONDITION_FAILED will be returned if the state is set to COMPLETE multiple times.
        // 
        // - In response: always set - In create/update request: optional
        state?: string,
        // A unique identifier within a Execution for this Step.
        // 
        // Returns INVALID_ARGUMENT if this field is set or overwritten by the caller.
        // 
        // - In response: always set - In create/update request: never set
        stepId?: string,
        // An execution of a test runner.
        testExecutionStep?: TestExecutionStep,
        // An execution of a tool (used for steps we don't explicitly support).
        toolExecutionStep?: ToolExecutionStep,
    }
    
    interface StepDimensionValueEntry {
        // 
        key?: string,
        // 
        value?: string,
    }
    
    interface StepLabelsEntry {
        // 
        key?: string,
        // 
        value?: string,
    }
    
    interface SuccessDetail {
        // If a native process other than the app crashed.
        otherNativeCrash?: boolean,
    }
    
    interface TestCaseReference {
        // The name of the class.
        className?: string,
        // The name of the test case.
        // 
        // Required.
        name?: string,
        // The name of the test suite to which this test case belongs.
        testSuiteName?: string,
    }
    
    interface TestExecutionStep {
        // List of test suite overview contents. This could be parsed from xUnit XML log by server, or uploaded directly by user. This references should only be called when test suites are fully parsed or uploaded.
        // 
        // The maximum allowed number of test suite overviews per step is 1000.
        // 
        // - In response: always set - In create request: optional - In update request: never (use publishXunitXmlFiles custom method instead)
        testSuiteOverviews?: TestSuiteOverview[],        
        // The timing break down of the test execution.
        // 
        // - In response: present if set by create or update - In create/update request: optional
        testTiming?: TestTiming,
        // Represents the execution of the test runner.
        // 
        // The exit code of this tool will be used to determine if the test passed.
        // 
        // - In response: always set - In create/update request: optional
        toolExecution?: ToolExecution,
    }
    
    interface TestSuiteOverview {
        // Number of test cases in error, typically set by the service by parsing the xml_source.
        // 
        // - In create/response: always set - In update request: never
        errorCount?: number,
        // Number of failed test cases, typically set by the service by parsing the xml_source. May also be set by the user.
        // 
        // - In create/response: always set - In update request: never
        failureCount?: number,
        // The name of the test suite.
        // 
        // - In create/response: always set - In update request: never
        name?: string,
        // Number of test cases not run, typically set by the service by parsing the xml_source.
        // 
        // - In create/response: always set - In update request: never
        skippedCount?: number,
        // Number of test cases, typically set by the service by parsing the xml_source.
        // 
        // - In create/response: always set - In update request: never
        totalCount?: number,
        // If this test suite was parsed from XML, this is the URI where the original XML file is stored.
        // 
        // Note: Multiple test suites can share the same xml_source
        // 
        // Returns INVALID_ARGUMENT if the uri format is not supported.
        // 
        // - In create/response: optional - In update request: never
        xmlSource?: FileReference,
    }
    
    interface TestTiming {
        // How long it took to run the test process.
        // 
        // - In response: present if previously set. - In create/update request: optional
        testProcessDuration?: Duration,
    }
    
    interface Thumbnail {
        // The thumbnail's content type, i.e. "image/png".
        // 
        // Always set.
        contentType?: string,
        // The thumbnail file itself.
        // 
        // That is, the bytes here are precisely the bytes that make up the thumbnail file; they can be served as an image as-is (with the appropriate content type.)
        // 
        // Always set.
        data?: string,
        // The height of the thumbnail, in pixels.
        // 
        // Always set.
        heightPx?: number,
        // The width of the thumbnail, in pixels.
        // 
        // Always set.
        widthPx?: number,
    }
    
    interface Timestamp {
        // Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.
        nanos?: number,
        // Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
        seconds?: string,
    }
    
    interface ToolExecution {
        // The full tokenized command line including the program name (equivalent to argv in a C program).
        // 
        // - In response: present if set by create request - In create request: optional - In update request: never set
        commandLineArguments?: string[],        
        // Tool execution exit code. This field will be set once the tool has exited.
        // 
        // - In response: present if set by create/update request - In create request: optional - In update request: optional, a FAILED_PRECONDITION error will be returned if an exit_code is already set.
        exitCode?: ToolExitCode,
        // References to any plain text logs output the tool execution.
        // 
        // This field can be set before the tool has exited in order to be able to have access to a live view of the logs while the tool is running.
        // 
        // The maximum allowed number of tool logs per step is 1000.
        // 
        // - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list
        toolLogs?: FileReference[],        
        // References to opaque files of any format output by the tool execution.
        // 
        // The maximum allowed number of tool outputs per step is 1000.
        // 
        // - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list
        toolOutputs?: ToolOutputReference[],        
    }
    
    interface ToolExecutionStep {
        // A Tool execution.
        // 
        // - In response: present if set by create/update request - In create/update request: optional
        toolExecution?: ToolExecution,
    }
    
    interface ToolExitCode {
        // Tool execution exit code. A value of 0 means that the execution was successful.
        // 
        // - In response: always set - In create/update request: always set
        number?: number,
    }
    
    interface ToolOutputReference {
        // The creation time of the file.
        // 
        // - In response: present if set by create/update request - In create/update request: optional
        creationTime?: Timestamp,
        // A FileReference to an output file.
        // 
        // - In response: always set - In create/update request: always set
        output?: FileReference,
        // The test case to which this output file belongs.
        // 
        // - In response: present if set by create/update request - In create/update request: optional
        testCase?: TestCaseReference,
    }
    
    interface ThumbnailsResource {
        // Lists thumbnails of images attached to a step.
        // 
        // May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist
        list (request: {        
            // An Execution id.
            // 
            // Required.
            executionId: string,
            // A History id.
            // 
            // Required.
            historyId: string,
            // The maximum number of thumbnails to fetch.
            // 
            // Default value: 50. The server will use this default if the field is not set or has a value of 0.
            // 
            // Optional.
            pageSize?: number,
            // A continuation token to resume the query at the next item.
            // 
            // Optional.
            pageToken?: string,
            // A Project id.
            // 
            // Required.
            projectId: string,
            // A Step id.
            // 
            // Required.
            stepId: string,
        }) : gapi.client.Request<ListStepThumbnailsResponse>;        
        
    }
    
    
    interface StepsResource {
        // Creates a Step.
        // 
        // The returned Step will have the id set.
        // 
        // May return any of the following canonical error codes:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
        create (request: {        
            // A Execution id.
            // 
            // Required.
            executionId: string,
            // A History id.
            // 
            // Required.
            historyId: string,
            // A Project id.
            // 
            // Required.
            projectId: string,
            // A unique request ID for server to detect duplicated requests. For example, a UUID.
            // 
            // Optional, but strongly recommended.
            requestId?: string,
        }) : gapi.client.Request<Step>;        
        
        // Gets a Step.
        // 
        // May return any of the following canonical error codes:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist
        get (request: {        
            // A Execution id.
            // 
            // Required.
            executionId: string,
            // A History id.
            // 
            // Required.
            historyId: string,
            // A Project id.
            // 
            // Required.
            projectId: string,
            // A Step id.
            // 
            // Required.
            stepId: string,
        }) : gapi.client.Request<Step>;        
        
        // Lists Steps for a given Execution.
        // 
        // The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time.
        // 
        // May return any of the following canonical error codes:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist
        list (request: {        
            // A Execution id.
            // 
            // Required.
            executionId: string,
            // A History id.
            // 
            // Required.
            historyId: string,
            // The maximum number of Steps to fetch.
            // 
            // Default value: 25. The server will use this default if the field is not set or has a value of 0.
            // 
            // Optional.
            pageSize?: number,
            // A continuation token to resume the query at the next item.
            // 
            // Optional.
            pageToken?: string,
            // A Project id.
            // 
            // Required.
            projectId: string,
        }) : gapi.client.Request<ListStepsResponse>;        
        
        // Updates an existing Step with the supplied partial entity.
        // 
        // May return any of the following canonical error codes:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
        patch (request: {        
            // A Execution id.
            // 
            // Required.
            executionId: string,
            // A History id.
            // 
            // Required.
            historyId: string,
            // A Project id.
            // 
            // Required.
            projectId: string,
            // A unique request ID for server to detect duplicated requests. For example, a UUID.
            // 
            // Optional, but strongly recommended.
            requestId?: string,
            // A Step id.
            // 
            // Required.
            stepId: string,
        }) : gapi.client.Request<Step>;        
        
        // Publish xml files to an existing Step.
        // 
        // May return any of the following canonical error codes:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist
        publishXunitXmlFiles (request: {        
            // A Execution id.
            // 
            // Required.
            executionId: string,
            // A History id.
            // 
            // Required.
            historyId: string,
            // A Project id.
            // 
            // Required.
            projectId: string,
            // A Step id. Note: This step must include a TestExecutionStep.
            // 
            // Required.
            stepId: string,
        }) : gapi.client.Request<Step>;        
        
        thumbnails: ThumbnailsResource,
    }
    
    
    interface ExecutionsResource {
        // Creates an Execution.
        // 
        // The returned Execution will have the id set.
        // 
        // May return any of the following canonical error codes:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
        create (request: {        
            // A History id.
            // 
            // Required.
            historyId: string,
            // A Project id.
            // 
            // Required.
            projectId: string,
            // A unique request ID for server to detect duplicated requests. For example, a UUID.
            // 
            // Optional, but strongly recommended.
            requestId?: string,
        }) : gapi.client.Request<Execution>;        
        
        // Gets an Execution.
        // 
        // May return any of the following canonical error codes:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist
        get (request: {        
            // An Execution id.
            // 
            // Required.
            executionId: string,
            // A History id.
            // 
            // Required.
            historyId: string,
            // A Project id.
            // 
            // Required.
            projectId: string,
        }) : gapi.client.Request<Execution>;        
        
        // Lists Histories for a given Project.
        // 
        // The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time.
        // 
        // May return any of the following canonical error codes:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
        list (request: {        
            // A History id.
            // 
            // Required.
            historyId: string,
            // The maximum number of Executions to fetch.
            // 
            // Default value: 25. The server will use this default if the field is not set or has a value of 0.
            // 
            // Optional.
            pageSize?: number,
            // A continuation token to resume the query at the next item.
            // 
            // Optional.
            pageToken?: string,
            // A Project id.
            // 
            // Required.
            projectId: string,
        }) : gapi.client.Request<ListExecutionsResponse>;        
        
        // Updates an existing Execution with the supplied partial entity.
        // 
        // May return any of the following canonical error codes:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist
        patch (request: {        
            // Required.
            executionId: string,
            // Required.
            historyId: string,
            // A Project id. Required.
            projectId: string,
            // A unique request ID for server to detect duplicated requests. For example, a UUID.
            // 
            // Optional, but strongly recommended.
            requestId?: string,
        }) : gapi.client.Request<Execution>;        
        
        steps: StepsResource,
    }
    
    
    interface HistoriesResource {
        // Creates a History.
        // 
        // The returned History will have the id set.
        // 
        // May return any of the following canonical error codes:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist
        create (request: {        
            // A Project id.
            // 
            // Required.
            projectId: string,
            // A unique request ID for server to detect duplicated requests. For example, a UUID.
            // 
            // Optional, but strongly recommended.
            requestId?: string,
        }) : gapi.client.Request<History>;        
        
        // Gets a History.
        // 
        // May return any of the following canonical error codes:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
        get (request: {        
            // A History id.
            // 
            // Required.
            historyId: string,
            // A Project id.
            // 
            // Required.
            projectId: string,
        }) : gapi.client.Request<History>;        
        
        // Lists Histories for a given Project.
        // 
        // The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time.
        // 
        // May return any of the following canonical error codes:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
        list (request: {        
            // If set, only return histories with the given name.
            // 
            // Optional.
            filterByName?: string,
            // The maximum number of Histories to fetch.
            // 
            // Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100.
            // 
            // Optional.
            pageSize?: number,
            // A continuation token to resume the query at the next item.
            // 
            // Optional.
            pageToken?: string,
            // A Project id.
            // 
            // Required.
            projectId: string,
        }) : gapi.client.Request<ListHistoriesResponse>;        
        
        executions: ExecutionsResource,
    }
    
    
    interface ProjectsResource {
        // Gets the Tool Results settings for a project.
        // 
        // May return any of the following canonical error codes:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to read from project
        getSettings (request: {        
            // A Project id.
            // 
            // Required.
            projectId: string,
        }) : gapi.client.Request<ProjectSettings>;        
        
        // Creates resources for settings which have not yet been set.
        // 
        // Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in the name of the user calling. Except in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days.
        // 
        // The bucket is created with the project-private ACL: All project team members are given permissions to the bucket and objects created within it according to their roles. Project owners have owners rights, and so on. The default ACL on objects created in the bucket is project-private as well. See Google Cloud Storage documentation for more details.
        // 
        // If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deteleted, a new bucket will be created.
        // 
        // May return any canonical error codes, including the following:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage
        initializeSettings (request: {        
            // A Project id.
            // 
            // Required.
            projectId: string,
        }) : gapi.client.Request<ProjectSettings>;        
        
        histories: HistoriesResource,
    }
    
}

declare module gapi.client.toolresults {
    var projects: gapi.client.toolresults.v1beta3.ProjectsResource; 
    
}
