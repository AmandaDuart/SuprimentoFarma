const sqlite  = require('sqlite3') /*Importando o pacote*/

const db = new sqlite.Database('db.sqlite' ) /* Criando um novo objeto*/

const criacaoDatabase = 'CREATE TABLE IF NOT EXISTS TAREFAS(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  titulo VARCHAR(255), descricao VARCHAR(255))'

db.run(criacaoDatabase);

module.exports = db