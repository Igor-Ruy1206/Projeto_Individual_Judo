CREATE DATABASE judo;

USE judo;

CREATE TABLE responsavel (
idCadastro INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
email VARCHAR(100),
senha VARCHAR(20),
dataNascimento DATE
);


CREATE TABLE menor (
idMenor INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
dataNascimento DATE,
fkResponsavel INT,
CONSTRAINT fkMenorResponsavel FOREIGN KEY (fkResponsavel) REFERENCES responsavel(idCadastro)
);


CREATE TABLE avaliacao (
idAvaliacao INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
dataAvaliacao DATE,
fkMenor INT NOT NULL,
CONSTRAINT fkAvaliacaoMenor FOREIGN KEY (fkMenor) REFERENCES menor(idMenor)
);


CREATE TABLE pergunta (
idPergunta INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
textoPergunta VARCHAR(255),
categoria VARCHAR(45)
);


CREATE TABLE avaliacaoResposta (
fkAvaliacao INT NOT NULL,
fkPergunta INT NOT NULL,
opcaoResposta VARCHAR(255),
PRIMARY KEY (fkAvaliacao, fkPergunta),
CONSTRAINT fkRespostaAvaliacao FOREIGN KEY (fkAvaliacao) REFERENCES avaliacao(idAvaliacao),
CONSTRAINT fkRespostaPergunta FOREIGN KEY (fkPergunta) REFERENCES pergunta(idPergunta)
);