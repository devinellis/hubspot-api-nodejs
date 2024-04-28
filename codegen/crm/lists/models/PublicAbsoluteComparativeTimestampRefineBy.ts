/**
 * Lists
 * CRUD operations to manage lists and list memberships
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PublicAbsoluteComparativeTimestampRefineBy {
    'type': PublicAbsoluteComparativeTimestampRefineByTypeEnum;
    'comparison': string;
    'timestamp': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PublicAbsoluteComparativeTimestampRefineByTypeEnum",
            "format": ""
        },
        {
            "name": "comparison",
            "baseName": "comparison",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return PublicAbsoluteComparativeTimestampRefineBy.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicAbsoluteComparativeTimestampRefineByTypeEnum {
    AbsoluteComparative = 'ABSOLUTE_COMPARATIVE'
}

