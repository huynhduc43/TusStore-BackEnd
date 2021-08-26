const express = require('express');
const router = express.Router();
const cors = require('cors');

const userModel = require('../models/userModel');
const productController = require('../controllers/productController');

const corsOptions = {
  origin: "*", //process.env.ORIGIN
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

/* GET home page. */
router.get('/', cors(corsOptions), productController.displayProductList);

router.get('/demo', function(req, res, next) {
  res.json({message: "Hello ReactJS"})
});

router.post('/sign-up', async (req, res, next) => {
  //console.log(req);
  const data = req.body;

  const newUser = userModel(data);
  await newUser.save();
  console.log(newUser);

  res.json({
    email: data.email,
    url: 'sign-in'
  })
});

router.post('/sign-in', async (req, res, next) => {
  const user = await userModel.findOne({email: req.body.email}).exec();

  if (user === null){
    res.json({
      email: req.body.email,
      isLogged: false,
      errMsg: "Not exits!",
    });
  } else {
    if (req.body.password === user.password){
      res.json({
        email: req.body.email,
        isLogged: true,
        url: ''
      });
    } else {
      res.json({
        email: req.body.email,
        isLogged: false,
        errMsg: "Wrong password!",
      });
    }
  }
});

module.exports = router;
