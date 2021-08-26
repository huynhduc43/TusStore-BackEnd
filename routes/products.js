const express = require('express');
const router = express.Router();
const cors = require('cors');
const corsOptions = {
    origin: "*", //process.env.ORIGIN
    optionsSuccessStatus: 200,
}

const productController = require('../controllers/productController');

router.get('/:id', cors(corsOptions), productController.viewProductDetail);

/* GET product listing. */
router.get('/', cors(corsOptions), productController.displayProductList);

module.exports = router;