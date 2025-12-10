import { Command } from 'commander';
import { body } from 'express-validator';
import inquirer from 'inquirer';
import { type } from 'os';

const program = new Command();


program
    .name('online-store-manager')
    .description('A CLI application to manage online store.')
    .version('1.0.0');


program
    .command('list')
    .alias('l')
    .description('List all products in the store.')
    .action(() => {
        console.log("Products: ");
        fetch('http://localhost:8011/')
            .then((response) => response.json())
            .then((products)=> console.log(products));
    })

    
const addNewProductQuetions = [
    {
        type: 'input',
        name: "name",
        message: "What's the product name?",
    },
    {
        type: 'number',
        name: 'price',
        message: "What's the product price?",
    }
];
program
    .command('add')
    .alias('a')
    .description('Add new product to the store.')
    .action(() => {
        inquirer
            .prompt(addNewProductQuetions)
            .then((answers) => {
                if(answers.name === undefined || answers.price === undefined) {
                    console.log("You don't enter product name or product price or both.");
                    return;
                }

                fetch('http://localhost:8011/addProduct', {
                    method: "POST",
                    body: JSON.stringify({name:answers.name , price: +answers.price}),
                    headers: {"Content-type": "application/json"}
                }).then((response) => response.json())
                .then(out => console.log(out))
                .catch(err => console.log(err));
            })
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

const deleteProductQuestions = [
    {
        type: 'number',
        name: "id",
        message: "What's the product id that you want to delete it?",
    },
    {
        type: 'confirm',
        name: "delete",
        message: "Are you sure to delete it?",
    }
];
program
    .command('delete')
    .alias('d')
    .description('delete a product from the store using productId.')
    .action(() => {
        inquirer
            .prompt(deleteProductQuestions)
            .then(answers => {
                if(answers.delete) {
                    fetch(`http://localhost:8011/deleteProduct/${answers.id}`, {
                        method: "DELETE",
                    })
                    .then(response => response.json())
                    .then(out => console.log(out))
                    .catch(err => console.log(err));
                } else {
                    console.log("Product doesn't deleted.")
                }
            })
        
    })

program.parse();