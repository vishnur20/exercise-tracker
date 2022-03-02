const mongoose = require('mongoose');

// getting the Shema class
const Schema = mongoose.Schema;

// creating an object of Schema class
// It takes two arguments
// 1. collection attributes (object)
// 2. some properties (object)
const exerciseSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        minlength: 3,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        tirm: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
    // this set the collection name
    collection: 'exercise'
});

module.exports = mongoose.model('something_2', exerciseSchema);