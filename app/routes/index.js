var HomeController = require('../controllers/index');

module.exports = (application) => {

    var homeController = new HomeController();

    application.get('/', (req, res) => {
        homeController.getHomePage(req, res);
    })
}