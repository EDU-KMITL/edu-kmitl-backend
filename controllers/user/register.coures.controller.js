/**
 * Created by MisterNT on 5/1/2017.
 */
const UserService = require('./../../middleware/UserService')
const { CourseList } = require('./../../models')

const RegisterUserCourse = async function (req, res) {

    userService = new UserService()

    let count = await CourseList.count({ where: {uuid: req.params.uuid}} ).then(c => {  return c })
    if(count > 0){
        return res.status(200).json({
            success: false,
            data: resData,
            message: "ท่านได้ลงคร์อดนี้ไปแล้ว"
        });
    }else{
        let uid = userService.getUid(req);
        let resData = await CourseList.create({ user_id: uid, uuid: req.params.uuid }).then((res) => { return res })
    
        return res.status(200).json({
            success: true,
            data: resData,
            message: "เข้าเรียนเรียบร้อยแล้ว"
        });
    }
}
module.exports = RegisterUserCourse;
