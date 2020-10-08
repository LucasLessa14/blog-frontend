require('dotenv/config');

const express = require('express');
const path = require('path');
const app = express();

const routes = require('./routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(process.env.PORT || 8008, () => {
    console.log("Server rodando na porta " + process.env.PORT);
})