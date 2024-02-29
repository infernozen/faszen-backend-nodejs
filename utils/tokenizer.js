const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../utils/secrets');

const generate = (token) => jwt.sign({ token }, JWT_SECRET_KEY, { expiresIn: '30d'});

const decode = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET_KEY);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    generate,
    decode
}