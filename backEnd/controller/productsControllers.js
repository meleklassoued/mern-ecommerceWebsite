const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.stattus(500).json({ message: "server err" });
  }
};

module.export = getAllProducts;
