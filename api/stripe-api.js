const express = require("express");
const server = express();
require('dotenv').config();

//Environment Vars 
const stripe = require("stripe")(process.env.TESTKEY);

server.use(express.static("."));
server.use(express.json());

const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

server.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

server.listen(4242, () => console.log('Node server listening on port 4242!'));
