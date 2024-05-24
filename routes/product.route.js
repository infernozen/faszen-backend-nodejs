const router = require('express').Router();
const { asyncHandler } = require('../utils/asyncHandler');
const ProductController = require('../controllers/product.controller');

router.route('/category/:category')
      .get(asyncHandler(ProductController.getProductbyCategory));

router.route('/getAll')
      .get(asyncHandler(ProductController.getAllProducts));

router.route('/bytags')
      .post(asyncHandler(ProductController.getProductsByTags));

router.route('/home')
      .get(asyncHandler(ProductController.getHome));

module.exports = router;