const PORT = process.env.PORT || 8010;

wss.getUniqueID = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4();
};

console.log("Server started");
var Msg = '';
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({port: PORT});
    wss.on('connection', function(ws) {
        ws.on('message', function(message) {
        console.log('Received from client: %s', message);
        ws.send(JSON.stringify([3,"1",{
            status: "Accepted",
            currentTime: new Date().toISOString(),
            interval: 300
        }]));
        ws.id = wss.getUniqueID();

        wss.clients.forEach(function each(client) {
            console.log('Client.ID: ' + client.id);
            console.log('Client:' + client.url);
        });
    });
 });
