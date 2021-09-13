const PORT = process.env.PORT || 8010;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

console.log("Server started");
var Msg = '';
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({port: PORT});
    wss.on('connection', function(ws) {
        ws.on('message', function(message) {
        console.log('Received from client: %s', message);
        ws.send('Server received from client: ' + message);
    });
 });
