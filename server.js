const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
// const fs = require("fs");
// const db = JSON.parse(fs.readFileSync("db.json"));
// const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3500;

server.use(middlewares);
server.use(router);

server.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

server.listen(port);
