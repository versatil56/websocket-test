const PORT = process.env.PORT || 8010;


console.log("Server started");
var Msg = '';
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({port: PORT});
    wss.on('connection', function(ws) {
        ws.on('message', function(message) {
        console.log('Received from client: %s', message);
        ws.send(JSON.stringify([{
            status: "Accepted",
            currentTime: Date.now().toLocaleString(),
            interval: 1
        }]));
    });
 });
