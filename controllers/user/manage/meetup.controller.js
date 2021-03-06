/**
 * Created by MisterNT on 5/1/2017.
 */
const UserService = require('./../../../middleware/UserService')
const { Meetup } = require('./../../../models')

const UserTearcherMeetup = async function (req, res) {


    userService = new UserService()

    let uid = userService.getUid(req);
    let MeetupLists = await Meetup.findAll({ where: { user_id: uid ,status:"PUBLIC"} }).then((res) => { return res })

    return res.status(200).json({
        success: true,
        uid: uid,
        data: MeetupLists
    });
}
module.exports = UserTearcherMeetup;
