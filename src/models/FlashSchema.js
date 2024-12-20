const {Schema, model} = require('mongoose');

const flashSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
});

module.exports = model('Flash', flashSchema);