const bcrypt = require('bcryptjs');
const otpGenerator = require('otp-generator');

function AddMinutesToDate(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

const hash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const compare = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword);

const generateOTP = () => {
    const otp = otpGenerator.generate(4, {digits:true, upperCaseAlphabets:false , lowerCaseAlphabets:false , specialChars: false });
    const expiryTime = AddMinutesToDate(new Date(),10);
    return { otp, expiryTime };
};

module.exports = {
    hash,
    compare,
    generateOTP
}