const Product = require("../models/product.model");

exports.getAll = (req, res) => {
  Product.find()
    .populate("category")
    .exec(function (err, products) {
      res.status(200).send(products);
    });
};

exports.add = (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
  });
  product.save((err) => {
    if (err) {
      console.error(err);
      return false;
    }
    return true;
  });
};

exports.update = (req, res) => {
  const updatedProduct = { ...req.body };
  Product.updateOne({ _id: req.body.id }, updatedProduct).exec();
};

exports.delete = (req, res) => {
  Product.deleteOne({ _id: req.body.id }).exec();
};
