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
    <div>
    
    </div>
  );
}
