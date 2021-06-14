const express = require("express");

const app = express();

app.use(express.json());

require("./routes/product.routes")(app);

app.listen(3000, () => console.log("server is running"));
