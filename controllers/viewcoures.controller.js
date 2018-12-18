/**
 * Created by MisterNT on 5/1/2017.
 */
const {Course} = require('./../models')

const ViewCoures = async function (req, res) {
    let CourseRes = await Course.findOne({ where: {uuid: req.params.uuid} }).then( (res) => { return res} )

    res.status(200).json({
        success: true,
        data: CourseRes
    });
}
module.exports = ViewCoures;
