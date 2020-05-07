import { getDesiredRange } from "./utils";
import { Task } from "../models/task";
import { datesAreEqual } from "../utils/date";

export function extractTasksFromSpreadsheet(date: Date = new Date()) : Task[] {

  const tasks: Task[] = getDesiredRange().getValues().map(row => {
    return <Task>{
      Date: Task.parseDate(row[1]),
      Task: row[4],
      Time: row[5],
      Status: Task.parseStatus(row[7]),
    };
  });

  const tasksOnDate = tasks.filter( task => datesAreEqual(task.Date, date));

  if (tasksOnDate.length === 0){
    Logger.log(`TOTAL TASKS: ${JSON.stringify(tasks)}`);
    throw new Error("No tasks found for today");
  }

  Logger.log(`Found following tasks for today: ${JSON.stringify(tasksOnDate, null, '\t')}`);

  return tasksOnDate;

}
