var asyncHandler = require('express-async-handler')
var Product = require('../models/productModel')

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  //const product = await Product.findById('619b7fca202a0b283c36c3ef')
  const product = await Product.find()
  console.log(product)
  res.json(product)
})

module.exports = getProducts
