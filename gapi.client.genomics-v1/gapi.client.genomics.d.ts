// Type definitions for Google Genomics API v1
// Project: 
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.genomics {
    
    interface ListDatasetsResponse {
        // The list of matching Datasets.
        datasets?: Dataset[],        
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface Dataset {
        // The server-generated dataset ID, unique across all datasets.
        id?: string,
        // The Google Developers Console project ID that this dataset belongs to.
        projectId?: string,
        // The dataset name.
        name?: string,
        // The time this dataset was created, in seconds from the epoch.
        createTime?: string,
    }
    
    interface Empty {
    }
    
    interface UndeleteDatasetRequest {
    }
    
    interface SetIamPolicyRequest {
        // REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
        policy?: Policy,
    }
    
    interface Policy {
        // Version of the `Policy`. The default version is 0.
        version?: number,
        // Associates a list of `members` to a `role`. Multiple `bindings` must not be specified for the same `role`. `bindings` with no members will result in an error.
        bindings?: Binding[],        
        // `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
        etag?: string,
    }
    
    interface Binding {
        // Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required
        role?: string,
        // Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@gmail.com` or `joe@example.com`. * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: A Google Apps domain name that represents all the users of that domain. For example, `google.com` or `example.com`.
        members?: string[],        
    }
    
    interface GetIamPolicyRequest {
    }
    
    interface TestIamPermissionsRequest {
        // REQUIRED: The set of permissions to check for the 'resource'. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. Allowed permissions are: * `genomics.datasets.create` * `genomics.datasets.delete` * `genomics.datasets.get` * `genomics.datasets.list` * `genomics.datasets.update` * `genomics.datasets.getIamPolicy` * `genomics.datasets.setIamPolicy`
        permissions?: string[],        
    }
    
    interface TestIamPermissionsResponse {
        // A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
        permissions?: string[],        
    }
    
    interface Operation {
        // The server-assigned name, which is only unique within the same service that originally returns it. For example: `operations/CJHU7Oi_ChDrveSpBRjfuL-qzoWAgEw`
        name?: string,
        // An OperationMetadata object. This will always be returned with the Operation.
        metadata?: any,
        // If the value is `false`, it means the operation is still in progress. If true, the operation is completed, and either `error` or `response` is available.
        done?: boolean,
        // The error result of the operation in case of failure.
        error?: Status,
        // If importing ReadGroupSets, an ImportReadGroupSetsResponse is returned. If importing Variants, an ImportVariantsResponse is returned. For exports, an empty response is returned.
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
    
    interface ListOperationsResponse {
        // A list of operations that matches the specified filter in the request.
        operations?: Operation[],        
        // The standard List next-page token.
        nextPageToken?: string,
    }
    
    interface CancelOperationRequest {
    }
    
    interface ImportReadGroupSetsRequest {
        // Required. The ID of the dataset these read group sets will belong to. The caller must have WRITE permissions to this dataset.
        datasetId?: string,
        // The reference set to which the imported read group sets are aligned to, if any. The reference names of this reference set must be a superset of those found in the imported file headers. If no reference set id is provided, a best effort is made to associate with a matching reference set.
        referenceSetId?: string,
        // A list of URIs pointing at [BAM files](https://samtools.github.io/hts-specs/SAMv1.pdf) in Google Cloud Storage.
        sourceUris?: string[],        
        // The partition strategy describes how read groups are partitioned into read group sets.
        partitionStrategy?: string,
    }
    
    interface ExportReadGroupSetRequest {
        // Required. The Google Developers Console project ID that owns this export. The caller must have WRITE access to this project.
        projectId?: string,
        // Required. A Google Cloud Storage URI for the exported BAM file. The currently authenticated user must have write access to the new file. An error will be returned if the URI already contains data.
        exportUri?: string,
        // The reference names to export. If this is not specified, all reference sequences, including unmapped reads, are exported. Use `*` to export only unmapped reads.
        referenceNames?: string[],        
    }
    
    interface SearchReadGroupSetsRequest {
        // Restricts this query to read group sets within the given datasets. At least one ID must be provided.
        datasetIds?: string[],        
        // Only return read group sets for which a substring of the name matches this string.
        name?: string,
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
        pageToken?: string,
        // The maximum number of results to return in a single page. If unspecified, defaults to 256. The maximum value is 1024.
        pageSize?: number,
    }
    
    interface SearchReadGroupSetsResponse {
        // The list of matching read group sets.
        readGroupSets?: ReadGroupSet[],        
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface ReadGroupSet {
        // The server-generated read group set ID, unique for all read group sets.
        id?: string,
        // The dataset to which this read group set belongs.
        datasetId?: string,
        // The reference set to which the reads in this read group set are aligned.
        referenceSetId?: string,
        // The read group set name. By default this will be initialized to the sample name of the sequenced data contained in this set.
        name?: string,
        // The filename of the original source file for this read group set, if any.
        filename?: string,
        // The read groups in this set. There are typically 1-10 read groups in a read group set.
        readGroups?: ReadGroup[],        
        // A map of additional read group set information.
        info?: any,
    }
    
    interface ReadGroup {
        // The server-generated read group ID, unique for all read groups. Note: This is different than the @RG ID field in the SAM spec. For that value, see name.
        id?: string,
        // The dataset to which this read group belongs.
        datasetId?: string,
        // The read group name. This corresponds to the @RG ID field in the SAM spec.
        name?: string,
        // A free-form text description of this read group.
        description?: string,
        // A client-supplied sample identifier for the reads in this read group.
        sampleId?: string,
        // The experiment used to generate this read group.
        experiment?: Experiment,
        // The predicted insert size of this read group. The insert size is the length the sequenced DNA fragment from end-to-end, not including the adapters.
        predictedInsertSize?: number,
        // The programs used to generate this read group. Programs are always identical for all read groups within a read group set. For this reason, only the first read group in a returned set will have this field populated.
        programs?: Program[],        
        // The reference set the reads in this read group are aligned to.
        referenceSetId?: string,
        // A map of additional read group information. This must be of the form map (string key mapping to a list of string values).
        info?: any,
    }
    
    interface Experiment {
        // A client-supplied library identifier; a library is a collection of DNA fragments which have been prepared for sequencing from a sample. This field is important for quality control as error or bias can be introduced during sample preparation.
        libraryId?: string,
        // The platform unit used as part of this experiment, for example flowcell-barcode.lane for Illumina or slide for SOLiD. Corresponds to the @RG PU field in the SAM spec.
        platformUnit?: string,
        // The sequencing center used as part of this experiment.
        sequencingCenter?: string,
        // The instrument model used as part of this experiment. This maps to sequencing technology in the SAM spec.
        instrumentModel?: string,
    }
    
    interface Program {
        // The command line used to run this program.
        commandLine?: string,
        // The user specified locally unique ID of the program. Used along with `prevProgramId` to define an ordering between programs.
        id?: string,
        // The display name of the program. This is typically the colloquial name of the tool used, for example 'bwa' or 'picard'.
        name?: string,
        // The ID of the program run before this one.
        prevProgramId?: string,
        // The version of the program run.
        version?: string,
    }
    
    interface ListCoverageBucketsResponse {
        // The length of each coverage bucket in base pairs. Note that buckets at the end of a reference sequence may be shorter. This value is omitted if the bucket width is infinity (the default behaviour, with no range or `targetBucketWidth`).
        bucketWidth?: string,
        // The coverage buckets. The list of buckets is sparse; a bucket with 0 overlapping reads is not returned. A bucket never crosses more than one reference sequence. Each bucket has width `bucketWidth`, unless its end is the end of the reference sequence.
        coverageBuckets?: CoverageBucket[],        
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface CoverageBucket {
        // The genomic coordinate range spanned by this bucket.
        range?: Range,
        // The average number of reads which are aligned to each individual reference base in this bucket.
        meanCoverage?: number,
    }
    
    interface Range {
        // The reference sequence name, for example `chr1`, `1`, or `chrX`.
        referenceName?: string,
        // The start position of the range on the reference, 0-based inclusive.
        start?: string,
        // The end position of the range on the reference, 0-based exclusive.
        end?: string,
    }
    
    interface SearchReadsRequest {
        // The IDs of the read groups sets within which to search for reads. All specified read group sets must be aligned against a common set of reference sequences; this defines the genomic coordinates for the query. Must specify one of `readGroupSetIds` or `readGroupIds`.
        readGroupSetIds?: string[],        
        // The IDs of the read groups within which to search for reads. All specified read groups must belong to the same read group sets. Must specify one of `readGroupSetIds` or `readGroupIds`.
        readGroupIds?: string[],        
        // The reference sequence name, for example `chr1`, `1`, or `chrX`. If set to `*`, only unmapped reads are returned. If unspecified, all reads (mapped and unmapped) are returned.
        referenceName?: string,
        // The start position of the range on the reference, 0-based inclusive. If specified, `referenceName` must also be specified.
        start?: string,
        // The end position of the range on the reference, 0-based exclusive. If specified, `referenceName` must also be specified.
        end?: string,
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
        pageToken?: string,
        // The maximum number of results to return in a single page. If unspecified, defaults to 256. The maximum value is 2048.
        pageSize?: number,
    }
    
    interface SearchReadsResponse {
        // The list of matching alignments sorted by mapped genomic coordinate, if any, ascending in position within the same reference. Unmapped reads, which have no position, are returned contiguously and are sorted in ascending lexicographic order by fragment name.
        alignments?: Read[],        
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface Read {
        // The server-generated read ID, unique across all reads. This is different from the `fragmentName`.
        id?: string,
        // The ID of the read group this read belongs to. A read belongs to exactly one read group. This is a server-generated ID which is distinct from SAM's RG tag (for that value, see ReadGroup.name).
        readGroupId?: string,
        // The ID of the read group set this read belongs to. A read belongs to exactly one read group set.
        readGroupSetId?: string,
        // The fragment name. Equivalent to QNAME (query template name) in SAM.
        fragmentName?: string,
        // The orientation and the distance between reads from the fragment are consistent with the sequencing protocol (SAM flag 0x2).
        properPlacement?: boolean,
        // The fragment is a PCR or optical duplicate (SAM flag 0x400).
        duplicateFragment?: boolean,
        // The observed length of the fragment, equivalent to TLEN in SAM.
        fragmentLength?: number,
        // The read number in sequencing. 0-based and less than numberReads. This field replaces SAM flag 0x40 and 0x80.
        readNumber?: number,
        // The number of reads in the fragment (extension to SAM flag 0x1).
        numberReads?: number,
        // Whether this read did not pass filters, such as platform or vendor quality controls (SAM flag 0x200).
        failedVendorQualityChecks?: boolean,
        // The linear alignment for this alignment record. This field is null for unmapped reads.
        alignment?: LinearAlignment,
        // Whether this alignment is secondary. Equivalent to SAM flag 0x100. A secondary alignment represents an alternative to the primary alignment for this read. Aligners may return secondary alignments if a read can map ambiguously to multiple coordinates in the genome. By convention, each read has one and only one alignment where both `secondaryAlignment` and `supplementaryAlignment` are false.
        secondaryAlignment?: boolean,
        // Whether this alignment is supplementary. Equivalent to SAM flag 0x800. Supplementary alignments are used in the representation of a chimeric alignment. In a chimeric alignment, a read is split into multiple linear alignments that map to different reference contigs. The first linear alignment in the read will be designated as the representative alignment; the remaining linear alignments will be designated as supplementary alignments. These alignments may have different mapping quality scores. In each linear alignment in a chimeric alignment, the read will be hard clipped. The `alignedSequence` and `alignedQuality` fields in the alignment record will only represent the bases for its respective linear alignment.
        supplementaryAlignment?: boolean,
        // The bases of the read sequence contained in this alignment record, **without CIGAR operations applied** (equivalent to SEQ in SAM). `alignedSequence` and `alignedQuality` may be shorter than the full read sequence and quality. This will occur if the alignment is part of a chimeric alignment, or if the read was trimmed. When this occurs, the CIGAR for this read will begin/end with a hard clip operator that will indicate the length of the excised sequence.
        alignedSequence?: string,
        // The quality of the read sequence contained in this alignment record (equivalent to QUAL in SAM). `alignedSequence` and `alignedQuality` may be shorter than the full read sequence and quality. This will occur if the alignment is part of a chimeric alignment, or if the read was trimmed. When this occurs, the CIGAR for this read will begin/end with a hard clip operator that will indicate the length of the excised sequence.
        alignedQuality?: number[],        
        // The mapping of the primary alignment of the `(readNumber+1)%numberReads` read in the fragment. It replaces mate position and mate strand in SAM.
        nextMatePosition?: Position,
        // A map of additional read alignment information. This must be of the form map (string key mapping to a list of string values).
        info?: any,
    }
    
    interface LinearAlignment {
        // The position of this alignment.
        position?: Position,
        // The mapping quality of this alignment. Represents how likely the read maps to this position as opposed to other locations. Specifically, this is -10 log10 Pr(mapping position is wrong), rounded to the nearest integer.
        mappingQuality?: number,
        // Represents the local alignment of this sequence (alignment matches, indels, etc) against the reference.
        cigar?: CigarUnit[],        
    }
    
    interface Position {
        // The name of the reference in whatever reference set is being used.
        referenceName?: string,
        // The 0-based offset from the start of the forward strand for that reference.
        position?: string,
        // Whether this position is on the reverse strand, as opposed to the forward strand.
        reverseStrand?: boolean,
    }
    
    interface CigarUnit {
        // 
        operation?: string,
        // The number of genomic bases that the operation runs for. Required.
        operationLength?: string,
        // `referenceSequence` is only used at mismatches (`SEQUENCE_MISMATCH`) and deletions (`DELETE`). Filling this field replaces SAM's MD tag. If the relevant information is not available, this field is unset.
        referenceSequence?: string,
    }
    
    interface StreamReadsRequest {
        // The Google Developers Console project ID or number which will be billed for this access. The caller must have WRITE access to this project. Required.
        projectId?: string,
        // The ID of the read group set from which to stream reads.
        readGroupSetId?: string,
        // The reference sequence name, for example `chr1`, `1`, or `chrX`. If set to *, only unmapped reads are returned.
        referenceName?: string,
        // The start position of the range on the reference, 0-based inclusive. If specified, `referenceName` must also be specified.
        start?: string,
        // The end position of the range on the reference, 0-based exclusive. If specified, `referenceName` must also be specified.
        end?: string,
        // Restricts results to a shard containing approximately `1/totalShards` of the normal response payload for this query. Results from a sharded request are disjoint from those returned by all queries which differ only in their shard parameter. A shard may yield 0 results; this is especially likely for large values of `totalShards`. Valid values are `[0, totalShards)`.
        shard?: number,
        // Specifying `totalShards` causes a disjoint subset of the normal response payload to be returned for each query with a unique `shard` parameter specified. A best effort is made to yield equally sized shards. Sharding can be used to distribute processing amongst workers, where each worker is assigned a unique `shard` number and all workers specify the same `totalShards` number. The union of reads returned for all sharded queries `[0, totalShards)` is equal to those returned by a single unsharded query. Queries for different values of `totalShards` with common divisors will share shard boundaries. For example, streaming `shard` 2 of 5 `totalShards` yields the same results as streaming `shard`s 4 and 5 of 10 `totalShards`. This property can be leveraged for adaptive retries.
        totalShards?: number,
    }
    
    interface StreamReadsResponse {
        // 
        alignments?: Read[],        
    }
    
    interface SearchReferenceSetsRequest {
        // If present, return reference sets for which the md5checksum matches exactly.
        md5checksums?: string[],        
        // If present, return reference sets for which a prefix of any of sourceAccessions match any of these strings. Accession numbers typically have a main number and a version, for example `NC_000001.11`.
        accessions?: string[],        
        // If present, return reference sets for which a substring of their `assemblyId` matches this string (case insensitive).
        assemblyId?: string,
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
        pageToken?: string,
        // The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 4096.
        pageSize?: number,
    }
    
    interface SearchReferenceSetsResponse {
        // The matching references sets.
        referenceSets?: ReferenceSet[],        
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface ReferenceSet {
        // The server-generated reference set ID, unique across all reference sets.
        id?: string,
        // The IDs of the reference objects that are part of this set. `Reference.md5checksum` must be unique within this set.
        referenceIds?: string[],        
        // Order-independent MD5 checksum which identifies this reference set. The checksum is computed by sorting all lower case hexidecimal string `reference.md5checksum` (for all reference in this set) in ascending lexicographic order, concatenating, and taking the MD5 of that value. The resulting value is represented in lower case hexadecimal format.
        md5checksum?: string,
        // ID from http://www.ncbi.nlm.nih.gov/taxonomy (for example, 9606 for human) indicating the species which this reference set is intended to model. Note that contained references may specify a different `ncbiTaxonId`, as assemblies may contain reference sequences which do not belong to the modeled species, for example EBV in a human reference genome.
        ncbiTaxonId?: number,
        // Free text description of this reference set.
        description?: string,
        // Public id of this reference set, such as `GRCh37`.
        assemblyId?: string,
        // The URI from which the references were obtained.
        sourceUri?: string,
        // All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally with a version number, for example `NC_000001.11`.
        sourceAccessions?: string[],        
    }
    
    interface SearchReferencesRequest {
        // If present, return references for which the md5checksum matches exactly.
        md5checksums?: string[],        
        // If present, return references for which a prefix of any of sourceAccessions match any of these strings. Accession numbers typically have a main number and a version, for example `GCF_000001405.26`.
        accessions?: string[],        
        // If present, return only references which belong to this reference set.
        referenceSetId?: string,
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
        pageToken?: string,
        // The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 4096.
        pageSize?: number,
    }
    
    interface SearchReferencesResponse {
        // The matching references.
        references?: Reference[],        
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface Reference {
        // The server-generated reference ID, unique across all references.
        id?: string,
        // The length of this reference's sequence.
        length?: string,
        // MD5 of the upper-case sequence excluding all whitespace characters (this is equivalent to SQ:M5 in SAM). This value is represented in lower case hexadecimal format.
        md5checksum?: string,
        // The name of this reference, for example `22`.
        name?: string,
        // The URI from which the sequence was obtained. Typically specifies a FASTA format file.
        sourceUri?: string,
        // All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally with a version number, for example `GCF_000001405.26`.
        sourceAccessions?: string[],        
        // ID from http://www.ncbi.nlm.nih.gov/taxonomy. For example, 9606 for human.
        ncbiTaxonId?: number,
    }
    
    interface ListBasesResponse {
        // The offset position (0-based) of the given `sequence` from the start of this `Reference`. This value will differ for each page in a paginated request.
        offset?: string,
        // A substring of the bases that make up this reference.
        sequence?: string,
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface ImportVariantsRequest {
        // Required. The variant set to which variant data should be imported.
        variantSetId?: string,
        // A list of URIs referencing variant files in Google Cloud Storage. URIs can include wildcards [as described here](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames). Note that recursive wildcards ('**') are not supported.
        sourceUris?: string[],        
        // The format of the variant data being imported. If unspecified, defaults to to `VCF`.
        format?: string,
        // Convert reference names to the canonical representation. hg19 haploytypes (those reference names containing "_hap") are not modified in any way. All other reference names are modified according to the following rules: The reference name is capitalized. The "chr" prefix is dropped for all autosomes and sex chromsomes. For example "chr17" becomes "17" and "chrX" becomes "X". All mitochondrial chromosomes ("chrM", "chrMT", etc) become "MT".
        normalizeReferenceNames?: boolean,
    }
    
    interface VariantSet {
        // The dataset to which this variant set belongs.
        datasetId?: string,
        // The server-generated variant set ID, unique across all variant sets.
        id?: string,
        // The reference set to which the variant set is mapped. The reference set describes the alignment provenance of the variant set, while the `referenceBounds` describe the shape of the actual variant data. The reference set's reference names are a superset of those found in the `referenceBounds`. For example, given a variant set that is mapped to the GRCh38 reference set and contains a single variant on reference 'X', `referenceBounds` would contain only an entry for 'X', while the associated reference set enumerates all possible references: '1', '2', 'X', 'Y', 'MT', etc.
        referenceSetId?: string,
        // A list of all references used by the variants in a variant set with associated coordinate upper bounds for each one.
        referenceBounds?: ReferenceBound[],        
        // The metadata associated with this variant set.
        metadata?: VariantSetMetadata[],        
    }
    
    interface ReferenceBound {
        // The name of the reference associated with this reference bound.
        referenceName?: string,
        // An upper bound (inclusive) on the starting coordinate of any variant in the reference sequence.
        upperBound?: string,
    }
    
    interface VariantSetMetadata {
        // The top-level key.
        key?: string,
        // The value field for simple metadata
        value?: string,
        // User-provided ID field, not enforced by this API. Two or more pieces of structured metadata with identical id and key fields are considered equivalent.
        id?: string,
        // The type of data. Possible types include: Integer, Float, Flag, Character, and String.
        type?: string,
        // The number of values that can be included in a field described by this metadata.
        number?: string,
        // A textual description of this metadata.
        description?: string,
        // Remaining structured metadata key-value pairs. This must be of the form map (string key mapping to a list of string values).
        info?: any,
    }
    
    interface ExportVariantSetRequest {
        // If provided, only variant call information from the specified call sets will be exported. By default all variant calls are exported.
        callSetIds?: string[],        
        // Required. The Google Cloud project ID that owns the destination BigQuery dataset. The caller must have WRITE access to this project. This project will also own the resulting export job.
        projectId?: string,
        // The format for the exported data.
        format?: string,
        // Required. The BigQuery dataset to export data to. This dataset must already exist. Note that this is distinct from the Genomics concept of "dataset".
        bigqueryDataset?: string,
        // Required. The BigQuery table to export data to. If the table doesn't exist, it will be created. If it already exists, it will be overwritten.
        bigqueryTable?: string,
    }
    
    interface SearchVariantSetsRequest {
        // Exactly one dataset ID must be provided here. Only variant sets which belong to this dataset will be returned.
        datasetIds?: string[],        
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
        pageToken?: string,
        // The maximum number of results to return in a single page. If unspecified, defaults to 1024.
        pageSize?: number,
    }
    
    interface SearchVariantSetsResponse {
        // The variant sets belonging to the requested dataset.
        variantSets?: VariantSet[],        
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface SearchVariantsRequest {
        // At most one variant set ID must be provided. Only variants from this variant set will be returned. If omitted, a call set id must be included in the request.
        variantSetIds?: string[],        
        // Only return variants which have exactly this name.
        variantName?: string,
        // Only return variant calls which belong to call sets with these ids. Leaving this blank returns all variant calls. If a variant has no calls belonging to any of these call sets, it won't be returned at all. Currently, variants with no calls from any call set will never be returned.
        callSetIds?: string[],        
        // Required. Only return variants in this reference sequence.
        referenceName?: string,
        // The beginning of the window (0-based, inclusive) for which overlapping variants should be returned. If unspecified, defaults to 0.
        start?: string,
        // The end of the window, 0-based exclusive. If unspecified or 0, defaults to the length of the reference.
        end?: string,
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
        pageToken?: string,
        // The maximum number of variants to return in a single page. If unspecified, defaults to 5000. The maximum value is 10000.
        pageSize?: number,
        // The maximum number of calls to return in a single page. Note that this limit may be exceeded in the event that a matching variant contains more calls than the requested maximum. If unspecified, defaults to 5000. The maximum value is 10000.
        maxCalls?: number,
    }
    
    interface SearchVariantsResponse {
        // The list of matching Variants.
        variants?: Variant[],        
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface Variant {
        // The ID of the variant set this variant belongs to.
        variantSetId?: string,
        // The server-generated variant ID, unique across all variants.
        id?: string,
        // Names for the variant, for example a RefSNP ID.
        names?: string[],        
        // The date this variant was created, in milliseconds from the epoch.
        created?: string,
        // The reference on which this variant occurs. (such as `chr20` or `X`)
        referenceName?: string,
        // The position at which this variant occurs (0-based). This corresponds to the first base of the string of reference bases.
        start?: string,
        // The end position (0-based) of this variant. This corresponds to the first base after the last base in the reference allele. So, the length of the reference allele is (end - start). This is useful for variants that don't explicitly give alternate bases, for example large deletions.
        end?: string,
        // The reference bases for this variant. They start at the given position.
        referenceBases?: string,
        // The bases that appear instead of the reference bases.
        alternateBases?: string[],        
        // A measure of how likely this variant is to be real. A higher value is better.
        quality?: number,
        // A list of filters (normally quality filters) this variant has failed. `PASS` indicates this variant has passed all filters.
        filter?: string[],        
        // A map of additional variant information. This must be of the form map (string key mapping to a list of string values).
        info?: any,
        // The variant calls for this particular variant. Each one represents the determination of genotype with respect to this variant.
        calls?: VariantCall[],        
    }
    
    interface VariantCall {
        // The ID of the call set this variant call belongs to.
        callSetId?: string,
        // The name of the call set this variant call belongs to.
        callSetName?: string,
        // The genotype of this variant call. Each value represents either the value of the `referenceBases` field or a 1-based index into `alternateBases`. If a variant had a `referenceBases` value of `T` and an `alternateBases` value of `["A", "C"]`, and the `genotype` was `[2, 1]`, that would mean the call represented the heterozygous value `CA` for this variant. If the `genotype` was instead `[0, 1]`, the represented value would be `TA`. Ordering of the genotype values is important if the `phaseset` is present. If a genotype is not called (that is, a `.` is present in the GT string) -1 is returned.
        genotype?: number[],        
        // If this field is present, this variant call's genotype ordering implies the phase of the bases and is consistent with any other variant calls in the same reference sequence which have the same phaseset value. When importing data from VCF, if the genotype data was phased but no phase set was specified this field will be set to `*`.
        phaseset?: string,
        // The genotype likelihoods for this variant call. Each array entry represents how likely a specific genotype is for this call. The value ordering is defined by the GL tag in the VCF spec. If Phred-scaled genotype likelihood scores (PL) are available and log10(P) genotype likelihood scores (GL) are not, PL scores are converted to GL scores. If both are available, PL scores are stored in `info`.
        genotypeLikelihood?: number[],        
        // A map of additional variant call information. This must be of the form map (string key mapping to a list of string values).
        info?: any,
    }
    
    interface MergeVariantsRequest {
        // The destination variant set.
        variantSetId?: string,
        // The variants to be merged with existing variants.
        variants?: Variant[],        
    }
    
    interface SearchCallSetsRequest {
        // Restrict the query to call sets within the given variant sets. At least one ID must be provided.
        variantSetIds?: string[],        
        // Only return call sets for which a substring of the name matches this string.
        name?: string,
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
        pageToken?: string,
        // The maximum number of results to return in a single page. If unspecified, defaults to 1024.
        pageSize?: number,
    }
    
    interface SearchCallSetsResponse {
        // The list of matching call sets.
        callSets?: CallSet[],        
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface CallSet {
        // The server-generated call set ID, unique across all call sets.
        id?: string,
        // The call set name.
        name?: string,
        // The sample ID this call set corresponds to.
        sampleId?: string,
        // The IDs of the variant sets this call set belongs to. This field must have exactly length one, as a call set belongs to a single variant set. This field is repeated for compatibility with the [GA4GH 0.5.1 API](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variants.avdl#L76).
        variantSetIds?: string[],        
        // The date this call set was created in milliseconds from the epoch.
        created?: string,
        // A map of additional call set information. This must be of the form map (string key mapping to a list of string values).
        info?: any,
    }
    
    interface StreamVariantsRequest {
        // The Google Developers Console project ID or number which will be billed for this access. The caller must have WRITE access to this project. Required.
        projectId?: string,
        // The variant set ID from which to stream variants.
        variantSetId?: string,
        // Only return variant calls which belong to call sets with these IDs. Leaving this blank returns all variant calls.
        callSetIds?: string[],        
        // Required. Only return variants in this reference sequence.
        referenceName?: string,
        // The beginning of the window (0-based, inclusive) for which overlapping variants should be returned.
        start?: string,
        // The end of the window (0-based, exclusive) for which overlapping variants should be returned.
        end?: string,
    }
    
    interface StreamVariantsResponse {
        // 
        variants?: Variant[],        
    }
    
    interface ImportReadGroupSetsResponse {
        // IDs of the read group sets that were created.
        readGroupSetIds?: string[],        
    }
    
    interface ImportVariantsResponse {
        // IDs of the call sets created during the import.
        callSetIds?: string[],        
    }
    
    interface OperationMetadata {
        // The Google Cloud Project in which the job is scoped.
        projectId?: string,
        // The time at which the job was submitted to the Genomics service.
        createTime?: string,
        // The original request that started the operation. Note that this will be in current version of the API. If the operation was started with v1beta2 API and a GetOperation is performed on v1 API, a v1 request will be returned.
        request?: any,
        // Optional event messages that were generated during the job's execution. This also contains any warnings that were generated during import or export.
        events?: OperationEvent[],        
    }
    
    interface OperationEvent {
        // Required description of event.
        description?: string,
    }
    
    interface DatasetsResource {
        // Lists datasets within a project. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        list (request: {        
            // Required. The project to list datasets for.
            projectId?: string,
            // The maximum number of results to return in a single page. If unspecified, defaults to 50. The maximum value is 1024.
            pageSize?: number,
            // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<ListDatasetsResponse>;        
        
        // Creates a new dataset. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        create (request: {        
        }) : gapi.client.Request<Dataset>;        
        
        // Gets a dataset by ID. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        get (request: {        
            // The ID of the dataset.
            datasetId: string,
        }) : gapi.client.Request<Dataset>;        
        
        // Updates a dataset. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) This method supports patch semantics.
        patch (request: {        
            // The ID of the dataset to be updated.
            datasetId: string,
            // An optional mask specifying which fields to update. At this time, the only mutable field is name. The only acceptable value is "name". If unspecified, all mutable fields will be updated.
            updateMask?: string,
        }) : gapi.client.Request<Dataset>;        
        
        // Deletes a dataset. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        delete (request: {        
            // The ID of the dataset to be deleted.
            datasetId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Undeletes a dataset by restoring a dataset which was deleted via this API. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) This operation is only possible for a week after the deletion occurred.
        undelete (request: {        
            // The ID of the dataset to be undeleted.
            datasetId: string,
        }) : gapi.client.Request<Dataset>;        
        
        // Sets the access control policy on the specified dataset. Replaces any existing policy. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) See Setting a Policy for more information.
        setIamPolicy (request: {        
            // REQUIRED: The resource for which policy is being specified. Format is `datasets/`.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Gets the access control policy for the dataset. This is empty if the policy or resource does not exist. See Getting a Policy for more information. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        getIamPolicy (request: {        
            // REQUIRED: The resource for which policy is being specified. Format is `datasets/`.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Returns permissions that a caller has on the specified resource. See Testing Permissions for more information. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        testIamPermissions (request: {        
            // REQUIRED: The resource for which policy is being specified. Format is `datasets/`.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
    }
    
    
    interface OperationsResource {
        // Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        get (request: {        
            // The name of the operation resource.
            name: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists operations that match the specified filter in the request.
        list (request: {        
            // The name of the operation collection.
            name: string,
            // A string for filtering Operations. The following filter fields are supported: * projectId: Required. Corresponds to OperationMetadata.projectId. * createTime: The time this job was created, in seconds from the [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `= 1432140000` * `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING`
            filter?: string,
            // The maximum number of results to return. If unspecified, defaults to 256. The maximum value is 2048.
            pageSize?: number,
            // The standard list page token.
            pageToken?: string,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
        // Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation.
        cancel (request: {        
            // The name of the operation resource to be cancelled.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface CoveragebucketsResource {
        // Lists fixed width coverage buckets for a read group set, each of which correspond to a range of a reference sequence. Each bucket summarizes coverage information across its corresponding genomic range. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Coverage is defined as the number of reads which are aligned to a given base in the reference sequence. Coverage buckets are available at several precomputed bucket widths, enabling retrieval of various coverage 'zoom levels'. The caller must have READ permissions for the target read group set.
        list (request: {        
            // Required. The ID of the read group set over which coverage is requested.
            readGroupSetId: string,
            // The name of the reference to query, within the reference set associated with this query. Optional.
            referenceName?: string,
            // The start position of the range on the reference, 0-based inclusive. If specified, `referenceName` must also be specified. Defaults to 0.
            start?: string,
            // The end position of the range on the reference, 0-based exclusive. If specified, `referenceName` must also be specified. If unset or 0, defaults to the length of the reference.
            end?: string,
            // The desired width of each reported coverage bucket in base pairs. This will be rounded down to the nearest precomputed bucket width; the value of which is returned as `bucketWidth` in the response. Defaults to infinity (each bucket spans an entire reference sequence) or the length of the target range, if specified. The smallest precomputed `bucketWidth` is currently 2048 base pairs; this is subject to change.
            targetBucketWidth?: string,
            // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
            pageToken?: string,
            // The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 2048.
            pageSize?: number,
        }) : gapi.client.Request<ListCoverageBucketsResponse>;        
        
    }
    
    
    interface ReadgroupsetsResource {
        // Creates read group sets by asynchronously importing the provided information. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) The caller must have WRITE permissions to the dataset. ## Notes on [BAM](https://samtools.github.io/hts-specs/SAMv1.pdf) import - Tags will be converted to strings - tag types are not preserved - Comments (`@CO`) in the input file header will not be preserved - Original header order of references (`@SQ`) will not be preserved - Any reverse stranded unmapped reads will be reverse complemented, and their qualities (also the "BQ" and "OQ" tags, if any) will be reversed - Unmapped reads will be stripped of positional information (reference name and position)
        import (request: {        
        }) : gapi.client.Request<Operation>;        
        
        // Exports a read group set to a BAM file in Google Cloud Storage. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Note that currently there may be some differences between exported BAM files and the original BAM file at the time of import. See [ImportReadGroupSets](google.genomics.v1.ReadServiceV1.ImportReadGroupSets) for caveats.
        export (request: {        
            // Required. The ID of the read group set to export. The caller must have READ access to this read group set.
            readGroupSetId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Searches for read group sets matching the criteria. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.searchReadGroupSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L135).
        search (request: {        
        }) : gapi.client.Request<SearchReadGroupSetsResponse>;        
        
        // Updates a read group set. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) This method supports patch semantics.
        patch (request: {        
            // The ID of the read group set to be updated. The caller must have WRITE permissions to the dataset associated with this read group set.
            readGroupSetId: string,
            // An optional mask specifying which fields to update. Supported fields: * name. * referenceSetId. Leaving `updateMask` unset is equivalent to specifying all mutable fields.
            updateMask?: string,
        }) : gapi.client.Request<ReadGroupSet>;        
        
        // Deletes a read group set. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        delete (request: {        
            // The ID of the read group set to be deleted. The caller must have WRITE permissions to the dataset associated with this read group set.
            readGroupSetId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets a read group set by ID. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        get (request: {        
            // The ID of the read group set.
            readGroupSetId: string,
        }) : gapi.client.Request<ReadGroupSet>;        
        
        coveragebuckets: CoveragebucketsResource,
    }
    
    
    interface ReadsResource {
        // Gets a list of reads for one or more read group sets. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Reads search operates over a genomic coordinate space of reference sequence & position defined over the reference sequences to which the requested read group sets are aligned. If a target positional range is specified, search returns all reads whose alignment to the reference genome overlap the range. A query which specifies only read group set IDs yields all reads in those read group sets, including unmapped reads. All reads returned (including reads on subsequent pages) are ordered by genomic coordinate (by reference sequence, then position). Reads with equivalent genomic coordinates are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield reads in the same order across their respective streams of paginated responses. Implements [GlobalAllianceApi.searchReads](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L85).
        search (request: {        
        }) : gapi.client.Request<SearchReadsResponse>;        
        
        // Returns a stream of all the reads matching the search request, ordered by reference name, position, and ID.
        stream (request: {        
        }) : gapi.client.Request<StreamReadsResponse>;        
        
    }
    
    
    interface ReferencesetsResource {
        // Searches for reference sets which match the given criteria. For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.searchReferenceSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L71)
        search (request: {        
        }) : gapi.client.Request<SearchReferenceSetsResponse>;        
        
        // Gets a reference set. For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.getReferenceSet](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L83).
        get (request: {        
            // The ID of the reference set.
            referenceSetId: string,
        }) : gapi.client.Request<ReferenceSet>;        
        
    }
    
    
    interface BasesResource {
        // Lists the bases in a reference, optionally restricted to a range. For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.getReferenceBases](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L221).
        list (request: {        
            // The ID of the reference.
            referenceId: string,
            // The start position (0-based) of this query. Defaults to 0.
            start?: string,
            // The end position (0-based, exclusive) of this query. Defaults to the length of this reference.
            end?: string,
            // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
            pageToken?: string,
            // The maximum number of bases to return in a single page. If unspecified, defaults to 200Kbp (kilo base pairs). The maximum value is 10Mbp (mega base pairs).
            pageSize?: number,
        }) : gapi.client.Request<ListBasesResponse>;        
        
    }
    
    
    interface ReferencesResource {
        // Searches for references which match the given criteria. For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.searchReferences](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L146).
        search (request: {        
        }) : gapi.client.Request<SearchReferencesResponse>;        
        
        // Gets a reference. For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.getReference](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L158).
        get (request: {        
            // The ID of the reference.
            referenceId: string,
        }) : gapi.client.Request<Reference>;        
        
        bases: BasesResource,
    }
    
    
    interface VariantsResource {
        // Creates variant data by asynchronously importing the provided information. For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) The variants for import will be merged with any existing variant that matches its reference sequence, start, end, reference bases, and alternative bases. If no such variant exists, a new one will be created. When variants are merged, the call information from the new variant is added to the existing variant, and other fields (such as key/value pairs) are discarded. In particular, this means for merged VCF variants that have conflicting INFO fields, some data will be arbitrarily discarded. As a special case, for single-sample VCF files, QUAL and FILTER fields will be moved to the call level; these are sometimes interpreted in a call-specific context. Imported VCF headers are appended to the metadata already in a variant set.
        import (request: {        
        }) : gapi.client.Request<Operation>;        
        
        // Gets a list of variants matching the criteria. For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.searchVariants](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L126).
        search (request: {        
        }) : gapi.client.Request<SearchVariantsResponse>;        
        
        // Creates a new variant. For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        create (request: {        
        }) : gapi.client.Request<Variant>;        
        
        // Updates a variant. For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) This method supports patch semantics. Returns the modified variant without its calls.
        patch (request: {        
            // The ID of the variant to be updated.
            variantId: string,
            // An optional mask specifying which fields to update. At this time, mutable fields are names and info. Acceptable values are "names" and "info". If unspecified, all mutable fields will be updated.
            updateMask?: string,
        }) : gapi.client.Request<Variant>;        
        
        // Deletes a variant. For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        delete (request: {        
            // The ID of the variant to be deleted.
            variantId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets a variant by ID. For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        get (request: {        
            // The ID of the variant.
            variantId: string,
        }) : gapi.client.Request<Variant>;        
        
        // Merges the given variants with existing variants. For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Each variant will be merged with an existing variant that matches its reference sequence, start, end, reference bases, and alternative bases. If no such variant exists, a new one will be created. When variants are merged, the call information from the new variant is added to the existing variant, and other fields (such as key/value pairs) are discarded.
        merge (request: {        
        }) : gapi.client.Request<Empty>;        
        
        // Returns a stream of all the variants matching the search request, ordered by reference name, position, and ID.
        stream (request: {        
        }) : gapi.client.Request<StreamVariantsResponse>;        
        
    }
    
    
    interface VariantsetsResource {
        // Creates a new variant set. For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) The provided variant set must have a valid `datasetId` set - all other fields are optional. Note that the `id` field will be ignored, as this is assigned by the server.
        create (request: {        
        }) : gapi.client.Request<VariantSet>;        
        
        // Exports variant set data to an external destination. For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        export (request: {        
            // Required. The ID of the variant set that contains variant data which should be exported. The caller must have READ access to this variant set.
            variantSetId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets a variant set by ID. For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        get (request: {        
            // Required. The ID of the variant set.
            variantSetId: string,
        }) : gapi.client.Request<VariantSet>;        
        
        // Returns a list of all variant sets matching search criteria. For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.searchVariantSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L49).
        search (request: {        
        }) : gapi.client.Request<SearchVariantSetsResponse>;        
        
        // Deletes a variant set including all variants, call sets, and calls within. This is not reversible. For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        delete (request: {        
            // The ID of the variant set to be deleted.
            variantSetId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Updates a variant set using patch semantics. For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        patch (request: {        
            // The ID of the variant to be updated (must already exist).
            variantSetId: string,
            // An optional mask specifying which fields to update. Supported fields: * metadata. Leaving `updateMask` unset is equivalent to specifying all mutable fields.
            updateMask?: string,
        }) : gapi.client.Request<VariantSet>;        
        
    }
    
    
    interface CallsetsResource {
        // Gets a list of call sets matching the criteria. For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.searchCallSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L178).
        search (request: {        
        }) : gapi.client.Request<SearchCallSetsResponse>;        
        
        // Creates a new call set. For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        create (request: {        
        }) : gapi.client.Request<CallSet>;        
        
        // Updates a call set. For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) This method supports patch semantics.
        patch (request: {        
            // The ID of the call set to be updated.
            callSetId: string,
            // An optional mask specifying which fields to update. At this time, the only mutable field is name. The only acceptable value is "name". If unspecified, all mutable fields will be updated.
            updateMask?: string,
        }) : gapi.client.Request<CallSet>;        
        
        // Deletes a call set. For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        delete (request: {        
            // The ID of the call set to be deleted.
            callSetId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets a call set by ID. For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        get (request: {        
            // The ID of the call set.
            callSetId: string,
        }) : gapi.client.Request<CallSet>;        
        
    }
    
}

declare module gapi.client.genomics {
    var datasets: gapi.client.genomics.DatasetsResource; 
    
    var operations: gapi.client.genomics.OperationsResource; 
    
    var readgroupsets: gapi.client.genomics.ReadgroupsetsResource; 
    
    var reads: gapi.client.genomics.ReadsResource; 
    
    var referencesets: gapi.client.genomics.ReferencesetsResource; 
    
    var references: gapi.client.genomics.ReferencesResource; 
    
    var variants: gapi.client.genomics.VariantsResource; 
    
    var variantsets: gapi.client.genomics.VariantsetsResource; 
    
    var callsets: gapi.client.genomics.CallsetsResource; 
    
}
