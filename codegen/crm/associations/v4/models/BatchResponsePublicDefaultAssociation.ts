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

import { PublicDefaultAssociation } from '../models/PublicDefaultAssociation';
import { StandardError } from '../models/StandardError';

export class BatchResponsePublicDefaultAssociation {
    'completedAt': Date;
    'numErrors'?: number;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: { [key: string]: string; };
    'results': Array<PublicDefaultAssociation>;
    'errors'?: Array<StandardError>;
    'status': BatchResponsePublicDefaultAssociationStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "numErrors",
            "baseName": "numErrors",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<PublicDefaultAssociation>",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<StandardError>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "BatchResponsePublicDefaultAssociationStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchResponsePublicDefaultAssociation.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BatchResponsePublicDefaultAssociationStatusEnum {
    Pending = 'PENDING',
    Processing = 'PROCESSING',
    Canceled = 'CANCELED',
    Complete = 'COMPLETE'
}

