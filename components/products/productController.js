const productService = require('./productService');
const productModel = require('./product');
const commentModel = require('../comments/comment');

exports.displayCactusList = async (req, res, next) => {
    const page = req.query.page == undefined ? 1 : parseInt(req.query.page);
    const sort = req.query.sort === undefined ? 'newst' : req.query.sort;
    const filter = await productService.handleQuery({ ...req.query });
    let paginationInfo = {};
    let productList;

    switch (req.params.id) {
        case "large-cactus":
            paginationInfo = await productService.handlePagination(/,Cactus,LargeCactus,/, page, filter);
            productList = await productService.getProductList(/,Cactus,LargeCactus,/, page, filter, sort);
            break;
        case "medium-cactus":
            paginationInfo = await productService.handlePagination(/,Cactus,MediumCactus,/, page, filter);
            productList = await productService.getProductList(/,Cactus,MediumCactus,/, page, filter, sort);
            break;
        case "small-cactus":
            paginationInfo = await productService.handlePagination(/,Cactus,SmallCactus,/, page, filter);
            productList = await productService.getProductList(/,Cactus,SmallCactus,/, page, filter, sort);
            break;
        case "mix-cactus":
            paginationInfo = await productService.handlePagination(/,Cactus,MixCactus,/, page);
            productList = await productService.getProductList(/,Cactus,MixCactus,/, page, sort);
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
    const page = req.query.page === undefined ? 1 : parseInt(req.query.page);
    const sort = req.query.sort === undefined ? 'newst' : req.query.sort;
    const filter = await productService.handleQuery({ ...req.query });
    const paginationInfo = await productService.handlePagination(/,Cactus,/, page, filter);
    const productList = await productService.getProductList(/,Cactus,/, page, filter, sort);

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

exports.displayNewestProduct = async (req, res, next) => {
    const product = await productService.getProductList(null, 4);
    res.send(product);
}

exports.displayHotProducts = async (req, res, next) => {
    const product = await productService.getProductList(null, 8);
    res.send(product);
}

exports.viewProductDetail = async (req, res, next) => {
    const product = await productModel.findById(req.params.id);
    res.send(product);
}

exports.displayNewestProducts = async (req, res, next) => {
    //Top 4 san pham duoc them gan day nhat
    const newestProducts = await productModel.find({
        path: {
            $in: [
                /,Cactus,/,
                /,StoneLotus,/
            ]
        }
    }).sort({ addDate: 'desc' }).limit(4);

    res.send(newestProducts);
}

exports.displayHotProducts = async (req, res, next) => {
    //Top 8 san pham ban duoc nhieu nhat
    const hotProducts = await productModel.find({
        path: {
            $in: [
                /,Cactus,/,
                /,StoneLotus,/
            ]
        }
    }).sort({ sold: 'desc' }).limit(8);

    res.send(hotProducts);
}
