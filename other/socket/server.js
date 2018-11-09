var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const sockets = {};
const mapNameToSocketId = {};
const mapSocketIdToName = {};

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log(' > First Connection from ', socket.id);
  sockets[socket.id] = socket;

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  socket.on('registerClientInServer', function(name) {
    console.log(' > add client :', name);
    mapNameToSocketId[name] = socket.id;
    mapSocketIdToName[socket.id] = name;
  });

  socket.on('sendOffer', function(msg) {
    const { offer, partner } = msg;

    const receiverSocketId = mapNameToSocketId[partner];
    const receiverSocket = sockets[receiverSocketId];
    const senderName = mapSocketIdToName[socket.id];

    console.log(` > Offer from ${senderName} -> ${partner}`);

    if (receiverSocket) {
      receiverSocket.emit('onOffer', { offer, senderName });
    } else {
    	console.log('no socket found for ', partner)
		}
  });

  socket.on('sendAnswer', function(msg) {
		const { answer, senderName } = msg;
    const senderSocketId = mapNameToSocketId[senderName];
    const senderSocket = sockets[senderSocketId];

    console.log(` > answer back to ${senderName}`);

    senderSocket.emit('onAnswer', { answer });
  });

	socket.on('sendCandidate', (msg) => {
		const { candidate, partner } = msg;

		const receiverSocketId = mapNameToSocketId[partner];
		const receiverSocket = sockets[receiverSocketId];
		const senderName = mapSocketIdToName[socket.id];

		console.log(` > Candidate from ${senderName} -> ${partner}`);

		if (receiverSocket) {
			receiverSocket.emit('onCandidate', { candidate, senderName });
		}
	})

});


http.listen(3000, function() {
  console.log('listening on *:3000');
});
