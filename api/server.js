const express = require('express');
require('dotenv').config();

const server = express();
const helmet = require('helmet');

// define routers 
const stripe = require('../router/stripe-route'); 
// const binance = require('../router/binance-route');
// const wallet = require('../router/wallet-route')

//use dependencies
server.use(helmet());
server.use(express.json());
server.use(express.static("."))

//assign urls to routers
server.use('/api/pay', stripe);
// server.use('/api/trade', binance);
// server.use('/api/wallet', wallet)

module.exports = server; 