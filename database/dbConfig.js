const knex = require('knex');
const config = require('../knexfile.js');

//if it can not find testing (DB_ENV) then use development
const environment = process.env.DB_ENV || 'development';

module.exports = knex(config[environment]);