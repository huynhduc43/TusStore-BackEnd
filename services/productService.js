const mongoose = require('mongoose');
const Paginator = require('paginator');

const productModel = require('../models/productModel');

const PER_PAGE = 12;//Limit
const LENGTH = 5;

exports.handlePagination = async (query, page) => {
    const paginator = new Paginator(PER_PAGE, LENGTH);
    const total = await productModel.countDocuments({path: query});
    const paginationInfo = paginator.build(total, page);
    //console.log(paginationInfo);

    return paginationInfo;
}

exports.getProductList = async (query, page) => {
    return await productModel.find({path: query}).limit(PER_PAGE).skip(PER_PAGE * (page - 1));
}

