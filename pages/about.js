import SEO from "../components/SEO";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Vaccines({ data }) {
  return (
    <>
      <SEO title="About" description="About" />
      <Nav />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            {/* <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1200x500"
              />
            </div> */}
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img src="https://avatars.githubusercontent.com/u/46555728?s=400&u=3664d336a290ea894c096b7c9674c39dc0fa0efb&v=4"/>
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    Mehdi HAMIME (Masked Developer) 
                  </h2>
                  <div class="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">
                  Full-Time Geek & Software Engineer, Web Development & JavaScript enthousiaste.
                  <br />Casablanca,Morocco<br/> 

                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">

                <h1 id="covid-19-vaccinations-tracker-helps-you-browse-data-on-covid-19-coronavirus-vaccinations-">COVID-19 Vaccinations Tracker, helps you browse data on COVID-19 (coronavirus) vaccinations.</h1>
<p>Casablanca, Morocco — February 22nd 2021 — Masked Developer today released COVID-19 Vaccinations Tracker, a web app that provide information about COVID-19 vaccinations. </p>
<p>You can browse worldwide, country-by-country or the latest statistics about vaccinations. </p>
<h2 id="covid-19-vaccinations-tracker-features">COVID-19 Vaccinations Tracker Features</h2>
<ul>
<li><p>Worldwide statistics </p>
</li>
<li><p>Vaccinations used in each country</p>
</li>
<li><p>Country-by-country data</p>
</li>
</ul>
<h2 id="availability">Availability</h2>
<p>Currently COVID-19 Vaccinations Tracker is only available on the web.</p>
<hr>
<h3 id="additional-information">Additional Information</h3>
<p>Source data from <a href="https://ourworldindata.org/">Our World in Data</a>
Built with <a href="https://nextjs.org/">Next.js</a> &amp; deployed on <a href="https://vercel.com/">Vercel</a> 
SVG icons from <a href="https://heroicons.com/">Heroicons</a>
CSS blocks from <a href="https://github.com/mertJF/tailblocks">Tailblocks</a></p>
<h3 id="contact">Contact</h3>
<p>Mehdi HAMIME (Masked Developer)</p>
<p>Casablanca,Morocco</p>
<p>Email: mehdihamime@outlook.com</p>
<p>Twitter: <a href="https://twitter.com/mehdihamime">@MehdiHAMIME</a></p>
<p>Website: <a href="https://www.maskeddeveloper.com/">www.maskeddeveloper.com</a></p>
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
