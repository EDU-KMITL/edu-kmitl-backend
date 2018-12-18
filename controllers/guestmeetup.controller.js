/**
 * Created by MisterNT on 5/1/2017.
 */
const {Meetup} = require('./../models')


const GuestMeetup = async function (req, res) {

   let MeetupRes = await Meetup.findAll({ limit: 20 , where: { status:"PUBLIC" }}).then( (res) => { return res} )
      
    res.status(200).json({
        success: true,
        data: MeetupRes
    });
}
module.exports = GuestMeetup;
