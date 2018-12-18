/**
 * Created by MisterNT on 5/1/2017.
 */

const { User } = require('./../models')
const JWT = require('jsonwebtoken')
const env = process.env.NODE_ENV || 'development';
const config = require('./../config/config.json')[env];

const ActivateUser =  function (req, res) {

    JWT.verify(req.params.token, config.jwt_secret,async function (err, decoded) {
        if (err) {
            return res.status(200).json({ success: false, message: 'ไม่สามารถยืนยันอีเมล์ได้' });
        } else {
            let affectedRows = await User.update({ status: "ACTIVATE" }, { where: { id: decoded.user_id } }).then.then((res) => { return res })

            return res.status(200).json({
                success: true,
                data: affectedRows,
                message: 'ยืนยันเมล์เรียบร้อยแล้ว'
            });
        }
    })

}
module.exports = ActivateUser;
