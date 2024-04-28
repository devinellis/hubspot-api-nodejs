/**
 * Business Units
 * Retrieve Business Unit information.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* A Business Unit\'s logo metadata
*/
export class PublicBusinessUnitLogoMetadata {
    /**
    * The logo\'s alt text
    */
    'logoAltText'?: string;
    /**
    * The logo\'s resized url
    */
    'resizedUrl'?: string;
    /**
    * The logo\'s url
    */
    'logoUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "logoAltText",
            "baseName": "logoAltText",
            "type": "string",
            "format": ""
        },
        {
            "name": "resizedUrl",
            "baseName": "resizedUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "logoUrl",
            "baseName": "logoUrl",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicBusinessUnitLogoMetadata.attributeTypeMap;
    }

    public constructor() {
    }
}

