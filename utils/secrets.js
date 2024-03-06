const {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_NAME,
    JWT_SECRET_KEY,
    OTP_EMAIL_ADDRESS,
    OTP_EMAIL_PASSWORD,
} = process.env;

const requiredCredentials = [
    'DB_HOST',
    'DB_USER',
    'DB_PASS',
    'DB_NAME',
    'JWT_SECRET_KEY'
];

for (const credential of requiredCredentials) {
    if (process.env[credential] === undefined) {
        console.log(`Missing required crendential: ${credential}`);
        process.exit(1);
    }
}

module.exports = {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_NAME,
    JWT_SECRET_KEY,
    OTP_EMAIL_ADDRESS,
    OTP_EMAIL_PASSWORD,
};
