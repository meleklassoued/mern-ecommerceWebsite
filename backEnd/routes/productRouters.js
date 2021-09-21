/* -------------------------------------------------------------------------- */
/*                              import constants                              */
/* -------------------------------------------------------------------------- */
const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductId,
} = require("../controller/productsControllers");

// @desc Get all products from db
//@route get /api.products
//@access Public
router.get("/", getAllProducts);

// @desc Get all products from db
//@route get /api.products
//@access Public
router.get("/:id", getProductId);

module.exports = router;
