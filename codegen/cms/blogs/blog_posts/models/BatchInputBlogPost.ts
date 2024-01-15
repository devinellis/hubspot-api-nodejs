/**
 * Posts
 * Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BlogPost } from '../models/BlogPost';

/**
* Wrapper for providing an array of blog posts as inputs.
*/
export class BatchInputBlogPost {
    /**
    * Blog posts to input.
    */
    'inputs': Array<BlogPost>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<BlogPost>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchInputBlogPost.attributeTypeMap;
    }

    public constructor() {
    }
}

