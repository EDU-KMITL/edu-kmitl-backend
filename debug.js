const MailService = require('./services/MailService')

class Debug {
    start() {
        MailService("cvbnm416@gmail.com","TEST By EDU CONFRIM")
    }
}

module.exports = Debug