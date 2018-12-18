/**
 * Created by MisterNT on 5/1/2017.
 */
const UserService = require('./../../../middleware/UserService')
const cookie = require('cookie');
const { VideoList } = require('./../../../models')

const DeleteVideo = async function (req, res) {

    userService = new UserService()

    let uid = userService.getUid(req);
    
    let resData = await VideoList.update({ status: "DELETE" }, { where: { uuid: req.body.uuid, user_id: uid } }).then((res) => { return res })

    return res.status(200).json({
        success: true,
        data: resData,
        message: "ลบเรียบร้อยแล้ว"
    });
}
module.exports = DeleteVideo;
