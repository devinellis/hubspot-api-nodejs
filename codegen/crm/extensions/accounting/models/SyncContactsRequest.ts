/**
 * Accounting Extension
 * These APIs allow you to interact with HubSpot\'s Accounting Extension. It allows you to: * Specify the URLs that HubSpot will use when making webhook requests to your external accounting system. * Respond to webhook calls made to your external accounting system by HubSpot 
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UpdatedContact } from '../models/UpdatedContact';

/**
* A request to import external accounting contact properties in HubSpot
*/
export class SyncContactsRequest {
    /**
    * The ID of the account in the external accounting system. This is the value that will be passed as `accountId` for all outbound calls for the user from HubSpot to the external accounting system.
    */
    'accountId': string;
    /**
    * A list of contacts to be imported.
    */
    'contacts': Array<UpdatedContact>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "contacts",
            "baseName": "contacts",
            "type": "Array<UpdatedContact>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyncContactsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

