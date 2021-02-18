import SEO from "../components/SEO";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Flag from "react-world-flags";

export default function Vaccines({ data }) {
  return (
    <>
      <SEO title='Vaccines used in each country' description='Vaccines used in each country'/>
      <Nav />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Vaccines used in each country
            </h2>
            <p class="lg:w-3/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div class="lg:w-3/3 w-full mx-auto overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"></th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Location
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    ISO code
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Vaccines
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Last observation date
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Source name
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                    Source website
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        <Flag
                          code={item.iso_code}
                          width="100"
                          fallback={<span>Not Set</span>}
                        />
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        {item.location}
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        {item.iso_code}
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        {item.vaccines}
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        {item.last_observation_date}
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        {item.source_name}
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        {item.source_website}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(process.env.VACS_ALL_LOCATIONS);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
