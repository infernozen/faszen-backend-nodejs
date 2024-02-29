const findOTPByEmail = `
SELECT * FROM otps WHERE email = ?
`;

const insertOTP = `
INSERT INTO otps (email, otp, expiry_time)
VALUES (?, ?, ?)
ON DUPLICATE KEY UPDATE
    otp = VALUES(otp),
    expiry_time = VALUES(expiry_time);
`;

const deleteOTPByEmail = `DELETE FROM otps WHERE email = ?`;


const deleteOTP = `DELETE FROM otps WHERE expiry_time < ? AND id != 0;`;

module.exports = {
    deleteOTPByEmail,
    findOTPByEmail,
    insertOTP,
    deleteOTP
};