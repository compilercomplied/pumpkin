import { ZOHO_BASETASK } from "../config";

export type BillingStatus = "billable" | "nonBillable";

export class ZohoTask {

  readonly workDate: string;

  constructor(
    readonly hours: number, 
    readonly jobId: number = ZOHO_BASETASK,
    readonly billingStatus: BillingStatus = "billable",
    private readonly _date: Date = new Date(),
  ) { 

    this.workDate = `${_date.getFullYear()}-${_date.getMonth()+1}-${_date.getDate()}`

  }

}
