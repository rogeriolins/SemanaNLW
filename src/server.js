const express = require("express");
const server = express();

// Conecta ao banco
const db = require("./database/db");

/* Adicionando pastas publicas */
server.use(express.static("public"));

/* Habilitar o uso do req.body nas requisições do express */
server.use(express.urlencoded({ extended: true }));

/* Usando template engine com nunjucks pra turbinar os htmls com esteroides */
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

/* Configurando rotas da aplicação */

/* req: Requisição */
/* res: Resposta */
/* index.html */
server.get("/", (req, res) => {
  /* Rota sem Template Engine */
  /*   res.sendFile(__dirname + "/views/index.html"); */
  /* Rota com Template Engine */
  return res.render("index.html");
});

/* create-point */
server.get("/create", (req, res) => {
  /* Rota sem Template Engine */
  /* res.sendFile(__dirname + "/views/create-point.html"); */
  /* Rota com Template Engine */

  // req.query: Query String da url
  console.log(req.query);

  return res.render("create-point.html");
});

server.post("/savepoint", (req, res) => {
  // return res.send("Ok");
  /* Habilitar o uso no express de requisições .body */
  const query = `
     INSERT INTO places( image, name, address, address2, state, city, items )
        VALUES ( ?, ?, ?, ?, ?, ?, ? )
    `;
  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items,
  ];

  function afterInsertData(err) {
    if (err) {
      return res.send("Erro no cadastro!");
    }
    return res.render("create-point.html", { saved: true });
  }

  db.run(query, values, afterInsertData);
});

/* search-results */
server.get("/search", (req, res) => {
  /* Rota sem Template Engine */
  /* res.sendFile(__dirname + "/views/search-results.html"); */
  /* Rota com Template Engine */

  const search = req.query.search;

  if (search == "") {
    /* Pesquisa vazia */
    return res.render("search-results.html", { total: 0 });
  }

  /* Buscando os dados */
  db.all(`SELECT * FROM places where city LIKE '%${search}%'`, function (
    err,
    rows
  ) {
    if (err) {
      return console.log(err);
    }
    // console.log("Segue registros: ");
    // console.log(rows);

    const total = rows.length;

    /* Renderiza a pagina com os dados do banco */
    return res.render("search-results.html", { places: rows, total: total });
  });
});

/* Ativando o servidor na porta 3000 */
server.listen(3000);
