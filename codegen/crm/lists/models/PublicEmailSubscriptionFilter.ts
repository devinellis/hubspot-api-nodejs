/**
 * Lists
 * CRUD operations to manage lists and list memberships
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PublicEmailSubscriptionFilter {
    'filterType': PublicEmailSubscriptionFilterFilterTypeEnum;
    'subscriptionIds': Array<number>;
    'acceptedStatuses': Array<string>;
    'subscriptionType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "PublicEmailSubscriptionFilterFilterTypeEnum",
            "format": ""
        },
        {
            "name": "subscriptionIds",
            "baseName": "subscriptionIds",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "acceptedStatuses",
            "baseName": "acceptedStatuses",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "subscriptionType",
            "baseName": "subscriptionType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicEmailSubscriptionFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicEmailSubscriptionFilterFilterTypeEnum {
    EmailSubscription = 'EMAIL_SUBSCRIPTION'
}

