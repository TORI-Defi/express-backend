const ccxt = require('ccxt')
const buffer = require('./buffer')

const kraken = new ccxt.kraken()
kraken.apiKey = 'YOUR_KRAKEN_API_KEY'
kraken.secret = 'YOUR_KRAKEN_SECRET_KEY'

const binance = new ccxt.binance()
binance.apiKey = 'YOUR_BINANCE_API_KEY'
binance.secret = 'YOUR_BINANCE_SECRET_KEY'

const transactions = new buffer(300)

while(true) {
    
}