const express = require('express');
const router = express.Router();
const cors = require('cors');

const corsOptions = {
    origin: "*", //process.env.ORIGIN
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

const cartController = require("../controllers/cartController");

router.put('/update', cors(corsOptions), cartController.updateCart);

module.exports = router;
