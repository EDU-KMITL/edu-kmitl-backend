const cookie = require('cookie');
const JWT = require('jsonwebtoken')
const ignoreCase = require('ignore-case')
const env = process.env.NODE_ENV || 'development';
const config = require('./../config/config.json')[env];
const AdminService = function (req, res, next) {
        // verifies secret and checks exp
        JWT.verify(req.params.token, config.jwt_secret, function (err, decoded) {
            if (err) {
                return res.status(200).json({ success: false, message: 'Failed_to_authenticate_token' });
            } else {
                req.vdieo_id = decoded.id
                next()
            }
        })
}
module.exports = AdminService;