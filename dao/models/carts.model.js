const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    date: {
        type: String,
        unique: true,
        required: true
    },
    products: {
        type: Number,
        required: true
    },
});

const Product = mongoose.model('users', ProductSchema);

module.exports = Product;