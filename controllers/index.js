const Connection = require('../models/model')
const post = function (req, res, next) {
    Connection
        .authenticate()
        .then(function (err) {
            console.log('Model has been established successfully.');
            res.json("micro service edu.kmitl.ac.th");
        })
        .catch(function (err) {
            console.log('Unable to connect to the database:', err);
        });




};
module.exports = post;

