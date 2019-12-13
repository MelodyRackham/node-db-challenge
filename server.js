const express = require('express');
const helmet = require('helmet');
const db = require('./data/db-config.js');
const projectsRouter = require('./data/projects-router');

const server = express();
server.use(helmet());

module.exports = server;
