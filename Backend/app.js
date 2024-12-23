const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');  // to allow cross-origin requests
const app = express();

const cookieParser = require('cookie-parser');

const connecToDb = require('./db/db'); // Connect to MongoDB

// Routes 
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

connecToDb();

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', userRoutes); 

app.use('/captains', captainRoutes); 



module.exports = app;