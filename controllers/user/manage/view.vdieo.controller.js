/**
 * Created by MisterNT on 5/1/2017.
 */
const {VideoList} = require('./../../../models')
const UserService = require('./../../../middleware/UserService')
const TeacherViewVideo = async function (req, res) {
    userService = new UserService()

    let uid = userService.getUid(req);
    let ViewVideos = await VideoList.findAll({ where: {uuid: req.params.uuid , user_id: uid ,status:['PUBLIC','Pending'] } }).then( (res) => { return res} )
    Object.keys(ViewVideos).map(function (key, index) {
        ViewVideos[key].link = ViewVideos[key].link.split("=")[1]
    });
    res.status(200).json({
        success: true,
        data: ViewVideos
    });
}
module.exports = TeacherViewVideo;
