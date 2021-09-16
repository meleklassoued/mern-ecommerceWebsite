/* -------------------------- import configuration -------------------------- */
require("dotenv").config();
/* -------------------------- finish configuration -------------------------- */

/* -------------------------------------------------------------------------- */
/*                              require constants                             */
/* -------------------------------------------------------------------------- */
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRouters");
const app = express();
/* -------------------------------------------------------------------------- */
/*                              Finish                            */
/* -------------------------------------------------------------------------- */

//connection to the data base
connectDB();
// finish connection
app.use(express.json());
// app.use("/products", productRoutes);







//listenning to the port .
const PORT = process.env.PORT || 5500
app.listen(PORT, () => {
  console.log("we are on the port nikomek");
});
