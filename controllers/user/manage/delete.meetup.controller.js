/**
 * Created by MisterNT on 5/1/2017.
 */
const cookie = require('cookie');
const { Meetup } = require('./../../models')

const DeleteUserTearcherMeetup = async function (req, res) {

    let cookies = cookie.parse(req.headers.cookie || '');

    // Get the visitor name set in the cookie
    let uid = cookies.uid;
    let resData = await Meetup.update({ status: "DELETE" }, { where: { uuid: req.body.uuid, user_id: uid } }).then((res) => { return res })

    return res.status(200).json({
        success: true,
        data: resData,
        message: "ลบเรียบร้อยแล้ว"
    });
}
module.exports = DeleteUserTearcherMeetup;
