const express = require('express');

const products = require('./products.json');

const server = express();
const portNum = 8011;


server.get('/', (req, res) => {
    if(products.length === 0) res.status(200).send('No products yet');
    res.status(200).send(products);
});


server.listen(portNum, () => {
    console.log(`server connected on portNum: ${portNum}`);
})