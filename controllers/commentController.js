const commentService = require('../services/commentService');

exports.postComment = async (req, res, next) => {
    await commentService.postComment(req.body);
}

exports.getComment = async (req, res, next) => {
    const page = req.query.page == undefined ? 1 : parseInt(req.query.page);
    const obj = await commentService.getComment(req.params.id, page);

    res.send(obj);
}

exports.likeComment = async (req) => {
    //.log(req.body);
    await commentService.handleLike(req.body.commentId, req.body.userId);
}