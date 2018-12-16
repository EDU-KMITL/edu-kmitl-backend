const MailService = require('./services/MailService')


class Debug {
    async start() {
        MailService("59050300@kmitl.ac.th","http://edu.kmitl.ac.th")
    }
}

module.exports = Debug