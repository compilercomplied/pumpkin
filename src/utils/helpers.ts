
// -------------------------------------------------------------------------------------------------
// Functions and utilities to aid in setting up the project
// -------------------------------------------------------------------------------------------------

import { SPREADSHEET } from "../config";


//** Logs name-id sheet pairs for specified spreadsheet * /
export function logSheetAttrs(spreadsheet: string = null) {

  SpreadsheetApp.openById(spreadsheet ?? SPREADSHEET)
    .getSheets()
    .forEach( s => {
      Logger.log(`name: ${s?.getName()} - id: ${s?.getSheetId()}`)
    });

}

export function logCalendarIDs() {

  let calendars = CalendarApp.getAllCalendars();

  calendars.forEach(cal => Logger.log(`name: ${cal.getName()} - id: ${cal.getId()}`));

}