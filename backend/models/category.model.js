const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: String,
    color: String,
    logo: String,
    version: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);