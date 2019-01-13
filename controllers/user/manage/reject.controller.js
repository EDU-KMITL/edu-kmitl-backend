/**
 * Created by MisterNT on 5/1/2017.
 */
const { CourseList } = require('./../../../models')
const Validator = require('validatorjs');

const RejectCoures = async function (req, res) {

    let rules = {
        uuid: 'required',
        user_id: 'required'
    };

    let validation = new Validator(req.params, rules);
    if (validation.passes()) {
        let affectedRows = await CourseList.update({ status: 'Reject' }, { where: { user_id:req.params.user_id,uuid: req.params.uuid } }).then((res) => { return res })
        return res.status(200).json({
            success: true,
            data: affectedRows,
            message: 'ทำรายการเรียบร้อยแล้ว'
        });
    }else{
        return res.status(200).json({
            success: false,
            message: "เกิดข้อผิดพลาด"
        });
    }
}
module.exports = RejectCoures;
