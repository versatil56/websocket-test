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
            currentTime: "2021-09-13T15:37:08+01:00",
            interval: 300
        }]));
    });
 });
