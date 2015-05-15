import utils from './modules/scraper';
var express = require('express');

const api = express()
  .get('/books', (req, res) => {
    utils.scrapeNYT('http://www.nytimes.com/best-sellers-books/').then((data) => {
      res.send(data);
    });
  });

const app = express()
  .all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    next()
  });

app.use('/api', api)
  .listen(3001)