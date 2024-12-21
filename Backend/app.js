const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');  // to allow cross-origin requests
const app = express();

app.use(cors()); 


app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;