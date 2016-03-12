// Type definitions for Google Genomics API v1beta2
// Project: https://developers.google.com/genomics/v1beta2/reference
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.genomics {
    
    interface Annotation {
        // The annotation set to which this annotation belongs.
        annotationSetId?: string,
        // The server-generated annotation ID, unique across all annotations.
        id?: string,
        // A string which maps to an array of values.
        info?: any,
        // The display name of this annotation.
        name?: string,
        // The position of this annotation on the reference sequence.
        position?: RangePosition,
        // A transcript value represents the assertion that a particular region of the reference genome may be transcribed as RNA. An alternative splicing pattern would be represented as a separate transcript object. This field is only set for annotations of type TRANSCRIPT.
        transcript?: Transcript,
        // The data type for this annotation. Must match the containing annotation set's type.
        type?: string,
        // A variant annotation, which describes the effect of a variant on the genome, the coding sequence, and/or higher level consequences at the organism level e.g. pathogenicity. This field is only set for annotations of type VARIANT.
        variant?: VariantAnnotation,
    }
    
    interface AnnotationSet {
        // The dataset to which this annotation set belongs.
        datasetId?: string,
        // The server-generated annotation set ID, unique across all annotation sets.
        id?: string,
        // A string which maps to an array of values.
        info?: any,
        // The display name for this annotation set.
        name?: string,
        // The ID of the reference set that defines the coordinate space for this set's annotations.
        referenceSetId?: string,
        // The source URI describing the file from which this annotation set was generated, if any.
        sourceUri?: string,
        // The type of annotations contained within this set.
        type?: string,
    }
    
    interface BatchAnnotationsResponse {
        // The resulting per-annotation entries, ordered consistently with the original request.
        entries?: BatchAnnotationsResponseEntry[],        
    }
    
    interface BatchAnnotationsResponseEntry {
        // The annotation, if any.
        annotation?: Annotation,
        // The resulting status for this annotation operation.
        status?: BatchAnnotationsResponseEntryStatus,
    }
    
    interface BatchAnnotationsResponseEntryStatus {
        // The HTTP status code for this operation.
        code?: number,
        // Error message for this status, if any.
        message?: string,
    }
    
    interface BatchCreateAnnotationsRequest {
        // The annotations to be created. At most 4096 can be specified in a single request.
        annotations?: Annotation[],        
    }
    
    interface Call {
        // The ID of the call set this variant call belongs to.
        callSetId?: string,
        // The name of the call set this variant call belongs to.
        callSetName?: string,
        // The genotype of this variant call. Each value represents either the value of the referenceBases field or a 1-based index into alternateBases. If a variant had a referenceBases value of T and an alternateBases value of ["A", "C"], and the genotype was [2, 1], that would mean the call represented the heterozygous value CA for this variant. If the genotype was instead [0, 1], the represented value would be TA. Ordering of the genotype values is important if the phaseset is present. If a genotype is not called (that is, a . is present in the GT string) -1 is returned.
        genotype?: number[],        
        // The genotype likelihoods for this variant call. Each array entry represents how likely a specific genotype is for this call. The value ordering is defined by the GL tag in the VCF spec. If Phred-scaled genotype likelihood scores (PL) are available and log10(P) genotype likelihood scores (GL) are not, PL scores are converted to GL scores. If both are available, PL scores are stored in info.
        genotypeLikelihood?: number[],        
        // A string which maps to an array of values.
        info?: any,
        // If this field is present, this variant call's genotype ordering implies the phase of the bases and is consistent with any other variant calls in the same reference sequence which have the same phaseset value. When importing data from VCF, if the genotype data was phased but no phase set was specified this field will be set to *.
        phaseset?: string,
    }
    
    interface CallSet {
        // The date this call set was created in milliseconds from the epoch.
        created?: string,
        // The Google generated ID of the call set, immutable.
        id?: string,
        // A string which maps to an array of values.
        info?: any,
        // The call set name.
        name?: string,
        // The sample ID this call set corresponds to.
        sampleId?: string,
        // The IDs of the variant sets this call set belongs to.
        variantSetIds?: string[],        
    }
    
    interface CigarUnit {
        // 
        operation?: string,
        // The number of bases that the operation runs for. Required.
        operationLength?: string,
        // referenceSequence is only used at mismatches (SEQUENCE_MISMATCH) and deletions (DELETE). Filling this field replaces SAM's MD tag. If the relevant information is not available, this field is unset.
        referenceSequence?: string,
    }
    
    interface CoverageBucket {
        // The average number of reads which are aligned to each individual reference base in this bucket.
        meanCoverage?: number,
        // The genomic coordinate range spanned by this bucket.
        range?: Range,
    }
    
    interface Dataset {
        // The time this dataset was created, in seconds from the epoch.
        createTime?: string,
        // The Google generated ID of the dataset, immutable.
        id?: string,
        // Flag indicating whether or not a dataset is publicly viewable. If a dataset is not public, it inherits viewing permissions from its project.
        isPublic?: boolean,
        // The dataset name.
        name?: string,
        // The Google Developers Console project number that this dataset belongs to.
        projectNumber?: string,
    }
    
    interface ExperimentalCreateJobRequest {
        // Specifies whether or not to run the alignment pipeline. Either align or callVariants must be set.
        align?: boolean,
        // Specifies whether or not to run the variant calling pipeline. Either align or callVariants must be set.
        callVariants?: boolean,
        // Specifies where to copy the results of certain pipelines. This should be in the form of gs://bucket/path.
        gcsOutputPath?: string,
        // A list of Google Cloud Storage URIs of paired end .fastq files to operate upon. If specified, this represents the second file of each paired .fastq file. The first file of each pair should be specified in sourceUris.
        pairedSourceUris?: string[],        
        // Required. The Google Cloud Project ID with which to associate the request.
        projectNumber?: string,
        // A list of Google Cloud Storage URIs of data files to operate upon. These can be .bam, interleaved .fastq, or paired .fastq. If specifying paired .fastq files, the first of each pair of files should be listed here, and the second of each pair should be listed in pairedSourceUris.
        sourceUris?: string[],        
    }
    
    interface ExperimentalCreateJobResponse {
        // A job ID that can be used to get status information.
        jobId?: string,
    }
    
    interface ExportReadGroupSetsRequest {
        // Required. A Google Cloud Storage URI for the exported BAM file. The currently authenticated user must have write access to the new file. An error will be returned if the URI already contains data.
        exportUri?: string,
        // Required. The Google Developers Console project number that owns this export. The caller must have WRITE access to this project.
        projectNumber?: string,
        // Required. The IDs of the read group sets to export. The caller must have READ access to these read group sets.
        readGroupSetIds?: string[],        
        // The reference names to export. If this is not specified, all reference sequences, including unmapped reads, are exported. Use * to export only unmapped reads.
        referenceNames?: string[],        
    }
    
    interface ExportReadGroupSetsResponse {
        // A job ID that can be used to get status information.
        jobId?: string,
    }
    
    interface ExportVariantSetRequest {
        // Required. The BigQuery dataset to export data to. This dataset must already exist. Note that this is distinct from the Genomics concept of "dataset".
        bigqueryDataset?: string,
        // Required. The BigQuery table to export data to. If the table doesn't exist, it will be created. If it already exists, it will be overwritten.
        bigqueryTable?: string,
        // If provided, only variant call information from the specified call sets will be exported. By default all variant calls are exported.
        callSetIds?: string[],        
        // The format for the exported data.
        format?: string,
        // Required. The Google Cloud project number that owns the destination BigQuery dataset. The caller must have WRITE access to this project. This project will also own the resulting export job.
        projectNumber?: string,
    }
    
    interface ExportVariantSetResponse {
        // A job ID that can be used to get status information.
        jobId?: string,
    }
    
    interface ExternalId {
        // The id used by the source of this data.
        id?: string,
        // The name of the source of this data.
        sourceName?: string,
    }
    
    interface ImportReadGroupSetsRequest {
        // Required. The ID of the dataset these read group sets will belong to. The caller must have WRITE permissions to this dataset.
        datasetId?: string,
        // The partition strategy describes how read groups are partitioned into read group sets.
        partitionStrategy?: string,
        // The reference set to which the imported read group sets are aligned to, if any. The reference names of this reference set must be a superset of those found in the imported file headers. If no reference set id is provided, a best effort is made to associate with a matching reference set.
        referenceSetId?: string,
        // A list of URIs pointing at BAM files in Google Cloud Storage.
        sourceUris?: string[],        
    }
    
    interface ImportReadGroupSetsResponse {
        // A job ID that can be used to get status information.
        jobId?: string,
    }
    
    interface ImportVariantsRequest {
        // The format of the variant data being imported. If unspecified, defaults to "VCF".
        format?: string,
        // Convert reference names to the canonical representation. hg19 haploytypes (those reference names containing "_hap") are not modified in any way. All other reference names are modified according to the following rules: The reference name is capitalized. The "chr" prefix is dropped for all autosomes and sex chromsomes. For example "chr17" becomes "17" and "chrX" becomes "X". All mitochondrial chromosomes ("chrM", "chrMT", etc) become "MT".
        normalizeReferenceNames?: boolean,
        // A list of URIs referencing variant files in Google Cloud Storage. URIs can include wildcards as described here. Note that recursive wildcards ('**') are not supported.
        sourceUris?: string[],        
    }
    
    interface ImportVariantsResponse {
        // A job ID that can be used to get status information.
        jobId?: string,
    }
    
    interface Int32Value {
        // The int32 value.
        value?: number,
    }
    
    interface Job {
        // The date this job was created, in milliseconds from the epoch.
        created?: string,
        // A more detailed description of this job's current status.
        detailedStatus?: string,
        // Any errors that occurred during processing.
        errors?: string[],        
        // The job ID.
        id?: string,
        // If this Job represents an import, this field will contain the IDs of the objects that were successfully imported.
        importedIds?: string[],        
        // The Google Developers Console project number to which this job belongs.
        projectNumber?: string,
        // A summarized representation of the original service request.
        request?: JobRequest,
        // The status of this job.
        status?: string,
        // Any warnings that occurred during processing.
        warnings?: string[],        
    }
    
    interface JobRequest {
        // The data destination of the request, for example, a Google BigQuery Table or Dataset ID.
        destination?: string[],        
        // The data source of the request, for example, a Google Cloud Storage object path or Readset ID.
        source?: string[],        
        // The original request type.
        type?: string,
    }
    
    interface KeyValue {
        // A string which maps to an array of values.
        key?: string,
        // The string values.
        value?: string[],        
    }
    
    interface LinearAlignment {
        // Represents the local alignment of this sequence (alignment matches, indels, etc) against the reference.
        cigar?: CigarUnit[],        
        // The mapping quality of this alignment. Represents how likely the read maps to this position as opposed to other locations.
        // 
        // Specifically, this is -10 log10 Pr(mapping position is wrong), rounded to the nearest integer.
        mappingQuality?: number,
        // The position of this alignment.
        position?: Position,
    }
    
    interface ListBasesResponse {
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // The offset position (0-based) of the given sequence from the start of this Reference. This value will differ for each page in a paginated request.
        offset?: string,
        // A substring of the bases that make up this reference.
        sequence?: string,
    }
    
    interface ListCoverageBucketsResponse {
        // The length of each coverage bucket in base pairs. Note that buckets at the end of a reference sequence may be shorter. This value is omitted if the bucket width is infinity (the default behaviour, with no range or targetBucketWidth).
        bucketWidth?: string,
        // The coverage buckets. The list of buckets is sparse; a bucket with 0 overlapping reads is not returned. A bucket never crosses more than one reference sequence. Each bucket has width bucketWidth, unless its end is the end of the reference sequence.
        coverageBuckets?: CoverageBucket[],        
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface ListDatasetsResponse {
        // The list of matching Datasets.
        datasets?: Dataset[],        
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface MergeVariantsRequest {
        // The variants to be merged with existing variants.
        variants?: Variant[],        
    }
    
    interface Metadata {
        // A textual description of this metadata.
        description?: string,
        // User-provided ID field, not enforced by this API. Two or more pieces of structured metadata with identical id and key fields are considered equivalent.
        id?: string,
        // A string which maps to an array of values.
        info?: any,
        // The top-level key.
        key?: string,
        // The number of values that can be included in a field described by this metadata.
        number?: string,
        // The type of data. Possible types include: Integer, Float, Flag, Character, and String.
        type?: string,
        // The value field for simple metadata
        value?: string,
    }
    
    interface Position {
        // The 0-based offset from the start of the forward strand for that reference.
        position?: string,
        // The name of the reference in whatever reference set is being used.
        referenceName?: string,
        // Whether this position is on the reverse strand, as opposed to the forward strand.
        reverseStrand?: boolean,
    }
    
    interface QueryRange {
        // The end position of the range on the reference, 0-based exclusive. If specified, referenceId or referenceName must also be specified. If unset or 0, defaults to the length of the reference.
        end?: string,
        // The ID of the reference to query. At most one of referenceId and referenceName should be specified.
        referenceId?: string,
        // The name of the reference to query, within the reference set associated with this query. At most one of referenceId and referenceName pshould be specified.
        referenceName?: string,
        // The start position of the range on the reference, 0-based inclusive. If specified, referenceId or referenceName must also be specified. Defaults to 0.
        start?: string,
    }
    
    interface Range {
        // The end position of the range on the reference, 0-based exclusive. If specified, referenceName must also be specified.
        end?: string,
        // The reference sequence name, for example chr1, 1, or chrX.
        referenceName?: string,
        // The start position of the range on the reference, 0-based inclusive. If specified, referenceName must also be specified.
        start?: string,
    }
    
    interface RangePosition {
        // The end position of the range on the reference, 0-based exclusive.
        end?: string,
        // The ID of the Google Genomics reference associated with this range.
        referenceId?: string,
        // The display name corresponding to the reference specified by referenceId, for example chr1, 1, or chrX.
        referenceName?: string,
        // Whether this range refers to the reverse strand, as opposed to the forward strand. Note that regardless of this field, the start/end position of the range always refer to the forward strand.
        reverseStrand?: boolean,
        // The start position of the range on the reference, 0-based inclusive.
        start?: string,
    }
    
    interface Read {
        // The quality of the read sequence contained in this alignment record. (equivalent to QUAL in SAM). alignedSequence and alignedQuality may be shorter than the full read sequence and quality. This will occur if the alignment is part of a chimeric alignment, or if the read was trimmed. When this occurs, the CIGAR for this read will begin/end with a hard clip operator that will indicate the length of the excised sequence.
        alignedQuality?: number[],        
        // The bases of the read sequence contained in this alignment record, without CIGAR operations applied (equivalent to SEQ in SAM). alignedSequence and alignedQuality may be shorter than the full read sequence and quality. This will occur if the alignment is part of a chimeric alignment, or if the read was trimmed. When this occurs, the CIGAR for this read will begin/end with a hard clip operator that will indicate the length of the excised sequence.
        alignedSequence?: string,
        // The linear alignment for this alignment record. This field is null for unmapped reads.
        alignment?: LinearAlignment,
        // The fragment is a PCR or optical duplicate (SAM flag 0x400).
        duplicateFragment?: boolean,
        // Whether this read did not pass filters, such as platform or vendor quality controls (SAM flag 0x200).
        failedVendorQualityChecks?: boolean,
        // The observed length of the fragment, equivalent to TLEN in SAM.
        fragmentLength?: number,
        // The fragment name. Equivalent to QNAME (query template name) in SAM.
        fragmentName?: string,
        // The unique ID for this read. This is a generated unique ID, not to be confused with fragmentName.
        id?: string,
        // A string which maps to an array of values.
        info?: any,
        // The position of the primary alignment of the (readNumber+1)%numberReads read in the fragment. It replaces mate position and mate strand in SAM. This field will be unset if that read is unmapped or if the fragment only has a single read.
        nextMatePosition?: Position,
        // The number of reads in the fragment (extension to SAM flag 0x1).
        numberReads?: number,
        // The orientation and the distance between reads from the fragment are consistent with the sequencing protocol (SAM flag 0x2).
        properPlacement?: boolean,
        // The ID of the read group this read belongs to. A read belongs to exactly one read group. This is a server-generated ID (not SAM's RG tag).
        readGroupId?: string,
        // The ID of the read group set this read belongs to. A read belongs to exactly one read group set.
        readGroupSetId?: string,
        // The read number in sequencing. 0-based and less than numberReads. This field replaces SAM flag 0x40 and 0x80.
        readNumber?: number,
        // Whether this alignment is secondary. Equivalent to SAM flag 0x100. A secondary alignment represents an alternative to the primary alignment for this read. Aligners may return secondary alignments if a read can map ambiguously to multiple coordinates in the genome. By convention, each read has one and only one alignment where both secondaryAlignment and supplementaryAlignment are false.
        secondaryAlignment?: boolean,
        // Whether this alignment is supplementary. Equivalent to SAM flag 0x800. Supplementary alignments are used in the representation of a chimeric alignment. In a chimeric alignment, a read is split into multiple linear alignments that map to different reference contigs. The first linear alignment in the read will be designated as the representative alignment; the remaining linear alignments will be designated as supplementary alignments. These alignments may have different mapping quality scores. In each linear alignment in a chimeric alignment, the read will be hard clipped. The alignedSequence and alignedQuality fields in the alignment record will only represent the bases for its respective linear alignment.
        supplementaryAlignment?: boolean,
    }
    
    interface ReadGroup {
        // The ID of the dataset this read group belongs to.
        datasetId?: string,
        // A free-form text description of this read group.
        description?: string,
        // The experiment used to generate this read group.
        experiment?: ReadGroupExperiment,
        // The generated unique read group ID. Note: This is different than the @RG ID field in the SAM spec. For that value, see the name field.
        id?: string,
        // A string which maps to an array of values.
        info?: any,
        // The read group name. This corresponds to the @RG ID field in the SAM spec.
        name?: string,
        // The predicted insert size of this read group. The insert size is the length the sequenced DNA fragment from end-to-end, not including the adapters.
        predictedInsertSize?: number,
        // The programs used to generate this read group. Programs are always identical for all read groups within a read group set. For this reason, only the first read group in a returned set will have this field populated.
        programs?: ReadGroupProgram[],        
        // The reference set to which the reads in this read group are aligned.
        referenceSetId?: string,
        // The sample this read group's data was generated from. Note: This is not an actual ID within this repository, but rather an identifier for a sample which may be meaningful to some external system.
        sampleId?: string,
    }
    
    interface ReadGroupExperiment {
        // The instrument model used as part of this experiment. This maps to sequencing technology in BAM.
        instrumentModel?: string,
        // The library used as part of this experiment. Note: This is not an actual ID within this repository, but rather an identifier for a library which may be meaningful to some external system.
        libraryId?: string,
        // The platform unit used as part of this experiment e.g. flowcell-barcode.lane for Illumina or slide for SOLiD. Corresponds to the
        platformUnit?: string,
        // The sequencing center used as part of this experiment.
        sequencingCenter?: string,
    }
    
    interface ReadGroupProgram {
        // The command line used to run this program.
        commandLine?: string,
        // The user specified locally unique ID of the program. Used along with prevProgramId to define an ordering between programs.
        id?: string,
        // The display name of the program. This is typically the colloquial name of the tool used, for example 'bwa' or 'picard'.
        name?: string,
        // The ID of the program run before this one.
        prevProgramId?: string,
        // The version of the program run.
        version?: string,
    }
    
    interface ReadGroupSet {
        // The dataset ID.
        datasetId?: string,
        // The filename of the original source file for this read group set, if any.
        filename?: string,
        // The read group set ID.
        id?: string,
        // A string which maps to an array of values.
        info?: any,
        // The read group set name. By default this will be initialized to the sample name of the sequenced data contained in this set.
        name?: string,
        // The read groups in this set. There are typically 1-10 read groups in a read group set.
        readGroups?: ReadGroup[],        
        // The reference set the reads in this read group set are aligned to.
        referenceSetId?: string,
    }
    
    interface Reference {
        // The Google generated immutable ID of the reference.
        id?: string,
        // The length of this reference's sequence.
        length?: string,
        // MD5 of the upper-case sequence excluding all whitespace characters (this is equivalent to SQ:M5 in SAM). This value is represented in lower case hexadecimal format.
        md5checksum?: string,
        // The name of this reference, for example 22.
        name?: string,
        // ID from http://www.ncbi.nlm.nih.gov/taxonomy. For example, 9606 for human.
        ncbiTaxonId?: number,
        // All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally with a version number, for example GCF_000001405.26.
        sourceAccessions?: string[],        
        // The URI from which the sequence was obtained. Typically specifies a FASTA format file.
        sourceURI?: string,
    }
    
    interface ReferenceBound {
        // The name of the reference associated with this reference bound.
        referenceName?: string,
        // An upper bound (inclusive) on the starting coordinate of any variant in the reference sequence.
        upperBound?: string,
    }
    
    interface ReferenceSet {
        // Public id of this reference set, such as GRCh37.
        assemblyId?: string,
        // Free text description of this reference set.
        description?: string,
        // The Google generated immutable ID of the reference set.
        id?: string,
        // Order-independent MD5 checksum which identifies this reference set. The checksum is computed by sorting all lower case hexidecimal string reference.md5checksum (for all reference in this set) in ascending lexicographic order, concatenating, and taking the MD5 of that value. The resulting value is represented in lower case hexadecimal format.
        md5checksum?: string,
        // ID from http://www.ncbi.nlm.nih.gov/taxonomy (for example, 9606 for human) indicating the species which this reference set is intended to model. Note that contained references may specify a different ncbiTaxonId, as assemblies may contain reference sequences which do not belong to the modeled species, for example EBV in a human reference genome.
        ncbiTaxonId?: number,
        // The IDs of the reference objects that are part of this set. Reference.md5checksum must be unique within this set.
        referenceIds?: string[],        
        // All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally with a version number, for example NC_000001.11.
        sourceAccessions?: string[],        
        // The URI from which the references were obtained.
        sourceURI?: string,
    }
    
    interface SearchAnnotationSetsRequest {
        // The dataset IDs to search within. Caller must have READ access to these datasets.
        datasetIds?: string[],        
        // Only return annotations sets for which a substring of the name matches this string (case insensitive).
        name?: string,
        // The maximum number of results to return in a single page. If unspecified, defaults to 128. The maximum value is 1024.
        pageSize?: number,
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
        pageToken?: string,
        // If specified, only annotation sets associated with the given reference set are returned.
        referenceSetId?: string,
        // If specified, only annotation sets that have any of these types are returned.
        types?: string[],        
    }
    
    interface SearchAnnotationSetsResponse {
        // The matching annotation sets.
        annotationSets?: AnnotationSet[],        
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface SearchAnnotationsRequest {
        // The annotation sets to search within. The caller must have READ access to these annotation sets. Required. All queried annotation sets must have the same type.
        annotationSetIds?: string[],        
        // The maximum number of results to return in a single page. If unspecified, defaults to 256. The maximum value is 2048.
        pageSize?: number,
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
        pageToken?: string,
        // If specified, this query matches only annotations that overlap this range.
        range?: QueryRange,
    }
    
    interface SearchAnnotationsResponse {
        // The matching annotations.
        annotations?: Annotation[],        
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface SearchCallSetsRequest {
        // Only return call sets for which a substring of the name matches this string.
        name?: string,
        // The maximum number of results to return in a single page. If unspecified, defaults to 1024.
        pageSize?: number,
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
        pageToken?: string,
        // Restrict the query to call sets within the given variant sets. At least one ID must be provided.
        variantSetIds?: string[],        
    }
    
    interface SearchCallSetsResponse {
        // The list of matching call sets.
        callSets?: CallSet[],        
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface SearchJobsRequest {
        // If specified, only jobs created on or after this date, given in milliseconds since Unix epoch, will be returned.
        createdAfter?: string,
        // If specified, only jobs created prior to this date, given in milliseconds since Unix epoch, will be returned.
        createdBefore?: string,
        // The maximum number of results to return in a single page. If unspecified, defaults to 128. The maximum value is 256.
        pageSize?: number,
        // The continuation token which is used to page through large result sets. To get the next page of results, set this parameter to the value of the nextPageToken from the previous response.
        pageToken?: string,
        // Required. Only return jobs which belong to this Google Developers Console project.
        projectNumber?: string,
        // Only return jobs which have a matching status.
        status?: string[],        
    }
    
    interface SearchJobsResponse {
        // The list of jobs results, ordered newest to oldest.
        jobs?: Job[],        
        // The continuation token which is used to page through large result sets. Provide this value is a subsequent request to return the next page of results. This field will be empty if there are no more results.
        nextPageToken?: string,
    }
    
    interface SearchReadGroupSetsRequest {
        // Restricts this query to read group sets within the given datasets. At least one ID must be provided.
        datasetIds?: string[],        
        // Only return read group sets for which a substring of the name matches this string.
        name?: string,
        // The maximum number of results to return in a single page. If unspecified, defaults to 256. The maximum value is 1024.
        pageSize?: number,
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
        pageToken?: string,
    }
    
    interface SearchReadGroupSetsResponse {
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // The list of matching read group sets.
        readGroupSets?: ReadGroupSet[],        
    }
    
    interface SearchReadsRequest {
        // The end position of the range on the reference, 0-based exclusive. If specified, referenceName must also be specified.
        end?: string,
        // The maximum number of results to return in a single page. If unspecified, defaults to 256. The maximum value is 2048.
        pageSize?: number,
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
        pageToken?: string,
        // The IDs of the read groups within which to search for reads. All specified read groups must belong to the same read group sets. Must specify one of readGroupSetIds or readGroupIds.
        readGroupIds?: string[],        
        // The IDs of the read groups sets within which to search for reads. All specified read group sets must be aligned against a common set of reference sequences; this defines the genomic coordinates for the query. Must specify one of readGroupSetIds or readGroupIds.
        readGroupSetIds?: string[],        
        // The reference sequence name, for example chr1, 1, or chrX. If set to *, only unmapped reads are returned. If unspecified, all reads (mapped and unmapped) returned.
        referenceName?: string,
        // The start position of the range on the reference, 0-based inclusive. If specified, referenceName must also be specified.
        start?: string,
    }
    
    interface SearchReadsResponse {
        // The list of matching alignments sorted by mapped genomic coordinate, if any, ascending in position within the same reference. Unmapped reads, which have no position, are returned contiguously and are sorted in ascending lexicographic order by fragment name.
        alignments?: Read[],        
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface SearchReferenceSetsRequest {
        // If present, return references for which the accession matches any of these strings. Best to give a version number, for example GCF_000001405.26. If only the main accession number is given then all records with that main accession will be returned, whichever version. Note that different versions will have different sequences.
        accessions?: string[],        
        // If present, return reference sets for which a substring of their assemblyId matches this string (case insensitive).
        assemblyId?: string,
        // If present, return references for which the md5checksum matches. See ReferenceSet.md5checksum for details.
        md5checksums?: string[],        
        // The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 4096.
        pageSize?: number,
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
        pageToken?: string,
    }
    
    interface SearchReferenceSetsResponse {
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // The matching references sets.
        referenceSets?: ReferenceSet[],        
    }
    
    interface SearchReferencesRequest {
        // If present, return references for which the accession matches this string. Best to give a version number, for example GCF_000001405.26. If only the main accession number is given then all records with that main accession will be returned, whichever version. Note that different versions will have different sequences.
        accessions?: string[],        
        // If present, return references for which the md5checksum matches. See Reference.md5checksum for construction details.
        md5checksums?: string[],        
        // The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 4096.
        pageSize?: number,
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
        pageToken?: string,
        // If present, return only references which belong to this reference set.
        referenceSetId?: string,
    }
    
    interface SearchReferencesResponse {
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // The matching references.
        references?: Reference[],        
    }
    
    interface SearchVariantSetsRequest {
        // Exactly one dataset ID must be provided here. Only variant sets which belong to this dataset will be returned.
        datasetIds?: string[],        
        // The maximum number of results to return in a single page. If unspecified, defaults to 1024.
        pageSize?: number,
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
        pageToken?: string,
    }
    
    interface SearchVariantSetsResponse {
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // The variant sets belonging to the requested dataset.
        variantSets?: VariantSet[],        
    }
    
    interface SearchVariantsRequest {
        // Only return variant calls which belong to call sets with these ids. Leaving this blank returns all variant calls. If a variant has no calls belonging to any of these call sets, it won't be returned at all. Currently, variants with no calls from any call set will never be returned.
        callSetIds?: string[],        
        // The end of the window, 0-based exclusive. If unspecified or 0, defaults to the length of the reference.
        end?: string,
        // The maximum number of calls to return in a single page. Note that this limit may be exceeded in the event that a matching variant contains more calls than the requested maximum. If unspecified, defaults to 5000. The maximum value is 10000.
        maxCalls?: number,
        // The maximum number of variants to return in a single page. If unspecified, defaults to 5000. The maximum value is 10000.
        pageSize?: number,
        // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
        pageToken?: string,
        // Required. Only return variants in this reference sequence.
        referenceName?: string,
        // The beginning of the window (0-based, inclusive) for which overlapping variants should be returned. If unspecified, defaults to 0.
        start?: string,
        // Only return variants which have exactly this name.
        variantName?: string,
        // At most one variant set ID must be provided. Only variants from this variant set will be returned. If omitted, a call set id must be included in the request.
        variantSetIds?: string[],        
    }
    
    interface SearchVariantsResponse {
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // The list of matching Variants.
        variants?: Variant[],        
    }
    
    interface Transcript {
        // The range of the coding sequence for this transcript, if any. To determine the exact ranges of coding sequence, intersect this range with those of the exons, if any. If there are any exons, the codingSequence must start and end within them.
        // 
        // Note that in some cases, the reference genome will not exactly match the observed mRNA transcript e.g. due to variance in the source genome from reference. In these cases, exon.frame will not necessarily match the expected reference reading frame and coding exon reference bases cannot necessarily be concatenated to produce the original transcript mRNA.
        codingSequence?: TranscriptCodingSequence,
        // The exons that compose this transcript. This field should be unset for genomes where transcript splicing does not occur, for example prokaryotes.
        // 
        // 
        // Introns are regions of the transcript that are not included in the spliced RNA product. Though not explicitly modeled here, intron ranges can be deduced; all regions of this transcript that are not exons are introns.
        // 
        // 
        // Exonic sequences do not necessarily code for a translational product (amino acids). Only the regions of exons bounded by the codingSequence correspond to coding DNA sequence.
        // 
        // 
        // Exons are ordered by start position and may not overlap.
        exons?: TranscriptExon[],        
        // The annotation ID of the gene from which this transcript is transcribed.
        geneId?: string,
    }
    
    interface TranscriptCodingSequence {
        // The end of the coding sequence on this annotation's reference sequence, 0-based exclusive. Note that this position is relative to the reference start, and not the containing annotation start.
        end?: string,
        // The start of the coding sequence on this annotation's reference sequence, 0-based inclusive. Note that this position is relative to the reference start, and not the containing annotation start.
        start?: string,
    }
    
    interface TranscriptExon {
        // The end position of the exon on this annotation's reference sequence, 0-based exclusive. Note that this is relative to the reference start, and not the containing annotation start.
        end?: string,
        // The frame of this exon. Contains a value of 0, 1, or 2, which indicates the offset of the first coding base of the exon within the reading frame of the coding DNA sequence, if any. This field is dependent on the strandedness of this annotation (see Annotation.position.reverseStrand). For forward stranded annotations, this offset is relative to the exon.start. For reverse strand annotations, this offset is relative to the exon.end-1.
        // 
        // Unset if this exon does not intersect the coding sequence. Upon creation of a transcript, the frame must be populated for all or none of the coding exons.
        frame?: Int32Value,
        // The start position of the exon on this annotation's reference sequence, 0-based inclusive. Note that this is relative to the reference start, and not the containing annotation start.
        start?: string,
    }
    
    interface Variant {
        // The bases that appear instead of the reference bases.
        alternateBases?: string[],        
        // The variant calls for this particular variant. Each one represents the determination of genotype with respect to this variant.
        calls?: Call[],        
        // The date this variant was created, in milliseconds from the epoch.
        created?: string,
        // The end position (0-based) of this variant. This corresponds to the first base after the last base in the reference allele. So, the length of the reference allele is (end - start). This is useful for variants that don't explicitly give alternate bases, for example large deletions.
        end?: string,
        // A list of filters (normally quality filters) this variant has failed. PASS indicates this variant has passed all filters.
        filter?: string[],        
        // The Google generated ID of the variant, immutable.
        id?: string,
        // A string which maps to an array of values.
        info?: any,
        // Names for the variant, for example a RefSNP ID.
        names?: string[],        
        // A measure of how likely this variant is to be real. A higher value is better.
        quality?: number,
        // The reference bases for this variant. They start at the given position.
        referenceBases?: string,
        // The reference on which this variant occurs. (such as chr20 or X)
        referenceName?: string,
        // The position at which this variant occurs (0-based). This corresponds to the first base of the string of reference bases.
        start?: string,
        // The ID of the variant set this variant belongs to.
        variantSetId?: string,
    }
    
    interface VariantAnnotation {
        // The alternate allele for this variant. If multiple alternate alleles exist at this location, create a separate variant for each one, as they may represent distinct conditions.
        alternateBases?: string,
        // Describes the clinical significance of a variant. It is adapted from the ClinVar controlled vocabulary for clinical significance described at: http://www.ncbi.nlm.nih.gov/clinvar/docs/clinsig/
        clinicalSignificance?: string,
        // The set of conditions associated with this variant. A condition describes the way a variant influences human health.
        conditions?: VariantAnnotationCondition[],        
        // Effect of the variant on the coding sequence.
        effect?: string,
        // Google annotation ID of the gene affected by this variant. This should be provided when the variant is created.
        geneId?: string,
        // Google annotation IDs of the transcripts affected by this variant. These should be provided when the variant is created.
        transcriptIds?: string[],        
        // Type has been adapted from ClinVar's list of variant types.
        type?: string,
    }
    
    interface VariantAnnotationCondition {
        // The MedGen concept id associated with this gene. Search for these IDs at http://www.ncbi.nlm.nih.gov/medgen/
        conceptId?: string,
        // The set of external IDs for this condition.
        externalIds?: ExternalId[],        
        // A set of names for the condition.
        names?: string[],        
        // The OMIM id for this condition. Search for these IDs at http://omim.org/
        omimId?: string,
    }
    
    interface VariantSet {
        // The dataset to which this variant set belongs. Immutable.
        datasetId?: string,
        // The Google-generated ID of the variant set. Immutable.
        id?: string,
        // The metadata associated with this variant set.
        metadata?: Metadata[],        
        // A list of all references used by the variants in a variant set with associated coordinate upper bounds for each one.
        referenceBounds?: ReferenceBound[],        
        // The reference set to which the variant set is mapped. The reference set describes the alignment provenance of the variant set, while the referenceBounds describe the shape of the actual variant data. The reference set's reference names are a superset of those found in the referenceBounds.
        // 
        // For example, given a variant set that is mapped to the GRCh38 reference set and contains a single variant on reference 'X', referenceBounds would contain only an entry for 'X', while the associated reference set enumerates all possible references: '1', '2', 'X', 'Y', 'MT', etc.
        referenceSetId?: string,
    }
    
    interface AnnotationSetsResource {
        // Creates a new annotation set. Caller must have WRITE permission for the associated dataset.
        // 
        // The following fields must be provided when creating an annotation set:  
        // - datasetId 
        // - referenceSetId  
        // All other fields may be optionally specified, unless documented as being server-generated (for example, the id field).
        create (request: {        
        }) : gapi.client.Request<AnnotationSet>;        
        
        // Deletes an annotation set. Caller must have WRITE permission for the associated annotation set.
        delete (request: {        
            // The ID of the annotation set to be deleted.
            annotationSetId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets an annotation set. Caller must have READ permission for the associated dataset.
        get (request: {        
            // The ID of the annotation set to be retrieved.
            annotationSetId: string,
        }) : gapi.client.Request<AnnotationSet>;        
        
        // Updates an annotation set. The update must respect all mutability restrictions and other invariants described on the annotation set resource. Caller must have WRITE permission for the associated dataset. This method supports patch semantics.
        patch (request: {        
            // The ID of the annotation set to be updated.
            annotationSetId: string,
        }) : gapi.client.Request<AnnotationSet>;        
        
        // Searches for annotation sets that match the given criteria. Annotation sets are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield annotation sets in the same order across their respective streams of paginated responses. Caller must have READ permission for the queried datasets.
        search (request: {        
        }) : gapi.client.Request<SearchAnnotationSetsResponse>;        
        
        // Updates an annotation set. The update must respect all mutability restrictions and other invariants described on the annotation set resource. Caller must have WRITE permission for the associated dataset.
        update (request: {        
            // The ID of the annotation set to be updated.
            annotationSetId: string,
        }) : gapi.client.Request<AnnotationSet>;        
        
    }
    
    
    interface AnnotationsResource {
        // Creates one or more new annotations atomically. All annotations must belong to the same annotation set. Caller must have WRITE permission for this annotation set. For optimal performance, batch positionally adjacent annotations together.
        // 
        // 
        // If the request has a systemic issue, such as an attempt to write to an inaccessible annotation set, the entire RPC will fail accordingly. For lesser data issues, when possible an error will be isolated to the corresponding batch entry in the response; the remaining well formed annotations will be created normally.
        // 
        // 
        // For details on the requirements for each individual annotation resource, see annotations.create.
        batchCreate (request: {        
        }) : gapi.client.Request<BatchAnnotationsResponse>;        
        
        // Creates a new annotation. Caller must have WRITE permission for the associated annotation set.
        // 
        // 
        // The following fields must be provided when creating an annotation:  
        // - annotationSetId 
        // - position.referenceName or  position.referenceId  Transcripts 
        // For annotations of type TRANSCRIPT, the following fields of annotation.transcript must be provided:  
        // - exons.start 
        // - exons.end  
        // All other fields may be optionally specified, unless documented as being server-generated (for example, the id field). The annotated range must be no longer than 100Mbp (mega base pairs). See the annotation resource for additional restrictions on each field.
        create (request: {        
        }) : gapi.client.Request<Annotation>;        
        
        // Deletes an annotation. Caller must have WRITE permission for the associated annotation set.
        delete (request: {        
            // The ID of the annotation to be deleted.
            annotationId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets an annotation. Caller must have READ permission for the associated annotation set.
        get (request: {        
            // The ID of the annotation to be retrieved.
            annotationId: string,
        }) : gapi.client.Request<Annotation>;        
        
        // Updates an annotation. The update must respect all mutability restrictions and other invariants described on the annotation resource. Caller must have WRITE permission for the associated dataset. This method supports patch semantics.
        patch (request: {        
            // The ID of the annotation to be updated.
            annotationId: string,
        }) : gapi.client.Request<Annotation>;        
        
        // Searches for annotations that match the given criteria. Results are ordered by genomic coordinate (by reference sequence, then position). Annotations with equivalent genomic coordinates are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield annotations in the same order across their respective streams of paginated responses. Caller must have READ permission for the queried annotation sets.
        search (request: {        
        }) : gapi.client.Request<SearchAnnotationsResponse>;        
        
        // Updates an annotation. The update must respect all mutability restrictions and other invariants described on the annotation resource. Caller must have WRITE permission for the associated dataset.
        update (request: {        
            // The ID of the annotation to be updated.
            annotationId: string,
        }) : gapi.client.Request<Annotation>;        
        
    }
    
    
    interface CallsetsResource {
        // Creates a new call set.
        create (request: {        
        }) : gapi.client.Request<CallSet>;        
        
        // Deletes a call set.
        delete (request: {        
            // The ID of the call set to be deleted.
            callSetId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a call set by ID.
        get (request: {        
            // The ID of the call set.
            callSetId: string,
        }) : gapi.client.Request<CallSet>;        
        
        // Updates a call set. This method supports patch semantics.
        patch (request: {        
            // The ID of the call set to be updated.
            callSetId: string,
        }) : gapi.client.Request<CallSet>;        
        
        // Gets a list of call sets matching the criteria.
        // 
        // Implements GlobalAllianceApi.searchCallSets.
        search (request: {        
        }) : gapi.client.Request<SearchCallSetsResponse>;        
        
        // Updates a call set.
        update (request: {        
            // The ID of the call set to be updated.
            callSetId: string,
        }) : gapi.client.Request<CallSet>;        
        
    }
    
    
    interface DatasetsResource {
        // Creates a new dataset.
        create (request: {        
        }) : gapi.client.Request<Dataset>;        
        
        // Deletes a dataset.
        delete (request: {        
            // The ID of the dataset to be deleted.
            datasetId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a dataset by ID.
        get (request: {        
            // The ID of the dataset.
            datasetId: string,
        }) : gapi.client.Request<Dataset>;        
        
        // Lists datasets within a project.
        list (request: {        
            // The maximum number of results to return in a single page. If unspecified, defaults to 50. The maximum value is 1024.
            pageSize?: number,
            // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
            pageToken?: string,
            // Required. The project to list datasets for.
            projectNumber?: string,
        }) : gapi.client.Request<ListDatasetsResponse>;        
        
        // Updates a dataset. This method supports patch semantics.
        patch (request: {        
            // The ID of the dataset to be updated.
            datasetId: string,
        }) : gapi.client.Request<Dataset>;        
        
        // Undeletes a dataset by restoring a dataset which was deleted via this API. This operation is only possible for a week after the deletion occurred.
        undelete (request: {        
            // The ID of the dataset to be undeleted.
            datasetId: string,
        }) : gapi.client.Request<Dataset>;        
        
        // Updates a dataset.
        update (request: {        
            // The ID of the dataset to be updated.
            datasetId: string,
        }) : gapi.client.Request<Dataset>;        
        
    }
    
    
    interface JobsResource {
        // Creates and asynchronously runs an ad-hoc job. This is an experimental call and may be removed or changed at any time.
        create (request: {        
        }) : gapi.client.Request<ExperimentalCreateJobResponse>;        
        
    }
    
    
    interface ExperimentalResource {
        jobs: JobsResource,
    }
    
    
    interface JobsResource {
        // Cancels a job by ID. Note that it is possible for partial results to be generated and stored for cancelled jobs.
        cancel (request: {        
            // Required. The ID of the job.
            jobId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a job by ID.
        get (request: {        
            // Required. The ID of the job.
            jobId: string,
        }) : gapi.client.Request<Job>;        
        
        // Gets a list of jobs matching the criteria.
        search (request: {        
        }) : gapi.client.Request<SearchJobsResponse>;        
        
    }
    
    
    interface CoveragebucketsResource {
        // Lists fixed width coverage buckets for a read group set, each of which correspond to a range of a reference sequence. Each bucket summarizes coverage information across its corresponding genomic range.
        // 
        // Coverage is defined as the number of reads which are aligned to a given base in the reference sequence. Coverage buckets are available at several precomputed bucket widths, enabling retrieval of various coverage 'zoom levels'. The caller must have READ permissions for the target read group set.
        list (request: {        
            // The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 2048.
            pageSize?: number,
            // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
            pageToken?: string,
            // The end position of the range on the reference, 0-based exclusive. If specified, referenceName must also be specified.
            range.end?: string,
            // The reference sequence name, for example chr1, 1, or chrX.
            range.referenceName?: string,
            // The start position of the range on the reference, 0-based inclusive. If specified, referenceName must also be specified.
            range.start?: string,
            // Required. The ID of the read group set over which coverage is requested.
            readGroupSetId: string,
            // The desired width of each reported coverage bucket in base pairs. This will be rounded down to the nearest precomputed bucket width; the value of which is returned as bucketWidth in the response. Defaults to infinity (each bucket spans an entire reference sequence) or the length of the target range, if specified. The smallest precomputed bucketWidth is currently 2048 base pairs; this is subject to change.
            targetBucketWidth?: string,
        }) : gapi.client.Request<ListCoverageBucketsResponse>;        
        
    }
    
    
    interface ReadgroupsetsResource {
        // Deletes a read group set.
        delete (request: {        
            // The ID of the read group set to be deleted. The caller must have WRITE permissions to the dataset associated with this read group set.
            readGroupSetId: string,
        }) : gapi.client.Request<void>;        
        
        // Exports read group sets to a BAM file in Google Cloud Storage.
        // 
        // Note that currently there may be some differences between exported BAM files and the original BAM file at the time of import. See ImportReadGroupSets for details.
        export (request: {        
        }) : gapi.client.Request<ExportReadGroupSetsResponse>;        
        
        // Gets a read group set by ID.
        get (request: {        
            // The ID of the read group set.
            readGroupSetId: string,
        }) : gapi.client.Request<ReadGroupSet>;        
        
        // Creates read group sets by asynchronously importing the provided information. The caller must have WRITE permissions to the dataset.
        // 
        // Notes on BAM import:  
        // - Tags will be converted to strings - tag types are not preserved
        // - Comments (@CO) in the input file header are not imported
        // - Original order of reference headers is not preserved
        // - Any reverse stranded unmapped reads will be reverse complemented, and their qualities (also the "BQ" and "OQ" tags, if any) will be reversed
        // - Unmapped reads will be stripped of positional information (referenceName and position)
        import (request: {        
        }) : gapi.client.Request<ImportReadGroupSetsResponse>;        
        
        // Updates a read group set. This method supports patch semantics.
        patch (request: {        
            // The ID of the read group set to be updated. The caller must have WRITE permissions to the dataset associated with this read group set.
            readGroupSetId: string,
        }) : gapi.client.Request<ReadGroupSet>;        
        
        // Searches for read group sets matching the criteria.
        // 
        // Implements GlobalAllianceApi.searchReadGroupSets.
        search (request: {        
        }) : gapi.client.Request<SearchReadGroupSetsResponse>;        
        
        // Updates a read group set.
        update (request: {        
            // The ID of the read group set to be updated. The caller must have WRITE permissions to the dataset associated with this read group set.
            readGroupSetId: string,
        }) : gapi.client.Request<ReadGroupSet>;        
        
        coveragebuckets: CoveragebucketsResource,
    }
    
    
    interface ReadsResource {
        // Gets a list of reads for one or more read group sets. Reads search operates over a genomic coordinate space of reference sequence & position defined over the reference sequences to which the requested read group sets are aligned.
        // 
        // If a target positional range is specified, search returns all reads whose alignment to the reference genome overlap the range. A query which specifies only read group set IDs yields all reads in those read group sets, including unmapped reads.
        // 
        // All reads returned (including reads on subsequent pages) are ordered by genomic coordinate (by reference sequence, then position). Reads with equivalent genomic coordinates are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield reads in the same order across their respective streams of paginated responses.
        // 
        // Implements GlobalAllianceApi.searchReads.
        search (request: {        
        }) : gapi.client.Request<SearchReadsResponse>;        
        
    }
    
    
    interface BasesResource {
        // Lists the bases in a reference, optionally restricted to a range.
        // 
        // Implements GlobalAllianceApi.getReferenceBases.
        list (request: {        
            // The end position (0-based, exclusive) of this query. Defaults to the length of this reference.
            end?: string,
            // The maximum number of bases to return in a single page. If unspecified, defaults to 200Kbp (kilo base pairs). The maximum value is 10Mbp (mega base pairs).
            pageSize?: number,
            // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
            pageToken?: string,
            // The ID of the reference.
            referenceId: string,
            // The start position (0-based) of this query. Defaults to 0.
            start?: string,
        }) : gapi.client.Request<ListBasesResponse>;        
        
    }
    
    
    interface ReferencesResource {
        // Gets a reference.
        // 
        // Implements GlobalAllianceApi.getReference.
        get (request: {        
            // The ID of the reference.
            referenceId: string,
        }) : gapi.client.Request<Reference>;        
        
        // Searches for references which match the given criteria.
        // 
        // Implements GlobalAllianceApi.searchReferences.
        search (request: {        
        }) : gapi.client.Request<SearchReferencesResponse>;        
        
        bases: BasesResource,
    }
    
    
    interface ReferencesetsResource {
        // Gets a reference set.
        // 
        // Implements GlobalAllianceApi.getReferenceSet.
        get (request: {        
            // The ID of the reference set.
            referenceSetId: string,
        }) : gapi.client.Request<ReferenceSet>;        
        
        // Searches for reference sets which match the given criteria.
        // 
        // Implements GlobalAllianceApi.searchReferenceSets.
        search (request: {        
        }) : gapi.client.Request<SearchReferenceSetsResponse>;        
        
    }
    
    
    interface VariantsResource {
        // Creates a new variant.
        create (request: {        
        }) : gapi.client.Request<Variant>;        
        
        // Deletes a variant.
        delete (request: {        
            // The ID of the variant to be deleted.
            variantId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a variant by ID.
        get (request: {        
            // The ID of the variant.
            variantId: string,
        }) : gapi.client.Request<Variant>;        
        
        // Gets a list of variants matching the criteria.
        // 
        // Implements GlobalAllianceApi.searchVariants.
        search (request: {        
        }) : gapi.client.Request<SearchVariantsResponse>;        
        
        // Updates a variant's names and info fields. All other modifications are silently ignored. Returns the modified variant without its calls.
        update (request: {        
            // The ID of the variant to be updated.
            variantId: string,
        }) : gapi.client.Request<Variant>;        
        
    }
    
    
    interface VariantsetsResource {
        // Creates a new variant set (only necessary in v1).
        // 
        // The provided variant set must have a valid datasetId set - all other fields are optional. Note that the id field will be ignored, as this is assigned by the server.
        create (request: {        
        }) : gapi.client.Request<VariantSet>;        
        
        // Deletes a variant set including all variants, call sets, and calls within. This is not reversible.
        delete (request: {        
            // The ID of the variant set to be deleted.
            variantSetId: string,
        }) : gapi.client.Request<void>;        
        
        // Exports variant set data to an external destination.
        export (request: {        
            // Required. The ID of the variant set that contains variant data which should be exported. The caller must have READ access to this variant set.
            variantSetId: string,
        }) : gapi.client.Request<ExportVariantSetResponse>;        
        
        // Gets a variant set by ID.
        get (request: {        
            // Required. The ID of the variant set.
            variantSetId: string,
        }) : gapi.client.Request<VariantSet>;        
        
        // Creates variant data by asynchronously importing the provided information.
        // 
        // The variants for import will be merged with any existing data and each other according to the behavior of mergeVariants. In particular, this means for merged VCF variants that have conflicting info fields, some data will be arbitrarily discarded. As a special case, for single-sample VCF files, QUAL and FILTER fields will be moved to the call level; these are sometimes interpreted in a call-specific context. Imported VCF headers are appended to the metadata already in a variant set.
        importVariants (request: {        
            // Required. The variant set to which variant data should be imported.
            variantSetId: string,
        }) : gapi.client.Request<ImportVariantsResponse>;        
        
        // Merges the given variants with existing variants. Each variant will be merged with an existing variant that matches its reference sequence, start, end, reference bases, and alternative bases. If no such variant exists, a new one will be created.
        // 
        // When variants are merged, the call information from the new variant is added to the existing variant, and other fields (such as key/value pairs) are discarded.
        mergeVariants (request: {        
            // The destination variant set.
            variantSetId: string,
        }) : gapi.client.Request<void>;        
        
        // Updates a variant set's metadata. All other modifications are silently ignored. This method supports patch semantics.
        patch (request: {        
            // The ID of the variant to be updated (must already exist).
            variantSetId: string,
        }) : gapi.client.Request<VariantSet>;        
        
        // Returns a list of all variant sets matching search criteria.
        // 
        // Implements GlobalAllianceApi.searchVariantSets.
        search (request: {        
        }) : gapi.client.Request<SearchVariantSetsResponse>;        
        
        // Updates a variant set's metadata. All other modifications are silently ignored.
        update (request: {        
            // The ID of the variant to be updated (must already exist).
            variantSetId: string,
        }) : gapi.client.Request<VariantSet>;        
        
    }
    
}

declare module gapi.client.genomics {
    var annotationSets: gapi.client.genomics.AnnotationSetsResource; 
    
    var annotations: gapi.client.genomics.AnnotationsResource; 
    
    var callsets: gapi.client.genomics.CallsetsResource; 
    
    var datasets: gapi.client.genomics.DatasetsResource; 
    
    var experimental: gapi.client.genomics.ExperimentalResource; 
    
    var jobs: gapi.client.genomics.JobsResource; 
    
    var readgroupsets: gapi.client.genomics.ReadgroupsetsResource; 
    
    var reads: gapi.client.genomics.ReadsResource; 
    
    var references: gapi.client.genomics.ReferencesResource; 
    
    var referencesets: gapi.client.genomics.ReferencesetsResource; 
    
    var variants: gapi.client.genomics.VariantsResource; 
    
    var variantsets: gapi.client.genomics.VariantsetsResource; 
    
}
