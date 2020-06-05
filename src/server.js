const express = require("express");
const server = express();

/* Adicionando pastas publicas */
server.use(express.static("public"));

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
  return res.render("create-point.html");
});

/* search-results */
server.get("/search", (req, res) => {
  /* Rota sem Template Engine */
  /* res.sendFile(__dirname + "/views/search-results.html"); */
  /* Rota com Template Engine */
  return res.render("search-results.html");
});

/* Ativando o servidor na porta 3000 */
server.listen(3000);
