/**
 * Created by MisterNT on 5/1/2017.
 */
const {Course} = require('./../../models')

const UserCourse = async function (req, res) {

   /* Course.findAll({ limit: 20 }).then(function (CourseRes) {
        res.status(200).json({
            success: true,
            data: CourseRes
        });
    
    }) */
    let CourseList = await Course.findAll({ limit: 20 }).then( (res) => { return res} )

    res.status(200).json({
        success: true,
        data: CourseList
    });
}
module.exports = UserCourse;
