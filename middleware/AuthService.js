const cookie = require('cookie');
const JWT = require('jsonwebtoken')
const ignoreCase = require('ignore-case')
const env = process.env.NODE_ENV || 'development';
const config = require('./../config/config.json')[env];
const AuthService = function (req, res, next) {
    if (req.headers.authorization && ignoreCase.equals(req.headers.authorization.split(' ')[0], 'bearer')) {

        // verifies secret and checks exp
        JWT.verify(req.headers.authorization.split(' ')[1], config.jwt_secret, async function (err, decoded) {
            if (err) {
                return res.status(200).json({ success: false, message: 'Failed_to_authenticate_token' });
            } else {
               await res.setHeader('Set-Cookie', cookie.serialize('uid', String(decoded.user_id), {
                    httpOnly: false,
                    maxAge: 60 * 60 * 24 * 7 // 1 week
                  }))
                req.user_id = decoded.user_id
                next()
            }
        })
        } else {
            return res.status(200).json({ success: false, message: 'Failed_to_authenticate_token_send_header' });
        }
}
module.exports = AuthService;