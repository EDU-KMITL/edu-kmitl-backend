/**
 * Created by MisterNT on 5/1/2017.
 */
const UserService = require('./../../../middleware/UserService')
const Validator = require('validatorjs');
const { CourseList } = require('./../../../models')
const { Course } = require('./../../../models')
const ShowCourse = async function (req, res) {
    let rules = {
        uuid: 'required'
    };

    let validation = new Validator(req.params, rules);
    if (validation.passes()) {
        userService = new UserService()

        let uid = userService.getUid(req);
        let CourseLists = await CourseList.findAll({ where: { user_id: uid , uuid:req.params.uuid }, include: [Course] }).then((res) => { return res })
    
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
