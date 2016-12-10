const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http)
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('chat message', (msg) => {
		console.log('message:' + msg);
		io.emit('chat message', msg);
	})
	socket.on('disconnect', () => {
		console.log('user disconnect');
	})
})
http.listen(3010, () => {
	console.log('listen 3000');
})
