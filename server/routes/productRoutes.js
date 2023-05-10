import express from 'express';
import Product from '../models/Product.js';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import protectRoute from '../middleware/authMiddleware.js';

const productRoutes = express.Router();

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found.');
  }
};

const createProductReview = asyncHandler(async (req, res) => {

  //From request body we are grabbing the data needed for finding the body and the user.
  const { rating, comment, userId, title } = req.body;
  const product = await Product.findById(req.params.id);
  const user = await User.findById(userId);

  //Checks if user has already reviewed the product.
  //Users are only allowed to review a product one time.
  //If a user tries to review more than once, a 400 error will be thrown.
  if (product) {
    const alreadyReviewed = product.reviews.find((rev) => rev.user.toString() === user._id.toString());

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed.');
    }
    //If the user has not already reviewed the product, a new review object is created.
    const review = {
      name: user.name,
      rating: Number(rating),
      comment,
      title,
      user: user._id,
    };
    //Product review is pushed to the reviews of the product and the number of reviews is updated.
    product.reviews.push(review);
    product.numberOfReviews = product.reviews.length;
    //Product rating is updated to include all product reviews, to display the average rating.
    product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;

    //Save or throw error.
    await product.save();
    res.status(201).json({ message: 'Review has been saved.' });
  } else {
    res.status(404);
    throw new Error('Product not found.');
  }
});

productRoutes.route('/').get(getProducts);
productRoutes.route('/:id').get(getProduct);
productRoutes.route('/reviews/:id').post(protectRoute, createProductReview);

export default productRoutes;
