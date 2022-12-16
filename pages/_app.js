import { CartContextCreator } from "../cart-ft/components/cartContext";

import Layout from "../components/Layout";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
function MyApp({ Component, pageProps }) {
  return (
    <CartContextCreator>
      <Layout>
        <Toaster position="center"/>
        <Component {...pageProps} />
      </Layout>
    </CartContextCreator>
  );
}

export default MyApp;
