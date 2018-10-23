// let's go - starts up the node server!
require('dotenv').config({ path: 'variables.env' });
const createServer = require('createServer');
const db = require('./db');

const server = createServer();

//TODO Use express middleware to handle cookies (JWT)

//TODO Use express middleware to populate current user

sersver.start({
    //only be visited from approved urls
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    },
}, deets => {
    console.log(`Sever is now running on port http:/localhost:${deets.port}`);
});