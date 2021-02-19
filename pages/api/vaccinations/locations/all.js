
const csv = require("csvtojson");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export default async (req, res) => {
  var finalData = await csv()
    .fromFile("./public/dataFiles/locations.csv")
    .on("json", function (jsonArrayObj) {
      return jsonArrayObj;
    });
    
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  return res.json(finalData);
};


