const MainController = (req, res, next) => {
    res.render('index', { title: 'Express' });
}

module.exports = MainController;