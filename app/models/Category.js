const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = {
    slug: {
        type: String,
        min: 4,
        required: true
    },
    title: {
        type: String,
        min: 4,
        required: true,
        unique: true
    }
};

module.exports = mongoose.model('categories', categorySchema);