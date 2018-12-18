const cookie = require('cookie');
class UserService {
    getUid(req){
        let cookies = cookie.parse(req.headers.cookie || '');
        let uid = cookies.uid;
        return uid
    }
}

module.exports = UserService
