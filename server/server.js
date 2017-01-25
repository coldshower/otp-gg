const express = require('express');
const morgan = require('morgan');
const path = require('path');
const env = process.env.NODE_ENV;

const app = express();

app.use(morgan('dev'));

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(3000, () => {
  console.log('Listening on port ' + 3000);
});