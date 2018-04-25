const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const config = require('./config/config');

const db = require('./models');
require('./config/express')(app, config);
const env = process.env.NODE_ENV || 'development';

console.log(env);

db.sequelize
  .sync({
    force: false
  })
  .then(() => {
    app.listen(config.port, () => {
      if (env === 'development') {
        console.log(`Express listening on port ${config.port}`);
      }
    });
  })
  .catch(err => {
    console.log(`Database connection failed`);
    console.log(err.message);
  });