const mongoose = require('mongoose');
const keys = require('./../../config/db');
const Post = require('./../../app/models/Post');
const Category = require('./../../app/models/Category');

mongoose.connect(keys.mongoURI);

const posts = [
    {
        slug: 'post-1',
        title: 'Пост № 1',
        category: 'category-1',
        prevText: 'Это короткая версия поста №1',
        text: 'Это полная версия поста номер 1. Пост написан для заполнения пробной базы для проекта микроблог.',
        tags: ['JS', 'Express', 'JavaScript']
    },
    {
        slug: 'post-2',
        title: 'Пост № 2',
        category: 'category-2',
        prevText: 'Это короткая версия поста №2',
        text: 'Это полная версия поста номер 2. Пост написан для заполнения пробной базы для проекта микроблог.',
        tags: ['JS', 'PHP', 'HTML']
    },
    {
        slug: 'post-3',
        title: 'Пост № 3',
        category: 'category-3',
        prevText: 'Это короткая версия поста №3',
        text: 'Это полная версия поста номер 3. Пост написан для заполнения пробной базы для проекта микроблог.',
        tags: ['JS', 'Vie', 'HTML']
    },
    {
        slug: 'post-4',
        title: 'Пост № 4',
        category: 'category-4',
        prevText: 'Это короткая версия поста №4',
        text: 'Это полная версия поста номер 4. Пост написан для заполнения пробной базы для проекта микроблог.',
        tags: ['PHP', 'PHP7', 'PHP8']
    },
    {
        slug: 'post-5',
        title: 'Пост № 5',
        category: 'category-5',
        prevText: 'Это короткая версия поста №5',
        text: 'Это полная версия поста номер 5. Пост написан для заполнения пробной базы для проекта микроблог.',
        tags: ['MongoDB', 'NodeJS', 'Express']
    }
];

posts.forEach(async post => {
    const category = await Category.findOne({slug: post.category}).exec();
    console.log(category._id);
    const postDB = new Post({
        ...post,
        category: category._id
    });
    await postDB.save();
});