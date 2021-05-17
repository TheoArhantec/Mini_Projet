const mongoose = require('mongoose');
const Categories = require('./category.model.js')

const ProductSchema = mongoose.Schema({
    name: String,
    brand: String,
    price: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);