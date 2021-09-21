const config = require('config');
const mongoose = require('mongoose');
const chai = require('chai');
const assert = chai.assert;
const dbUrl = config.get('db');

describe('DB', () => {
    describe('has', () => {
        it('categories', () => {
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

                const categories = await Category.find();
                const numCategories = categories.length;

                assert.equal(numCategories, 5, 'Num of the categories is equal 5');
            }
        })
    })
})


