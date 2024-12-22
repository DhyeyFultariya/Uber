const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');  // to allow cross-origin requests
const app = express();

const connecToDb = require('./db/db'); // Connect to MongoDB
const userRoutes = require('./routes/user.routes');

connecToDb();

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', userRoutes); 



module.exports = app;