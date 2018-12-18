/**
 * Created by MisterNT on 5/1/2017.
 */
const UserService = require('./../../middleware/UserService')
const { CourseList } = require('./../../models')

const UserCourse = async function (req, res) {

    userService = new UserService()

    let uid = userService.getUid(req);
    let CourseLists = await CourseList.findAll({ where: { user_id: uid ,status:"PUBLIC"} }).then((res) => { return res })

    return res.status(200).json({
        success: true,
        uid: uid,
        data: CourseLists
    });
}
module.exports = UserCourse;
