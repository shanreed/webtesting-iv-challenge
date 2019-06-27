const express = require('express');

const Family = require('../family/family-model.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json("API RUNNING");
});

server.get('/family', (req, res) => {
  Family.getAll()
    .then(members => {
      res.status(200).json(members);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;