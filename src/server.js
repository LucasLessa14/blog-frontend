require('dotenv/config');

const port = process.env.PORT || 8008;
const express = require('express');
const path = require('path');
const app = express();

const routes = require('./routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(port, () => console.log(`Server rodando na porta ${ port }`));