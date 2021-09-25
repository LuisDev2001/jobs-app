export async function Request(urlApi) {
  try {
    const config = {
      method: "GET",
      headers: {
        Host: process.env.HOST,
        "User-Agent": process.env.VUE_APP_USER_AGENT,
        "Authorization-Key": process.env.VUE_APP_KEY_USAJOB,
      },
    };
    const response = await fetch(urlApi, config);
    const information = await response.json();
    return information;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
