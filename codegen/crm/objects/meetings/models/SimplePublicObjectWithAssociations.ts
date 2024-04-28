/**
 * Meetings
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CollectionResponseAssociatedId } from '../models/CollectionResponseAssociatedId';
import { ValueWithTimestamp } from '../models/ValueWithTimestamp';

export class SimplePublicObjectWithAssociations {
    'associations'?: { [key: string]: CollectionResponseAssociatedId; };
    'createdAt': Date;
    'archived'?: boolean;
    'archivedAt'?: Date;
    'propertiesWithHistory'?: { [key: string]: Array<ValueWithTimestamp>; };
    'id': string;
    'properties': { [key: string]: string | null; };
    'updatedAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "associations",
            "baseName": "associations",
            "type": "{ [key: string]: CollectionResponseAssociatedId; }",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "archivedAt",
            "baseName": "archivedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "propertiesWithHistory",
            "baseName": "propertiesWithHistory",
            "type": "{ [key: string]: Array<ValueWithTimestamp>; }",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: string | null; }",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return SimplePublicObjectWithAssociations.attributeTypeMap;
    }

    public constructor() {
    }
}

