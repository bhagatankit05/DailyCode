const express = require('express');

const userModel = require('./models/user');
const postModel = require('./models/post');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/create', (req, res) => {
    res.send("Create kiya");
});

app.listen(3000)