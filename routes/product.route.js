const router = require('express').Router();
const { asyncHandler } = require('../utils/asyncHandler');
const ProductController = require('../controllers/product.controller');

router.route('/category/:category')
      .get(asyncHandler(ProductController.getProductbyCategory));

module.exports = router;