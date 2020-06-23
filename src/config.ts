
// target spreadsheet and sheet IDs; use the helper util to initially log them
export const SPREADSHEET: string = PropertiesService.getScriptProperties().getProperty('spreadsheet_id');
export const SHEET: number = <unknown>PropertiesService.getScriptProperties().getProperty('sheet_id') as number;

// zoho user id
export const ZOHO_ID: string = PropertiesService.getScriptProperties().getProperty('zoho_id');
// zoho auth token
export const ZOHO_TOKEN: string = PropertiesService.getScriptProperties().getProperty('zoho_token');
// zoho task to use as a filler when none is specified
export const ZOHO_BASETASK: number = <unknown>PropertiesService.getScriptProperties().getProperty('zoho_basejob') as number;

// used to email logs after execution
export const EMAIL: string = PropertiesService.getScriptProperties().getProperty('email');

// Fixed tasks that are repeated each day in the format of taskid#hours, separated each by a semicolon
export const ZOHO_FIXEDTASKS: {id: number, hours: number}[] = parseValueAsArray("zoho_fixedtasks", ";")
  .map(item => ({ 
    id: <unknown>item.split("#")[0] as number, 
    hours: <unknown>item.split("#")[1] as number 
  }) 
);

// Fixed tasks that are repeated each day in the format of taskid#hours, separated each by a semicolon
export const HOLIDAY_CALENDARS: string[] = parseValueAsArray("holiday_calendars", ";");

// --- aux -----------------------------------------------------------------------------------------
function parseValueAsArray(property: string, separator: string) : string[] {
  const raw = PropertiesService.getScriptProperties().getProperty(property);
  return raw?.split(separator) ?? [];
}