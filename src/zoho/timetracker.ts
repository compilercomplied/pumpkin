import { ZohoClient } from "./client";
import { HttpResponse, HttpOptions } from "../types";
import { ZohoTask } from "./types";

export class TTClient extends ZohoClient {

  private static readonly addTimelogUri: string = "timetracker/addtimelog";

  constructor() { super(); }

  public pushTask(args: ZohoTask): void {

    const options: HttpOptions = { method: "post" }

    const endpoint = this.chainUrlParams(TTClient.addTimelogUri, args);

    const response: HttpResponse = this.call(endpoint, options);

    this.validateResponse(response);

  }

  private validateResponse(response: HttpResponse): void {

    if (response.getResponseCode() != 200)
      throw new Error(`Response code: ${response.getResponseCode()}`)

    const content = response.getContentText();

    if (!content.includes("Timelog entry added Successfully")) {
      Logger.log(content);
      throw new Error("Unexpected response");
    }

  }

}