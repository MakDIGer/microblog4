const Category = require('./../models/Category');
const Post = require('./../models/Post');

const HomePage = async (req, res) => {
    const posts = await Post.find().sort('slug').exec();
    const categories = await Category.find().sort('slug').exec();

    res.render('index', { categories, posts });
};

const AboutPage = async (req, res) => {
    const categories = await Category.find().sort('slug').exec();
    res.render('about', { categories });
};

const FeedbackPage = async (req, res) => {
    const categories = await Category.find().sort('slug').exec();
    res.render('feedback', { categories });
};

module.exports.home = HomePage;
module.exports.about = AboutPage;
module.exports.feedback = FeedbackPage;