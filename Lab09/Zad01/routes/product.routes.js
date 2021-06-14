const productController = require("../controllers/product.controller");
const categoryController = require("../controllers/category.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/products/", productController.getAll);
  app.post("/products", productController.add);
  app.put("/products", productController.update);
  app.delete("/products/", productController.delete);
  app.get("/category", categoryController.getAll);
  app.post("/category", categoryController.add);
  app.put("/category", categoryController.update);
  app.delete("/category", categoryController.delete);
};
