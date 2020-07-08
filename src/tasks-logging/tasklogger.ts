import { TTClient } from "../zoho/timetracker";
import { extractTasksFromSpreadsheet } from "../spreadsheet/spreadsheet";
import { Task } from "../models/task";
import { ZohoTask } from "../zoho/types";
import { ZOHO_FIXEDTASKS } from "../config";


//** Parses spreadsheet and pushes to zoho */
export function logCurrentDay() {

  let totalLoggedTime = 0;

  const TT = new TTClient()

  const jobs = extractTasksFromSpreadsheet();
  const hours: number = jobs.reduce((sum: number, task: Task) => { return sum + task.Time }, 0);
  totalLoggedTime += hours;


  TT.pushTask(new ZohoTask(hours));

  // If there are any fixed tasks and today is friday...
  const today = new Date();
  if (ZOHO_FIXEDTASKS.length > 0 && today.getDate() === 5) {
    ZOHO_FIXEDTASKS.forEach(task => {
        TT.pushTask(new ZohoTask(task.hours, task.id));
        totalLoggedTime += task.hours;
      }
    )
  }

  Logger.log(`Pushed time sum: ${totalLoggedTime}`);

}