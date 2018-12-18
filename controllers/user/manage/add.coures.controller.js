/**
 * Created by MisterNT on 5/1/2017.
 */
const cookie = require('cookie');
const Validator = require('validatorjs');
const { Course } = require('./../../../models')
const AddCourse = async function (req, res) {

    let cookies = cookie.parse(req.headers.cookie || '');

    // Get the visitor name set in the cookie
    let uid = cookies.uid;

    let rules = {
        name: 'required',
        detail: 'required',
        picture: 'required|url'
    };

    let validation = new Validator(req.body, rules);
    if (validation.passes()) {

        let resData = await Course.create({
            user_id: uid,
            name: req.body.name,
            detail: req.body.name,
            picture: req.body.picture
        }).then((res) => { return res })
        return res.status(200).json({
            success: true,
            data: resData,
            message: "เพิ่มวิชาเรียนรียบร้อยแล้ว"
        });
    } else {
        return res.status(200).json({
            success: false,
            message: "กรอกข้อมูลไม่ครบถ้วน"
        });
    }
}
module.exports = AddCourse;
