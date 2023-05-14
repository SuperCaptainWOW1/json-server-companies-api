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

server.listen(port);
