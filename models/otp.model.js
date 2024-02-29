const db = require('../config/db.config');
const { insertOTP, findOTPByEmail, deleteOTP, deleteOTPByEmail } = require('../database/queries/otp_queries');

class OTP {
    constructor(email, otp, expiryTime) {
        this.email = email;
        this.otp = otp;
        this.expiryTime = expiryTime;
    }

    static create(newOTP, cb) {
        db.query(insertOTP, 
            [
                newOTP.email, 
                newOTP.otp,
                newOTP.expiryTime
            ], (err, res) => {
                if (err) {
                    console.log(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, {
                    id: res.insertId,
                    email: newOTP.email,
                    otp: newOTP.otp
                });
        });
    }

    static findByEmail(email, cb) {
        db.query(findOTPByEmail, email, (err, res) => {
            if (err) {
                console.log(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res[0]);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }

    static deleteExpiredOTPRecords(cb) {
        const now = new Date();
        db.query(deleteOTP, [now], (err, result) => {
            if (err) {
                cb(err, null);
                return;
            }
            cb(null, result.affectedRows); // Return the number of deleted rows
        });
    }

    static deleteOTPByEmail(email, cb){
        db.query(deleteOTPByEmail, [email], (err) =>{
            if(err){
                cb(err,null);
                return;
            }
        });
    }
}

module.exports = OTP;
