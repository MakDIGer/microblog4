const mongoose = require('mongoose');
const keys = require('./../../config/db');
const Category = require('./../../app/models/Category');

mongoose.connect(keys.mongoURI);

const categories = [
    {
        slug: 'category-1',
        title: 'Категория 1'
    },
    {
        slug: 'category-2',
        title: 'Категория 2'
    },
    {
        slug: 'category-3',
        title: 'Категория 3'
    },
    {
        slug: 'category-4',
        title: 'Категория 4'
    },
    {
        slug: 'category-5',
        title: 'Категория 5'
    }
];

categories.forEach(async category => {
    const categoryDB = new Category(category);
    await categoryDB.save();
});