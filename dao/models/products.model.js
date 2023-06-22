const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        enum:['Hogar', 'Cocina', 'Higiene']
    },
    price: {
        type: Number,
        default: 10
    },
    status: {
        type: Boolean,
        default: 10
    },
    stock: {
        type: Number,
        default: 10
    },
    category: {
        type: String,
        default: 10
    },
    thumbnails: {
        type: String,
        default: 10
    },
});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;