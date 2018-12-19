
const { User } = require('./../models')
const unirest = require('unirest')
const JWT = require('jsonwebtoken')
const env  = process.env.NODE_ENV || 'development';
const config    = require('./../config/config.json')[env];
class AdminService {
    WebHooklineSend(content) {
        unirest.post('https://notify-api.line.me/api/notify')
            .header({ 'Content-type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer 5kic3wQS0YPDBbbVdOUSZSRltEYU6xyhxgIyZQgh7E9' })
            .send({ 'message': content })
            .end(function (response) {
                console.log(response.body);
            })
        }
        CreactContent(uuid,link){
            let tokens = JWT.sign({  uuid: uuid },config.jwt_secret , { expiresIn: '7h' })
                    
            let webLink =  "http://edu.kmitl.ac.th"
            let LinkApprove =webLink + "/approve/" + tokens
            let LinkReject = webLink + "/reject/"  + tokens

            let content = link + "\n ยอมรับ " + LinkApprove + "\n ยกเลิก " + LinkReject
            this.WebHooklineSend(content)
        }
}

module.exports = AdminService