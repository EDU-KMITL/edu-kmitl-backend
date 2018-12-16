/**
 * Created by MisterNT on 4/30/2017.
 */

const Validator = require('validatorjs');
const { User } = require('./../models')
const { Course } = require('./../models')
const { Meetup } = require('./../models')
const { CourseList } = require('./../models')
const { MeetupList } = require('./../models')
const JWT = require('jsonwebtoken')
const ignoreCase = require('ignore-case')
const env = process.env.NODE_ENV || 'development';
const config = require('./../config/config.json')[env];

const Users = function (req, res) {

    if (req.headers.authorization && ignoreCase.equals(req.headers.authorization.split(' ')[0], 'bearer')) {

        // verifies secret and checks exp
        JWT.verify(req.headers.authorization.split(' ')[1], config.jwt_secret, function (err, decoded) {
            if (err) {
                res.status(200).json({ success: false, message: 'Failed_to_authenticate_token' });
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
                                res.status(200).json({
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
                    case "course-get":
                        Course.findAll({
                            where: {
                                user_id: decoded.user_id,
                                status: "PUBLIC"
                            }
                        })
                            .then(function (result) {
                                res.status(200).json({
                                    success: true,
                                    data: result
                                });
                            })
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

                        let validation_mt = new Validator(req.body, rules_mt);
                        validation_mt.passes(function () {
                            Meetup.create({
                                user_id: decoded.user_id,
                                name: req.body.name,
                                detail: req.body.name,
                                picture: req.body.picture,
                                mt_date: req.body.mt_date,
                                mt_time: req.body.mt_time,
                                location: req.body.location
                            }).then(function (succcess) {
                                res.status(200).json({
                                    success: true,
                                    data: succcess,
                                    message: "เพิ่มกิจกรรมเรียนรียบร้อยแล้ว"
                                });
                            })
                        })

                        validation_mt.fails(function () {
                            res.status(200).json(validation_mt.errors);
                        });
                        break;
                    case "meetup-get":
                        Meetup.findAll({
                            where: {
                                user_id: decoded.user_id
                            }
                        })
                            .then(function (result) {
                                res.status(200).json({
                                    success: true,
                                    data: result
                                });
                            })
                        break;
                    case "add-permission":
                        User.update(
                            { role: "TEACHER" } /* set attributes' value */,
                            { where: { user_id: decoded.user_id } } /* where criteria */).then(function (affectedRows) {
                                res.status(200).json({
                                    success: true,
                                    data: affectedRows,
                                    message: 'ยืนยันสิทธิ์เรียบร้อย'
                                });
                            })
                        break;
                    case "course-regis":
                        CourseList.create({
                            user_id: decoded.user_id,
                            uuid: req.body.uuid
                        }).then(function (succcess) {
                            res.status(200).json({
                                success: true,
                                data: succcess,
                                message: "เข้าเรียนเรียบร้อยแล้ว"
                            });
                        })
                        break;
                    case "course-del":
                        Course.update(
                            { status: "DELETE" } /* set attributes' value */,
                            { where: { uuid: req.body.uuid, user_id: decoded.user_id } } /* where criteria */).then(function (affectedRows) {
                                res.status(200).json({
                                    success: true,
                                    data: affectedRows,
                                    message: "ลบเรียบร้อยแล้ว"
                                });

                            })
                        break;
                    case "meetup-regis":
                        MeetupList.create({
                            user_id: decoded.user_id,
                            uuid: req.body.uuid
                        }).then(function (succcess) {
                            res.status(200).json({
                                success: true,
                                data: succcess,
                                message: "เข้าร่วมแล้ว"
                            });
                        })
                        break;
                    case "mycourse-del":
                        CourseList.destroy(
                            { where: { uuid: req.body.uuid, user_id: decoded.user_id } } /* where criteria */).then(function (affectedRows) {
                                res.status(200).json({
                                    success: true,
                                    data: affectedRows,
                                    message: "ลบเรียบร้อยแล้ว"
                                });

                            })
                        break;
                    case "mycourse-get":
                        CourseList.findAll({
                            where: {
                                user_id: decoded.user_id
                            }
                        })
                            .then(function (result) {
                                res.status(200).json({
                                    success: true,
                                    data: result
                                });
                            })
                        break;
                    case "mymeetup-get":
                        MeetupList.findAll({
                            where: {
                                user_id: decoded.user_id
                            }
                        })
                            .then(function (result) {
                                res.status(200).json({
                                    success: true,
                                    data: result
                                });
                            }) 
                        break;
                    default:
                        res.status(200).json({ success: false, message: '404_NOT_FOUND' });
                        break;
                }
            }
        });


    } else {
        res.status(200).json({ success: false, message: 'Failed_to_authenticate_token_send_header' });
    } result
}
module.exports = Users;
