import connectDB from './db/connectDB.js';
import express from 'express'
import { updateById } from './models/Movies.js';
const app = express()

// WE ARE PASSING OR || BECAUSE IT HELP GET LESS ERROR
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";
const port = process.env.PORT || 8000;

connectDB(DATABASE_URL)
updateById()


app.listen(port, () => console.log(`Server listening on Port ${port}`))