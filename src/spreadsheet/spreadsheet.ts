import { getDesiredRange } from "./utils";
import { JobStatus, Job } from "../models";

export function extractJobs() : Job[] {

  const jobs: Job[] = getDesiredRange().getValues()
    .map(row => {
      return <Job>{
        Name: row[0],
        Date: row[1],
        Account: row[2],
        SubAccount: row[3],
        Task: row[4],
        Time: row[5],
        SubAccountTitle: row[6],
        Status: Job.ParseStatus(row[7]),
      };
    }
  );

  const filtered = jobs.filter( job => job.Status == JobStatus.ToBeProcessed);
  Logger.log(`Fetched ${jobs.length} rows of which, ${filtered.length} are to be used`);

  return filtered;

}
