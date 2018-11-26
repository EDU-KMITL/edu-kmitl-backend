/**
 * Created by MisterNT on 5/1/2017.
 */
const {Meetup} = require('./../models')

const GuestMeetup = function (req, res) {

    Meetup.findAll({ limit: 20 }).then(function (MeetupRes) {
        res.status(200).json({
            success: true,
            data: MeetupRes
        });
    
    })
        
}
module.exports = GuestMeetup;
