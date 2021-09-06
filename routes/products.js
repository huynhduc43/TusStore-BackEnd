const express = require('express');
const router = express.Router();
const cors = require('cors');
const corsOptions = {
    origin: "*", //process.env.ORIGIN
    optionsSuccessStatus: 200,
}

const productController = require('../controllers/productController');

router.get('/cactus/large-cactus/:id', cors(corsOptions), productController.viewProductDetail);

router.get('/cactus/medium-cactus/:id', cors(corsOptions), productController.viewProductDetail);

router.get('/cactus/small-cactus/:id', cors(corsOptions), productController.viewProductDetail);

router.get('/cactus/mix-cactus/:id', cors(corsOptions), productController.viewProductDetail);

router.get('/cactus/:id', cors(corsOptions), productController.displayCactusList);

router.get('/cactus', cors(corsOptions), productController.displayAllCactus);

router.get('/stone-lotus/large-stone-lotus/:id', cors(corsOptions), productController.viewProductDetail);

router.get('/stone-lotus/medium-stone-lotus/:id', cors(corsOptions), productController.viewProductDetail);

router.get('/stone-lotus/small-stone-lotus/:id', cors(corsOptions), productController.viewProductDetail);

router.get('/stone-lotus/mix-stone-lotus/:id', cors(corsOptions), productController.viewProductDetail);

router.get('/stone-lotus/:id', cors(corsOptions), productController.displayStoneLotusList);

router.get('/stone-lotus', cors(corsOptions), productController.displayAllStoneLotus);

router.get('/pots/ceramic-pots/:id', cors(corsOptions), productController.viewProductDetail);

router.get('/pots/terracotta-pots/:id', cors(corsOptions), productController.viewProductDetail);

router.get('/pots/:id', cors(corsOptions), productController.displayPotsList);

router.get('/pots', cors(corsOptions), productController.displayAllPots);

router.get('/:id', cors(corsOptions), productController.viewProductDetail);

module.exports = router;
