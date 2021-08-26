
const mongoose = require('mongoose');

const productModel = require('../models/productModel');

exports.getProductList = async (limit) => {
    if (limit === undefined) {
        return  await productModel.find({});
    } 
    
    return await productModel.find({}).limit(limit);
}