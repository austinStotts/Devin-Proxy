const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(express.static('./public'));
app.use(cors());

var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://localhost:3001',
    ServerTwo = 'http://localhost:3002',
    ServerThree = 'http://localhost:3003',
    ServerFour = 'http://localhost:3004';
 
app.all("/Comments*", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});

// app.all("   ", function(req, res) {
//     console.log('redirecting to Server2');
//     apiProxy.web(req, res, {target: ServerTwo});
// });

// app.all("    ", function(req, res) {
//     console.log('redirecting to Server3');
//     apiProxy.web(req, res, {target: ServerThree});
// });

// app.all("    ", function(req, res) {
//     console.log('redirecting to Server4');
//     apiProxy.web(req, res, {target: ServerFour});
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))