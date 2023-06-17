import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const CheckoutForm = ({ myClasses, price }) => {
  const stripe = useStripe();
  console.log(stripe);
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    if (price > 0) {
      // Simulating the API call to fetch client secret
      // Replace this with your actual API call to get the client secret from the server
      const fetchClientSecret = async () => {
        // Make your API call here
        // For example:
        try {
          const response = await fetch('/create-payment-intent', {
            method: 'POST',
            body: JSON.stringify({ price }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const data = await response.json();
          setClientSecret(data.clientSecret);
        } catch (error) {
          console.log(error);
        }
      };

      fetchClientSecret();
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error: paymentMethodError } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (paymentMethodError) {
      console.log('error', paymentMethodError);
      setCardError(paymentMethodError.message);
    } else {
      setCardError('');
      // console.log('payment method', paymentMethod)
    }

    setProcessing(true);

    try {
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || 'unknown',
              name: user?.displayName || 'anonymous'
            },
          },
        },
      );

      if (confirmError) {
        console.log(confirmError);
      }

      console.log('payment intent', paymentIntent);
      setProcessing(false);

      if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);
        // save payment information to the server
        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price,
          date: new Date(),
          quantity: myClasses.length,
          cartItems: myClasses.map(item => item._id),
          menuItems: myClasses.map(item => item.menuItemId),
          status: 'service pending',
          itemNames: myClasses.map(item => item.name)
        };

        // Simulating the API call to save payment information to the server
        // Replace this with your actual API call to save the payment information
        const savePayment = async () => {
          // Make your API call here
          // For example:
          try {
            const response = await fetch('/payments', {
              method: 'POST',
              body: JSON.stringify(payment),
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const data = await response.json();
            console.log(data);
            if (data.result.insertedId) {
              // display confirm
            }
          } catch (error) {
            console.log(error);
          }
        };

        savePayment();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </>
  );
};

export default CheckoutForm;
