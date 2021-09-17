const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    username:  String,
    password: { type: String, require: true },
    avatar: String,
    phone: String,
    address: String,
    dob: Date,
    gender: String,// male | female | other
    //orders: {type: mongoose.Schema.Types.ObjectId, require: true},
    //wishlist: {type: mongoose.Schema.Types.ObjectId, require: true},
    //notificationList: {type: mongoose.Schema.Types.ObjectId, require: true},
    cart: Array,
    role: { type: String, require: true, default: "user" }, // user | admin | superadmin
    isLocked: {type: Boolean, require: true, default: false}
});

module.exports = mongoose.model('users', userSchema);