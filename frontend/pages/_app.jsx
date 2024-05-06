import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <div>
      <Head>
        <title>AI Writing Style Transformer</title>
      </Head>

      <NavBar />
      <Component {...pageProps} />
        <Footer />
      <Analytics/>
      <SpeedInsights/>
      </div>
  );
}

export default MyApp;