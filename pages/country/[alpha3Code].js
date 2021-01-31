import { useRouter } from "next/router";
import Papa from "papaparse";
import React from 'react'


const Country = () => {
  const router = useRouter();
  const { alpha3Code } = router.query;
  const [countryData, setCountryData] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv"
      );
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      // Get only currunt data of country
      let curruntCountryData = rows.filter(country => country.iso_code == alpha3Code)
      setCountryData(curruntCountryData);
    }
    getData();
    
  }, []); // [] means just do this once, after initial render
  console.log(countryData)
  return (
    <>
      <h1>Country: {alpha3Code}</h1>
     
    </>
  );
};

export default Country;
