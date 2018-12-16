const MailService = require('./services/MailService')

class Debug {
    start() {
        MailService("wandee016@gmail.com","TEST By EDU CONFRIM")
    }
}

module.exports = Debug