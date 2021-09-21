const HomePage = (req, res) => {
    res.render('index');
};

const AboutPage = (req, res) => {
    res.render('about');
};

const FeedbackPage = (req, res) => {
    res.render('feedback');
};

module.exports.home = HomePage;
module.exports.about = AboutPage;
module.exports.feedback = FeedbackPage;