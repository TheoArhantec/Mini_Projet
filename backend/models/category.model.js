const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: String,
    color: String,
    logo: String,
    version: Number,
    product :  { type : Array , "default" : [] },
}, {
    timestamps: true
});


module.exports = mongoose.model('Category', CategorySchema);
