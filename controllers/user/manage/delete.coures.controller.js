/**
 * Created by MisterNT on 5/1/2017.
 */
const UserService = require('./../../../middleware/UserService')
const { Course } = require('./../../../models')

const DeleteUserTearcherCourse = async function (req, res) {

    userService = new UserService()

    let uid = userService.getUid(req);
    let resData = await Course.update({ status: "DELETE" }, { where: { uuid: req.body.uuid, user_id: uid } }).then((res) => { return res })

    return res.status(200).json({
        success: true,
        data: resData,
        message: "ลบเรียบร้อยแล้ว"
    });
}
module.exports = DeleteUserTearcherCourse;
