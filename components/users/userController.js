const userService = require('./userService');

exports.handleSignIn = async (req, res, next) => {
    const obj = await userService.checkSignInInfo(req, res, next);
    res.send(obj);
}

exports.signUp = async (req, res, next) => {
    const notification = await userService.handleSignUp(req.body, res, next);

    res.json({
        notification: notification,
    })
}