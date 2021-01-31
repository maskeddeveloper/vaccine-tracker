import Head from "next/head";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import fetch from "unfetch";
import { request } from "graphql-request";
import Footer from "../hoc/Footer";
import Link from "next/link";

export default function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data, error } = useSWR(
    "https://restcountries.eu/rest/v2/all",
    fetcher
  );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>Covid-19 vaccinations Tracker</h1> */}

        {error ? (
          <div>failed to load</div>
        ) : !data ? (
          <div>loading...</div>
        ) : (
          //convert to a componenet
          <div className={styles.grid}>
            <div className="countrySearch">
              <input placeholder="Search country..." />
            </div>
            {data.map((country) => {
              return (
                <div className={styles.card}>
                  <Link href="/country/[alpha3Code]" as={`/country/${country.alpha3Code}`}>
                  {/* <img
                      className="countryFlag"
                      src={
                        "https://www.countryflags.io/" +
                        country.alpha2Code +
                        "/flat/64.png"
                      }
                    /> */}

                    <h3>{country.name} </h3>
                  </Link>
                
                </div>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
