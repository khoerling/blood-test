const stripe = require('stripe')('sk_test_hX916QBApAIolpqS7oi2OMzx00m8EwPPS1')

export default async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      description: 'An example charge',
      source: req.body,
      metadata: {
        sku: 'whatever'
      }
    })

    res.json({ status })
  } catch (err) {
    console.log(err)
    res.status(500).end()
  }
}
