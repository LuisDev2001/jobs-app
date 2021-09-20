export const actions = {
  GET_JOBS: async ({ state }) => {
    try {
      let objInfoJob = {
        companyName: "",
        jobName: "",
        isFullTime: "",
        countryName: "",
        publishDate: "",
      };
      const config = {
        method: "GET",
        headers: {
          Host: process.env.HOST,
          "User-Agent": process.env.VUE_APP_USER_AGENT,
          "Authorization-Key": process.env.VUE_APP_KEY_USAJOB,
        },
      };
      const response = await fetch(
        "https://data.usajobs.gov/api/search?JobCategoryCode=0854",
        config
      );
      const information = await response.json();

      information.SearchResult.SearchResultItems.forEach((job) => {
        objInfoJob = {
          companyName: job.MatchedObjectDescriptor.OrganizationName,
          jobName: job.MatchedObjectDescriptor.PositionTitle,
          isFullTime: job.MatchedObjectDescriptor.PositionSchedule[0].Name,
          countryName: job.MatchedObjectDescriptor.PositionLocationDisplay,
          publishDate: job.MatchedObjectDescriptor.PositionStartDate.split(
            "T"
          )[0],
        };
        state.jobs.push(objInfoJob);
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  },
};
