import { CartContextCreator } from "../components/cart-ft/cartContext";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
function MyApp({ Component, pageProps }) {
  return (
    <CartContextCreator>
      <script
        src="https://www.paypal.com/sdk/js?client-id=ARuQbScezgnvqNnrynCcQY6g8C71e03rl4ltgqQPAYB_5DajnfoDfUMQSc5528ci0cuEFzzHOoLlFlKj&currency=CAD"
        defer/>
      <Layout>
        <Toaster position="center" />
        <Component {...pageProps} />
      </Layout>
    </CartContextCreator>
  );
}

export default MyApp;
