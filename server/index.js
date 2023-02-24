import dotenv from 'dotenv'

import connectToDatabase from './database.js';
import express from 'express'

dotenv.config()
connectToDatabase();
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000

app.listen(port, () => {
 console.log(`Server runs on port ${port}.`);
})