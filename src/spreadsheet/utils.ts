import { SHEET, SPREADSHEET } from "../config";
import { GRange, Spreadsheet, Sheet } from "../types";

export function getSheetById(spreadsheet: Spreadsheet, sheetID: number) : Sheet {

  const sheet = spreadsheet.getSheets().filter(s => s.getSheetId() == sheetID)[0];

  if (!sheet) throw new Error(`Unable to find sheet: ${sheetID}`)

  return sheet;

}

export function getDesiredRange(): GRange {

  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET);
  Logger.log(`Using spreadsheet: ${spreadsheet.getName()}`)

  const sheet = getSheetById(spreadsheet, SHEET);
  Logger.log(`Using sheet: ${sheet.getName()}`)

  // starting row, starting column, number of rows, number of columns
  return sheet.getRange(2, 1, 20, 8);

}