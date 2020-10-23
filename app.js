'use strict';

// [START gae_flex_quickstart]
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!').end();
});

app.get('/color', (req, res) => {
    res.status(200).send('Red, orange,yellow, green').end();
  });

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;