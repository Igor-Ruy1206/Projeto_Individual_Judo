var avaliacaoModel = require("../models/avaliacaoModel");

function cadastrar(req, res) {
    var fkMenor = req.body.fkMenor;
    var respostas = req.body.respostas; 

    if (fkMenor == undefined) {
        res.status(400).send("O fkMenor está undefined!");
    } else if (respostas == undefined) {
        res.status(400).send("As respostas estão undefined!");
    } else {
        
        avaliacaoModel.iniciarAvaliacao(fkMenor)
            .then(
                function (resultado) {

                    var idAvaliacaoGerado = resultado.insertId;


                    avaliacaoModel.salvarRespostas(idAvaliacaoGerado, respostas)
                        .then(
                            function (resultadoRespostas) {
                                res.json(resultadoRespostas);
                            }
                        ).catch(
                            function (erro) {
                                console.log(erro);
                                res.status(500).json(erro.sqlMessage);
                            }
                        );
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarUltimaAvaliacao(req, res) {
    var idMenor = req.params.idMenor;

    avaliacaoModel.buscarMetricas(idMenor)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrar,
    buscarUltimaAvaliacao
}