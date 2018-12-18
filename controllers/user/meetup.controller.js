/**
 * Created by MisterNT on 5/1/2017.
 */
const cookie = require('cookie');
const { MeetupList } = require('./../../models')

const UserMeetup = async function (req, res) {

    let cookies = cookie.parse(req.headers.cookie || '');

    // Get the visitor name set in the cookie
    let uid = cookies.uid;
    let MeetupLists = await MeetupList.findAll({ where: { user_id: uid } }).then((res) => { return res })

    return res.status(200).json({
        success: true,
        uid: uid,
        data: MeetupLists
    });
}
module.exports = UserMeetup;
