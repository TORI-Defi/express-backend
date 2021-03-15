const server = require('./api/server');
// const client = require('./router/client-route');
require('dotenv').config();

const port = process.env.PORT || 5000;
// const cPort = process.env.CPORT || 3000;

server.listen( port, () => {
    console.log(`*** server running on ${port} ***`)
});

// client.listen( cPort, () => {
//     console.log(`*** client running on ${cPort} ***`)
// });