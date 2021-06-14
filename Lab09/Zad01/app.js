const express = require("express");
const dbConfig = require("./config/db.config");

const app = express();

app.use(express.json());

const db = require("./models/index");

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection established"))
  .catch((err) => {
    console.error(err);
    process.exit();
  });

require("./routes/product.routes")(app);

app.listen(3000, () => console.log("server is running"));
