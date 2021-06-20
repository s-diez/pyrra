/* tslint:disable */
/* eslint-disable */
/**
 * Athene
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Query,
    QueryFromJSON,
    QueryFromJSONTyped,
    QueryToJSON,
} from './';

/**
 * 
 * @export
 * @interface IndicatorLatency
 */
export interface IndicatorLatency {
    /**
     * 
     * @type {Query}
     * @memberof IndicatorLatency
     */
    success: Query;
    /**
     * 
     * @type {Query}
     * @memberof IndicatorLatency
     */
    total: Query;
}

export function IndicatorLatencyFromJSON(json: any): IndicatorLatency {
    return IndicatorLatencyFromJSONTyped(json, false);
}

export function IndicatorLatencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndicatorLatency {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': QueryFromJSON(json['success']),
        'total': QueryFromJSON(json['total']),
    };
}

export function IndicatorLatencyToJSON(value?: IndicatorLatency | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': QueryToJSON(value.success),
        'total': QueryToJSON(value.total),
    };
}


