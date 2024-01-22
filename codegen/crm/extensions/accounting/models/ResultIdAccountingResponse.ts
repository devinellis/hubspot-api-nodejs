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
* A response to the creation of an entity (eg. invoice, customer).
*/
export class ResultIdAccountingResponse {
    /**
    * Designates if the response is a success (\'OK\') or failure (\'ERR\').
    */
    'result': ResultIdAccountingResponseResultEnum;
    /**
    * The ID of created entity.
    */
    'id': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "result",
            "baseName": "@result",
            "type": "ResultIdAccountingResponseResultEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ResultIdAccountingResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ResultIdAccountingResponseResultEnum {
    Ok = 'OK',
    Err = 'ERR'
}

