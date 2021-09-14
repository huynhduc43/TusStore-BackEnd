const Paginator = require('paginator');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const commentModel = require('../models/commentModel');
const userModel = require('../models/userModel');

const PER_PAGE = 5;//Limit
const LENGTH = 5;

exports.postComment = async (body) => {
    const data = {
        productId: mongoose.Types.ObjectId(body.productId),
        userId: mongoose.Types.ObjectId(body.userId),
        avatar: body.avatar,
        name: body.name,
        content: body.content,
        postDate: body.postDate,
    }

    const newComment = commentModel(data);
    const cmt = await newComment.save();
    return cmt._id;
}

exports.handlePaginationCmt = async (productId, page) => {
    const paginator = new Paginator(PER_PAGE, LENGTH);
    const total = await commentModel.countDocuments({ productId: productId });
    const paginationInfo = paginator.build(total, page);

    return paginationInfo;
}

exports.getComment = async (productId, page) => {
    const paginationInfo = await this.handlePaginationCmt(productId, page);
    const comments = await commentModel
        .find({ productId: productId })
        .sort({ postDate: "desc" })
        .limit(PER_PAGE)
        .skip(PER_PAGE * (page - 1));

    return ({
        comments: comments,
        paginationInfo: paginationInfo,
    });
}

exports.handleLike = async (commentId, userId) => {
    const user = await userModel.findById(userId);
    const comment = await commentModel.findById(commentId);

    if (user) {
        const index = comment.like.indexOf(userId);
    
        if (index === -1) {
            await commentModel.findByIdAndUpdate(commentId, {like: [...comment.like, userId]});
            return String(comment.like.length + 1);
        } else {
           const tmp = [...comment.like];
           tmp.splice(index, 1);
           await commentModel.findByIdAndUpdate(commentId, {like: tmp});
           return String(comment.like.length - 1);
        }
    }
}