const express = require('express');
const router = express.Router();
const cors = require('cors');

const userModel = require('../models/userModel');
const productController = require('../controllers/productController');
const homepageController = require('../controllers/homepageController');
const userController = require('../controllers/userController');

const corsOptions = {
  origin: "*", //process.env.ORIGIN
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.post('/sign-up', cors(corsOptions), userController.signUp);

router.post('/sign-in', cors(corsOptions), userController.handleSignIn);

/* GET home page. */
router.get('/', homepageController.displayHomepage);

module.exports = router;
