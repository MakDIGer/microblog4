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
            }
        })
    })
})


