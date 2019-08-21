import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  //converting our total price to cents for stripe
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_9ZmEzqPROmUhtx2uNPT5bhCj00FqD1MLpx";

  //this token is what we will use to make the charge in our backend
  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Boutique"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      //token is the on success callback that triggers when we submit
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;