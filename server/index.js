//sets up Express.js server that listens on specified port
import dotenv from 'dotenv'
import connectToDatabase from './database.js';
import express from 'express'

//Routes
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config() //loads environment variables from .env
connectToDatabase(); 
const app = express(); //creates new express application

app.use(express.json()); //sets up middleware to parse incoming json data

const port = process.env.PORT || 5000

//exposes routes to our URLs below
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes);

app.listen(port, () => { //starts server
 console.log(`Server runs on port ${port}.`);
})