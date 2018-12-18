/**
 * Created by MisterNT on 5/1/2017.
 */
const UserService = require('./../../middleware/UserService')
const { MeetupList } = require('./../../models')

const RegisterUserMeetup = async function (req, res) {

    userService = new UserService()

    let uid = userService.getUid(req);
    let resData = await MeetupList.create({ user_id: uid, uuid: req.params.uuid }).then((res) => { return res })

    return res.status(200).json({
        success: true,
        data: resData,
        message: "เพิ่มกิจกรรมเรียนรียบร้อยแล้ว"
    });
}
module.exports = RegisterUserMeetup;
