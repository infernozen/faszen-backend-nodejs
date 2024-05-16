const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth.route');
const otpRoute = require('./routes/otp.route');
const productRoute = require('./routes/product.route');
const communityRoute = require('./routes/community.route');

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', authRoute);
app.use('/api/otp', otpRoute);
app.use('/api/community-hub', communityRoute);
app.use('/api/products', productRoute);

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