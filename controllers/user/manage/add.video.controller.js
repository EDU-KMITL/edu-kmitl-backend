/**
 * Created by MisterNT on 5/1/2017.
 */
const UserService = require('./../../../middleware/UserService')
const Validator = require('validatorjs');
const { VideoList } = require('./../../../models')
const AddVideo = async function (req, res) {

    userService = new UserService()

    let uid = userService.getUid(req);

    let rules = {
        uuid: 'required',
        name: 'required',
        detail: 'required',
        link: 'required|url'
    };

    let validation = new Validator(req.body, rules);
    if (validation.passes()) {

        let resData = await VideoList.create({
            uuid: req.body.uuid,
            user_id: uid,
            name: req.body.name,
            detail: req.body.detail,
            link: req.body.link
        }).then((res) => { return res })
        return res.status(200).json({
            success: true,
            data: resData,
            message: "เพิ่มวิดิโอเรียบร้อยแล้ว"
        });
    } else {
        return res.status(200).json({
            success: false,
            message: "กรอกข้อมูลไม่ครบถ้วน"
        });
    }
}
module.exports = AddVideo
