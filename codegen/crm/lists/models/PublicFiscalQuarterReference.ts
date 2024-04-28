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


export class PublicFiscalQuarterReference {
    'referenceType': PublicFiscalQuarterReferenceReferenceTypeEnum;
    'hour'?: number;
    'minute'?: number;
    'second'?: number;
    'millisecond'?: number;
    'month': number;
    'day': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "referenceType",
            "baseName": "referenceType",
            "type": "PublicFiscalQuarterReferenceReferenceTypeEnum",
            "format": ""
        },
        {
            "name": "hour",
            "baseName": "hour",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "minute",
            "baseName": "minute",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "second",
            "baseName": "second",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "millisecond",
            "baseName": "millisecond",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "month",
            "baseName": "month",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "day",
            "baseName": "day",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PublicFiscalQuarterReference.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicFiscalQuarterReferenceReferenceTypeEnum {
    FiscalQuarter = 'FISCAL_QUARTER'
}

