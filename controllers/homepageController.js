const productModel = require('../models/productModel');

exports.displayHomepage = async (req, res, next) => {
    const newestProducts = await productModel.find().limit(4); //demo
    const hotProducts = await productModel.find().limit(8); //demo

    res.send({
        newestProducts: newestProducts,
        hotProducts: hotProducts,
    });
}