
// Fills the gap in excel<->zoho task relationship.
export class Task { 

  Date: Date;
  Task: string;
  Time: number;
  Status: TaskStatus;

  public static parseStatus(stringStatus: string): TaskStatus {
    // "Introducido" | "Copiado a Excel"
    return stringStatus === 'Introducido' ? TaskStatus.ToBeProcessed : TaskStatus.Processed;
  }

  public static parseDate(date: Date): Date {
    // doesn't work otherwise????
    date.setDate(date.getDate() + 1) 
    return date;

  }

}

export enum TaskStatus {
  ToBeProcessed = 0,
  Processed = 1,
}
