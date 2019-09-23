import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'react-styled-flexboxgrid'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from '../components/CheckoutForm'

const Logo = styled.img`
  height: 1.5rem;
  display: block;
  margin: 1rem auto;
`

const Button = styled.button`
  border: none;
  margin-right: 1rem;
  padding: 1rem;
  font-weight: bold;
  background: black;
  color: white;
  outline: none;
`

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stripe: null
    }
  }

  componentDidMount() {
    this.setState({
      stripe: window.Stripe('pk_test_xKDupS5AmFXBdTPfNaaPqfsO00LcCJ9kT1')
    })
  }

  onCheckout = () => {
    if (window) {
      const stripe = window.Stripe('pk_test_xKDupS5AmFXBdTPfNaaPqfsO00LcCJ9kT1')
      stripe
        .redirectToCheckout({
          items: [{ sku: 'sku_FbIhIQx7psdUxU', quantity: 1 }],

          // Do not rely on the redirect to the successUrl for fulfilling
          // purchases, customers may not always reach the success_url after
          // a successful payment.
          // Instead use one of the strategies described in
          // https://stripe.com/docs/payments/checkout/fulfillment
          successUrl: window.location.protocol + '//localhost:3000/success',
          cancelUrl: window.location.protocol + '//localhost:3000/canceled'
        })
        .then(function(result) {
          if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer.
            var displayError = document.getElementById('error-message')
            displayError.textContent = result.error.message
          }
        })
    }
  }

  render() {
    return (
      <div>
        <Logo src="/static/labtopia.png" alt="LABTOPIA" />
        <Row>
          <Col sm={6}></Col>
          <Col sm={6}>
            <div style={{ paddingTop: '10rem' }}>
              <h1>Be healthy, be happy.</h1>
              <h3>
                Track the numbers that matter the most for a healthy body and
                mind.
              </h3>
              <Button onClick={this.onCheckout}>Cholesterol levels</Button>
              <Button disable onClick={this.onCheckout}>
                Vitamin levels (coming soon)
              </Button>
              <div
                style={{
                  borderRadius: '6px',
                  padding: '1rem',
                  margin: '1rem 0',
                  background: '#fff',
                  maxWidth: '400px'
                }}
              >
                {typeof window === 'object' && this.state.stripe ? (
                  <StripeProvider apiKey={this.state.stripe._apiKey}>
                    <Elements>
                      <CheckoutForm />
                    </Elements>
                  </StripeProvider>
                ) : null}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home
