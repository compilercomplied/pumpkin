import { isWeekend } from "../utils/date";
import { isHoliday } from "../calendar/holidays";


export function shouldRun(date: Date = new Date()) {

  const weekend = isWeekend(date);
  const holiday = isHoliday(date);

  const shouldRun = !weekend && !holiday;


  if (!shouldRun) {
    Logger.log(`Current state is not allowed to run`);
    Logger.log(`Weekend: ${weekend} Holiday: ${holiday}`);
  }

  return shouldRun;

}