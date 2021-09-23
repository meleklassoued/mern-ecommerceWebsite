/* -------------------------- import configuration -------------------------- */
require("dotenv").config();
/* -------------------------- finish configuration -------------------------- */

/* -------------------------------------------------------------------------- */
/*                              require constants                             */
/* -------------------------------------------------------------------------- */
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRouters");
/* -------------------------------------------------------------------------- */
/*                              Finish                            */
/* -------------------------------------------------------------------------- */

//connection to the data base
connectDB();
// finish connection
const app = express();
app.use(express.json());
app.use("/api/products", productRoutes);

//listenning to the port .
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log("we are on the port");
});
