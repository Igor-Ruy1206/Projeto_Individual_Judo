var database = require("../database/config");

function iniciarAvaliacao(fkMenor) {
    console.log("Model: Iniciando avaliação para o menor " + fkMenor);
    var instrucao = `
        INSERT INTO avaliacao (fkMenor, dataAvaliacao) VALUES (${fkMenor}, NOW());
    `;
    return database.executar(instrucao);
}

function salvarRespostas(idAvaliacao, listaRespostas) {
    console.log("Model: Salvando respostas para avaliação " + idAvaliacao);
    
    var instrucao = `
        INSERT INTO avaliacaoResposta (fkAvaliacao, fkPergunta, opcaoResposta) VALUES 
    `;

    for (let i = 0; i < listaRespostas.length; i++) {
        var item = listaRespostas[i];
        instrucao += `(${idAvaliacao}, ${item.fkPergunta}, ${item.nota})`;
        
        if (i < listaRespostas.length - 1) {
            instrucao += ", ";
        } else {
            instrucao += ";";
        }
    }
    return database.executar(instrucao);
}

function buscarDadosDashboard(idMenor) {
    var instrucaoSql = `
        SELECT 
            p.categoria,
            ROUND(AVG(ar.opcaoResposta), 1) as media_pontos
        FROM avaliacao a
        JOIN avaliacaoResposta ar ON a.idAvaliacao = ar.fkAvaliacao
        JOIN pergunta p ON ar.fkPergunta = p.idPergunta
        WHERE a.idAvaliacao = (
            SELECT idAvaliacao 
            FROM avaliacao 
            WHERE fkMenor = ${idMenor} 
            ORDER BY dataAvaliacao DESC 
            LIMIT 1
        )
        GROUP BY p.categoria;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    iniciarAvaliacao,
    salvarRespostas,
    buscarDadosDashboard
};