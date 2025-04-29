const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let messages = [];

// Endpoint to get messages
app.get('/messages', (req, res) => {
    res.json(messages);
});

// Endpoint to send a message
app.post('/messages', (req, res) => {
    const { username, text } = req.body;
    const message = { username, text, timestamp: new Date() };
    messages.push(message);
    res.status(201).json(message);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
