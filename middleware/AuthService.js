const cookie = require('cookie');
const AuthService = function (req, res, next) {
    if (req.headers.authorization && ignoreCase.equals(req.headers.authorization.split(' ')[0], 'bearer')) {

        // verifies secret and checks exp
        JWT.verify(req.headers.authorization.split(' ')[1], config.jwt_secret, function (err, decoded) {
            if (err) {
                return res.status(200).json({ success: false, message: 'Failed_to_authenticate_token' });
            } else {
                req.setHeader('Set-Cookie', cookie.serialize('uuid', String(decoded.user_id), {
                    httpOnly: true,
                    maxAge: 60 * 60 * 24 * 7 // 1 week
                  }))
                next()
            }
        })
        } else {
            return res.status(200).json({ success: false, message: 'Failed_to_authenticate_token_send_header' });
        }
}
module.exports = AuthService;