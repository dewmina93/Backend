import express from "express";
import { createOrder, deleteOrder, getOrders, updateOrder, getOrder } from "../Application/Order.js";

export const orderRouter = express.Router();

// Define routes
orderRouter.route('/')
    .get(getOrders) // Get all orders
    .post(createOrder); // Create a new order

orderRouter.route('/:id')
    .get(getOrder) // Get a single order by ID
    .delete(deleteOrder) // Delete an order by ID
    .patch(updateOrder); // Update an order by ID