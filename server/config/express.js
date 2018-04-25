const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('../routes');
const errorHandlers = require('../handlers/errorHandlers');

module.exports = function expressApp(app, config) {

  const env = process.env.NODE_ENV || 'development';

  app.use(cors());

  // Takes the raw requests and turns them into usable properties on req.body
  app.use(bodyParser.json());
  
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  //application routes
  app.use(routes);

  //If no route matches
  app.use(errorHandlers.notFound);

  //development error handler
  if (env === 'development') {
    app.use(errorHandlers.developmentErrors);
  }

  //production error handler
  app.use(errorHandlers.productionErrors);

};