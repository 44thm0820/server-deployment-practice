'use strict';

const app = require('./server/app.js'); //modularized into server/app.js

const PORT = process.env.PORT || 3000;// HEROKU LOOKS FOR PORT environment variable so make sure it's included

app.listen(PORT, () => {
  console.log('Server listening');
});


