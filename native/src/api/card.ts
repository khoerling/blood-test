import { processColor } from 'react-native'
import { get, set } from './storage'
import { PaymentsStripe as Stripe } from 'expo-payments-stripe'

// XXX does this work on android?
// init stripe
Stripe.setOptionsAsync({
  publishableKey: 'pk_test_xKDupS5AmFXBdTPfNaaPqfsO00LcCJ9kT1',
  androidPayMode: 'test',
  merchantId: 'your_merchant_id' // [optional] used for payments with ApplePay
})

const key = 'card',
  paymentRequest = async () => {
    // TODO read from addresses api
    // const card = await CardIOModule.scanCard({
    //   guideColor: processColor('#ffffff'),
    //   suppressManualEntry: true,
    //   keepStatusBarStyle: true,
    //   hideCardIOLogo: true,
    //   requireCardholderName: true
    // })
    const options = {
      requiredBillingAddressFields: 'full',
      prefilledInformation: {
        billingAddress: {
          name: '',
          line1: '',
          line2: '',
          city: '',
          state: '',
          country: 'US',
          postalCode: ''
        }
      },
      theme: {
        // accentColor: 'red'
      }
    }

    const token = await Stripe.paymentRequestWithCardFormAsync(options)
    return await save(token)
  },
  getCard = async () => {
    return (await get(key)) || null
  }

async function save(card: string) {
  set(key, card) // don't wait
  return card
}

export { paymentRequest, getCard }
