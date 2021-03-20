require('dotenv').config()
const ccxt = require('ccxt')
const buffer = require('./buffer')

const kraken = new ccxt.kraken()
kraken.apiKey = process.env.KRAKEN_API_KEY
kraken.secret = process.env.KRAKEN_SECRET_KEY

const binance = new ccxt.binance()
binance.apiKey = process.env.BINANCE_API_KEY
binance.secret = process.env.BINANCE_SECRET_KEY

const transactions = new buffer(300)

while(true) {
    
}