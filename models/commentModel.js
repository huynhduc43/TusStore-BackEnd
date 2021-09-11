const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    productId: {type: mongoose.Schema.Types.ObjectId, require: true},
    userId: {type: mongoose.Schema.Types.ObjectId, require: true},
    avatar: String,
    name: String,
    content: { type: String, require: true },
    postDate: {type: Date, require: true},
    like: {type: Array, require: true, default: []}, // user id array
});

module.exports = mongoose.model('comments', commentSchema);