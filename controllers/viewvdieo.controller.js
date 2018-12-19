/**
 * Created by MisterNT on 5/1/2017.
 */
const {VideoList} = require('./../models')

const ViewVideo = async function (req, res) {
    let ViewVideos = await VideoList.findAll({ where: {uuid: req.params.uuid , status:"PUBLIC"} }).then( (res) => { return res} )
   
    Object.keys(ViewVideos).map(function (key, index) {
        ViewVideos[key].link = ViewVideos[key].link.split("=")[1]
    });
    res.status(200).json({
        success: true,
        data: ViewVideos
    });
}
module.exports = ViewVideo;
