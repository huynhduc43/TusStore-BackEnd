const mongoose = require('mongoose');
const Paginator = require('paginator');

const productModel = require('../models/productModel');

const PER_PAGE = 12;//Limit
const LENGTH = 5;

exports.handlePagination = async (query, page, filter) => {
    const paginator = new Paginator(PER_PAGE, LENGTH);
    let total;

    if (filter === undefined) {
        total = await productModel.countDocuments({ path: query });
    } else {
        total = await productModel.countDocuments({
            path: query,
            filter: filter,
        });
    }

    const paginationInfo = paginator.build(total, page);

    return paginationInfo;
}

exports.getProductList = async (query, page, filter) => {
    let productList;

    if (filter === undefined) {
        productList = await productModel.find({ path: query }).limit(PER_PAGE).skip(PER_PAGE * (page - 1));
    } else {
        productList = await productModel.find({
            path: query,
            filter: filter,
        }).limit(PER_PAGE).skip(PER_PAGE * (page - 1));
    }

    return productList;
}

exports.handleQuery = async (queryObj) => {
    let query;
    delete queryObj.page;

    //Cases: All
    const case1 = JSON.stringify({
        type: ['flower', 'nonFlower'],
        color: ['green', 'yellow'],
    });
    const case2 = JSON.stringify({
        type: undefined,
        color: undefined,
    });
    const case3 = JSON.stringify({
        type: undefined,
        color: ['green', 'yellow'],
    });
    const case4 = JSON.stringify({
        type: ['flower', 'nonFlower'],
        color: undefined,
    });

    //Cases: Flower
    const case5 = JSON.stringify({
        type: 'flower',
        color: ['green', 'yellow'],
    });
    const case6 = JSON.stringify({
        type: 'flower',
        color: undefined,
    });

    //Cases: NonFlower
    const case7 = JSON.stringify({
        type: 'nonFlower',
        color: ['green', 'yellow'],
    });
    const case8 = JSON.stringify({
        type: 'nonFlower',
        color: undefined,
    });

    //Case: Green
    const case9 = JSON.stringify({
        type: ['flower', 'nonFlower'],
        color: 'green',
    });
    const case10 = JSON.stringify({
        type: undefined,
        color: 'green',
    });

    //Case: Yellow
    const case11 = JSON.stringify({
        type: ['flower', 'nonFlower'],
        color: 'yellow',
    });
    const case12 = JSON.stringify({
        type: undefined,
        color: 'yellow',
    });

    //Cases: Flower + Green
    const case13 = JSON.stringify({
        type: 'flower',
        color: 'green',
    });

    //Cases: Flower + Yellow
    const case14 = JSON.stringify({
        type: 'flower',
        color: 'yellow',
    });

    //Cases: NonFlower + Green
    const case15 = JSON.stringify({
        type: 'nonFlower',
        color: 'green',
    });

    //Cases: NonFlower + Yellow
    const case16 = JSON.stringify({
        type: 'nonFlower',
        color: 'yellow',
    });

    const json = JSON.stringify(queryObj);
    if (json === case1 || json === case2 || json === case3 || json === case4){
        query = undefined;
    } else if (json === case5 || json === case6) {
        query = /,Flower,/;
    } else if(json === case7 || json === case8){
        query = /,NonFlower,/;
    } else if (json === case9 || json === case10){
        query = /,GreenPlant,/;
    } else if (json === case11 || json === case12){
        query = /,YellowPlant,/;
    } else if (json === case13){
        query = /,Flower,GreenPlant,/;
    } else if (json === case14){
        query = /,Flower,YellowPlant,/;
    } else if (json === case15){
        query = /,NonFlower,GreenPlant,/;
    } else if (json === case16){
        query = /,NonFlower,YellowPlant,/;
    } else {
        query = undefined;
    }

    return query;
}

