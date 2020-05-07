import { ZOHO_BASEJOB } from "../config";

export type BillingStatus = "billable" | "nonBillable";

export class ZohoDate extends Date {

  constructor() { super(); }

  asZohoDate(): string {

    return `${this.getFullYear()}-${this.getMonth()}-${this.getDay()}`;

  }

}

export class TTParams {

  constructor(
    readonly hours: number, 
    readonly jobId: number = ZOHO_BASEJOB,
    readonly billingStatus: BillingStatus = "billable",
    readonly workDate: ZohoDate = new ZohoDate(),
  ) { }

}
