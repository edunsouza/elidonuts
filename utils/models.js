const mongoose = require('mongoose');
const { Schema, connection } = mongoose;
const db = connection.useDb('cluster-prod');

const Orders = new Schema({
    orderId: String,
    userId: String,
    boxes: [{
        size: Number,
        donuts: [Schema.Types.ObjectId]
    }],
    deliveryDate: Date,
    orderDate: Date
}, {
    collection: 'orders'
});

const Donuts = new Schema({
    code: String,
    name: String,
    description: String,
    image: String
}, {
    collection: 'donuts'
});

module.exports = {
    Orders: db.model('Orders', Orders),
    Donuts: db.model('Donuts', Donuts)
};
