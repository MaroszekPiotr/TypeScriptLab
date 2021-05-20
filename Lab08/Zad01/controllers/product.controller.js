const Product = require("../models/product.model");

const products = [];

exports.getAll = (req, res) => {
  res.status(200).send(products);
};

exports.add = (req, res) => {};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};
