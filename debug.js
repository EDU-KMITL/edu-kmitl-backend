const MailService = require('./services/MailService')
const { User } = require('./models')
const { Meetup } =  require('./models')
const { MeetupList } =  require('./models')

class Debug {
    async start() {
        let MeetupLists = await MeetupList.findAll({ where: { user_id: '8' }, include: [Meetup]}).then((res) => { return res })
        console.log(MeetupLists)
        //MailService("59050300@kmitl.ac.th","http://edu.kmitl.ac.th")
    }
}

module.exports = Debug