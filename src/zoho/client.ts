import { HttpOptions, HttpResponse } from "../types";
import { ZOHO_TOKEN, ZOHO_ID } from "../config";


export abstract class ZohoClient {

  private static readonly baseUri = "http://people.zoho.eu/people/api";

  protected constructor() { }

  protected call(endpoint: string, options: HttpOptions): HttpResponse {

    const uri = this.appendCredentials(`${ZohoClient.baseUri}/${endpoint}`);
    options.muteHttpExceptions = true;  // logging

    // Logger.log(`Querying ${uri} with args: ${JSON.stringify(options)}`)

    const response = UrlFetchApp.fetch(uri, options);

    Logger.log(`Response status: ${response?.getResponseCode() ?? undefined}`);
    Logger.log(`Response content: ${response?.getContentText() ?? undefined}`);

    return response;

  }

  protected chainUrlParams(endpoint: string, params: {}): string {

    let result = endpoint + "?";

    Object.keys(params)
      .filter(p => !p.startsWith("_"))
      .forEach((key) => { 
        result = result.concat(`${key}=${params[key]}&`)
      }
    );
    
    result = result.slice(0, -1);

    return result;

  }

  private appendCredentials(uri: string): string {
    return `${uri}&authtoken=${ZOHO_TOKEN}&user=${ZOHO_ID}`
  }

}