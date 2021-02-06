const fetch = require("node-fetch");
export default async(req, res) => {
    const { query: { isoCode } } = req
    const allCountryDataEndpoint = process.env.VACS_COUNTRY_ALL_DATA + ""+isoCode

    let response = await fetch(allCountryDataEndpoint);
    let data = await response.json();
    const latestData = new Date(
      Math.max(...data.map((e) => new Date(e.date)))
    );
    const latestDate =
      latestData.getFullYear() +
      "-" +
      latestData.getMonth() +
      1 +
      "-" +
      latestData.getDate();
    console.log(latestDate);
    const latestDateData = data.filter(
      (country) => country.date == latestDate
    );
    res.setHeader("Content-Type", "application/json");
    return res.json(latestDateData)
  }

  
  
