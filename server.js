// server/server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST'] }
});

const messageHistory = [];

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  socket.emit('history', messageHistory);

  socket.on('message', (payload) => {
    const msg = {
      name: payload.name || 'Anonymous',
      text: payload.text || '',
      time: payload.time || new Date().toLocaleTimeString()
    };
    messageHistory.push(msg);
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

app.get('/', (req, res) => res.send('Socket.io Chat Server Running'));

const PORT = 4000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
