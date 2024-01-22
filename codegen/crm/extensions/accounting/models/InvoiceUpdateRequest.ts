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
* The invoice data to update in HubSpot
*/
export class InvoiceUpdateRequest {
    'externalInvoiceNumber'?: string;
    /**
    * The ISO 4217 currency code that represents the currency used in the invoice to bill the recipient
    */
    'currencyCode'?: string;
    /**
    * The ISO-8601 due date of the invoice.
    */
    'dueDate'?: string;
    /**
    * The ID of the invoice recipient. This is the recipient ID from the external accounting system.
    */
    'externalRecipientId'?: string;
    'receivedByRecipientDate'?: number;
    /**
    * States if the invoice is voided or not.
    */
    'isVoided'?: boolean;
    /**
    * The ISO-8601 datetime of when the customer received the invoice.
    */
    'receivedByCustomerDate'?: string;
    /**
    * The number / name of the invoice.
    */
    'invoiceNumber'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "externalInvoiceNumber",
            "baseName": "externalInvoiceNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "dueDate",
            "baseName": "dueDate",
            "type": "string",
            "format": "date"
        },
        {
            "name": "externalRecipientId",
            "baseName": "externalRecipientId",
            "type": "string",
            "format": ""
        },
        {
            "name": "receivedByRecipientDate",
            "baseName": "receivedByRecipientDate",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "isVoided",
            "baseName": "isVoided",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "receivedByCustomerDate",
            "baseName": "receivedByCustomerDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "invoiceNumber",
            "baseName": "invoiceNumber",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InvoiceUpdateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

