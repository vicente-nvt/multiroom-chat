var ChatController = require("../controllers/chat");

module.exports = (application) => {

    var chatController = new ChatController();

    application.post('/entrarNoChat', (req, res) => {
        chatController.entrarNoChat(req, res);
    });

    application.post('/chat', (req, res) => {
        res.render('chat');
    });
}