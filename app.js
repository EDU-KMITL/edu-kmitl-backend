"use strict";
const express = require('express')
const path   = require('path');
const bodyParser = require('body-parser')
const routes = require('./routes')
const cors = require('cors')

//using let
let app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//debug
app.use(bodyParser.urlencoded({ extended: true }));

//route
app.use('/apis/', routes);

// using arrow syntax
app.use((req, res, next) => {
    return res.json('404_NOT_FOUND')
});

if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(500).json({  message: err.message , error: err});
    });
}

app.use((err, req, res, next) => {
    res.status(500).json({  message: err.message , error: err});
});


module.exports = app;