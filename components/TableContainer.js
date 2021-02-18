import NumberFormat from "react-number-format";
import Flag from "react-world-flags";

const TableContainer = (props) => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            {props.tableTitle}
          </h2>
          <p class="lg:w-3/3 mx-auto leading-relaxed text-base">
            {props.tableDescription}
          </p>
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
                  Date
                </th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Doses given
                </th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Doses per 100 people
                </th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  People vaccinated
                </th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                  People fully vaccinated
                </th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((item) => {
                return item[0].iso_code != "OWID_WRL" ? (
                  <tr>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      <Flag
                        code={item[0].iso_code}
                        width="60"
                        fallback={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                            />
                          </svg>
                        }
                      />
                    </td>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      {item[0].location}
                    </td>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      {item[0].iso_code}
                    </td>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      {item[0].date}
                    </td>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      {" "}
                      
                      <NumberFormat
                        value={item[0].total_vaccinations}
                        displayType={"text"}
                        thousandSeparator={true}
                      />{" "}
                    </td>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      <NumberFormat
                        value={item[0].total_vaccinations_per_hundred}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </td>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      <NumberFormat
                        value={item[0].people_vaccinated}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </td>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      <NumberFormat
                        value={item[0].people_fully_vaccinated}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </td>
                  </tr>
                ) : (
                  <></>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TableContainer;
