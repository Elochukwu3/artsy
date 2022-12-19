import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useCartContext } from "./cartContext";
const PayPal = () => {
  const { products } = useCartContext();
  const [pp, setPp] = useState(false);

  const paypal = useRef();
  //   console.log(paypal);
  const router = useRouter();
  const totaling = () => {
    const totall = products.reduce((total, cumm) => {
      return total + cumm.price;
    }, [0]);
    return totall;
  };

  const result = async (data, actions) => {
    const order = await actions.order.capture();
    return order;
  };

  useEffect(() => {
    console.log(paypal.current);

    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Artsy",
              amount: {
                currency: "CAD",
                value: totaling(),
              },
            },
          ],
        });
      },
      onApprove: result,
      onError: (err) => {
        console.log(err);
      },
    });
    render(paypal.current);
    // setPp(window.paypal.Buttons.renderTo());
  }, []);

  return (
    <div>
      <div ref={paypal}></div>

      <div>{pp}</div>
    </div>
  );
};

export default PayPal;
