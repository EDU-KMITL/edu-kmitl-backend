/**
 * Created by MisterNT on 5/1/2017.
 */
const {Course} = require('./../models')

const GuestCourse = async function (req, res) {

    let CourseRes = await Course.findAll({ limit: 20 , where: { status:"PUBLIC" }}).then( (res) => { return res} )

    res.status(200).json({
        success: true,
        data: CourseRes
    });
}
module.exports = GuestCourse;
