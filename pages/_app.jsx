import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
