// Type definitions for Google Google Cloud Dataproc API v1
// Project: https://cloud.google.com/dataproc/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.dataproc.v1 {
    
    interface Media {
        // Name of the media resource.
        resourceName?: string,
    }
    
    interface Cluster {
        // [Required] The Google Cloud Platform project ID that the cluster belongs to.
        projectId?: string,
        // [Required] The cluster name. Cluster names within a project must be unique. Names of deleted clusters can be reused.
        clusterName?: string,
        // [Required] The cluster config. Note that Cloud Dataproc may set default values, and values may change when clusters are updated.
        config?: ClusterConfig,
        // [Output-only] Cluster status.
        status?: ClusterStatus,
        // [Output-only] The previous cluster status.
        statusHistory?: ClusterStatus[],        
        // [Output-only] A cluster UUID (Unique Universal Identifier). Cloud Dataproc generates this value when it creates the cluster.
        clusterUuid?: string,
    }
    
    interface ClusterConfig {
        // [Optional] A Google Cloud Storage staging bucket used for sharing generated SSH keys and config. If you do not specify a staging bucket, Cloud Dataproc will determine an appropriate Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Google Compute Engine zone where your cluster is deployed, and then it will create and manage this project-level, per-location bucket for you.
        configBucket?: string,
        // [Optional] The shared Google Compute Engine config settings for all instances in a cluster.
        gceClusterConfig?: GceClusterConfig,
        // [Optional] The Google Compute Engine config settings for the master instance in a cluster.
        masterConfig?: InstanceGroupConfig,
        // [Optional] The Google Compute Engine config settings for worker instances in a cluster.
        workerConfig?: InstanceGroupConfig,
        // [Optional] The Google Compute Engine config settings for additional worker instances in a cluster.
        secondaryWorkerConfig?: InstanceGroupConfig,
        // [Optional] The config settings for software inside the cluster.
        softwareConfig?: SoftwareConfig,
        // [Optional] Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's role metadata to run an executable on a master or worker node, as shown below: ROLE=$(/usr/share/google/get_metadata_value attributes/role) if [[ "${ROLE}" == 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi
        initializationActions?: NodeInitializationAction[],        
    }
    
    interface GceClusterConfig {
        // [Required] The zone where the Google Compute Engine cluster will be located. Example: `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]`.
        zoneUri?: string,
        // The Google Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither network_uri nor subnetwork_uri is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see https://cloud.google.com/compute/docs/subnetworks for more information). Example: `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default`.
        networkUri?: string,
        // The Google Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. Example: `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/sub0`.
        subnetworkUri?: string,
        // The URIs of service account scopes to be included in Google Compute Engine instances. The following base set of scopes is always included: * https://www.googleapis.com/auth/cloud.useraccounts.readonly * https://www.googleapis.com/auth/devstorage.read_write * https://www.googleapis.com/auth/logging.write If no scopes are specfied, the following defaults are also provided: * https://www.googleapis.com/auth/bigquery * https://www.googleapis.com/auth/bigtable.admin.table * https://www.googleapis.com/auth/bigtable.data * https://www.googleapis.com/auth/devstorage.full_control
        serviceAccountScopes?: string[],        
        // The Google Compute Engine tags to add to all instances.
        tags?: string[],        
        // The Google Compute Engine metadata entries to add to all instances.
        metadata?: any,
    }
    
    interface InstanceGroupConfig {
        // The number of VM instances in the instance group. For master instance groups, must be set to 1.
        numInstances?: number,
        // The list of instance names. Cloud Dataproc derives the names from `cluster_name`, `num_instances`, and the instance group if not set by user (recommended practice is to let Cloud Dataproc derive the name).
        instanceNames?: string[],        
        // [Output-only] The Google Compute Engine image resource used for cluster instances. Inferred from `SoftwareConfig.image_version`.
        imageUri?: string,
        // The Google Compute Engine machine type used for cluster instances. Example: `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2`.
        machineTypeUri?: string,
        // Disk option config settings.
        diskConfig?: DiskConfig,
        // Specifies that this instance group contains Preemptible Instances.
        isPreemptible?: boolean,
        // [Output-only] The config for Google Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.
        managedGroupConfig?: ManagedGroupConfig,
    }
    
    interface DiskConfig {
        // [Optional] Size in GB of the boot disk (default is 500GB).
        bootDiskSizeGb?: number,
        // [Optional] Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
        numLocalSsds?: number,
    }
    
    interface ManagedGroupConfig {
        // [Output-only] The name of the Instance Template used for the Managed Instance Group.
        instanceTemplateName?: string,
        // [Output-only] The name of the Instance Group Manager for this group.
        instanceGroupManagerName?: string,
    }
    
    interface SoftwareConfig {
        // [Optional] The version of software inside the cluster. It must match the regular expression `[0-9]+\.[0-9]+`. If unspecified, it defaults to the latest version (see [Cloud Dataproc Versioning](/dataproc/versioning)).
        imageVersion?: string,
        // [Optional] The properties to set on daemon config files. Property keys are specified in `prefix:property` format, such as `core:fs.defaultFS`. The following are supported prefixes and their mappings: * core: `core-site.xml` * hdfs: `hdfs-site.xml` * mapred: `mapred-site.xml` * yarn: `yarn-site.xml` * hive: `hive-site.xml` * pig: `pig.properties` * spark: `spark-defaults.conf`
        properties?: any,
    }
    
    interface NodeInitializationAction {
        // [Required] Google Cloud Storage URI of executable file.
        executableFile?: string,
        // [Optional] Amount of time executable has to complete. Default is 10 minutes. Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
        executionTimeout?: string,
    }
    
    interface ClusterStatus {
        // The cluster's state.
        state?: string,
        // Optional details of cluster's state.
        detail?: string,
        // Time when this state was entered.
        stateStartTime?: string,
    }
    
    interface Operation {
        // The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `operations/some/unique/name`.
        name?: string,
        // Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
        metadata?: any,
        // If the value is `false`, it means the operation is still in progress. If true, the operation is completed, and either `error` or `response` is available.
        done?: boolean,
        // The error result of the operation in case of failure.
        error?: Status,
        // The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
        response?: any,
    }
    
    interface Status {
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
        message?: string,
        // A list of messages that carry the error details. There will be a common set of message types for APIs to use.
        details?: any[],        
    }
    
    interface ListClustersResponse {
        // [Output-only] The clusters in the project.
        clusters?: Cluster[],        
        // [Optional] This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the `page_token` in a subsequent ListClustersRequest.
        nextPageToken?: string,
    }
    
    interface DiagnoseClusterRequest {
    }
    
    interface SubmitJobRequest {
        // [Required] The job resource.
        job?: Job,
    }
    
    interface Job {
        // [Optional] The fully qualified reference to the job, which can be used to obtain the equivalent REST path of the job resource. If this property is not specified when a job is created, the server generates a job_id.
        reference?: JobReference,
        // [Required] Job information, including how, when, and where to run the job.
        placement?: JobPlacement,
        // Job is a Hadoop job.
        hadoopJob?: HadoopJob,
        // Job is a Spark job.
        sparkJob?: SparkJob,
        // Job is a Pyspark job.
        pysparkJob?: PySparkJob,
        // Job is a Hive job.
        hiveJob?: HiveJob,
        // Job is a Pig job.
        pigJob?: PigJob,
        // Job is a SparkSql job.
        sparkSqlJob?: SparkSqlJob,
        // [Output-only] The job status. Additional application-specific status information may be contained in the type_job and yarn_applications fields.
        status?: JobStatus,
        // [Output-only] The previous job status.
        statusHistory?: JobStatus[],        
        // [Output-only] A URI pointing to the location of the stdout of the job's driver program.
        driverOutputResourceUri?: string,
        // [Output-only] If present, the location of miscellaneous control files which may be used as part of job setup and handling. If not present, control files may be placed in the same location as `driver_output_uri`.
        driverControlFilesUri?: string,
    }
    
    interface JobReference {
        // [Required] The ID of the Google Cloud Platform project that the job belongs to.
        projectId?: string,
        // [Required] The job ID, which must be unique within the project. The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-). The maximum length is 512 characters.
        jobId?: string,
    }
    
    interface JobPlacement {
        // [Required] The name of the cluster where the job will be submitted.
        clusterName?: string,
        // [Output-only] A cluster UUID generated by the Cloud Dataproc service when the job is submitted.
        clusterUuid?: string,
    }
    
    interface HadoopJob {
        // The HCFS URI of the jar file containing the main class. Examples: 'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar' 'hdfs:/tmp/test-samples/custom-wordcount.jar' 'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar'
        mainJarFileUri?: string,
        // The name of the driver's main class. The jar file containing the class must be in the default CLASSPATH or specified in `jar_file_uris`.
        mainClass?: string,
        // [Optional] The arguments to pass to the driver. Do not include arguments, such as `-libjars` or `-Dfoo=bar`, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
        args?: string[],        
        // [Optional] Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks.
        jarFileUris?: string[],        
        // [Optional] HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working directory of Hadoop drivers and distributed tasks. Useful for naively parallel tasks.
        fileUris?: string[],        
        // [Optional] HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, or .zip.
        archiveUris?: string[],        
        // [Optional] A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in user code.
        properties?: any,
        // [Optional] The runtime log config for job execution.
        loggingConfig?: LoggingConfig,
    }
    
    interface LoggingConfig {
        // The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
        driverLogLevels?: any,
    }
    
    interface SparkJob {
        // The HCFS URI of the jar file that contains the main class.
        mainJarFileUri?: string,
        // The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in `jar_file_uris`.
        mainClass?: string,
        // [Optional] The arguments to pass to the driver. Do not include arguments, such as `--conf`, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
        args?: string[],        
        // [Optional] HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.
        jarFileUris?: string[],        
        // [Optional] HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks.
        fileUris?: string[],        
        // [Optional] HCFS URIs of archives to be extracted in the working directory of Spark drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
        archiveUris?: string[],        
        // [Optional] A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
        properties?: any,
        // [Optional] The runtime log config for job execution.
        loggingConfig?: LoggingConfig,
    }
    
    interface PySparkJob {
        // [Required] The HCFS URI of the main Python file to use as the driver. Must be a .py file.
        mainPythonFileUri?: string,
        // [Optional] The arguments to pass to the driver. Do not include arguments, such as `--conf`, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
        args?: string[],        
        // [Optional] HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.
        pythonFileUris?: string[],        
        // [Optional] HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.
        jarFileUris?: string[],        
        // [Optional] HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks.
        fileUris?: string[],        
        // [Optional] HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.
        archiveUris?: string[],        
        // [Optional] A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
        properties?: any,
        // [Optional] The runtime log config for job execution.
        loggingConfig?: LoggingConfig,
    }
    
    interface HiveJob {
        // The HCFS URI of the script that contains Hive queries.
        queryFileUri?: string,
        // A list of queries.
        queryList?: QueryList,
        // [Optional] Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.
        continueOnFailure?: boolean,
        // [Optional] Mapping of query variable names to values (equivalent to the Hive command: `SET name="value";`).
        scriptVariables?: any,
        // [Optional] A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.
        properties?: any,
        // [Optional] HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
        jarFileUris?: string[],        
    }
    
    interface QueryList {
        // [Required] The queries to execute. You do not need to terminate a query with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of an Cloud Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } }
        queries?: string[],        
    }
    
    interface PigJob {
        // The HCFS URI of the script that contains the Pig queries.
        queryFileUri?: string,
        // A list of queries.
        queryList?: QueryList,
        // [Optional] Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.
        continueOnFailure?: boolean,
        // [Optional] Mapping of query variable names to values (equivalent to the Pig command: `name=[value]`).
        scriptVariables?: any,
        // [Optional] A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.
        properties?: any,
        // [Optional] HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
        jarFileUris?: string[],        
        // [Optional] The runtime log config for job execution.
        loggingConfig?: LoggingConfig,
    }
    
    interface SparkSqlJob {
        // The HCFS URI of the script that contains SQL queries.
        queryFileUri?: string,
        // A list of queries.
        queryList?: QueryList,
        // [Optional] Mapping of query variable names to values (equivalent to the Spark SQL command: SET `name="value";`).
        scriptVariables?: any,
        // [Optional] A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Cloud Dataproc API may be overwritten.
        properties?: any,
        // [Optional] HCFS URIs of jar files to be added to the Spark CLASSPATH.
        jarFileUris?: string[],        
        // [Optional] The runtime log config for job execution.
        loggingConfig?: LoggingConfig,
    }
    
    interface JobStatus {
        // [Required] A state message specifying the overall job state.
        state?: string,
        // [Optional] Job state details, such as an error description if the state is ERROR.
        details?: string,
        // [Output-only] The time when this state was entered.
        stateStartTime?: string,
    }
    
    interface ListJobsResponse {
        // [Output-only] Jobs list.
        jobs?: Job[],        
        // [Optional] This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the `page_token` in a subsequent ListJobsRequest.
        nextPageToken?: string,
    }
    
    interface CancelJobRequest {
    }
    
    interface Empty {
    }
    
    interface ListOperationsResponse {
        // A list of operations that matches the specified filter in the request.
        operations?: Operation[],        
        // The standard List next-page token.
        nextPageToken?: string,
    }
    
    interface DiagnoseClusterResults {
        // [Output-only] The Google Cloud Storage URI of the diagnostic output. This is a plain text file with a summary of collected diagnostics.
        outputUri?: string,
    }
    
    interface ClusterOperationMetadata {
        // Name of the cluster for the operation.
        clusterName?: string,
        // Cluster UUId for the operation.
        clusterUuid?: string,
        // [Output-only] Current operation status.
        status?: ClusterOperationStatus,
        // [Output-only] The previous operation status.
        statusHistory?: ClusterOperationStatus[],        
        // [Output-only] The operation type.
        operationType?: string,
        // [Output-only] Short description of operation.
        description?: string,
    }
    
    interface ClusterOperationStatus {
        // A message containing the operation state.
        state?: string,
        // A message containing the detailed operation state.
        innerState?: string,
        // A message containing any operation metadata details.
        details?: string,
        // The time this state was entered.
        stateStartTime?: string,
    }
    
    interface DiagnoseClusterOutputLocation {
        // [Output-only] The Google Cloud Storage URI of the diagnostic output. This will be a plain text file with summary of collected diagnostics.
        outputUri?: string,
    }
    
    interface OperationMetadata {
        // A message containing the operation state.
        state?: string,
        // A message containing the detailed operation state.
        innerState?: string,
        // A message containing any operation metadata details.
        details?: string,
        // The time that the operation was requested.
        insertTime?: string,
        // The time that the operation was started by the server.
        startTime?: string,
        // The time that the operation completed.
        endTime?: string,
        // Name of the cluster for the operation.
        clusterName?: string,
        // Cluster UUId for the operation.
        clusterUuid?: string,
        // [Output-only] Current operation status.
        status?: OperationStatus,
        // [Output-only] Previous operation status.
        statusHistory?: OperationStatus[],        
        // [Output-only] The operation type.
        operationType?: string,
        // [Output-only] Short description of operation.
        description?: string,
    }
    
    interface OperationStatus {
        // A message containing the operation state.
        state?: string,
        // A message containing the detailed operation state.
        innerState?: string,
        // A message containing any operation metadata details.
        details?: string,
        // The time this state was entered.
        stateStartTime?: string,
    }
    
    interface MediaResource {
        // Method for media upload. Upload is supported on the URI `/upload/v1/media/{+name}`.
        upload (request: {        
            // Name of the media that is being downloaded. See ByteStream.ReadRequest.resource_name.
            resourceName: string,
        }) : gapi.client.Request<Media>;        
        
        // Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.
        download (request: {        
            // Name of the media that is being downloaded. See ByteStream.ReadRequest.resource_name.
            resourceName: string,
        }) : gapi.client.Request<Media>;        
        
    }
    
    
    interface ClustersResource {
        // Creates a cluster in a project.
        create (request: {        
            // [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
            projectId: string,
            // [Required] The Cloud Dataproc region in which to handle the request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates a cluster in a project.
        patch (request: {        
            // [Required] The ID of the Google Cloud Platform project the cluster belongs to.
            projectId: string,
            // [Required] The Cloud Dataproc region in which to handle the request.
            region: string,
            // [Required] The cluster name.
            clusterName: string,
            // [Required] Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the `PATCH` request body would specify the new value, as follows: { "config":{ "workerConfig":{ "numInstances":"5" } } } Note: Currently, config.worker_config.num_instances is the only field that can be updated.
            updateMask?: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes a cluster in a project.
        delete (request: {        
            // [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
            projectId: string,
            // [Required] The Cloud Dataproc region in which to handle the request.
            region: string,
            // [Required] The cluster name.
            clusterName: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets the resource representation for a cluster in a project.
        get (request: {        
            // [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
            projectId: string,
            // [Required] The Cloud Dataproc region in which to handle the request.
            region: string,
            // [Required] The cluster name.
            clusterName: string,
        }) : gapi.client.Request<Cluster>;        
        
        // Lists all regions/{region}/clusters in a project.
        list (request: {        
            // [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
            projectId: string,
            // [Required] The Cloud Dataproc region in which to handle the request.
            region: string,
            // The standard List page size.
            pageSize?: number,
            // The standard List page token.
            pageToken?: string,
        }) : gapi.client.Request<ListClustersResponse>;        
        
        // Gets cluster diagnostic information. After the operation completes, the Operation.response field contains `DiagnoseClusterOutputLocation`.
        diagnose (request: {        
            // [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
            projectId: string,
            // [Required] The Cloud Dataproc region in which to handle the request.
            region: string,
            // [Required] The cluster name.
            clusterName: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface JobsResource {
        // Submits a job to a cluster.
        submit (request: {        
            // [Required] The ID of the Google Cloud Platform project that the job belongs to.
            projectId: string,
            // [Required] The Cloud Dataproc region in which to handle the request.
            region: string,
        }) : gapi.client.Request<Job>;        
        
        // Gets the resource representation for a job in a project.
        get (request: {        
            // [Required] The ID of the Google Cloud Platform project that the job belongs to.
            projectId: string,
            // [Required] The Cloud Dataproc region in which to handle the request.
            region: string,
            // [Required] The job ID.
            jobId: string,
        }) : gapi.client.Request<Job>;        
        
        // Lists regions/{region}/jobs in a project.
        list (request: {        
            // [Required] The ID of the Google Cloud Platform project that the job belongs to.
            projectId: string,
            // [Required] The Cloud Dataproc region in which to handle the request.
            region: string,
            // [Optional] The number of results to return in each response.
            pageSize?: number,
            // [Optional] The page token, returned by a previous call, to request the next page of results.
            pageToken?: string,
            // [Optional] If set, the returned jobs list includes only jobs that were submitted to the named cluster.
            clusterName?: string,
            // [Optional] Specifies enumerated categories of jobs to list.
            jobStateMatcher?: string,
        }) : gapi.client.Request<ListJobsResponse>;        
        
        // Starts a job cancellation request. To access the job resource after cancellation, call [regions/{region}/jobs.list](/dataproc/reference/rest/v1/projects.regions.jobs/list) or [regions/{region}/jobs.get](/dataproc/reference/rest/v1/projects.regions.jobs/get).
        cancel (request: {        
            // [Required] The ID of the Google Cloud Platform project that the job belongs to.
            projectId: string,
            // [Required] The Cloud Dataproc region in which to handle the request.
            region: string,
            // [Required] The job ID.
            jobId: string,
        }) : gapi.client.Request<Job>;        
        
        // Deletes the job from the project. If the job is active, the delete fails, and the response returns `FAILED_PRECONDITION`.
        delete (request: {        
            // [Required] The ID of the Google Cloud Platform project that the job belongs to.
            projectId: string,
            // [Required] The Cloud Dataproc region in which to handle the request.
            region: string,
            // [Required] The job ID.
            jobId: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface OperationsResource {
        // Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        get (request: {        
            // The name of the operation resource.
            name: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding below allows API services to override the binding to use different resource name schemes, such as `users/*/operations`.
        list (request: {        
            // The name of the operation collection.
            name: string,
            // The standard list filter.
            filter?: string,
            // The standard list page size.
            pageSize?: number,
            // The standard list page token.
            pageToken?: string,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
        // Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation.
        cancel (request: {        
            // The name of the operation resource to be cancelled.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
        delete (request: {        
            // The name of the operation resource to be deleted.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface RegionsResource {
        clusters: ClustersResource,
        jobs: JobsResource,
        operations: OperationsResource,
    }
    
    
    interface ProjectsResource {
        regions: RegionsResource,
    }
    
}

declare module gapi.client.dataproc {
    var media: gapi.client.dataproc.v1.MediaResource; 
    
    var projects: gapi.client.dataproc.v1.ProjectsResource; 
    
}
