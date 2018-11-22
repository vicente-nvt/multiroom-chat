class HomeController {
    getHomePage(req, res){
        res.render("index", {erros:{}});
    }
}

module.exports = HomeController;