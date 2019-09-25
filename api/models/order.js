const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: mongoose.Schema.Types.ObjectId, ref: 'name', required: true },
    summary: { type: Number, default: 1 }
});

module.exports = mongoose.model('Order', orderSchema);