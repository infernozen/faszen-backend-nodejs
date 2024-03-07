// const {
//     DB_HOST,
//     DB_USER,
//     DB_PASS,
//     DB_NAME,
//     JWT_SECRET_KEY
// } = process.env;

const {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_NAME,
    JWT_SECRET_KEY,
    OTP_EMAIL_ADDRESS,
    OTP_EMAIL_PASSWORD,
} = {
    DB_HOST: '34.31.27.226',
    DB_USER: 'root',
    DB_PASS: 'root',
    DB_NAME: 'userinfo',
    JWT_SECRET_KEY: 'faszen@ssn#RoCube$tech',
    OTP_EMAIL_ADDRESS: 'spam2210561@gmail.com',
    OTP_EMAIL_PASSWORD: 'oaso wymh khjf nmru',
};


const requiredCredentials = [
    'DB_HOST',
    'DB_USER',
    'DB_PASS',
    'DB_NAME',
    'JWT_SECRET_KEY'
];

// for (const credential of requiredCredentials) {
//     if (process.env[credential] === undefined) {
//         console.log(`Missing required crendential: ${credential}`);
//         process.exit(1);
//     }
// }

module.exports = {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_NAME,
    JWT_SECRET_KEY,
    OTP_EMAIL_ADDRESS,
    OTP_EMAIL_PASSWORD,
};