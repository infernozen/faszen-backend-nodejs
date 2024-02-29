const User = require('../models/user.model');
const { hash: hashPassword, compare: comparePassword } = require('../utils/hash');
const { JWT_SECRET_KEY } = require('../utils/secrets');
const { generate: generateToken, decode: decodeToken } = require('../utils/tokenizer');
const { JWT } = require('google-auth-library');

exports.signup = (req, res) => {
    const { email, password, firstname, lastname } = req.body;
    const hashedPassword = hashPassword(password.trim());

    const user = new User(email.trim(), hashedPassword, firstname, lastname);

    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            const token = generateToken({id:data.id,email:data.email});
            res.status(200).send({
                status: "success",
                data: {
                    token: token,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email
                }
            });
        }
    });
};

exports.signin = (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email.trim(), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    status: 'error',
                    message: `User with email ${email} was not found`
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
            if (comparePassword(password.trim(), data.password)) {
                const token = generateToken({id:data.id,email:data.email});
                res.status(200).send({
                    status: 'success',
                    data: {
                        token: token,
                        firstname: data.firstname,
                        lastname: data.lastname,
                        email: data.email
                    }
                });
                return;
            }
            res.status(401).send({
                status: 'error',
                message: 'Incorrect password'
            });
        }
    });

}

exports.checkEmail =  (req, res, next) => {
    const { email } = req.body;
    User.findByEmail(email, (_, data) => {
        if (data) {
            const token = generateToken({id:data.id, email:data.email})
            res.status(200).send({
                message: `A user with email address '${email}' exits`,
                token: token
            });
            return;
        }
        next();
    });
}

exports.getToken =  (req, res) => {
    const { email } = req.body;
    User.findByEmail(email, (_, data) => {
        if (data) {
            const token = generateToken({id:data.id, email:data.email})
            res.status(200).send({
                status: "success",
                data: {
                    token: token,
                    email: data.email,
                    firstname: data.firstname,
                    lastname: data.lastname
                }
            });
        }
        else{
            res.status(404).send({
                status: "failure",
                message: `${email} not found!!`
            })
        }
        
    });
}

exports.updatePasswordByEmail = (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = hashPassword(password);
    
    User.updateByEmail(email, hashedPassword, (error, result) => {
        if (error) {
            res.status(500).send({
                message: 'An error occurred while updating the password.'
            });
            return;
        }

        if (result.affectedRows > 0) {
            res.status(200).send({
                message: `Password updated successfully for user with email '${email}'.`
            });
        } else {
            res.status(404).send({
                message: `No user found with email '${email}'.`
            });
        }
    });
};

exports.verifyToken = (req, res) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    const currentTimestamp = Math.floor(Date.now() / 1000);

    if (!token || token === "N/A") {
        return res.status(401).send({ success: false, message: 'Authorization token is missing' });
    }

    decoded = decodeToken(token,JWT_SECRET_KEY);
    if (!decoded || (decoded.exp && decoded.exp < currentTimestamp)) {
        return res.status(401).send({ success: false, message: 'Token is invalid or expired' });
    }

    return res.status(200).send({ success: true, message: 'Token is valid' });
};

exports.getGoogleApiToken = async (req,res) => {
    try {
        const serviceAccount = require('../config/service-account.json');
        const client = new JWT({
            email: serviceAccount.client_email,
            key: serviceAccount.private_key,
            scopes: ['https://www.googleapis.com/auth/cloud-platform']
        });

        const accessToken = await client.getAccessToken();
        res.status(200).send({
            "status" : "success",
            "project-id" : serviceAccount.project_id,
            "token" : accessToken.token
        });
    } catch (error) {
        res.status(500).send({
            "status" : "failure",
            "message" : error.message
        });
    }
}