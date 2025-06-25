//form handling and working with the forms

const express = require('express');
const app = express();

app.use(express.json());// to parse JSON bodies to handle JSON requests
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded bodies to handle form submissions