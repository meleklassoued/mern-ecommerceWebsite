require("dotenv").config();

const productsData = require("./data/products");
const Product = require("../backEnd/models/Product.js");
const connectDB = require("../backEnd/config/db");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);

    console.log("Data Imported");

    process.exit();
  } catch (err) {
    console.error(err);
  }
};
importData();
