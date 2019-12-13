const express = require('express');
const helmet = require('helmet');
const db = require('./data/db-config.js');

const server = express();
server.use(helmet());

module.exports = server;
