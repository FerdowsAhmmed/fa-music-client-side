import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
console.log(stripePromise);
const Payment = () => {
  const [myClasses, setMyClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch("https://fa-music-center-server-b9mgm5ogn-ferdowsahmmed.vercel.app/selectedClasses");
      const data = await response.json();
      console.log(data);

      setMyClasses(data);
    } catch (error) {
      console.log(error);
    }
  };

  const total = myClasses.reduce((sum, item) => sum + parseFloat(item.price), 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div className="min-h-screen">
      <h2 className="text-3xl">Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm myClasses={myClasses} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;