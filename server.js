const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/ping', function (req, res) {
    return res.send('pong');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/targetsumgame', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})


app.listen(4000, () => console.log("NodeJs server started at port 4000."));
