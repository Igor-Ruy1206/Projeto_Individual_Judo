var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    if (!req.body) {
        return res.status(400).send("ERRO: O corpo da requisição (req.body) está vazio/undefined. Verifique o app.js e o routes.");
    }

    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var dtNasc = req.body.dtNascServer; 
    
    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); 

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                                if (resultadoAutenticar.length == 1) {
                                    console.log(resultadoAutenticar);

                                    res.json({
                                        id: resultadoAutenticar[0].idCadastro,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nome
                                    });
                                } 
                            
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var dtNasc = req.body.dtNascServer;


    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

usuarioModel.cadastrar(nome, email, senha, dtNasc)
            .then(function (resultado) {
                
                // PEGA O ID DO PAI QUE ACABOU DE SER CRIADO
                var idNovoResponsavel = resultado.insertId;

                // 2. Cadastra o Filho Automaticamente
                usuarioModel.cadastrarMenorAutomatico(idNovoResponsavel)
                    .then(function (resultadoMenor) {
                        
                        // Só agora devolve sucesso, com tudo pronto!
                        res.json(resultado);
                        
                    }).catch(function (erroMenor) {
                        console.log(erroMenor);
                        res.status(500).json(erroMenor.sqlMessage);
                    });

            }).catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    autenticar,
    cadastrar
}