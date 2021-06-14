const controller = require("../controllers/product.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/products/:category", controller.getAll);
  app.post("/products", controller.add);
  app.put("/products", controller.update);
  app.delete("/products/:id", controller.delete);
};
