import { extractJobs } from "./spreadsheet/spreadsheet";
import { TTClient } from "./zoho/timetracker";
import { TTParams } from "./zoho/types";
import { Job } from "./models";

function main() {

  const jobs = extractJobs();
  const hours: number = jobs.reduce((sum: number, job: Job) => { return sum + job.Time }, 0);


  const TT = new TTClient()

  TT.pushTask(new TTParams(hours))

}