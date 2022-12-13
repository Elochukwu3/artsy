import { CartContextCreator } from "../components/cartContext";

import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CartContextCreator>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextCreator>
  );
}

export default MyApp;
