const express = require('express');
const router = express.Router();

const userController = require('../components/users/userController');
const commentController = require('../components/comments/commentController');
const productsController = require('../components/products/productController');

router.put('/comments/:id', commentController.likeComment);

router.get('/comments/:id', commentController.getComment);

router.post('/comments', commentController.postComment);

router.post('/sign-up', userController.signUp);

router.post('/sign-in', userController.handleSignIn);

router.get('/hot-products', productsController.displayHotProducts);

router.get('/newest-products', productsController.displayNewestProducts);

module.exports = router;
