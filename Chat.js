import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:4000';

export default function Chat() {
  const [socket, setSocket] = useState(null);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesRef = useRef(null);

  useEffect(() => {
    const s = io(SOCKET_URL);
    setSocket(s);

    s.on('history', (history) => setMessages(history));
    s.on('message', (msg) => setMessages((prev) => [...prev, msg]));

    return () => s.disconnect();
  }, []);

  const sendMessage = () => {
    if (!text.trim()) return;
    const msg = { name, text, time: new Date().toLocaleTimeString() };
    socket.emit('message', msg);
    setText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chat-box">
      <h2>Real-Time Chat</h2>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="messages" ref={messagesRef}>
        {messages.map((m, i) => (
          <div key={i}>
            <b>{m.name}</b> [{m.time}]: {m.text}
          </div>
        ))}
      </div>

      <div className="input-row">
        <input
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
