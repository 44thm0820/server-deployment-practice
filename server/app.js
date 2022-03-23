'use strict';

// a framework for handling HTTP requests.
const express = require('express'); //needs to be npm installed first.

// we should only run this once.
const app = express();

// request and response are objects
// next is a function
app.get('/hello', (request, response, next) => {
  response.send('Hello world');
});

module.exports = app;