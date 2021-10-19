const express = require('express');
const router = express.Router();

const productController = require('../products/productController');

router.get('/cactus/large-cactus/:id', productController.viewProductDetail);

router.get('/cactus/medium-cactus/:id', productController.viewProductDetail);

router.get('/cactus/small-cactus/:id', productController.viewProductDetail);

router.get('/cactus/mix-cactus/:id', productController.viewProductDetail);

router.get('/cactus/:id', productController.displayCactusList);

router.get('/cactus', productController.displayAllCactus);

router.get('/stone-lotus/large-stone-lotus/:id', productController.viewProductDetail);

router.get('/stone-lotus/medium-stone-lotus/:id', productController.viewProductDetail);

router.get('/stone-lotus/small-stone-lotus/:id', productController.viewProductDetail);

router.get('/stone-lotus/mix-stone-lotus/:id', productController.viewProductDetail);

router.get('/stone-lotus/:id', productController.displayStoneLotusList);

router.get('/stone-lotus', productController.displayAllStoneLotus);

router.get('/pots/ceramic-pots/:id', productController.viewProductDetail);

router.get('/pots/terracotta-pots/:id', productController.viewProductDetail);

router.get('/pots/:id', productController.displayPotsList);

router.get('/pots', productController.displayAllPots);

router.get('/:id', productController.viewProductDetail);

module.exports = router;
