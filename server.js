if(process.env.NODE_ENV === 'production'){
    require('dotenv').config();
}
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(express.static('./public'));
app.use(cors());

var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = process.env.SERVERONE || 'http://localhost:3001',
    ServerTwo = process.env.SERVERTWO || 'http://localhost:3002',
    ServerThree = process.env.SERVERTHREE || 'http://localhost:3003',
    ServerFour = process.env.SERVERFOUR || 'http://localhost:3004';
 
app.all("/Comments*", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});

app.all("/projects*", function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: ServerTwo});
});

app.all("/pledges*", function(req, res) {
    console.log('redirecting to Server3');
    apiProxy.web(req, res, {target: ServerThree});
});

app.all("/related*", function(req, res) {
    console.log('redirecting to Server4');
    apiProxy.web(req, res, {target: ServerFour});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))