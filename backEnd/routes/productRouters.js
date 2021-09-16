/* -------------------------------------------------------------------------- */
/*                              import constants                              */
/* -------------------------------------------------------------------------- */
const { Router } = require("express");
const router = Router();
const {getAllProducts,getProductId} = require('../controller/productsControllers')
// desc get all products from DB
// route Get/api/products/:id
router.get("/", getAllProducts);

// desc get all products from DB
// route Get/api/products/:id
router.get("/:id", getProductId);

module.export = router;
