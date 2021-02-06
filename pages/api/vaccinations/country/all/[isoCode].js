const fetch = require("node-fetch");
const allDataEndpoint = process.env.VACS_ALL_DATA;
export default async (req, res) => {
 

  const {
    query: { isoCode },
  } = req;
  let response = await fetch(allDataEndpoint);
  let data = await response.json();
  const curruntCountryData = data.filter(
    (country) => country.iso_code === isoCode
  );
  res.setHeader("Content-Type", "application/json");
  return res.json(curruntCountryData);
};
