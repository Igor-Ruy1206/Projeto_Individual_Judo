CREATE DATABASE judo;

USE judo;

CREATE TABLE responsavel (
    idcadastro INT NOT NULL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(20)
);

CREATE TABLE menor (
    idMenor INT NOT NULL PRIMARY KEY ,
    nome VARCHAR(45),
    idade INT,
    fkResponsavel INT,
    CONSTRAINT fkResponsavelMenor FOREIGN KEY (fkResponsavel) REFERENCES responsavel (idcadastro)
);


CREATE TABLE formulario (
    idForm INT NOT NULL PRIMARY KEY ,
    perguntas VARCHAR(255)
);


CREATE TABLE respostas (
    usuario_idcadastro INT NOT NULL,
    quizz_idquizz INT NOT NULL,
    respostasCertas VARCHAR(255),
    respostasErradas VARCHAR(255),
    respostasAcompanhamento VARCHAR(255),
    PRIMARY KEY (usuario_idcadastro, quizz_idquizz),
    CONSTRAINT fkUsuarioRespostas FOREIGN KEY (usuario_idcadastro) REFERENCES responsavel (idcadastro),
    CONSTRAINT fkQuizzRespostas FOREIGN KEY (quizz_idquizz) REFERENCES formulario (idForm)
);