import express from 'express';
import { body, validationResult } from "express-validator";

import fileSystem from 'fs';
const filePath = './products.json';
let products = [];


// import products from './products.json' assert { type: 'json' };

const server = express();
const portNum = 8011;

server.use(express.json());

function initProducts(req, res, next) {
    if(fileSystem.existsSync(filePath)) {
        fileSystem.readFile(filePath, 'utf-8', (err, data) => {
            products = JSON.parse(data);
            next();
        })
    } else {
        fileSystem.writeFile(filePath, '[]', (err) => {
            if(err) return res.status(400).json({ msg: "Error in writting on the file." });
            products = [];
            next();
        })
    }
}
server.use(initProducts);

server.get('/', (req, res) => {
    if(products.length > 0) {
        res.status(200).send(products);
    } else {
        res.status(400).send({msg: 'No product yet.'});
    }
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
    fileSystem.writeFile(filePath, JSON.stringify(products), (err) => {
        if(err) return res.status(400).json({ msg: "Error in writting on the file." });
        res.status(200).json({msg: "Product added successfully", newProduct});
    });
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
    fileSystem.writeFile(filePath, JSON.stringify(products), (err) => {
        if(err) return res.status(400).json({ msg: "Error in writting on the file." });
        res.status(200).json({msg: "Product updated successfully", product: products[productIndex]})
    });
    
});


server.delete('/deleteProduct/:id', (req, res) => {
    let productId = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === productId);
    if(productIndex === -1) return res.status(404).json({ msg: "Product not found." });

    products.splice(productIndex, 1);
    fileSystem.writeFile(filePath, JSON.stringify(products), (err) => {
        if(err) return res.status(400).json({ msg: "Error in writting on the file." });
        res.status(200).json({msg: "Product deleted successfully"});
    });
});

server.listen(portNum, () => {
    console.log(`server connected on portNum: ${portNum}`);
})