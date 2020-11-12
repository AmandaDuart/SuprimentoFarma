const sqlite  = require('sqlite3') /*Importando o pacote*/

const db = new sqlite.Database('db.sqlite' ) /* Criando um novo objeto*/

const criacaoDatabase = 'CREATE TABLE IF NOT EXISTS TAREFAS(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, codigo VARCHAR(255), titulo VARCHAR(255), descricao VARCHAR(255), preco VARCHAR(255), quantidade VARCHAR(255), entrada VARCHAR(255), saida VARCHAR(255),vencimento VARCHAR(255),tipo VARCHAR(255))'

db.run(criacaoDatabase);

module.exports = db