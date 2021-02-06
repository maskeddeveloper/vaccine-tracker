const fetch = require("node-fetch");
const csv = require("csvtojson");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const dataUrl =
  "https://api.github.com/repos/owid/covid-19-data/contents/public/data/vaccinations/locations.csv?ref=master";
export default async (req, res) => {
  let response = await fetch(dataUrl);
  let data = await response.json();
  let getContent = Buffer.from(data.content, "base64").toString();
  
  var finalData = await csv()
  .fromString(getContent)
  .then((csvRow) => {
    return csvRow;
  });
  
  res.setHeader("Content-Type", "application/json");
  return res.json(finalData);
};


