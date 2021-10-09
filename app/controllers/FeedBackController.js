const Category = require('./../models/Category');

const showPage = async (req, res) => {
    const categories = await Category.find().sort('slug').exec();
    res.render('feedback', { categories });
};

module.exports.show = showPage;