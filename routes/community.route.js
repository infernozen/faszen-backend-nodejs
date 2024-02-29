const router = require('express').Router();
const { getSuperSearches, getPopularBrands, getPostsInit } = require('../controllers/community.controller');
const { asyncHandler } = require('../utils/asyncHandler');

router.route('/getSuperSearches')
    .get(asyncHandler(getSuperSearches));

router.route('/getPopularBrands')
    .get(asyncHandler(getPopularBrands));

router.route('/getPostsInit')
    .get(asyncHandler(getPostsInit));

module.exports = router;