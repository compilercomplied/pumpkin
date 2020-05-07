import { logCurrentDay } from "./tasks-logging/tasklogger";
import { mailTrace } from "./infra/maintenance";

function main() {

  logCurrentDay();
  mailTrace();

}