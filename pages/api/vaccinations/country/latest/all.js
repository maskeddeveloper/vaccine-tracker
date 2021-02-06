const fetch = require("node-fetch");
// api for all the world
export default async (req, res) => {
  const allDataEndpoint = process.env.VACS_ALL_DATA;

  let response = await fetch(allDataEndpoint);
  let data = await response.json();
  let finalData = [];
  let isoCodes = [];

  data.forEach((element) => {
    isoCodes.push(element.iso_code);
  });

  let finalIsoCodes = new Set(isoCodes);

  //convert set to array
  var countriesLatestData = [];
  //let finalIsoCodesArray = [...finalIsoCodes]
  finalIsoCodes.forEach((iso) => {
    //get data for each iso code
    let curruntIsoData = data.filter((item) => item.iso_code == iso);

    let latestDateForIso = new Date(
      Math.max(...curruntIsoData.map((e) => new Date(e.date)))
    );
    var latestDate;
    latestDateForIso.setDate(latestDateForIso.getDate());
    latestDate =
      latestDateForIso.getFullYear() +
      "-" +
      ("0" + (latestDateForIso.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + latestDateForIso.getDate()).slice(-2);

    const latestDateData = curruntIsoData.filter(
      (country) => country.date == latestDate && country.iso_code == iso
    );
    countriesLatestData.push(latestDateData);
  });
  
  return res.json(countriesLatestData);
};
