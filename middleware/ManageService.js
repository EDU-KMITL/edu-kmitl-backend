const UserService = require('./UserService')
const { User } = require('./../models')


const ManageService = async function (req, res) {

    userService = new UserService()

    let uid = userService.getUid();

    let affectedRows = await User.findOne( { where: { id: uid } }).then((res) => { return res })
    if(affectedRows.role == "TEACHER"){
        next()
    }else{
        return res.status(200).json({ success: false, message: 'ไม่มีสิทธิ์เข้าถึง' });
    }
}
module.exports = ManageService;