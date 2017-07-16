// Type definitions for Google Google Cloud Natural Language API v1beta2
// Project: https://cloud.google.com/natural-language/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.language {
    
    interface Entity {
        // The representative name for the entity.
        name?: string,
        // The entity type.
        type?: string,
        // Metadata associated with the entity.
        // 
        // Currently, Wikipedia URLs and Knowledge Graph MIDs are provided, if
        // available. The associated keys are "wikipedia_url" and "mid", respectively.
        metadata?: any,
        // The salience score associated with the entity in the [0, 1.0] range.
        // 
        // The salience score for an entity provides information about the
        // importance or centrality of that entity to the entire document text.
        // Scores closer to 0 are less salient, while scores closer to 1.0 are highly
        // salient.
        salience?: number,
        // For calls to AnalyzeEntitySentiment or if
        // AnnotateTextRequest.Features.extract_entity_sentiment is set to
        // true, this field will contain the aggregate sentiment expressed for this
        // entity in the provided document.
        sentiment?: Sentiment,
        // The mentions of this entity in the input document. The API currently
        // supports proper noun mentions.
        mentions?: EntityMention[],        
    }
    
    interface AnalyzeSyntaxResponse {
        // The language of the text, which will be the same as the language specified
        // in the request or, if not specified, the automatically-detected language.
        // See Document.language field for more details.
        language?: string,
        // Sentences in the input document.
        sentences?: Sentence[],        
        // Tokens, along with their syntactic information, in the input document.
        tokens?: Token[],        
    }
    
    interface AnnotateTextRequest {
        // The encoding type used by the API to calculate offsets.
        encodingType?: string,
        // Input document.
        document?: Document,
        // The enabled features.
        features?: Features,
    }
    
    interface AnalyzeSentimentRequest {
        // Input document.
        document?: Document,
        // The encoding type used by the API to calculate sentence offsets for the
        // sentence sentiment.
        encodingType?: string,
    }
    
    interface AnnotateTextResponse {
        // Entities, along with their semantic information, in the input document.
        // Populated if the user enables
        // AnnotateTextRequest.Features.extract_entities.
        entities?: Entity[],        
        // The overall sentiment for the document. Populated if the user enables
        // AnnotateTextRequest.Features.extract_document_sentiment.
        documentSentiment?: Sentiment,
        // The language of the text, which will be the same as the language specified
        // in the request or, if not specified, the automatically-detected language.
        // See Document.language field for more details.
        language?: string,
        // Sentences in the input document. Populated if the user enables
        // AnnotateTextRequest.Features.extract_syntax.
        sentences?: Sentence[],        
        // Tokens, along with their syntactic information, in the input document.
        // Populated if the user enables
        // AnnotateTextRequest.Features.extract_syntax.
        tokens?: Token[],        
    }
    
    interface DependencyEdge {
        // Represents the head of this token in the dependency tree.
        // This is the index of the token which has an arc going to this token.
        // The index is the position of the token in the array of tokens returned
        // by the API method. If this token is a root token, then the
        // `head_token_index` is its own index.
        headTokenIndex?: number,
        // The parse label for the token.
        label?: string,
    }
    
    interface Token {
        // Dependency tree parse for this token.
        dependencyEdge?: DependencyEdge,
        // The token text.
        text?: TextSpan,
        // [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token.
        lemma?: string,
        // Parts of speech tag for this token.
        partOfSpeech?: PartOfSpeech,
    }
    
    interface TextSpan {
        // The API calculates the beginning offset of the content in the original
        // document according to the EncodingType specified in the API request.
        beginOffset?: number,
        // The content of the output text.
        content?: string,
    }
    
    interface Status {
        // A list of messages that carry the error details.  There will be a
        // common set of message types for APIs to use.
        details?: any[],        
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A developer-facing error message, which should be in English. Any
        // user-facing error message should be localized and sent in the
        // google.rpc.Status.details field, or localized by the client.
        message?: string,
    }
    
    interface Features {
        // Extract entities and their associated sentiment.
        extractEntitySentiment?: boolean,
        // Extract document-level sentiment.
        extractDocumentSentiment?: boolean,
        // Extract syntax information.
        extractSyntax?: boolean,
        // Extract entities.
        extractEntities?: boolean,
    }
    
    interface EntityMention {
        // The type of the entity mention.
        type?: string,
        // The mention text.
        text?: TextSpan,
        // For calls to AnalyzeEntitySentiment or if
        // AnnotateTextRequest.Features.extract_entity_sentiment is set to
        // true, this field will contain the sentiment expressed for this mention of
        // the entity in the provided document.
        sentiment?: Sentiment,
    }
    
    interface Document {
        // The content of the input in string format.
        content?: string,
        // Required. If the type is not set or is `TYPE_UNSPECIFIED`,
        // returns an `INVALID_ARGUMENT` error.
        type?: string,
        // The Google Cloud Storage URI where the file content is located.
        // This URI must be of the form: gs://bucket_name/object_name. For more
        // details, see https://cloud.google.com/storage/docs/reference-uris.
        // NOTE: Cloud Storage object versioning is not supported.
        gcsContentUri?: string,
        // The language of the document (if not specified, the language is
        // automatically detected). Both ISO and BCP-47 language codes are
        // accepted.<br>
        // [Language Support](/natural-language/docs/languages)
        // lists currently supported languages for each API method.
        // If the language (either specified by the caller or automatically detected)
        // is not supported by the called API method, an `INVALID_ARGUMENT` error
        // is returned.
        language?: string,
    }
    
    interface Sentence {
        // The sentence text.
        text?: TextSpan,
        // For calls to AnalyzeSentiment or if
        // AnnotateTextRequest.Features.extract_document_sentiment is set to
        // true, this field will contain the sentiment for the sentence.
        sentiment?: Sentiment,
    }
    
    interface AnalyzeEntitiesRequest {
        // Input document.
        document?: Document,
        // The encoding type used by the API to calculate offsets.
        encodingType?: string,
    }
    
    interface Sentiment {
        // Sentiment score between -1.0 (negative sentiment) and 1.0
        // (positive sentiment).
        score?: number,
        // A non-negative number in the [0, +inf) range, which represents
        // the absolute magnitude of sentiment regardless of score (positive or
        // negative).
        magnitude?: number,
    }
    
    interface AnalyzeEntitySentimentResponse {
        // The recognized entities in the input document with associated sentiments.
        entities?: Entity[],        
        // The language of the text, which will be the same as the language specified
        // in the request or, if not specified, the automatically-detected language.
        // See Document.language field for more details.
        language?: string,
    }
    
    interface AnalyzeEntitySentimentRequest {
        // The encoding type used by the API to calculate offsets.
        encodingType?: string,
        // Input document.
        document?: Document,
    }
    
    interface PartOfSpeech {
        // The grammatical form.
        form?: string,
        // The grammatical number.
        number?: string,
        // The grammatical voice.
        voice?: string,
        // The grammatical aspect.
        aspect?: string,
        // The grammatical mood.
        mood?: string,
        // The part of speech tag.
        tag?: string,
        // The grammatical gender.
        gender?: string,
        // The grammatical person.
        person?: string,
        // The grammatical properness.
        proper?: string,
        // The grammatical case.
        case?: string,
        // The grammatical tense.
        tense?: string,
        // The grammatical reciprocity.
        reciprocity?: string,
    }
    
    interface AnalyzeSyntaxRequest {
        // The encoding type used by the API to calculate offsets.
        encodingType?: string,
        // Input document.
        document?: Document,
    }
    
    interface AnalyzeSentimentResponse {
        // The overall sentiment of the input document.
        documentSentiment?: Sentiment,
        // The language of the text, which will be the same as the language specified
        // in the request or, if not specified, the automatically-detected language.
        // See Document.language field for more details.
        language?: string,
        // The sentiment for all the sentences in the document.
        sentences?: Sentence[],        
    }
    
    interface AnalyzeEntitiesResponse {
        // The recognized entities in the input document.
        entities?: Entity[],        
        // The language of the text, which will be the same as the language specified
        // in the request or, if not specified, the automatically-detected language.
        // See Document.language field for more details.
        language?: string,
    }
    
    interface DocumentsResource {
        // Analyzes the sentiment of the provided text.
        analyzeSentiment (request: {        
        }) : gapi.client.Request<AnalyzeSentimentResponse>;        
        
        // A convenience method that provides all syntax, sentiment, entity, and
        // classification features in one call.
        annotateText (request: {        
        }) : gapi.client.Request<AnnotateTextResponse>;        
        
        // Finds entities, similar to AnalyzeEntities in the text and analyzes
        // sentiment associated with each entity and its mentions.
        analyzeEntitySentiment (request: {        
        }) : gapi.client.Request<AnalyzeEntitySentimentResponse>;        
        
        // Finds named entities (currently proper names and common nouns) in the text
        // along with entity types, salience, mentions for each entity, and
        // other properties.
        analyzeEntities (request: {        
        }) : gapi.client.Request<AnalyzeEntitiesResponse>;        
        
        // Analyzes the syntax of the text and provides sentence boundaries and
        // tokenization along with part of speech tags, dependency trees, and other
        // properties.
        analyzeSyntax (request: {        
        }) : gapi.client.Request<AnalyzeSyntaxResponse>;        
        
    }
    
}

declare module gapi.client.language {
    var documents: gapi.client.language.DocumentsResource; 
    
}
