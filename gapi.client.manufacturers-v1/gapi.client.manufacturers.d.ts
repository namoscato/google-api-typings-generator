// Type definitions for Google Manufacturer Center API v1
// Project: https://developers.google.com/manufacturers/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.manufacturers {
    
    interface Capacity {
        // The unit of the capacity, i.e., MB, GB, or TB.
        unit?: string,
        // The numeric value of the capacity.
        value?: string,
    }
    
    interface ListProductsResponse {
        // List of the products.
        products?: Product[],        
        // The token for the retrieval of the next page of product statuses.
        nextPageToken?: string,
    }
    
    interface ProductDetail {
        // The name of the attribute.
        attributeName?: string,
        // The value of the attribute.
        attributeValue?: string,
        // A short section name that can be reused between multiple product details.
        sectionName?: string,
    }
    
    interface Issue {
        // The timestamp when this issue appeared.
        timestamp?: string,
        // The severity of the issue.
        severity?: string,
        // Description of the issue.
        description?: string,
        // The server-generated type of the issue, for example,
        // “INCORRECT_TEXT_FORMATTING”, “IMAGE_NOT_SERVEABLE”, etc.
        type?: string,
        // If present, the attribute that triggered the issue. For more information
        // about attributes, see
        // https://support.google.com/manufacturers/answer/6124116.
        attribute?: string,
    }
    
    interface FeatureDescription {
        // An optional image describing the feature.
        image?: Image,
        // A short description of the feature.
        headline?: string,
        // A detailed description of the feature.
        text?: string,
    }
    
    interface Empty {
    }
    
    interface Price {
        // The currency in which the price is denoted.
        currency?: string,
        // The numeric value of the price.
        amount?: string,
    }
    
    interface Image {
        // The type of the image, i.e., crawled or uploaded.
        // @OutputOnly
        type?: string,
        // The URL of the image. For crawled images, this is the provided URL. For
        // uploaded images, this is a serving URL from Google if the image has been
        // processed successfully.
        imageUrl?: string,
        // The status of the image.
        // @OutputOnly
        status?: string,
    }
    
    interface Attributes {
        // The size type of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#sizetype.
        sizeType?: string,
        // The suggested retail price (MSRP) of the product. For more information,
        // see https://support.google.com/manufacturers/answer/6124116#price.
        suggestedRetailPrice?: Price,
        // The rich format description of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#featuredesc.
        featureDescription?: FeatureDescription[],        
        // The size of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#size.
        size?: string,
        // The title of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#title.
        title?: string,
        // The count of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#count.
        count?: Count,
        // The brand name of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#brand.
        brand?: string,
        // The material of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#material.
        material?: string,
        // The disclosure date of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#disclosure.
        disclosureDate?: string,
        // The scent of the product. For more information, see
        //  https://support.google.com/manufacturers/answer/6124116#scent.
        scent?: string,
        // The flavor of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#flavor.
        flavor?: string,
        // The details of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#productdetail.
        productDetail?: ProductDetail[],        
        // The target age group of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#agegroup.
        ageGroup?: string,
        // The Manufacturer Part Number (MPN) of the product. For more information,
        // see https://support.google.com/manufacturers/answer/6124116#mpn.
        mpn?: string,
        // The URL of the detail page of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#productpage.
        productPageUrl?: string,
        // The release date of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#release.
        releaseDate?: string,
        // The item group id of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#itemgroupid.
        itemGroupId?: string,
        // The Global Trade Item Number (GTIN) of the product. For more information,
        // see https://support.google.com/manufacturers/answer/6124116#gtin.
        gtin?: string[],        
        // The name of the group of products related to the product. For more
        // information, see
        // https://support.google.com/manufacturers/answer/6124116#productline.
        productLine?: string,
        // The capacity of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#capacity.
        capacity?: Capacity,
        // The description of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#description.
        description?: string,
        // The target gender of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#gender.
        gender?: string,
        // The size system of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#sizesystem.
        sizeSystem?: string,
        // The theme of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#theme.
        theme?: string,
        // The pattern of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#pattern.
        pattern?: string,
        // The image of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#image.
        imageLink?: Image,
        // The category of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#producttype.
        productType?: string[],        
        // The format of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#format.
        format?: string,
        // The additional images of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#addlimage.
        additionalImageLink?: Image[],        
        // The videos of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#video.
        videoLink?: string[],        
        // The color of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#color.
        color?: string,
        // The canonical name of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#productname.
        productName?: string,
    }
    
    interface Count {
        // The unit in which these products are counted.
        unit?: string,
        // The numeric value of the number of products in a package.
        value?: string,
    }
    
    interface Product {
        // A server-generated list of issues associated with the product.
        // @OutputOnly
        issues?: Issue[],        
        // Names of the attributes of the product deleted manually via the
        // Manufacturer Center UI.
        // @OutputOnly
        manuallyDeletedAttributes?: string[],        
        // Final attributes of the product. The final attributes are obtained by
        // overriding the uploaded attributes with the manually provided and deleted
        // attributes. Google systems only process, evaluate, review, and/or use final
        // attributes.
        // @OutputOnly
        finalAttributes?: Attributes,
        // The ID of the product. For more information, see
        // https://support.google.com/manufacturers/answer/6124116#id.
        // @OutputOnly
        productId?: string,
        // Attributes of the product uploaded via the Manufacturer Center API or via
        // feeds.
        uploadedAttributes?: Attributes,
        // Parent ID in the format `accounts/{account_id}`.
        // 
        // `account_id` - The ID of the Manufacturer Center account.
        // @OutputOnly
        parent?: string,
        // Attributes of the product provided manually via the Manufacturer Center UI.
        // @OutputOnly
        manuallyProvidedAttributes?: Attributes,
        // The target country of the product as a CLDR territory code (for example,
        // US).
        // @OutputOnly
        targetCountry?: string,
        // The content language of the product as a two-letter ISO 639-1 language code
        // (for example, en).
        // @OutputOnly
        contentLanguage?: string,
        // Name in the format `{target_country}:{content_language}:{product_id}`.
        // 
        // `target_country`   - The target country of the product as a CLDR territory
        //                      code (for example, US).
        // 
        // `content_language` - The content language of the product as a two-letter
        //                      ISO 639-1 language code (for example, en).
        // 
        // `product_id`     -   The ID of the product. For more information, see
        //                      https://support.google.com/manufacturers/answer/6124116#id.
        // @OutputOnly
        name?: string,
    }
    
    interface ProductsResource {
        // Deletes the product from a Manufacturer Center account.
        delete (request: {        
            // Name in the format `{target_country}:{content_language}:{product_id}`.
            // 
            // `target_country`   - The target country of the product as a CLDR territory
            //                      code (for example, US).
            // 
            // `content_language` - The content language of the product as a two-letter
            //                      ISO 639-1 language code (for example, en).
            // 
            // `product_id`     -   The ID of the product. For more information, see
            //                      https://support.google.com/manufacturers/answer/6124116#id.
            name: string,
            // Parent ID in the format `accounts/{account_id}`.
            // 
            // `account_id` - The ID of the Manufacturer Center account.
            parent: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets the product from a Manufacturer Center account, including product
        // issues.
        // 
        // A recently updated product takes some time to be processed before any
        // changes are visible. While some issues may be available once the product
        // has been processed, other issues may take days to appear.
        get (request: {        
            // Parent ID in the format `accounts/{account_id}`.
            // 
            // `account_id` - The ID of the Manufacturer Center account.
            parent: string,
            // Name in the format `{target_country}:{content_language}:{product_id}`.
            // 
            // `target_country`   - The target country of the product as a CLDR territory
            //                      code (for example, US).
            // 
            // `content_language` - The content language of the product as a two-letter
            //                      ISO 639-1 language code (for example, en).
            // 
            // `product_id`     -   The ID of the product. For more information, see
            //                      https://support.google.com/manufacturers/answer/6124116#id.
            name: string,
        }) : gapi.client.Request<Product>;        
        
        // Lists all the products in a Manufacturer Center account.
        list (request: {        
            // Maximum number of product statuses to return in the response, used for
            // paging.
            pageSize?: number,
            // Parent ID in the format `accounts/{account_id}`.
            // 
            // `account_id` - The ID of the Manufacturer Center account.
            parent: string,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<ListProductsResponse>;        
        
        // Inserts or updates the product in a Manufacturer Center account.
        // 
        // The checks at upload time are minimal. All required attributes need to be
        // present for a product to be valid. Issues may show up later
        // after the API has accepted an update for a product and it is possible to
        // overwrite an existing valid product with an invalid product. To detect
        // this, you should retrieve the product and check it for issues once the
        // updated version is available.
        // 
        // Inserted or updated products first need to be processed before they can be
        // retrieved. Until then, new products will be unavailable, and retrieval
        // of updated products will return the original state of the product.
        update (request: {        
            // Name in the format `{target_country}:{content_language}:{product_id}`.
            // 
            // `target_country`   - The target country of the product as a CLDR territory
            //                      code (for example, US).
            // 
            // `content_language` - The content language of the product as a two-letter
            //                      ISO 639-1 language code (for example, en).
            // 
            // `product_id`     -   The ID of the product. For more information, see
            //                      https://support.google.com/manufacturers/answer/6124116#id.
            name: string,
            // Parent ID in the format `accounts/{account_id}`.
            // 
            // `account_id` - The ID of the Manufacturer Center account.
            parent: string,
        }) : gapi.client.Request<Product>;        
        
    }
    
    
    interface AccountsResource {
        products: ProductsResource,
    }
    
}

declare module gapi.client.manufacturers {
    var accounts: gapi.client.manufacturers.AccountsResource; 
    
}
