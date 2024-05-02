const express = require('express');

const app = express();
const port = 8080;
const host = '0.0.0.0';

const socketUrlDebug = 'ws://34.41.210.227:8080'
const socketUrlProd = 'ws://34.91.59.59:8080'

app.get('/', (req, res) => {
    res.send(socketUrlDebug);
});

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});