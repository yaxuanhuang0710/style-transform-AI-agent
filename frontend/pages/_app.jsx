import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <div>
      <Head>
        <title>AI Writing Style Transformer</title>
      </Head>

      <NavBar />
      <Component {...pageProps} />
        <Footer />
      </div>
  );
}

export default MyApp;