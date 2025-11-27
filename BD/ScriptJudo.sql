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

SELECT * FROM avaliacao;
SELECT * FROM avaliacaoresposta;
SELECT * FROM menor;
SELECT * FROM pergunta;
SELECT * FROM responsavel;

INSERT INTO pergunta (idPergunta, textoPergunta, categoria) VALUES 
(1, 'A criança costuma cumprimentar as pessoas ao chegar e sair dos ambientes?', 'Cortesia'),
(2, 'A criança utiliza palavras como "por favor", "obrigado" e "com licença" no dia a dia?', 'Cortesia'),
(3, 'A criança tenta realizar tarefas novas ou difíceis, mesmo demonstrando insegurança?', 'Coragem'),
(4, 'A criança assume seus erros sem tentar mentir ou esconder o que fez?', 'Coragem'),
(5, 'A criança fala a verdade, mesmo quando sabe que isso pode gerar uma consequência?', 'Honestidade'),
(6, 'Se a criança encontra algo que não é dela, ela demonstra intenção de devolver?', 'Honestidade'),
(7, 'A criança cumpre o que prometeu ou combinou previamente com os pais/responsáveis?', 'Honra'),
(8, 'A criança respeita as regras das brincadeiras e jogos, sem tentar trapacear?', 'Honra'),
(9, 'Ao vencer ou conseguir algo, a criança age sem se gabar excessivamente ou humilhar os outros?', 'Modéstia'),
(10, 'A criança aceita ajuda e reconhece quando não sabe fazer algo sozinha?', 'Modéstia'),
(11, 'A criança ouve com atenção quando pais, professores ou mais velhos estão falando?', 'Respeito'),
(12, 'A criança trata os colegas e familiares sem uso de xingamentos ou agressividade física?', 'Respeito'),
(13, 'A criança consegue se acalmar sozinha após um momento de frustração ou raiva?', 'Autocontrole'),
(14, 'A criança consegue esperar a sua vez em filas ou brincadeiras sem reclamar excessivamente?', 'Autocontrole'),
(15, 'A criança compartilha brinquedos ou lanches com irmãos ou colegas voluntariamente?', 'Amizade'),
(16, 'A criança demonstra preocupação ou tenta ajudar quando vê alguém triste ou machucado?', 'Amizade');


INSERT INTO menor (idMenor, nome, dataNascimento, fkResponsavel) VALUES 
(1, 'Joãozinho Teste', '2015-05-05', 1),
(2, 'Maria Teste', '2015-05-05', 2);



