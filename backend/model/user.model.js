const mongoose = require('mongoose');

// getting Schema class
const Schema = mongoose.Schema;

// crating an object of Schema class type writing is to fun to learn
const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        minlength: 3,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
    // this set the collection name
    collection: 'user'
});

module.exports = mongoose.model('something_1', userSchema);