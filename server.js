const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.js');
const dataRouter = require('./routes/data.js');
const flash = require('connect-flash');
const server = require('http').createServer(); 

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser : true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('MongoDB database connection established successfully')
})

app.use(cors());
app.use(flash());

app.use(express.json());

app.use(userRouter);
app.use(dataRouter);


 
server.listen(port, ()=> {
    console.log('server is running on port :', port);
})