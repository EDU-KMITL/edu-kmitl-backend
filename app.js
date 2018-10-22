"use strict";
const express = require('express')
const path   = require('path');
const bodyParser = require('body-parser')
const routes = require('./routes')


//using let
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

// using arrow syntax
app.use((req, res, next) => {
    return res.json('404_NOT_FOUND')
});

if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json('error', {
            message: err.message,
            error: err
        });
    });
}

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;