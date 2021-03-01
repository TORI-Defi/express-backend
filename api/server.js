const express = require('express');
require('dotenv').config();

const server = express();
const helmet = require('helmet');

//routers 
const stripe = require('../router/stripe-route'); 
const binance = require('../router/binance-route');
const wallet = require('../router/wallet-route')

server.use(helmet());
server.use(express.json());



server.use('/api/pay', stripe);
server.use('/api/trade', binance);
server.use('/api/wallet', wallet)


server.get('/', (req, res) => {
    res.send(`
        <h1>Api Portal</h1>
        <h3>Endpoint:</h3>
        <p></p>
        <p>~/api/projects</p>
        <p></p>
        <h3>Methods </h3>
        <p>GET projects @ '/'</p>
        <p>GET projects by id @ '/:id' </p>
        <p>POST projects @ '/' </p>
        <p>GET action items by id @ '/:id/actions'</p>
        <p>POST action item @ '/actions'</p>
    `)
})


module.exports = server; 