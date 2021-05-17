const mongoose = require('mongoose');
const Categories = require('./category.model.js')

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: { type: mongoose.ObjectId, ref: Categories }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);