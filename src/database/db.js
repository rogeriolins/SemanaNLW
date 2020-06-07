/* Importando a dependencia do sqlite3 */
const sqlite3 = require("sqlite3").verbose();

/* Criar o objeto que irá fazer operações no banco de dados */
const db = new sqlite3.Database("./src/database/database.db");

//db.serialize(() => {
/* Gestão com comandos SQL */
/* 1. Criar uma tabela */
// db.run(`
//   CREATE TABLE IF NOT EXISTS places (
//     id       INTEGER PRIMARY KEY AUTOINCREMENT,
//     image    TEXT,
//     name     TEXT,
//     address  TEXT,
//     address2 TEXT,
//     state    TEXT,
//     city     TEXT,
//     items    TEXT
//   );
// `);
// /* 2. Inserir dados na tabela */
// const query = `
// INSERT INTO places( image, name, address, address2, state, city, items )
//        VALUES ( ?, ?, ?, ?, ?, ?, ? )
// `;
// const values = [
//   "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
//   "Colectoria",
//   "Guilherme Gemballa, Jardim América",
//   "Número 260",
//   "Santa Catarina",
//   "Rio do Sul",
//   "Residuos Eletrônicos, Lampadas",
// ];
// const values2 = [
//   "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
//   "Papersider",
//   "Guilherme Gemballa, Jardim América",
//   "Número 631",
//   "Santa Catarina",
//   "Rio das Onças",
//   "Papeis e Papelão",
// ];
// function afterInsertData(err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(`Cadastrado com sucesso`);
//   console.log(this);
// }
// /* Executa a inclusão */
// //db.run(query, values2, afterInsertData);
// /* Executa a consulta */
// db.all(`SELECT name FROM places`, function (err, rows) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("Segue registros:");
//   console.log(rows);
// });
/* 4. Deletar um dado na tabela */
//  db.run(`DELETE FROM places WHERE id = ?`, [1], function (err) {
//    if (err) {
//      return console.log(err);
//    }
//    console.log("Registro deletado com sucesso");
//  });
//});

module.exports = db;
