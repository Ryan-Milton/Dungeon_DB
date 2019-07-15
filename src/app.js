'use strict'; 

// Dependencies

const express = require('express');
let cors = require('cors');
// const userRouter = require('./routes/index.js'); // for later use when creating users
// const authRouter = require('./routes/auth-router.js'); // for later use with user login authentication

// Start Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // json parser
// app.use(authRouter); // for later use with user login authentication
// app.use(userRouter); // for later use when creating users

// "Creating" the server
let server;

// "Starting" the server
module.exports = {
    app,
    start: (port) => {
        server = app.listen(port, () => console.log(`Listening on port ${port}`));
    },
    stop: () => {
        server.close( () => {
            console.log('The server session has ended.');
        });
    },
};