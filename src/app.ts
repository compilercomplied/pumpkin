import { logCurrentDay } from "./tasks-logging/tasklogger";
import { mailTrace } from "./infra/monitoring";
import { shouldRun } from "./infra/checks";

function main() {

  if (!shouldRun()) {
    console.log("Current state is not allowed to run.");
    return;
  }

  logCurrentDay();
  mailTrace();

}