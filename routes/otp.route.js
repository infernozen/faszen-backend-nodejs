const router = require('express').Router();
const otpController = require("../controllers/otp.controller");
const { asyncHandler } = require('../utils/asyncHandler');

router.route('/generate')
    .post(asyncHandler(otpController.deleteExpiredOTPs), asyncHandler(otpController.generateOTP), asyncHandler(otpController.sendEmail));

router.route('/verify')
    .post(asyncHandler(otpController.deleteExpiredOTPs), asyncHandler(otpController.verifyOTP), asyncHandler((req, res) => {
        res.status(200).send({
            status: 'success',
            data: {
                otp: req.OTP
            }
        })
    }));

module.exports = router;