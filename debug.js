const MailService = require('./services/MailService')
const Validator = require('validatorjs');

class Debug {
    async start() {
        let rules = {
            name: 'required'
        };
        let parameter = {
            //name:'wandee'
        }
        let validation = new Validator(parameter, rules);
        console.log(validation.passes())
        console.log(validation.fails())
        //MailService("59050300@kmitl.ac.th","http://edu.kmitl.ac.th")
    }
}

module.exports = Debug