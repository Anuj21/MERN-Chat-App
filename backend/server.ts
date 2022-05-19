const express = require('express');
const chats = require('./data/data');
const dotenv = require('dotenv');

const app = express();

app.get('/', (req: any, res: any) => {
  res.send('API is running successfully');
});

app.get('/api/chat', (req: any, res: any) => {
  res.send(chats);
});

app.get('/api/chat/:id', (req: any, res: any) => {
  const singleChat = chats.find((chat: any) => chat._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`server started on port ${PORT}`));
