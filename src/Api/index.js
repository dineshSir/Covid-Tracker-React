import axios from "axios";
const url = "https://covid19.mathdro.id/api";
export const CRDDNumberFetch = async (country) => {
  let changableURL = url;
  if (country) {
    changableURL = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changableURL);
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {
    console.log("Error Retrieving CRDDNumber Data");
  }
};

export const dailyDataFetch = async () => {
  try {
    const { data } = await axios.get("https://covid19.mathdro.id/api/daily");
    const modifiedDailyData = data.map((dayData) => ({
      confirmed: dayData.confirmed.total,
      deaths: dayData.deaths.total,
      date: dayData.reportDate,
    }));
    return modifiedDailyData;
  } catch (error) {
    console.log("Error Retrieving Daily Data");
  }
};

export const countriesNameFetch = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get("https://covid19.mathdro.id/api/countries");
    return countries.map((country) => country.name);
  } catch (error) {
    console.log("Error Fetching Countries Name");
    console.log("This is the error that is returned again.");
  }
};

