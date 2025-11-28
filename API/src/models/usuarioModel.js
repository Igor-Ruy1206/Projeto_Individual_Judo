var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idCadastro, nome, email 
        FROM responsavel 
        WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha, dtNasc) {
    console.log("ACESSEI O USUARIO MODEL function cadastrar():", nome, email, senha, dtNasc);
    
    var instrucaoSql = `
       INSERT INTO responsavel (nome, email, senha, dataNascimento) VALUES ('${nome}', '${email}', '${senha}', '${dtNasc}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarMenorAutomatico(idResponsavel) {
    console.log("ACESSEI O USUARIO MODEL \n function cadastrarMenorAutomatico():", idResponsavel);
    
    var instrucaoSql = `
        INSERT INTO menor (nome, dataNascimento, fkResponsavel) VALUES ('Pequeno Judoca', NOW(), ${idResponsavel});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarMenorAutomatico
};

