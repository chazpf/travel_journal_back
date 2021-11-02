// Dependencies
const express = require('express');
const mongoose = require('mongoose')
const app = express();

// Environment Variables
const PORT = 3000;

// Middleware
app.use(express.json());

// Routers
const logsController = require('./controllers/travel-logs.js');
app.use('/travel-logs', logsController);

// Database Connection
mongoose.connect('mongodb://localhost:27017/travel')
mongoose.connection.once('open', ()=>{
  console.log('connected to mongod...');
});

// Server Listener
app.listen(PORT, () => {
  console.log('app is running on port: ', PORT);
});
