const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const React = require("react");
const PORT = process.env.PORT || 3000;
const DashBoard = require('./public/DashBoard');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Login credentials
const validCredentials = {
    username: 'admin',
    password: '1234'
};

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === validCredentials.username && password === validCredentials.password) {
        res.redirect('/dashboard');
    } else {
        res.send('Login failed. Please check your username and password.');
    }
});

const result = DashBoard();
app.get('/dashboard', (req, res) => {
    res.send(result);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});