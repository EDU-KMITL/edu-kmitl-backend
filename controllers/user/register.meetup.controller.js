/**
 * Created by MisterNT on 5/1/2017.
 */
const cookie = require('cookie');
const { MeetupList } = require('./../../models')

const RegisterUserMeetup = async function (req, res) {

    let cookies = cookie.parse(req.headers.cookie || '');

    // Get the visitor name set in the cookie
    let uid = cookies.uid;
    let resData = await MeetupList.create({ user_id: uid, uuid: req.params.uuid }).then((res) => { return res })

    return res.status(200).json({
        success: true,
        data: resData,
        message: "เพิ่มกิจกรรมเรียนรียบร้อยแล้ว"
    });
}
module.exports = RegisterUserMeetup;
