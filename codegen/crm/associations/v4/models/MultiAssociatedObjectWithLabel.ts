/**
 * CRM Associations
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AssociationSpecWithLabel } from '../models/AssociationSpecWithLabel';

export class MultiAssociatedObjectWithLabel {
    'associationTypes': Array<AssociationSpecWithLabel>;
    'toObjectId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "associationTypes",
            "baseName": "associationTypes",
            "type": "Array<AssociationSpecWithLabel>",
            "format": ""
        },
        {
            "name": "toObjectId",
            "baseName": "toObjectId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MultiAssociatedObjectWithLabel.attributeTypeMap;
    }

    public constructor() {
    }
}

