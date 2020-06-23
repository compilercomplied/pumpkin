import { HOLIDAY_CALENDARS } from "../config";


export function isHoliday(date: Date = new Date()) : boolean {

  const calendars = HOLIDAY_CALENDARS.map(cal => CalendarApp.getCalendarById(cal));

  const isHoliday = calendars.map(cal => cal
    .getEventsForDay(date)
    .filter(e => e.isOwnedByMe())
  )
  .some(ownedEvents => ownedEvents.length > 0);

  return isHoliday;

}