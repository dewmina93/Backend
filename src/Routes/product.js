import express from "express";

import {getProduct , createProduct , getProducts, deleteProduct , updateProduct} from '../Application/Product.js';

export const productRouter= express.Router()

productRouter.route('/').get(getProduct).post(createProduct)

productRouter.route('/:id').get(getProducts).delete(deleteProduct).patch(updateProduct)