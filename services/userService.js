
const validator = require("email-validator");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userModel = require('../models/userModel');

exports.checkSignInInfo = async (req, res, next) => {
    const user = await userModel.findOne({ email: req.body.email }).exec();

    if (user === null) {
        res.json({
            email: req.body.email,
            isLogged: false,
            errMsg: "Email không tồn tại",
        });
    } else {
        let checkPassword = await bcrypt.compare(req.body.password, user.password);
        if (checkPassword) {
            res.json({
                email: req.body.email,
                isLogged: true,
                url: ''
            });
        } else {
            res.json({
                email: req.body.email,
                isLogged: false,
                errMsg: "Sai mật khẩu",
            });
        }
    }

}

exports.handleSignUp = async (data, res) => {
    if (validator.validate(data.email)) {
        const checkEmail = await userModel.findOne({ email: data.email });

        if (checkEmail) {
            return "Email đã tồn tại! Vui lòng sử dụng email khác";
        } else {
            const hash = await new Promise((resolve, reject) => {
                bcrypt.hash(data.password, saltRounds, function (err, hash) {
                    if (err) reject(err)
                    resolve(hash)
                });
            });
    
            const userData = {
                email: data.email,
                password: hash,
                name: data.name,
                avatar: "https://res.cloudinary.com/dnbjep0mp/image/upload/v1631088180/user_hkinox.svg",
            };
        
            const newUser = userModel(userData);
            await newUser.save();
            return "success";
        }  
    } 

    return "Email không hợp lệ";
}