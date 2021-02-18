import SEO from "../components/SEO";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Card from "../components/Card";
import CardCountainer from "../components/CardCountainer";
import TestIcon from "../components/icons/TestIcon";
import TableContainer from "../components/TableContainer";
import NumberFormat from "react-number-format";
export default function Home({ data, latest }) {
 
  return (
    <>
      <SEO />
      <Nav />
      <CardCountainer>
      <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Worldwide Coronavirus (COVID-19) Vaccinations</h1>
            <p class="lg:w-3/3 mx-auto leading-relaxed text-base"></p>
          </div>
        <Card
          number={
            <NumberFormat
              value={data[0].total_vaccinations}
              displayType={"text"}
              thousandSeparator={true}
            />
          }
          title="Doses given"
        >
          <TestIcon />
        </Card>
        <Card
          number={
            <NumberFormat
              value={data[0].total_vaccinations_per_hundred}
              displayType={"text"}
              thousandSeparator={true}
            />
          }
          title="Doses per 100 people"
        >
          <TestIcon />
        </Card>
        <Card
          number={
            <NumberFormat
              value={data[0].people_vaccinated}
              displayType={"text"}
              thousandSeparator={true}
            />
          }
          title="People vaccinated"
        >
          <TestIcon />
        </Card>
        <Card
          number={
            <NumberFormat
              value={data[0].people_fully_vaccinated}
              displayType={"text"}
              thousandSeparator={true}
            />
          }
          title="People fully vaccinated"
        >
          <TestIcon />
        </Card>
      </CardCountainer>
      <TableContainer
        tableTitle="Country-by-country data on COVID-19 vaccinations"
        tableDescription=""
        data={latest}
      ></TableContainer>
      <Footer />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(process.env.VACS_WORLD);
  const data = await res.json();
  const res2 = await fetch(process.env.VACS_ALL_LATEST_DATA);
  const latest = await res2.json();

  // Pass data to the page via props
  return { props: { data,latest } };
  
}
