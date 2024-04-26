import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Footer from "../components/Footer";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
    <div>
      <Head>
        <title>AI Writing Style Transformer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Component {...pageProps} />
        <Footer />
      </div>
    </SessionProvider>
  );
}

export default MyApp;