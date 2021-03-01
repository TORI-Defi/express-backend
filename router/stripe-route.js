require('dotenv').config();
const router = require('express').Router();
const stripe = require('stripe')(process.env.TESTKEY)

const calculateOrderAmount = items => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };

router.post('/create-payment-intent', async(req, res) => {
    const {items} = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        curreny: "usd"
    });

    res.send({
        clientSecret: paymentIntent.client_secret
    })
})

module.exports = router;