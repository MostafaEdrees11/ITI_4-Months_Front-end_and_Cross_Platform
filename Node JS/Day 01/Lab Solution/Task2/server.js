// http://localhost:8011/                   GET          --> 'Home Page as HTML'
// http://localhost:8011/listProducts       GET          --> 'lists all products'
// http://localhost:8011/createProduct      POST         --> 'add new product'
// http://localhost:8011/deleteProduct      DELETE       --> 'delete a product by id'
// http://localhost:8011/updateProduct      PUT          --> 'update a product by id'


const products = require('./products.json');

const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/' && req.method === 'GET') {
        console.log('home');
        res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Store</title>
</head>
<body>
    <h1>Home Page</h1>
</body>
</html>`)
    } else if(req.url == '/listProducts' && req.method == 'GET') {
        if(products.length === 0) res.end("No products yet.")
        else res.end(JSON.stringify(products));
    } else if(req.url == '/createProduct' && req.method == 'POST') {
        let reqBody = '';
        req.on('data', (chunk) => {
            reqBody += chunk;
        });

        req.on('end', () => {
            const newProcut = JSON.parse(reqBody);
            newProcut.id = products.length + 1;
            products.push(newProcut);
            res.end(JSON.stringify(newProcut));
        })
    } else if(req.url.startsWith('/deleteProduct/') && req.method === 'DELETE') {
        let productId = +req.url.split('/')[2];
        products.filter((product) => product.id != productId);
        res.end('Product Deleted!');
    } else if(req.url.startsWith('/updateProduct/') && req.method === 'PUT') {
        let productId = +req.url.split('/')[2];
        let targetProduct = products.find((product) => product.id === productId);

        let reqBody = '';
        req.on('data', (chunk) => {
            reqBody += chunk;
        });

        req.on('end', () => {
            const newProcutData = JSON.parse(reqBody);
            if(targetProduct) {
                for(let key in newProcutData) {
                    targetProduct[key] = newProcutData[key];
                    res.end(`Updated product: ${JSON.stringify(targetProduct)}`)
                }
            } else {
                res.end('Product not found.');
            }
        })
    } else {
        console.log("else");
    }
})


server.listen(8011, () => {
    console.log("server running!!");
})