const productService = require('../services/productService');
const productModel = require('../models/productModel');

exports.displayCactusList = async (req, res, next) => {
    const page = req.query.page == undefined ? 1 : parseInt(req.query.page);
    let paginationInfo = {};
    let productList;

    switch (req.params.id) {
        case "large-cactus":
            paginationInfo = await productService.handlePagination(/,Cactus,LargeCactus,/, page);
            productList = await productService.getProductList(/,Cactus,LargeCactus,/, page);
            break;
        case "medium-cactus":
            paginationInfo = await productService.handlePagination(/,Cactus,MediumCactus,/, page);
            productList = await productService.getProductList(/,Cactus,MediumCactus,/, page);
            break;
        case "small-cactus":
            paginationInfo = await productService.handlePagination(/,Cactus,SmallCactus,/, page);
            productList = await productService.getProductList(/,Cactus,SmallCactus,/, page);
            break;
        case "mix-cactus":
            paginationInfo = await productService.handlePagination(/,Cactus,MixCactus,/, page);
            productList = await productService.getProductList(/,Cactus,MixCactus,/, page);
            break;
        default:
            const product = await productModel.findById(req.params.id);
            res.send(product);
            return;
    }

    res.send({
        productList: productList, 
        paginationInfo: paginationInfo,
    });
}

exports.displayAllCactus = async (req, res, next) => {
    const page = req.query.page == undefined ? 1 : parseInt(req.query.page);
    const paginationInfo =  await productService.handlePagination(/,Cactus,/, page);
    const productList = await productService.getProductList(/,Cactus,/, page);

    res.send({
        productList: productList, 
        paginationInfo: paginationInfo,
    });
}

exports.displayStoneLotusList = async (req, res, next) => {
    const page = req.query.page == undefined ? 1 : parseInt(req.query.page);
    let paginationInfo = {};
    let productList;

    switch (req.params.id) {
        case "large-stone-lotus":
            paginationInfo = await productService.handlePagination(/,StoneLotus,LargeStoneLotus,/, page);
            productList = await productService.getProductList(/,StoneLotus,LargeStoneLotus,/, page);
            break;
        case "medium-stone-lotus":
            paginationInfo = await productService.handlePagination(/,StoneLotus,MediumStoneLotus,/, page);
            productList = await productService.getProductList(/,StoneLotus,MediumStoneLotus,/, page);
            break;
        case "small-stone-lotus":
            paginationInfo = await productService.handlePagination(/,StoneLotus,SmallStoneLotus,/, page);
            productList = await productService.getProductList(/,StoneLotus,SmallStoneLotus,/, page);
            break;
        case "mix-stone-lotus":
            paginationInfo = await productService.handlePagination(/,StoneLotus,MixStoneLotus,/, page);
            productList = await productService.getProductList(/,StoneLotus,MixStoneLotus,/, page);
            break;
        default:
            const product = await productModel.findById(req.params.id);
            res.send(product);
            return;
    }

    res.send({
        productList: productList, 
        paginationInfo: paginationInfo,
    });
}

exports.displayAllStoneLotus = async (req, res, next) => {
    const page = req.query.page == undefined ? 1 : parseInt(req.query.page);
    const paginationInfo = await productService.handlePagination(/,StoneLotus,/, page);
    const productList = await productService.getProductList(/,StoneLotus,/, page);

    res.send({
        productList: productList, 
        paginationInfo: paginationInfo,
    });
}

exports.displayPotsList = async (req, res, next) => {
    const page = req.query.page == undefined ? 1 : parseInt(req.query.page);
    let paginationInfo = {};
    let productList;

    switch (req.params.id) {
        case "ceramic-pots":
            paginationInfo = await productService.handlePagination(/,Pots,CeramicPots,/, page);
            productList = await productService.getProductList(/,Pots,CeramicPots,/, page);
            break;
        case "terracotta-pots":
            paginationInfo = await productService.handlePagination(/,Pots,TerracottaPots,/, page);
            productList = await productService.getProductList(/,Pots,TerracottaPots,/, page);
            break;
        default:
            const product = await productModel.findById(req.params.id);
            res.send(product);
            return;
    }

    res.send({
        productList: productList, 
        paginationInfo: paginationInfo,
    });
}

exports.displayAllPots = async (req, res, next) => {
    const page = req.query.page == undefined ? 1 : parseInt(req.query.page);
    const productList = await productService.getProductList(/,Pots,/, page);
    const paginationInfo = await productService.handlePagination(/,Pots,/, page);

    res.send({
        productList: productList, 
        paginationInfo: paginationInfo,
    });
}

exports.displayNewestProduct = async(req, res, next) => {
    const product = await productService.getProductList(null, 4);
    res.send(product);
}

exports.displayHotProducts = async(req, res, next) => {
    const product = await productService.getProductList(null, 8);
    res.send(product);
}

exports.viewProductDetail = async (req, res, next) => {
    const product = await productModel.findById(req.params.id);
    res.send(product);
}
