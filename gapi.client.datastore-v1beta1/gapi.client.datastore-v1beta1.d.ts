// Type definitions for Google Google Cloud Datastore API v1beta1
// Project: https://developers.google.com/datastore/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.datastore.v1beta1 {
    
    interface AllocateIdsRequest {
        // A list of keys with incomplete key paths to allocate IDs for. No key may be reserved/read-only.
        keys?: Key[],        
    }
    
    interface AllocateIdsResponse {
        // 
        header?: ResponseHeader,
        // The keys specified in the request (in the same order), each with its key path completed with a newly allocated ID.
        keys?: Key[],        
    }
    
    interface BeginTransactionRequest {
        // The transaction isolation level. Either snapshot or serializable. The default isolation level is snapshot isolation, which means that another transaction may not concurrently modify the data that is modified by this transaction. Optionally, a transaction can request to be made serializable which means that another transaction cannot concurrently modify the data that is read or modified by this transaction.
        isolationLevel?: string,
    }
    
    interface BeginTransactionResponse {
        // 
        header?: ResponseHeader,
        // The transaction identifier (always present).
        transaction?: string,
    }
    
    interface BlindWriteRequest {
        // The mutation to perform.
        mutation?: Mutation,
    }
    
    interface BlindWriteResponse {
        // 
        header?: ResponseHeader,
        // The result of performing the mutation (always present).
        mutationResult?: MutationResult,
    }
    
    interface CommitRequest {
        // 
        ignoreReadOnly?: boolean,
        // The mutation to perform. Optional.
        mutation?: Mutation,
        // The transaction identifier, returned by a call to beginTransaction. Must be set when mode is TRANSACTIONAL.
        transaction?: string,
    }
    
    interface CommitResponse {
        // 
        header?: ResponseHeader,
        // The result of performing the mutation (if any).
        mutationResult?: MutationResult,
    }
    
    interface CompositeFilter {
        // The list of filters to combine. Must contain at least one filter.
        filters?: Filter[],        
        // The operator for combining multiple filters. Only "and" is currently supported.
        operator?: string,
    }
    
    interface Entity {
        // The entity's key.
        // 
        // An entity must have a key, unless otherwise documented (for example, an entity in Value.entityValue may have no key). An entity's kind is its key's path's last element's kind, or null if it has no key.
        key?: Key,
        // The entity's properties.
        properties?: any,
    }
    
    interface EntityResult {
        // The resulting entity.
        entity?: Entity,
    }
    
    interface Filter {
        // A composite filter.
        compositeFilter?: CompositeFilter,
        // A filter on a property.
        propertyFilter?: PropertyFilter,
    }
    
    interface GqlQuery {
        // When false, the query string must not contain a literal.
        allowLiteral?: boolean,
        // A named argument must set field GqlQueryArg.name. No two named arguments may have the same name. For each non-reserved named binding site in the query string, there must be a named argument with that name, but not necessarily the inverse.
        nameArgs?: GqlQueryArg[],        
        // Numbered binding site @1 references the first numbered argument, effectively using 1-based indexing, rather than the usual 0. A numbered argument must NOT set field GqlQueryArg.name. For each binding site numbered i in query_string, there must be an ith numbered argument. The inverse must also be true.
        numberArgs?: GqlQueryArg[],        
        // The query string.
        queryString?: string,
    }
    
    interface GqlQueryArg {
        // 
        cursor?: string,
        // Must match regex "[A-Za-z_$][A-Za-z_$0-9]*". Must not match regex "__.*__". Must not be "".
        name?: string,
        // 
        value?: Value,
    }
    
    interface Key {
        // Entities are partitioned into subsets, currently identified by a dataset (usually implicitly specified by the project) and namespace ID. Queries are scoped to a single partition.
        partitionId?: PartitionId,
        // The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a root entity, the second element identifies a child of the root entity, the third element a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element's ancestors. An entity path is always fully complete: ALL of the entity's ancestors are required to be in the path along with the entity identifier itself. The only exception is that in some documented cases, the identifier in the last path element (for the entity) itself may be omitted. A path can never be empty. The path can have at most 100 elements.
        path?: KeyPathElement[],        
    }
    
    interface KeyPathElement {
        // The ID of the entity. Never equal to zero. Values less than zero are discouraged and will not be supported in the future.
        id?: string,
        // The kind of the entity. A kind matching regex "__.*__" is reserved/read-only. A kind must not contain more than 500 characters. Cannot be "".
        kind?: string,
        // The name of the entity. A name matching regex "__.*__" is reserved/read-only. A name must not be more than 500 characters. Cannot be "".
        name?: string,
    }
    
    interface KindExpression {
        // The name of the kind.
        name?: string,
    }
    
    interface LookupRequest {
        // Keys of entities to look up from the datastore.
        keys?: Key[],        
        // Options for this lookup request. Optional.
        readOptions?: ReadOptions,
    }
    
    interface LookupResponse {
        // A list of keys that were not looked up due to resource constraints.
        deferred?: Key[],        
        // Entities found.
        found?: EntityResult[],        
        // 
        header?: ResponseHeader,
        // Entities not found, with only the key populated.
        missing?: EntityResult[],        
    }
    
    interface Mutation {
        // Keys of entities to delete. Each key must have a complete key path and must not be reserved/read-only.
        delete?: Key[],        
        // Ignore a user specified read-only period. Optional.
        force?: boolean,
        // Entities to insert. Each inserted entity's key must have a complete path and must not be reserved/read-only.
        insert?: Entity[],        
        // Insert entities with a newly allocated ID. Each inserted entity's key must omit the final identifier in its path and must not be reserved/read-only.
        insertAutoId?: Entity[],        
        // Entities to update. Each updated entity's key must have a complete path and must not be reserved/read-only.
        update?: Entity[],        
        // Entities to upsert. Each upserted entity's key must have a complete path and must not be reserved/read-only.
        upsert?: Entity[],        
    }
    
    interface MutationResult {
        // Number of index writes.
        indexUpdates?: number,
        // Keys for insertAutoId entities. One per entity from the request, in the same order.
        insertAutoIdKeys?: Key[],        
    }
    
    interface PartitionId {
        // The dataset ID.
        datasetId?: string,
        // The namespace.
        namespace?: string,
    }
    
    interface Property {
        // If this property contains a list of values. Input values may explicitly set multi to false, but otherwise false is always represented by omitting multi.
        multi?: boolean,
        // The value(s) of the property. When multi is false there is always exactly one value. When multi is true there are always one or more values. Each value can have only one value property populated. For example, you cannot have a values list of { values: [ { integerValue: 22, stringValue: "a" } ] }, but you can have { multi: true, values: [ { integerValue: 22 }, { stringValue: "a" } ] }.
        values?: Value[],        
    }
    
    interface PropertyExpression {
        // The aggregation function to apply to the property. Optional. Can only be used when grouping by at least one property. Must then be set on all properties in the projection that are not being grouped by. Aggregation functions: first selects the first result as determined by the query's order.
        aggregationFunction?: string,
        // The property to project.
        property?: PropertyReference,
    }
    
    interface PropertyFilter {
        // The operator to filter by. One of lessThan, lessThanOrEqual, greaterThan, greaterThanOrEqual, equal, or hasAncestor.
        operator?: string,
        // The property to filter by.
        property?: PropertyReference,
        // The value to compare the property to.
        value?: Value,
    }
    
    interface PropertyOrder {
        // The direction to order by. One of ascending or descending. Optional, defaults to ascending.
        direction?: string,
        // The property to order by.
        property?: PropertyReference,
    }
    
    interface PropertyReference {
        // The name of the property.
        name?: string,
    }
    
    interface Query {
        // An ending point for the query results. Optional. Query cursors are returned in query result batches.
        endCursor?: string,
        // The filter to apply (optional).
        filter?: Filter,
        // The properties to group by (if empty, no grouping is applied to the result set).
        groupBy?: PropertyReference[],        
        // The kinds to query (if empty, returns entities from all kinds).
        kinds?: KindExpression[],        
        // The maximum number of results to return. Applies after all other constraints. Optional.
        limit?: number,
        // The number of results to skip. Applies before limit, but after all other constraints (optional, defaults to 0).
        offset?: number,
        // The order to apply to the query results (if empty, order is unspecified).
        order?: PropertyOrder[],        
        // The projection to return. If not set the entire entity is returned.
        projection?: PropertyExpression[],        
        // A starting point for the query results. Optional. Query cursors are returned in query result batches.
        startCursor?: string,
    }
    
    interface QueryResultBatch {
        // A cursor that points to the position after the last result in the batch. May be absent. TODO(arfuller): Once all plans produce cursors update documentation here.
        endCursor?: string,
        // The result type for every entity in entityResults. full for full entities, projection for entities with only projected properties, keyOnly for entities with only a key.
        entityResultType?: string,
        // The results for this batch.
        entityResults?: EntityResult[],        
        // The state of the query after the current batch. One of notFinished, moreResultsAfterLimit, noMoreResults.
        moreResults?: string,
        // The number of results skipped because of Query.offset.
        skippedResults?: number,
    }
    
    interface ReadOptions {
        // The read consistency to use. One of default, strong, or eventual. Cannot be set when transaction is set. Lookup and ancestor queries default to strong, global queries default to eventual and cannot be set to strong. Optional. Default is default.
        readConsistency?: string,
        // The transaction to use. Optional.
        transaction?: string,
    }
    
    interface ResponseHeader {
        // Identifies what kind of resource this is. Value: the fixed string "datastore#responseHeader".
        kind?: string,
    }
    
    interface RollbackRequest {
        // The transaction identifier, returned by a call to beginTransaction.
        transaction?: string,
    }
    
    interface RollbackResponse {
        // 
        header?: ResponseHeader,
    }
    
    interface RunQueryRequest {
        // The GQL query to run. Either this field or field query must be set, but not both.
        gqlQuery?: GqlQuery,
        // Entities are partitioned into subsets, identified by a dataset (usually implicitly specified by the project) and namespace ID. Queries are scoped to a single partition. This partition ID is normalized with the standard default context partition ID, but all other partition IDs in RunQueryRequest are normalized with this partition ID as the context partition ID.
        partitionId?: PartitionId,
        // The query to run. Either this field or field gql_query must be set, but not both.
        query?: Query,
        // The options for this query.
        readOptions?: ReadOptions,
    }
    
    interface RunQueryResponse {
        // A batch of query results (always present).
        batch?: QueryResultBatch,
        // 
        header?: ResponseHeader,
    }
    
    interface Value {
        // A blob key value.
        blobKeyValue?: string,
        // A blob value. May be a maximum of 1,000,000 bytes. When indexed is true, may have at most 500 bytes.
        blobValue?: string,
        // A boolean value.
        booleanValue?: boolean,
        // A timestamp value.
        dateTimeValue?: string,
        // A double value.
        doubleValue?: number,
        // An entity value. May have no key. May have a key with an incomplete key path. May have a reserved/read-only key.
        entityValue?: Entity,
        // If the value should be indexed.
        // 
        // The indexed property may be set for a null value. When indexed is true, stringValue is limited to 500 characters and the blob value is limited to 500 bytes. Input values by default have indexed set to true; however, you can explicitly set indexed to true if you want. (An output value never has indexed explicitly set to true.) If a value is itself an entity, it cannot have indexed set to true.
        indexed?: boolean,
        // An integer value.
        integerValue?: string,
        // A key value.
        keyValue?: Key,
        // The meaning field is reserved and should not be used.
        meaning?: number,
        // A UTF-8 encoded string value. When indexed is true, may have at most 500 characters.
        stringValue?: string,
    }
    
    interface DatasetsResource {
        // Allocate IDs for incomplete keys (useful for referencing an entity before it is inserted).
        allocateIds (request: {        
            // Identifies the dataset.
            datasetId: string,
        }) : gapi.client.Request<AllocateIdsResponse>;        
        
        // Begin a new transaction.
        beginTransaction (request: {        
            // Identifies the dataset.
            datasetId: string,
        }) : gapi.client.Request<BeginTransactionResponse>;        
        
        // Create, delete or modify some entities outside a transaction.
        blindWrite (request: {        
            // Identifies the dataset.
            datasetId: string,
        }) : gapi.client.Request<BlindWriteResponse>;        
        
        // Commit a transaction, optionally creating, deleting or modifying some entities.
        commit (request: {        
            // Identifies the dataset.
            datasetId: string,
        }) : gapi.client.Request<CommitResponse>;        
        
        // Look up some entities by key.
        lookup (request: {        
            // Identifies the dataset.
            datasetId: string,
        }) : gapi.client.Request<LookupResponse>;        
        
        // Roll back a transaction.
        rollback (request: {        
            // Identifies the dataset.
            datasetId: string,
        }) : gapi.client.Request<RollbackResponse>;        
        
        // Query for entities.
        runQuery (request: {        
            // Identifies the dataset.
            datasetId: string,
        }) : gapi.client.Request<RunQueryResponse>;        
        
    }
    
}

declare module gapi.client.datastore {
    var datasets: gapi.client.datastore.v1beta1.DatasetsResource; 
    
}
