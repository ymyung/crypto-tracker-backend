const mongoose = require('mongoose')

const Schema = mongoose.Schema

const walletSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }, 
    amount: {
        type: Number,
        required: true
    }, 
    value: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Wallet', walletSchema)