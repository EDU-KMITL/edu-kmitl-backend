/**
 * Created by MisterNT on 5/1/2017.
 */
const UserService = require('./../../../middleware/UserService')
const Validator = require('validatorjs');
const { CourseList } = require('./../../../models')
const { Course } = require('./../../../models')
const { User } = require('./../../../models')
const ShowCourse = async function (req, res) {
    let rules = {
        uuid: 'required'
    };

    let validation = new Validator(req.params, rules);
    if (validation.passes()) {
        userService = new UserService()

        let uid = userService.getUid(req);
        let CourseLists = await CourseList.findAll({ where: { uuid:req.params.uuid }, include: [ { all: true } ]  }).then((res) => { return res })
        Object.keys(CourseLists).map(function (key, index) {
            Object.keys(CourseLists[key]).map(function (key2, index) {
                delete CourseLists[key].User[key2].password
            });
            //delete CourseLists.User[key].password
        });
        return res.status(200).json({
            success: true,
            uid: uid,
            data: CourseLists
        });

    }else{
        return res.status(200).json({
            success: false,
            message: "เกิดข้อผิดพลาด"
        });
    }

}
module.exports = ShowCourse;
