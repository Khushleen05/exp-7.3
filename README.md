<img width="1919" height="972" alt="Screenshot 2025-10-22 214236" src="https://github.com/user-attachments/assets/bd69c430-af7d-4b13-b266-f3ebefb9a8af" />
<img width="1919" height="966" alt="Screenshot 2025-10-22 214228" src="https://github.com/user-attachments/assets/0df209b6-e818-454f-b7ee-8ba0f2b2bd94" />


## 💬 Real-Time Chat Application (Socket.io + React + Express)
## 🚀 Overview
This project is a real-time chat application built using Socket.io, Express.js, and React.js.
It demonstrates how to establish bi-directional WebSocket communication between the frontend and backend, enabling instant message exchange between multiple connected users.
Users can enter their name, send messages, and see updates instantly across all browser windows — no page reloads required!

## 🎯 Objective
Learn how to:

Establish real-time WebSocket connections using Socket.io.

Integrate Express.js (backend) and React (frontend).

Broadcast messages to all connected clients.

Manage connection and disconnection events.

Build a simple and functional real-time chat interface.

## 🏗️ Folder Structure

realtime-chat/
│
├── server.js                # Express + Socket.io backend
├── package.json             # Node.js dependencies for backend
│
├── client/                  # React frontend
│   ├── src/
│   │   ├── App.js           # Main chat component
│   │   ├── index.js         # React entry file
│   │   └── App.css          # Basic UI styling
│   ├── package.json         # Frontend dependencies
│
└── README.md
## ⚙️ Technologies Used
## Backend

Node.js

Express.js

Socket.io

## Frontend

React.js

Axios (optional for API calls if needed)

Socket.io Client

## 🧠 Features
✅ Real-time messaging using WebSocket connections
✅ Connect multiple users simultaneously
✅ Displays all messages instantly to all participants
✅ Basic user identification by name
✅ Handles connect/disconnect events gracefully

## 🧩 Installation & Setup

## ⚙️ Step 1: Setup Backend
Open a terminal in the main folder (realtime-chat).

# Install dependencies:

npm install express socket.io cors
# Run the backend:

node server.js
Server will run on
👉 http://localhost:5000

## 🧩 Step 2: Setup Frontend (React)
Go into the client folder:
cd client
Install React dependencies:

npm install
Start the React app:

npm start
Frontend runs on
👉 http://localhost:3000

🔗 Step 3: Connect Frontend to Backend
In App.js of the React app, ensure your Socket.io client connects to:


const socket = io("http://localhost:5000");
## 💬 How It Works
The Express server hosts Socket.io to manage WebSocket connections.

When a user connects, they’re assigned a unique socket ID.

When someone sends a message:

The client emits a "chat message" event to the server.

The server listens for it and broadcasts the message to all clients.

All connected users instantly see the new message in their chat window.

## 🧪 Example API Events
Event Name          	Direction                                 	      Description
connection	         Server ↔ Client	                           Triggered when a user connects
chat message	       Client → Server → Broadcast	               Sends a new message to all users
disconnect	         Server ↔ Client	                           Triggered when a user leaves

## 🖼️ UI Overview
Text input field for entering messages

“Send” button to emit messages

Message area showing all chat updates in real time

Displays connected user messages with timestamps (optional)

# exp-7.3
This project is a real-time chat application built using Socket.io, Express.js, and React.js. It demonstrates how to establish bi-directional WebSocket communication between the frontend and backend, enabling instant message exchange between multiple connected users. 
