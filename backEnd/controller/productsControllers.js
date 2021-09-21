const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "server err" });
  }
};

const getProductId = async (req, res) => {
  try {
    const product = await Product.find(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "server err" });
  }
};

module.exports = {
  getAllProducts,
  getProductId,
};
