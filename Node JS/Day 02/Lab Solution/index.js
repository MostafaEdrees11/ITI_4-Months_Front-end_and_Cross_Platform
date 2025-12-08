const express = require('express');

const productRoutes = require('./routes/product');

const server = express();
const portNum = 8011;

// Middleware to parse incoming JSON requests and puts the parsed data in req.body.
server.use(express.json());

// Middleeare to route products APIs to product.js file
server.use('/product', productRoutes);

server.listen(portNum, () => {
    console.log(`server connected on portNum: ${portNum}`);
})