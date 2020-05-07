
export const SPREADSHEET: string = PropertiesService.getScriptProperties().getProperty('spreadsheet_id');
export const SHEET: number = <unknown>PropertiesService.getScriptProperties().getProperty('sheet_id') as number;

export const ZOHO_ID: string = PropertiesService.getScriptProperties().getProperty('zoho_id');
export const ZOHO_TOKEN: string = PropertiesService.getScriptProperties().getProperty('zoho_token');
export const ZOHO_BASEJOB: number = <unknown>PropertiesService.getScriptProperties().getProperty('zoho_basejob') as number;