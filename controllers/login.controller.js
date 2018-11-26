/**
 * Created by MisterNT on 5/1/2017.
 */
const Validator = require('validatorjs');
const {User} = require('./../models')
const JWT = require('jsonwebtoken')

const env = process.env.NODE_ENV || 'development';
const config = require('./../config/config.json')[env];
const Login = function (req, res) {

  const rules = {
    email: 'required|email',
    password: 'required'
  }

  let validation = new Validator(req.body, rules);
  validation.passes(function () {

    User.findOne({ where: { email: req.body.email  } }).then(async function (resSQL) {

      if (resSQL != null) {
        const isPasswordValid = await resSQL.comparePassword(req.body.password)
      if (!isPasswordValid) {
        res.status(200).json({ success: false, message: 'รหัสผ่านไม่ถูกต้อง' })
      }else{
        let arrays = resSQL;
        delete arrays.dataValues.password;
        delete arrays.password;
        let tokens = JWT.sign({
          email: req.body.email,
          user_id: resSQL.id
        }, config.jwt_secret, { expiresIn: '1h' })

        res.status(200).json({
          success: true,
          data: arrays,
          token: tokens,
          message :"ล็อคอินเรียบร้อยแล้ว"
        });
      }
      } else {
        res.status(200).json({ success: false, message: 'ข้อมูลไม่ถูกต้อง' })
      }

    })
  });
  validation.fails(function () {
    res.status(200).json(validation.errors)
  })

}
module.exports = Login;
