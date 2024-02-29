const router = require('express').Router();
const { asyncHandler } = require('../utils/asyncHandler');
const authController = require('../controllers/auth.controller');
const otpController = require('../controllers/otp.controller');


router.route('/signup')
    .post(asyncHandler(otpController.verifyOTP), asyncHandler(authController.signup));

router.route('/signin')
    .post(asyncHandler(authController.signin));

router.route('/checkEmail')
    .post(asyncHandler(authController.checkEmail), asyncHandler((req, res) =>{
        res.status(401).send({
            message: "Email was not found!!"
        })
    }
));

router.route('/changePassword')
    .post(asyncHandler(authController.updatePasswordByEmail));

router.route('/verifyToken')
    .get(asyncHandler(authController.verifyToken));

router.route('/getToken')
    .post(asyncHandler(authController.getToken));

router.route('/getGoogleApiToken')
    .get(asyncHandler(authController.getGoogleApiToken));

module.exports = router;