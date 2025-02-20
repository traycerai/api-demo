const knex = require('knex');
const config = require('./knexfile');

// Initialize knex with development configuration
const db = knex(config.development);

module.exports = db;