const jsonServer = require("json-server");
const server = jsonServer.create();
// const router = jsonServer.router("db.json");
const fs = require("fs");
const path = require("node:path");
const db = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json")));
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3500;

server.use(middlewares);
server.use(router);

server.listen(port);
