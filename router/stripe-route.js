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
    try {
        const {items} = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateOrderAmount(items),
            currency: "usd"
        });
        res.send({
            clientSecret: paymentIntent.client_secret
        });
        res.status(200).json();
    } catch (error) {
        res.status(500).json(`error creating resource ${error}`)
    }    
})

module.exports = router;