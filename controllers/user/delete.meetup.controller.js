/**
 * Created by MisterNT on 5/1/2017.
 */
const UserService = require('./../../middleware/UserService')
const { MeetupList } = require('./../../models')

const DeleteUserMeetup = async function (req, res) {

    userService = new UserService()

    let uid = userService.getUid(req);
    let resData = await MeetupList.destroy({ where: { uuid: req.params.uuid, user_id: uid } }).then((res) => { return res })

    return res.status(200).json({
        success: true,
        data: resData,
        message: "ลบเรียบร้อยแล้ว"
    });
}
module.exports = DeleteUserMeetup;
