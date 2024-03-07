const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth.route');
const otpRoute = require('./routes/otp.route');
const communityRoute = require('./routes/community.route');
const path = require('path');

const app = express();

exports.appDir = path.resolve(__dirname);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static('./views'));

app.use('/api/auth', authRoute);
app.use('/api/otp', otpRoute);
app.use('/api/community-hub', communityRoute);

app.get('/', (req, res) => {
    res.status(200).send({
        status: "success",
        data: {
            message: "API working fine"
        }
    });
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        status: "error",
        message: err.message
    });
    next();
});

app.listen(3000); 
module.exports = app;