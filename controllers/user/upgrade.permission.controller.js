/**
 * Created by MisterNT on 5/1/2017.
 */

const cookie = require('cookie');
const { User } = require('./../../models')


const UpgradePermission = async function (req, res) {

    let cookies = cookie.parse(req.headers.cookie || '');

    // Get the visitor name set in the cookie
    let uid = cookies.uid;

    let affectedRows = await User.update({ role: "TEACHER" }, { where: { user_id: uid } }).then.then((res) => { return res })

    return res.status(200).json({
        success: true,
        data: affectedRows,
        message: 'ยืนยันสิทธิ์เรียบร้อย'
    });
}
module.exports = UpgradePermission;
