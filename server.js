const express = require('express');
const mongoose = require('mongoose');
const app = express();

const db = require('./config/keys').mongoURI;

//Connect to db
mongoose
   .connect(db)
   .then(() => console.log('MongoDB Connected'))
   .catch(err => console.log(err));

//Lets write our first route
app.get('/', (req, res) => res.send('Hello!'));

const port = process.env.PORT || 6300;
app.listen(port, () => console.log(`Server running on port ${port}`));