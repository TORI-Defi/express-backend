const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const helper = require('./client-helper') 

// const checkout = require('../router/pay-route')
// Configure template Engine and Main Template File
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: { todaysDate: () => new Date}
}));
// Setting template Engine
app.set('view engine', 'hbs');

// routes
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/about-us', (req, res) => {
    res.render('about-us');
});

app.get('/checkout', (req, res) => {
    let order =   helper.formatOrder(req.body)
    res.render('checkout', {
        userPhone : `${order[0]}`,
        type : `${order[1]}`,
        token : `${order[2]}`,
        amount : `${order[3]}`,
        address : `${order[4]}`
    })
})

// app.get('/pay',  checkout)
// async (req, res) => {
//     try {
//         const order = await  req.body;
//         console.log(order)
//         const userPhone = JSON.parse(order).userPhone
//         const type = JSON.parse(order).type
//         const token = JSON.parse(order).token
//         const amount = JSON.parse(order).amount
//         const address = JSON.parse(order).address


//         res.render('checkout', {
//             userPhone : userPhone,
//             type : type,
//             token : token,
//             amount : amount,
//             address : address
//         })
//     } catch (error) {
//         console.log(`${error}`)
//         // res.status(500).json(`error posting order ${error}`)
//     }
// });

module.exports =  app;