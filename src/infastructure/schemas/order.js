import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    total: Number,
    cart: [
        {
            _id: String,
            name: String,
            price: Number,
            quantity: Number,
        }
    ]
    });
    const Order = mongoose.model('Order', OrderSchema);
    export default Order;
    