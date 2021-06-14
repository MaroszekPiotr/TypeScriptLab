const Category = require("../models/category.model");
const Product = require("../models/product.model");
exports.getAll = (req, res) => {
  Category.find().exec(function (err, category) {
    res.status(200).send(category);
  });
};

exports.add = (req, res) => {
  const category = new Category({
    name: req.body.name,
  });
  category.save((err) => {
    if (err) {
      console.error(err);
      return false;
    }
    return true;
  });
};

exports.update = (req, res) => {
  const updatedCategory = { ...req.body };
  Category.updateOne({ _id: req.body.id }, updatedCategory).exec();
};

exports.delete = (req, res) => {
  Category.deleteOne({ _id: req.body.id }).exec();
};
