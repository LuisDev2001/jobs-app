import { Request } from "@/utils/getRequest";
import { parsePublisDate } from "@/utils/parsePublishDate";

export const actions = {
  GET_JOBS: async ({ state }, page = "1") => {
    try {
      let objInfoJob = {
        companyName: "",
        jobName: "",
        isFullTime: "",
        countryName: "",
        publishDate: "",
      };
      let arrayJobs = [];
      const URL_API = `https://data.usajobs.gov/api/Search?Page=${page}&ResultsPerPage=25`;

      const information = await Request(URL_API);

      information.SearchResult.SearchResultItems.forEach((job) => {
        let fechaFinal = new Date(
          job.MatchedObjectDescriptor.PositionStartDate.split("T")[0]
        ).getTime();
        let diffDays = parsePublisDate(fechaFinal);

        objInfoJob = {
          companyName: job.MatchedObjectDescriptor.OrganizationName,
          jobName: job.MatchedObjectDescriptor.PositionTitle,
          fullTime: job.MatchedObjectDescriptor.PositionSchedule,
          countryName: job.MatchedObjectDescriptor.PositionLocationDisplay,
          publishDate: diffDays,
        };
        arrayJobs.push(objInfoJob);
      });
      const divider = 5;
      for (let index = 0; index < arrayJobs.length; index += divider) {
        state.jobs.push(arrayJobs.slice(index, index + divider));
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  },
};
