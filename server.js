'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const messages = require('./routes/classifieds');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));
//app.use(express.static(path.join(__dirname, '/../', 'node_modules')))
app.use('/classifieds',messages);
app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/js'));
app.use('/angular', express.static('node_modules/angular'));
app.use('/angular-ui-router', express.static('node_modules/angular-ui-router/release'));

app.get('/', (req, res, next)=>{
  console.log('display');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
