const http = require('http');
const express = require('express');
var cors = require('cors');

// data
const itemsRouter = require('./server/router');

const app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:8080'}));
app.use('/router', itemsRouter);

app.use('/', function(req, res) {
    res.send(res);
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);