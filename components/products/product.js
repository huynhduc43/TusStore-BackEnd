const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    primaryImg: String,
    price: Number,
    discountPrice: Number,
    sold: Number,
    quantity: Number,
    view: Number,
    rating: Number,
    description: String,
    addDate: Date,
    isDeleted: Boolean,
    path: String,
});

module.exports = mongoose.model('products', productSchema);