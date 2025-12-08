const express = require('express');
const { body, validationResult } = require("express-validator");

const products = require('./products.json');

const server = express();
const portNum = 8011;

// Middleware to parse incoming JSON requests and puts the parsed data in req.body.
server.use(express.json());

server.get('/', (req, res) => {
    if(products.length === 0) res.status(200).send('No products yet');
    res.status(200).send(products);
});


const addNewProductValidator = [
    body("name")
    .exists()
    .withMessage("Product name is required")
    .isString()
    .withMessage("Product name must be string")
    .isLength({min: 3, max: 25})
    .withMessage("Product name must be between 3 and 25 characters"),

    body("price")
    .exists()
    .withMessage("Product price is required")
    .isFloat({ min: 10, max: 1000 })
    .withMessage("Product price must be number & between 10 and 1000")
];
server.post('/addProduct', addNewProductValidator, (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let newProduct = req.body;
    newProduct.id = products.length + 1;
    products.push(newProduct);
    res.status(200).json({msg: "Product added successfully", newProduct});
});


const updateProductValidator = [
    body("name")
    .optional()
    .isString()
    .withMessage("Product name must be string")
    .isLength({min: 3, max: 25})
    .withMessage("Product name must be between 3 and 25 characters"),

    body("price")
    .optional()
    .isFloat({ min: 10, max: 1000 })
    .withMessage("Product price must be number & between 10 and 1000")
];
server.put('/updateProduct/:id', updateProductValidator, (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let productId = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === productId);
    if(productIndex === -1) return res.status(404).json({ msg: "Product not found." });

    let {name, price} = req.body;
    if(!name && !price) return res.status(400).json({ msg: "You don't enter any data" });
    
    name = name??products[productIndex].name;
    price = price??products[productIndex].price;
    
    products[productIndex] = {id: productId, name, price};
    res.status(200).json({msg: "Product updated successfully", product: products[productIndex]})
});

server.listen(portNum, () => {
    console.log(`server connected on portNum: ${portNum}`);
})