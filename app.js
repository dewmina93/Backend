import express from 'express';
import {connectDB} from '../Backend/src/infastructure/schemas/db.js';
import {productRouter} from './src/Routes/product.js';
import { categoryRouter } from './src/Routes/category.js';
import 'dotenv/config.js'
import cors from 'cors';

const app = express();

app.use(express.json()); 
app.use(cors( {origin: 'http://localhost:5173'}));

app.use('/product', productRouter)

app.use('/category', categoryRouter)



connectDB();

app.listen(8000, () => console.log(`Server running on port ${8000}`));