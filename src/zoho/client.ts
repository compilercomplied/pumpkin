import { HttpOptions, HttpResponse } from "../types";
import { ZOHO_TOKEN, ZOHO_ID } from "../config";


export abstract class ZohoClient {

  private static readonly baseUri = "http://people.zoho.eu/people/api";

  protected constructor() { }

  protected call(endpoint: string, options: HttpOptions): HttpResponse {

    const uri = this.appendCredentials(`${ZohoClient.baseUri}/${endpoint}`);

    Logger.log(`Querying ${uri} with args: ${JSON.stringify(options)}`)

    const response = UrlFetchApp.fetch(uri, options);

    Logger.log(`Response status: ${response?.getResponseCode() ?? undefined}`);

    return response;

  }

  protected chainParams(endpoint: string, params: {}): string {

    let result = endpoint + "?";

    Object.keys(params).forEach((value, key ) => { 
        result.concat(`${key}=${value}&`)
      }
    );

    return result.slice(0, -1);

  }

  private appendCredentials(uri: string): string {
    return `${uri}&authtoken=${ZOHO_TOKEN}&user=${ZOHO_ID}`
  }

}