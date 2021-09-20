export const actions = {
  GET_JOBS: async ({ state }) => {
    try {
      let today = new Date();
      let date = `${today.getFullYear()}-${today.getMonth() +
        1}-${today.getDate()}`;
      let fechaInicio = new Date(date).getTime();
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
        let fechaFinal = new Date(
          job.MatchedObjectDescriptor.PositionStartDate.split("T")[0]
        ).getTime();

        let diffDays = parseInt(
          (fechaInicio - fechaFinal) / (1000 * 60 * 60 * 24)
        );

        objInfoJob = {
          companyName: job.MatchedObjectDescriptor.OrganizationName,
          jobName: job.MatchedObjectDescriptor.PositionTitle,
          fullTime: job.MatchedObjectDescriptor.PositionSchedule,
          countryName: job.MatchedObjectDescriptor.PositionLocationDisplay,
          publishDate: diffDays,
        };

        state.jobs.push(objInfoJob);
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  },
};
