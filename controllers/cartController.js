const userModel = require("../models/userModel");

exports.getCart = async (req, res, next) => {

}

exports.updateCart = async (req, res, next) => {
    await userModel.findByIdAndUpdate(req.body.userId, {cart: req.body.currentCart});
    res.send("success");
}