// Type definitions for Google Cloud Vision API v1
// Project: https://cloud.google.com/vision/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.vision {
    
    interface ImageSource {
        // Google Cloud Storage image URI. It must be in the following form:
        // "gs://bucket_name/object_name". For more
        // details, please see: https://cloud.google.com/storage/docs/reference-uris.
        // NOTE: Cloud Storage object versioning is not supported!
        gcsImageUri?: string,
    }
    
    interface AnnotateImageRequest {
        // The image to be processed.
        image?: Image,
        // Additional context that may accompany the image.
        imageContext?: ImageContext,
        // Requested features.
        features?: Feature[],        
    }
    
    interface AnnotateImageResponse {
        // If present, label detection completed successfully.
        labelAnnotations?: EntityAnnotation[],        
        // If present, landmark detection completed successfully.
        landmarkAnnotations?: EntityAnnotation[],        
        // If present, safe-search annotation completed successfully.
        safeSearchAnnotation?: SafeSearchAnnotation,
        // If present, image properties were extracted successfully.
        imagePropertiesAnnotation?: ImageProperties,
        // If present, text (OCR) detection completed successfully.
        textAnnotations?: EntityAnnotation[],        
        // If present, logo detection completed successfully.
        logoAnnotations?: EntityAnnotation[],        
        // If present, face detection completed successfully.
        faceAnnotations?: FaceAnnotation[],        
        // If set, represents the error message for the operation.
        // Note that filled-in mage annotations are guaranteed to be
        // correct, even when <code>error</code> is non-empty.
        error?: Status,
    }
    
    interface LatLongRect {
        // Max lat/long pair.
        maxLatLng?: LatLng,
        // Min lat/long pair.
        minLatLng?: LatLng,
    }
    
    interface Status {
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A list of messages that carry the error details.  There will be a
        // common set of message types for APIs to use.
        details?: any[],        
        // A developer-facing error message, which should be in English. Any
        // user-facing error message should be localized and sent in the
        // google.rpc.Status.details field, or localized by the client.
        message?: string,
    }
    
    interface FaceAnnotation {
        // Pitch angle. Indicates the upwards/downwards angle that the face is
        // pointing
        // relative to the image's horizontal plane. Range [-180,180].
        tiltAngle?: number,
        // Under-exposed likelihood.
        underExposedLikelihood?: string,
        // This bounding polygon is tighter than the previous
        // <code>boundingPoly</code>, and
        // encloses only the skin part of the face. Typically, it is used to
        // eliminate the face from any image analysis that detects the
        // "amount of skin" visible in an image. It is not based on the
        // landmarker results, only on the initial face detection, hence
        // the <code>fd</code> (face detection) prefix.
        fdBoundingPoly?: BoundingPoly,
        // Face landmarking confidence. Range [0, 1].
        landmarkingConfidence?: number,
        // Joy likelihood.
        joyLikelihood?: string,
        // Detection confidence. Range [0, 1].
        detectionConfidence?: number,
        // Surprise likelihood.
        surpriseLikelihood?: string,
        // Anger likelihood.
        angerLikelihood?: string,
        // Headwear likelihood.
        headwearLikelihood?: string,
        // The bounding polygon around the face. The coordinates of the bounding box
        // are in the original image's scale, as returned in ImageParams.
        // The bounding box is computed to "frame" the face in accordance with human
        // expectations. It is based on the landmarker results.
        // Note that one or more x and/or y coordinates may not be generated in the
        // BoundingPoly (the polygon will be unbounded) if only a partial face appears in
        // the image to be annotated.
        boundingPoly?: BoundingPoly,
        // Yaw angle. Indicates the leftward/rightward angle that the face is
        // pointing, relative to the vertical plane perpendicular to the image. Range
        // [-180,180].
        panAngle?: number,
        // Detected face landmarks.
        landmarks?: Landmark[],        
        // Blurred likelihood.
        blurredLikelihood?: string,
        // Roll angle. Indicates the amount of clockwise/anti-clockwise rotation of
        // the
        // face relative to the image vertical, about the axis perpendicular to the
        // face. Range [-180,180].
        rollAngle?: number,
        // Sorrow likelihood.
        sorrowLikelihood?: string,
    }
    
    interface Vertex {
        // Y coordinate.
        y?: number,
        // X coordinate.
        x?: number,
    }
    
    interface ColorInfo {
        // Stores the fraction of pixels the color occupies in the image.
        // Value in range [0, 1].
        pixelFraction?: number,
        // RGB components of the color.
        color?: Color,
        // Image-specific score for this color. Value in range [0, 1].
        score?: number,
    }
    
    interface BoundingPoly {
        // The bounding polygon vertices.
        vertices?: Vertex[],        
    }
    
    interface Landmark {
        // Face landmark position.
        position?: Position,
        // Face landmark type.
        type?: string,
    }
    
    interface ImageContext {
        // List of languages to use for TEXT_DETECTION. In most cases, an empty value
        // will yield the best results as it will allow text detection to
        // automatically detect the text language. For languages based on the latin
        // alphabet a hint is not needed. In rare cases, when the language of
        // the text in the image is known in advance, setting this hint will help get
        // better results (although it will hurt a great deal if the hint is wrong).
        // Text detection will return an error if one or more of the languages
        // specified here are not supported. The exact list of supported languages are
        // specified here:
        // https://cloud.google.com/translate/v2/using_rest#language-params
        languageHints?: string[],        
        // Lat/long rectangle that specifies the location of the image.
        latLongRect?: LatLongRect,
    }
    
    interface BatchAnnotateImagesRequest {
        // Individual image annotation requests for this batch.
        requests?: AnnotateImageRequest[],        
    }
    
    interface EntityAnnotation {
        // Knowledge Graph entity ID. Maps to a freebase entity ID.
        // (for example, "Google" maps to: mid /m/045c7b).
        mid?: string,
        // Entity textual description, expressed in its <code>locale</code> language.
        description?: string,
        // The relevancy of the ICA (Image Content Annotation) label to the
        // image. For example, the relevancy of 'tower' to an image containing
        // 'Eiffel Tower' is likely higher than an image containing a distant towering
        // building, though the confidence that there is a tower may be the same.
        // Range [0, 1].
        topicality?: number,
        // The language code for the locale in which the entity textual
        // <code>description</code> (next field) is expressed.
        locale?: string,
        // Some entities can have additional optional <code>Property</code> fields.
        // For example a different kind of score or string that qualifies the entity.
        properties?: Property[],        
        // Overall score of the result. Range [0, 1].
        score?: number,
        // Image region to which this entity belongs.
        boundingPoly?: BoundingPoly,
        // The location information for the detected entity. Multiple
        // <code>LocationInfo</code> elements can be present since one location may
        // indicate the location of the scene in the query image, and another the
        // location of the place where the query image was taken. Location information
        // is usually present for landmarks.
        locations?: LocationInfo[],        
        // The accuracy of the entity detection in an image.
        // For example, for an image containing 'Eiffel Tower,' this field represents
        // the confidence that there is a tower in the query image. Range [0, 1].
        confidence?: number,
    }
    
    interface Property {
        // Value of the property.
        value?: string,
        // Name of the property.
        name?: string,
    }
    
    interface Color {
        // The amount of green in the color as a value in the interval [0, 1].
        green?: number,
        // The amount of blue in the color as a value in the interval [0, 1].
        blue?: number,
        // The amount of red in the color as a value in the interval [0, 1].
        red?: number,
        // The fraction of this color that should be applied to the pixel. That is,
        // the final pixel color is defined by the equation:
        // 
        //   pixel color = alpha * (this color) + (1.0 - alpha) * (background color)
        // 
        // This means that a value of 1.0 corresponds to a solid color, whereas
        // a value of 0.0 corresponds to a completely transparent color. This
        // uses a wrapper message rather than a simple float scalar so that it is
        // possible to distinguish between a default value and the value being unset.
        // If omitted, this color object is to be rendered as a solid color
        // (as if the alpha value had been explicitly given with a value of 1.0).
        alpha?: number,
    }
    
    interface LocationInfo {
        // Lat - long location coordinates.
        latLng?: LatLng,
    }
    
    interface SafeSearchAnnotation {
        // Likelihood this is a medical image.
        medical?: string,
        // Violence likelihood.
        violence?: string,
        // Spoof likelihood. The likelihood that an obvious modification
        // was made to the image's canonical version to make it appear
        // funny or offensive.
        spoof?: string,
        // Represents the adult contents likelihood for the image.
        adult?: string,
    }
    
    interface Image {
        // Google Cloud Storage image location. If both 'content' and 'source'
        // are filled for an image, 'content' takes precedence and it will be
        // used for performing the image annotation request.
        source?: ImageSource,
        // Image content, represented as a stream of bytes.
        content?: string,
    }
    
    interface DominantColorsAnnotation {
        // RGB color values, with their score and pixel fraction.
        colors?: ColorInfo[],        
    }
    
    interface Feature {
        // Maximum number of results of this type.
        maxResults?: number,
        // The feature type.
        type?: string,
    }
    
    interface BatchAnnotateImagesResponse {
        // Individual responses to image annotation requests within the batch.
        responses?: AnnotateImageResponse[],        
    }
    
    interface ImageProperties {
        // If present, dominant colors completed successfully.
        dominantColors?: DominantColorsAnnotation,
    }
    
    interface Position {
        // Y coordinate.
        y?: number,
        // Z coordinate (or depth).
        z?: number,
        // X coordinate.
        x?: number,
    }
    
    interface LatLng {
        // The longitude in degrees. It must be in the range [-180.0, +180.0].
        longitude?: number,
        // The latitude in degrees. It must be in the range [-90.0, +90.0].
        latitude?: number,
    }
    
    interface ImagesResource {
        // Run image detection and annotation for a batch of images.
        annotate (request: {        
        }) : gapi.client.Request<BatchAnnotateImagesResponse>;        
        
    }
    
}

declare module gapi.client.vision {
    var images: gapi.client.vision.ImagesResource; 
    
}
