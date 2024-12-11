import express from 'express';

import {productRouter} from './src/Routes/product.js';

const app = express();

app.use(express.json()); 

app.use('/product', productRouter)

app.listen(8000, () => console.log(`Server running on port ${8000}`));