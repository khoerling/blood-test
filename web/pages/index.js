import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  background: rgb(249, 198, 172);
  height: 100%;
`;

class Home extends React.Component {
  onCheckout = () => {
    const stripe = window.Stripe("pk_test_xKDupS5AmFXBdTPfNaaPqfsO00LcCJ9kT1");
    stripe
      .redirectToCheckout({
        items: [{ sku: "sku_FbIhIQx7psdUxU", quantity: 1 }],

        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: window.location.protocol + "//localhost:3000/success",
        cancelUrl: window.location.protocol + "//localhost:3000/canceled"
      })
      .then(function(result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById("error-message");
          displayError.textContent = result.error.message;
        }
      });
  };

  render() {
    return (
      <Wrapper>
        <button onClick={this.onCheckout}>Buy Complete Blood Count</button>
      </Wrapper>
    );
  }
}

export default Home;
