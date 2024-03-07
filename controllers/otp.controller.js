const OTP = require("../models/otp.model");
const { generateOTP: generate } = require("../utils/hash");
const { OTP_EMAIL_ADDRESS, OTP_EMAIL_PASSWORD} = require("../utils/secrets");
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const { appDir } = require("../app");

const otpfilePath = path.resolve(appDir, 'views', 'otp.html');

exports.generateOTP = (req, res, next) => {
    const { email } = req.body;
    const code = generate();

    const newOTP = new OTP(email, code.otp, code.expiryTime);
    OTP.create(newOTP, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
            return;
        } else {
            req.OTP = { otp:code.otp, expiryTime: code.expiryTime}
            next();
        }
    });
};

exports.verifyOTP = (req, res, next) => {
    const { email, otp } = req.body;

    oldOTP = OTP.findByEmail(email, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    status: 'error',
                    message: `otp with email ${email} was not found`
                });
                return;
            }
            res.status(500).send({
                status: 'error',
                message: err.message
            });
            return;
        }
        if (data) {
            if (otp === data.otp) {
                OTP.deleteOTPByEmail(email, (deleteErr, deletedCount) => {
                    if (deleteErr) {
                        console.error('Error deleting OTP:', deleteErr);
                        return;
                    }
                    console.log(`Deleted ${deletedCount} OTP records for email ${email}`);
                });

                req.OTP = otp;
                next(); 
            }
            else{
                res.status(401).send({
                    status: 'error',
                    message: 'Incorrect OTP'
                });
                return;
            }
        }
    });
}

exports.deleteExpiredOTPs = (req, res, next) => {
    OTP.deleteExpiredOTPRecords((err, deletedCount) => {
        if (err) {
            res.status(400).send({
                message: `Failed to delete otp records: ${err}`
            });
            return;
        }
        //console.log(`Deleted ${deletedCount} expired OTP records`);
        next();       
    });
}

exports.sendEmail = async (req,res) => {
    const { email } = req.body;
    const {otp , expiryTime} = req.OTP;
    const htmlContent = fs.readFileSync(otpfilePath , 'utf8');

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: OTP_EMAIL_ADDRESS,
            pass: OTP_EMAIL_PASSWORD
        }
    });    

    let mailOptions = {
        from: `"Faszen"<${OTP_EMAIL_ADDRESS}>`,
        to: email,
        subject: 'OTP for your recent request!!',
        html: htmlContent.replace('{{OTP}}', otp)
    };

    try {
        await transporter.sendMail(mailOptions);
        const response = {"Status": "Success", "Details": `Email sent to ${email}` , "OTP": otp, "expiryTime":expiryTime};
        return res.status(200).send(response);
    } catch (err) {
        const response = {"Status": "Failure", "Details": err.message};
        return res.status(400).send(response);
    }
    
}