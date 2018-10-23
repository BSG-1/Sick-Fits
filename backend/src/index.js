// let's go - starts up the node server!
require('dotenv').config({ path: 'variables.env' });
const createServer = require('createServer');
const db = require('./db');

const server = createServer();

//TODO Use express middleware to handle cookies (JWT)

//TODO Use express middleware to populate current user