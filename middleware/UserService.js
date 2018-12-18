
class UserService {
    getUid(req){
        let uid = req.user_id 
        return uid
    }
}

module.exports = UserService
