const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
items: [
{
productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
quantity: { type: Number, required: true }
}
],
shippingAddress: {
fullName: { type: String },
phone: { type: String },
address1: { type: String },
address2: { type: String },
city: { type: String },
pinCode: { type: String }
},
totalAmount: { type: Number },
paymentMethod: { type: String },
status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);