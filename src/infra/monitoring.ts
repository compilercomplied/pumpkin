import { EMAIL } from "../config";


export function mailTrace() {

  Logger.log(`Mail dump starting; current remaining mail quota: ${MailApp.getRemainingDailyQuota()}`);

  const payload = Logger.getLog();

  MailApp.sendEmail(EMAIL, "pumpkin trace", payload);

}