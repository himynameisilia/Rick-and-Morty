const http = require('http');
const app = require('./app');
const dotenv = require("dotenv");
const port = process.env.PORT || 3000;
const server = http.createServer(app);
dotenv.config()

server.listen(port, () => {
  console.log(`Started on ${port}`)
});
