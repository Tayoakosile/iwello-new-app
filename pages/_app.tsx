import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "react-image-crop/dist/ReactCrop.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
