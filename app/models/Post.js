const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = {
    slug: {
        type: String,
        required: true,
        min: 4
    },
    title: {
        type: String,
        required: true,
        min: 4,
        unique: true
    },
    category: {
        ref: 'categories',
        type: Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    prevText: {
        type: String,
        min: 4
    },
    text: {
        type: String,
        required: true
    },
    tags: [{
        type: String
    }]
};

module.exports = mongoose.model('posts', postSchema);