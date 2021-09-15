const PORT = process.env.PORT || 8010;


console.log("Server started");
var Msg = '';
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({port: PORT});
    wss.on('connection', function(ws, request) {
        ws.on('message', function(message) {
        console.log(JSON.stringify(request))
        console.log("Clients %s:", JSON.stringify(wss.clients));
        console.log('Received from client: %s', message);
        ws.send(JSON.stringify([3,"1",{
            status: "Accepted",
            currentTime: new Date().toISOString(),
            interval: 300
        }]));
    });
 });
