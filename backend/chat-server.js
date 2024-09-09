const WebSocket = require('ws');
const axios = require('axios')

const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    
    console.log(`Received: ${message}`);
    ws.send(`Echo Message: ${message}`);
    try{
    axios.post(
      'http://localhost:1337/api/messages',
      {
        data: {
          message_content: message.toString(),
          timestamp: new Date().toISOString(),
        }
      },
    )} catch (e){
      ws.send('Error processing your message', e);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server running on ws://localhost:8081');

