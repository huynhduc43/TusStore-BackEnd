const userService = require('../services/userService');

exports.handleSignIn = async (req, res, next) => {
    await userService.checkSignInInfo(req, res, next);
}

exports.signUp = async (req, res, next) => {
    const notification = await userService.handleSignUp(req.body, res, next);

    res.json({
        notification: notification,
    })
}