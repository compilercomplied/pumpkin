
export enum JobStatus {
  ToBeProcessed = 0,
  Processed = 1,
}

export class Job { 

  Name: string;
  Date: Date;
  Account: string;
  SubAccount: string;
  Task: string;
  Time: number;
  SubAccountTitle: string;
  Status: JobStatus;

  public static ParseStatus(stringStatus: string): JobStatus {
    // "Introducido" | "Copiado a Excel"
    return stringStatus === 'Introducido' ? JobStatus.ToBeProcessed : JobStatus.Processed;
  }

}