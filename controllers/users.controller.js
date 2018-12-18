/**
 * Created by MisterNT on 4/30/2017.
 */

const Validator = require('validatorjs');
const { Course } = require('./../models')
const { Meetup } = require('./../models')
const JWT = require('jsonwebtoken')
const ignoreCase = require('ignore-case')
const env = process.env.NODE_ENV || 'development';
const config = require('./../config/config.json')[env];

const Users = function (req, res) {

    if (req.headers.authorization && ignoreCase.equals(req.headers.authorization.split(' ')[0], 'bearer')) {

        // verifies secret and checks exp
        JWT.verify(req.headers.authorization.split(' ')[1], config.jwt_secret, function (err, decoded) {
            if (err) {
                return res.status(200).json({ success: false, message: 'Failed_to_authenticate_token' });
            } else {

                switch (req.params.action) {
                    case "course-creact":
                        let rules = {
                            name: 'required',
                            detail: 'required',
                            picture: 'required|url'
                        };

                        let validation = new Validator(req.body, rules);
                        validation.passes(function () {
                            Course.create({
                                user_id: decoded.user_id,
                                name: req.body.name,
                                detail: req.body.name,
                                picture: req.body.picture
                            }).then(function (succcess) {
                                return res.status(200).json({
                                    success: true,
                                    data: succcess,
                                    message: "เพิ่มวิชาเรียนรียบร้อยแล้ว"
                                });
                            })
                        })

                        validation.fails(function () {
                            res.status(200).json(validation.errors);
                        });
                        break;
                    case "meetup-creact":
                        let rules_mt = {
                            name: 'required',
                            detail: 'required',
                            picture: 'required|url',
                            mt_date: 'required',
                            mt_time: 'required',
                            location: 'required'
                        };

                       // let validation_mt = new Validator(req.body, rules_mt);
                       // validation_mt.passes(function () {
                         Meetup.create({
                                user_id: decoded.user_id,
                                name: req.body.name,
                                detail: req.body.name,
                                picture: req.body.picture,
                                mt_date: req.body.mt_date,
                                mt_time: req.body.mt_time,
                                location: req.body.location
                            }).then(function (succcess) {
                                 return res.send({
                                    success: true,
                                    data: succcess,
                                    message: "เพิ่มกิจกรรมเรียนรียบร้อยแล้ว"
                                })
                            })
                               
                          //  })
                       // validation_mt.fails(function () {
                       //    return res.send(validation_mt.errors);
                       // });
                        break;
                    default:
                        res.status(200).json({ success: false, message: '404_NOT_FOUND' });
                        break;
                }
            }
        });


    } else {
        return res.status(200).json({ success: false, message: 'Failed_to_authenticate_token_send_header' });
    } 
}
module.exports = Users;
