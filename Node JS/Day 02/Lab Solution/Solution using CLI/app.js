const { Command } = require('commander');
const { error } = require('console');
const { response } = require('express');

const program = new Command();


program
    .name('online-store-manager')
    .description('A CLI application to manage online store.')
    .version('1.0.0');


program
    .command('list')
    .alias('l')
    .description('List all products in the store.')
    .action((options) => {
        console.log("Products: ");
        fetch('http://localhost:8011/')
            .then((response) => response.json())
            .then((products)=> console.log(products));
    })

program
    .command('add')
    .alias('a')
    .description('Add new product to the store.')
    .argument('<name>', 'add product name')
    .argument('<price>', 'add product price')
    .action((name, price) => {
        fetch('http://localhost:8011/addProduct', {
            method: "POST",
            body: JSON.stringify({name, price: +price}),
            headers: {"Content-type": "application/json"}
        }).then((response) => response.json())
        .then(out => console.log(out))
        .catch(err => console.log(err));
    })


program
    .command("update")
    .alias('u')
    .description("Update a product.")
    .argument("<id>", "Id of the product to update")
    .option("--name <name>", "Updated name of the product")
    .option("--price <price>", "Updated price of the product")
    .action((id, options) => {
        const {name, price} = options;
        const body = {}
        if(name !== undefined) body.name = name;
        if(price !== undefined) body.price = +price;
        
        fetch(`http://localhost:8011/updateProduct/${id}`, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {"Content-type": "application/json"}
        })
        .then((response) => response.json())
        .then(out => console.log(out))
        .catch(err => console.log(err));
    })


program
    .command('delete')
    .alias('d')
    .description('delete a product from the store using productId.')
    .argument('<id>', 'productId that will be deleted')
    .action(id => {
        fetch(`http://localhost:8011/deleteProduct/${id}`, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(out => console.log(out))
        .catch(err => console.log(err));
    })

program.parse();