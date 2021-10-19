const express = require('express');
const router = express.Router();


const cartController = require('./cartController');

router.put('/update', cartController.updateCart);

module.exports = router;
