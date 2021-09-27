const config = require('config');
const mongoose = require('mongoose');
const dbUrl = config.get('db');

const posts = [
    {
        slug: 'nowost-101',
        title: 'Новость 101',
        category: {
            slug: 'category-101',
            title: 'Категория 101'
        },
        prevText: 'Краткий текст поста 101',
        text: 'Полный текст поста 101!',
        tags: 'Новость, пост, 101'
    },
    {
        slug: 'nowost-102',
        title: 'Новость 102',
        category: {
            slug: 'category-102',
            title: 'Категория 102'
        },
        prevText: 'Краткий текст поста 102',
        text: 'Полный текст поста 102!',
        tags: 'Новость, пост, 102'
    },
    {
        slug: 'nowost-103',
        title: 'Новость 103',
        category: {
            slug: 'category-103',
            title: 'Категория 103'
        },
        prevText: 'Краткий текст поста 103',
        text: 'Полный текст поста 103!',
        tags: 'Новость, пост, 103'
    },
    {
        slug: 'nowost-104',
        title: 'Новость 104',
        category: {
            slug: 'category-104',
            title: 'Категория 104'
        },
        prevText: 'Краткий текст поста 104',
        text: 'Полный текст поста 104!',
        tags: 'Новость, пост, 104'
    },
    {
        slug: 'nowost-105',
        title: 'Новость 105',
        category: {
            slug: 'category-105',
            title: 'Категория 105'
        },
        prevText: 'Краткий текст поста 105',
        text: 'Полный текст поста 105!',
        tags: 'Новость, пост, 105'
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
        slug: {
            type: String,
            required: true,
            unique: true,
            min: 4
        },
        title: {
            type: String,
            required: true,
            min: 4
        }
    })

    const postSchema = new mongoose.Schema({
        slug: {
            type: String,
            required: true,
            unique: true
        },
        title: {
            type: String,
            required: true,
            min: 4
        },
        category: categorySchema,
        date: {
            type: Date,
            default: Date.now
        },
        prevText: {
            type: String,
            min: 4,
            required: true
        },
        text: {
            type: String,
            min: 4,
            required: true
        },
        tags: {
            type: String
        }
    });

    // const Category = conn.model('Category', categorySchema);
    const Post = conn.model('Post', postSchema);

    posts.forEach(async item => {
        const post = new Post({
            slug: item.slug,
            title: item.title,
            category: {
                slug: item.category.slug,
                title: item.category.title
            },
            prevText: item.prevText,
            text: item.text,
            tags: item.tags
        });
        await post.save();
    });
}