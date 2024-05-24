const Product = require("../models/product.model");

exports.getProductbyCategory = (req,res) => {
    const { category } = req.params;

    Product.getByCategory(category, (error, products) => {
        if (products) {
            if(products.length == 0){
                res.status(404).send({
                    status: "failure",
                    message: "No Data Found"
                });
                return;
            }
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

exports.getAllProducts = (req,res) => {
    Product.getAll((error, products) => {
        if (products) {
            if(products.length == 0){
                res.status(404).send({
                    status: "failure",
                    message: "No Data Found"
                });
                return;
            }
            res.status(200).send({
                status: "success",
                products : products
            });
        }
        else{
            res.status(404).send({
                status: "failure",
                message: `Error occured: ${error}`
            });
        }
    });
};

exports.getProductsByTags = (req, res) => {
    const { tags } = req.body; 
  
    Product.getByTag(tags, (error, products) => {
      if (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      if (!products || products.length === 0) {
        return res.status(404).json({ message: `No products found for tags '${tags}'` });
      }
  
      res.status(200).send({
        status: "success",
        products : products
      });
    });
  };

exports.getHome = (req, res) => {
  
    Product.getByIds((error, products) => {
      if (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      if (!products || products.length === 0) {
        return res.status(404).json({ message: `No products found for tags '${tags}'` });
      }
  
      res.status(200).send({
        status: "success",
        products : products
      });
    });
  };