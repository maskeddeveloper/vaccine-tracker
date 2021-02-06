const fetch = require("node-fetch");
export default async(req, res) => {
   
    const allDataEndpoint = process.env.VACS_ALL_DATA

    let response = await fetch(allDataEndpoint);
    let data = await response.json();
    let finalData = [];
    let isoCodes = []
   
    data.forEach(element => {
      isoCodes.push(element.iso_code)
    });
    
    let finalIsoCodes = new Set(isoCodes)
   
    const latestData = new Date(
      Math.max(...data.map((e) => new Date(e.date)))
    );
    return res.json(latestData)
    // const latestDate =
    //   latestData.getFullYear() +
    //   "-" +
    //   latestData.getMonth() +
    //   1 +
    //   "-" +
    //   latestData.getDate();
    // console.log(latestDate);
    // const latestDateData = data.filter(
    //   (country) => country.date == latestDate
    // );
    // res.setHeader("Content-Type", "application/json");
    // return res.json(latestDateData)
  }

// get all data 


// for each iso check the latest 

//loop on each data get the iso and then 
  
  
