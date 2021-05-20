const mongoose = require('mongoose');
const Categories = require('./category.model.js')

const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
