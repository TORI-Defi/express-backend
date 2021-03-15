require('dotenv').config();
const express = require('express');

const server = express();
const helmet = require('helmet');

// define routers 
const stripe = require('../router/stripe-route'); 
const desk = require('../router/desk-route');
const client = require('../router/client-route')
// const checkout = require('../router/pay-route')
// const wallet = require('../router/wallet-route')

//use dependencies
server.use(helmet());
server.use(express.json());
server.use(express.static("."))

//assign urls to router
// server.use('/' ,client);  //moved to index.js 
server.use('/pay', stripe);
server.use('/trade', desk); 
server.use('/', client); 

// server.use('/api/trade', binance);
// server.use('/api/wallet', wallet)

module.exports = server; 