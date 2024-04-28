/**
 * Imports
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ForwardPaging } from '../models/ForwardPaging';
import { PublicImportError } from '../models/PublicImportError';

export class CollectionResponsePublicImportErrorForwardPaging {
    'paging'?: ForwardPaging;
    'results': Array<PublicImportError>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paging",
            "baseName": "paging",
            "type": "ForwardPaging",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<PublicImportError>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponsePublicImportErrorForwardPaging.attributeTypeMap;
    }

    public constructor() {
    }
}

