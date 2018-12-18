/**
 * Created by MisterNT on 5/1/2017.
 */
const UserService = require('./../../middleware/UserService')
const { MeetupList } = require('./../../models')

const UserMeetup = async function (req, res) {

    userService = new UserService()

    let uid = userService.getUid(req);
    let MeetupLists = await MeetupList.findAll({ where: { user_id: uid } }).then((res) => { return res })

    return res.status(200).json({
        success: true,
        uid: uid,
        data: MeetupLists
    });
}
module.exports = UserMeetup;
