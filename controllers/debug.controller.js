/**
 * Created by MisterNT on 5/1/2017.
 */
const Validator = require('validatorjs');
const {Users} = require('./../models')
const {Course} = require('./../models')

const Debug = function (req, res) {

    Users.findOne({ where: { email: "59050300@kmitl.ac.th"  } }).then(function (User) {
        User.getCourse().then(function (Course) {
            console.log(Course);
        })
    })

   Course.create({
        user_id: 1,
        name: "sadad",
        detail: "sadsad",
        picture: "asdad",
        status: 1,
    }).then(function (succcess) {
        res.status(200).json({
            success: true,
            data: succcess,
            message :"เพิ่มวิชาเรียนรียบร้อยแล้ว"
        });
    }) 
    
}
module.exports = Debug;
