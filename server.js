const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.static('./public'));
app.use(cors());

app.get('/', (req, res) => {

    res.end();
    //res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))