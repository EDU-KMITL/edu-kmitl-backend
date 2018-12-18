/**
 * Created by MisterNT on 4/30/2017.
 */
const Validator = require('validatorjs')
const {User} = require('./../models')
const JWT = require('jsonwebtoken')
const env  = process.env.NODE_ENV || 'development';
const config    = require('./../config/config.json')[env];
const MailService = require('./../services/MailService')
const Register = function (req, res) {
    User
        .findAndCountAll({
            where: {
                email: req.body.email
            }
        })
        .then(function (result) {
            if (result.count === 0) {

                const rules = {
                    email: 'required|email',
                    password: 'required'
                };

                let validation = new Validator(req.body, rules);
                var email_KMITL = req.body.email.split("@").map(function (val) {
                    return (val);
                  });
                 
                validation.passes(function () {
                    if(email_KMITL[1] != "kmitl.ac.th"){
                        return res.status(200).json({
                            success: false,
                            message: "โปรดใช้อีเมล์สถาบัน!"
                        });
                    }else {
                        User.create({
                        email: req.body.email,
                        password: req.body.password
                    }).then(function (succcess) {
                      let tokens = JWT.sign({  email: req.body.email,user_id: succcess.id },config.jwt_secret , { expiresIn: '7h' })
                      MailService(req.body.email,tokens)
                      return res.status(200).json({
                            success: true,
                            data: succcess,
                            //token: tokens,
                            message :"สมัครสมาชิกรียบร้อยแล้ว"
                        });

                    })
                }
                });

                validation.fails(function () {
                    res.status(200).json(validation.errors);
                });

            } else {
                return res.status(200).json({
                    success: false,
                    message: "มีอีเมล์นี้แล้วในระบบ"
                });
            }

        });


}

module.exports = Register;
