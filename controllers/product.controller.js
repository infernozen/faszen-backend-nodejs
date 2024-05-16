const Product = require("../models/product.model");

exports.getProductbyCategory = (req,res) => {
    const { category } = req.params;

    Product.getByCategory(category, (error, products) => {
        if (products) {
            res.status(200).send({
                status: "success",
                products : products
            });
        }
        else{
            res.status(404).send({
                status: "failure",
                message: `Error occured: ${error}`
            })
        }
    });
};