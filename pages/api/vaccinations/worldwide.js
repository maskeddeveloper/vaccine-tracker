const fetch = require("node-fetch");
export default async(req, res) => {
    const isoCode = 'OWID_WRL'
    const allCountryDataEndpoint = process.env.VACS_COUNTRY_LATEST_DATA + ""+isoCode

    let response = await fetch(allCountryDataEndpoint);
    let data = await response.json();
    
    res.setHeader("Content-Type", "application/json");
    return res.json(data)
  }

  
  
