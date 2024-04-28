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

import { Paging } from '../models/Paging';
import { PublicImportResponse } from '../models/PublicImportResponse';

export class CollectionResponsePublicImportResponse {
    'paging'?: Paging;
    'results': Array<PublicImportResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paging",
            "baseName": "paging",
            "type": "Paging",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<PublicImportResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponsePublicImportResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

