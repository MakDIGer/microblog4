const config = require('config');
const mongoose = require('mongoose');
const dbUrl = config.get('db');

const categories = [
    {
        name: 'Категория 1',
        slug: 'category-1'
    },
    {
        name: 'Категория 2',
        slug: 'category-2'
    },
    {
        name: 'Категория 3',
        slug: 'category-3'
    },
    {
        name: 'Категория 4',
        slug: 'category-4'
    },
    {
        name: 'Категория 5',
        slug: 'category-5'
    },
];

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect(dbUrl);
    } catch (e) {
        console.log(e);
    }

    const conn = mongoose.connection;

    const categorySchema = new mongoose.Schema({
        slug: String,
        name: String
    });

    const Category = conn.model('Category', categorySchema);

    categories.forEach(async item => {
        const category = new Category({ name: item.name, slug: item.slug });
        await category.save();
    });
}