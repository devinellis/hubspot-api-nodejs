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


/**
* Information about the account in your external account system.
*/
export class CreateUserAccountRequestExternal {
    /**
    * The id of the account in your system.
    */
    'accountId': string;
    /**
    * The name of the account in your system. This is normally the name visible to your users.
    */
    'accountName': string;
    /**
    * The default currency that this account uses.
    */
    'currencyCode': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountName",
            "baseName": "accountName",
            "type": "string",
            "format": ""
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateUserAccountRequestExternal.attributeTypeMap;
    }

    public constructor() {
    }
}

