/**
 * Created by MisterNT on 5/1/2017.
 */
const cookie = require('cookie');
const { Meetup } = require('./../../../models')

const UserTearcherMeetup = async function (req, res) {

    let cookies = cookie.parse(req.headers.cookie || '');

    // Get the visitor name set in the cookie
    let uid = cookies.uid;
    let MeetupLists = await Meetup.findAll({ where: { user_id: uid } }).then((res) => { return res })

    return res.status(200).json({
        success: true,
        uid: uid,
        data: MeetupLists
    });
}
module.exports = UserTearcherMeetup;
