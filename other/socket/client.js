const io = require('socket.io-client');

const socket = io('http://localhost:3000', {});
try {
	socket.emit('add', 'hiiii')
} catch (e) {
	console.log(e)
}
