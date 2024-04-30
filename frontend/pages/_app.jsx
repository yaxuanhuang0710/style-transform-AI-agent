import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Footer from "../components/Footer";
import {UserProvider} from "../components/UserContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <UserProvider>
    <div>
      <Head>
        <title>AI Writing Style Transformer</title>
      </Head>

      <NavBar />
      <Component {...pageProps} />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default MyApp;