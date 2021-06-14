const Product = require("../models/product.model");
const Guid = require("../helpers/guid");

const products = [];

exports.getAll = (req, res) => {
  const productCategory = req.params.category;
  const productsList = products.filter(
    (product) => product.category === productCategory
  );
  res.status(200).send(productsList);
};

exports.add = (req, res) => {
  const product = new Product(
    Guid.newGuid(),
    req.body.category,
    req.body.name,
    req.body.description,
    req.body.price
  );
  products.push(product);
  res.status(201).send(products);
};

exports.update = (req, res) => {
  const productIndex = products.findIndex(
    (product) => product.id === req.body.id
  );
  if (productIndex < 0) return console.error("wrong data");
  const updatedProduct = { ...products[productIndex], ...req.body };
  products[productIndex] = updatedProduct;
  res.status(204);
};

exports.delete = (req, res) => {
  const productIndex = products.findIndex(
    (product) => product.id === req.params.id
  );
  if (productIndex < 0) return console.error("wrong data");
  products.splice(productIndex, 1);
  res.status(204);
};
