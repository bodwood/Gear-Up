//sets up Express.js server that listens on specified port
import dotenv from 'dotenv'
import connectToDatabase from './database.js';
import express from 'express'

//Routes
import productRoutes from './routes/productRoutes.js'

dotenv.config() //loads environment variables from .env
connectToDatabase(); 
const app = express(); //creates new express application

app.use(express.json()); //sets up middleware to parse incoming json data

const port = process.env.PORT || 5000

app.use('/api/products', productRoutes);

app.listen(port, () => { //starts server
 console.log(`Server runs on port ${port}.`);
})