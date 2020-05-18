import { isWeekend } from "../utils/date";


export function shouldRun(date: Date = new Date()) {

  return !isWeekend(date);

}