import express from 'express';
import User from '../models/User';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

const userRoutes = express.Router();

//TODO: redefine expiresIn
//tokens usually expire in an hour
const genToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: '60d' });
};

//checks if user login information is in the database
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPasswords(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('We already have an account with that email address.');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genToken(user._id),
    });
  } else {
    res.json(400);
    throw new Error('Invalid user data');
  }
});

userRoutes.route('/login').post(loginUser);
userRoutes.route('/register').post(registerUser);

export default userRoutes;
