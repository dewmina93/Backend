import express from "express";

import { createCategory, deleteCategory, getCategories, updateCategory ,getCategory } from "../Application/Category.js";

export const categoryRouter= express.Router()

categoryRouter.route('/').get(getCategory).post(createCategory)

categoryRouter.route('/:id').get(getCategories).delete(deleteCategory).patch(updateCategory)