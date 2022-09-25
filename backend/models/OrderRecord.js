const mongoose = require('mongoose');

const OrderRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.ObjectId,
        ref: 'Patient'
    },
    items: {
        type: [mongoose.Schema.ObjectId],
        ref: 'FoodItem'
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
})

module.exports = new mongoose.model("OrderRecord", OrderRecordSchema)