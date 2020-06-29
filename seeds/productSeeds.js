var Product = require('../models/product')
var mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1/shoppingCart', { useNewUrlParser: true });

var products = [
    new Product({
        imagePath: 'https://i.ytimg.com/vi/DxAHM2mKjKI/maxresdefault.jpg',
        title: 'Diablo 3',
        description: 'RPG',
        price: 40
    }),
    new Product({
        imagePath: 'https://www.zilliondesigns.com/blog/wp-content/uploads/Warcraft-1280x720.jpg',
        title: 'World of Warcraft',
        description: 'MMORPG',
        price: 20
    }),
    new Product({
        imagePath: 'https://fontmeme.com/images/Starcraft-Logo.jpg',
        title: 'StarCraft 2',
        description: 'Strategy',
        price: 50
    }),
]

let done = 0
for (let i = 0; i < products.length; i++) {

    products[i].save(function (err, result) {
        done++
        if (done === products.length) {
            exit()
        }
    })
}

function exit() {
    mongoose.disconnect();
}

