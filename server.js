const express = require("express");
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
require('./dbConnection');
const router = require("./routers/router");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/cat', router);

app.get('/', (req, res) => {
    res.render('index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('hello', 'Hello User');
    
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);
});

http.listen(port, () => {
    console.log('Express server started on port ' + port);
});
