/**
 * Created by MisterNT on 5/1/2017.
 */
const UserService = require('./../../middleware/UserService')
const cookie = require('cookie');
const { User } = require('./../../models')


const UpgradePermission = async function (req, res) {

    userService = new UserService()

    let uid = userService.getUid(req);

    let affectedRows = await User.update({ role: 'TEACHER' }, { where: { id: uid } }).then((res) => { return res })

    return res.status(200).json({
        success: true,
        data: affectedRows,
        message: 'ยืนยันสิทธิ์เรียบร้อย'
    });
}
module.exports = UpgradePermission;
