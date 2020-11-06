const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
// will allow us to parse json 
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,
    useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection established successfully");})

// import
const userRouter = require('./routes/user');
const mapRouter = require('./routes/map');

// to use file
app.use('/user', userRouter);
app.use('/map', mapRouter);

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
});