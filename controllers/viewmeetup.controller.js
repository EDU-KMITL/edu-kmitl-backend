/**
 * Created by MisterNT on 5/1/2017.
 */
const {Course} = require('./../models')

const ViewMeetup = async function (req, res) {
    let ViewMeetupRes = await Meetup.findOne({ where: {uuid: req.params.uuid , status:"PUBLIC" }}).then( (res) => { return res} )

    res.status(200).json({
        success: true,
        data: ViewMeetupRes
    });
}
module.exports = ViewMeetup;
