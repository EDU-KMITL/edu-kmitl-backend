const UserService = require('./middleware/UserService')
const { User } = require('./models')

class Debug {
    async start() {
        let uid =  "1"//new UserService().getUid();

        let affectedRows = await User.findOne( { where: { id: uid } }).then((res) => { return res })

        console.log(affectedRows.role)
        //MailService("59050300@kmitl.ac.th","http://edu.kmitl.ac.th")
    }
}

module.exports = Debug