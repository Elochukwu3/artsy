
import dynamic from "next/dynamic";

const CartItem = dynamic(()=> import('../components/CartConponent'), {ssr: false});

export default function Cart() {
  return (
   <CartItem/>
  );
}
