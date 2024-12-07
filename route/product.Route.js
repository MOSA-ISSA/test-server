const express = require("express");
const { createProduct } = require("../controller/product.controller");
const productRout = express.Router();

productRout.post("/createProduct", createProduct)

module.exports = productRout;