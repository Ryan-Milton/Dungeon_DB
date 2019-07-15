'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const port = 3000;
// The following options are to negate warnings in the console and creates a smoother connection
const options = {
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
  
// Connecting to the Database with the help of Mongoose
// try {
//     mongoose.connect(process.env.MONGODB_URI, options);
//     let db = mongoose.connection;
//     db.on('error', console.error.bind(console, '***CONNECTION ERROR***'));
//     db.once('open', () => {
//       console.log(`Connected to MongoDB server.`);
//     });
//   } catch(e) {
//     console.error(e);
//   }
  
  // Requiring the file that starts the Server
  try {
    require('./src/app.js').start(process.env.PORT || port);
  } catch(e) {
    console.error(e);
  }