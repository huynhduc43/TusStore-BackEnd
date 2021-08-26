const productService = require('../services/productService');
const productModel = require('../models/productModel');

exports.displayProductList = async (req, res, next) => {
    const productList =  await productService.getProductList(Number(req.query.limit));
    res.send(productList);
}

exports.viewProductDetail = async (req, res, next) => {
    const product = await productModel.findById(req.params.id);
    res.send(product);
}
