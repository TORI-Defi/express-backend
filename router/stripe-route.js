require('dotenv').config();
const router = require('express').Router();
const stripe = require('stripe')(process.env.TESTKEY)
const helper = require('./stripe-helper')


router.post('/create-payment-intent', async(req, res) => {
    try {
        const items = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: helper.calculateOrderAmount(items),
            currency: "usd"
        });
        res.send({
            clientSecret: paymentIntent.client_secret,
            confirmReply: helper.formatReply(items),
        });
        
        res.status(200).json();
    } catch (error) {
        res.status(500).json(`error posting pay intent ${error}`)
    }    
})

router.post('/create-checkout-session', async(req,res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
              {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: 'T-shirt',
                  },
                  unit_amount: 2000,
                },
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: 'https://example.com/success',
            cancel_url: 'https://example.com/cancel',
          });
        
          res.json({ id: session.id });
    } catch (error) {
        res.status(500).json(`error creating pay session ${error}`)
    }
})

router.post('/new-order', async(req, res, next) => {
    try {
        const token = () => {}
        const amount = () => {}
        const wallet = () => {}

    } catch (error) {
        res.status(500).json(`error creating order ${error}`)
    }
})




module.exports = router;