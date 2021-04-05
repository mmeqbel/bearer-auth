'use strict';

// Start up DB Server
const mongoose = require('mongoose');
require('dotenv').config();
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options)
.then(()=>{
// Start the web server
require('./src/server.js').startup(process.env.PORT);
}).catch((e) => {
    console.log('__CONNECTION ERROR__', e.message);
});

