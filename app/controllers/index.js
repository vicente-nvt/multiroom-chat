class HomeController {
    getHomePage(req, res){
        res.render("index", {validacao:{}});
    }
}

module.exports = HomeController;