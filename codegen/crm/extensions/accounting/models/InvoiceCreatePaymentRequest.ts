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


export class InvoiceCreatePaymentRequest {
    /**
    * The amount that this payment is for.
    */
    'amountPaid': number;
    /**
    * The ISO 4217 currency code that represents the currency of the payment.
    */
    'currencyCode': string;
    /**
    * The datetime that this payment was received.
    */
    'paymentDateTime': Date;
    /**
    * The id of this payment in the external accounting system.
    */
    'externalPaymentId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amountPaid",
            "baseName": "amountPaid",
            "type": "number",
            "format": ""
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentDateTime",
            "baseName": "paymentDateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "externalPaymentId",
            "baseName": "externalPaymentId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InvoiceCreatePaymentRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

