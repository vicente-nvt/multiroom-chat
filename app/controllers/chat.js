class ChatController {

    entrarNoChat(req, res){
        var apelidoDoUsuario = req.body.apelido;
        
        req.assert("apelido", "O nome ou apelido deve ser informado").notEmpty();
        req.assert("apelido", "O nome ou apelido deve ter entre 3 e 15 caracteres").len(3, 15);
        
        var erros = req.validationErrors();

        if (erros){
            res.render("index", {erros: erros});
            return;
        }

        res.render("chat");
    }
}

module.exports = ChatController;