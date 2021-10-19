const commentService = require('./commentService');

exports.postComment = async (req, res, next) => {
    const commentId = await commentService.postComment(req.body);
    res.send(commentId);
}

exports.getComment = async (req, res, next) => {
    const page = req.query.page == undefined ? 1 : parseInt(req.query.page);
    const obj = await commentService.getComment(req.params.id, page);

    res.send(obj);
}
 
exports.likeComment = async (req, res) => {
    const like = await commentService.handleLike(req.body.commentId, req.body.userId);
    res.send(like);
}