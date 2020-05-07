import { ZohoClient } from "./client";
import { HttpResponse, HttpOptions } from "../types";
import { TTParams } from "./types";

export class TTClient extends ZohoClient {

  private static readonly addTimelogUri: string = "timetracker/addtimelog";

  constructor() { super(); }

  public pushTask(args: TTParams): void {

    const options: HttpOptions = { method: "post" }

    const endpoint = this.chainParams(TTClient.addTimelogUri, args);

    const response: HttpResponse = this.call(endpoint, options);

    if (response.getResponseCode() != 200) 
    {
      Logger.log(`Response content: ${response.getContentText()}`);
      throw new Error(`Response code: ${response.getResponseCode()}`)
    }

    Logger.log(response.getContentText());

  }

}