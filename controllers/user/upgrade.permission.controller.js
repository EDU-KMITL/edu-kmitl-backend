/**
 * Created by MisterNT on 5/1/2017.
 */
const UserService = require('./../../middleware/UserService')
const { User } = require('./../../models')


const UpgradePermission = async function (req, res) {

 

    let uid = req.user_id 


    let affectedRows = await User.update({ role: 'TEACHER' }, { where: { id: uid } }).then((res) => { return res })

    return res.status(200).json({
        success: true,
        data: affectedRows,
        message: 'ยืนยันสิทธิเรียบร้อย'
    });
}
module.exports = UpgradePermission;
