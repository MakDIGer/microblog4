const keys = require('./../config/db.js');
const mongoose = require('mongoose');
const chai = require('chai');
const should = chai.should();

describe('DB', () => {
    describe('has', () => {
        it('categories', () => {
            main().catch(err => console.log(err));

            async function main() {
                try {
                    await mongoose.connect(keys.mongoURI);
                } catch (e) {
                    console.log(e);
                }

                const conn = mongoose.connection;

                const categorySchema = new mongoose.Schema({
                    slug: String,
                    name: String
                });

                const Category = conn.model('Category', categorySchema);

                const categories = await Category.find();
                const numCategories = categories.length;

                should.not.equal(numCategories, 0);

                conn.disconnect;
            }
        });
        it('posts', () => {
            main().catch(err => console.log(err));

            async function main() {
                try {
                    await mongoose.connect(keys.mongoURI)
                } catch (e) {
                    console.log(e);
                }

                const conn = mongoose.connection;

                const postSchema = new mongoose.Schema({
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
                        type: mongoose.Schema.Types.ObjectId,
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
                });

                const Post = conn.model('Post', postSchema);
                const posts = await Post.find();
                const numPosts = posts.length;

                should.not.equal(numPosts, 0);

                conn.disconnect;
            }
        })
    })
})


