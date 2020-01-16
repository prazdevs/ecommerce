import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_OJm1LfqnTRhhYHmann7cu1Kw00dVn5kmvx';

  const onToken = token => {
    console.log(token);
    alert('Payment processed');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='eCommerce'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel='panelLabel'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
