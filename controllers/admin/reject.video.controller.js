/**
 * Created by MisterNT on 5/1/2017.
 */
const { VideoList } = require('./../../models')


const RejectVideo = async function (req, res) {
 

    let vid = req.vdieo_id 

    let affectedRows = await VideoList.update({ status: 'PRIVATE' }, { where: { id: vid } }).then((res) => { return res })

    return res.status(200).json({
        success: true,
        data: affectedRows,
        message: 'ทำรายการเรียบร้อยแล้ว'
    });
}
module.exports = RejectVideo;
