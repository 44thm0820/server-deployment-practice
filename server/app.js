'use strict';

// a framework for handling HTTP requests.
const express = require('express'); //needs to be npm installed first.

// we should only run this once.
const app = express(); // Creates our first 'singleton'

// request and response are objects
// next is a function
app.get('/hello', (request, response, next) => {
  response.send('Hello world');
});

app.get('/data', (request, response, next) => {
  response.send('you requested data successfully!');
});

module.exports = app;