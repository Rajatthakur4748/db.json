const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Ensure 'db.json' exists in the same folder
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;

server.use(cors()); // Enable CORS if needed
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});