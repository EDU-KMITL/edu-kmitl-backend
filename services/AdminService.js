
const { User } = require('./models')

class AdminService {
    async start() {
        //MailService("59050300@kmitl.ac.th","http://edu.kmitl.ac.th")
    }
    WebHooklineSend(){
        unirest.post('https://api.line.me/v2/bot/message/push')
        .header({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer jBIB91ORdlssFVPJ5kSCFqCKwkGRRrrFT2Owvxuh5MF++jEzpdb8fVrt1NjWO5ySwgvrlC6BLbE7LJwZFUcVz+E8twRyprD1HeTq0mQmaKvGYJ944pheJfA+Bf6bb7vVffxZIGGRT0Nh2BuKcx9MMQdB04t89/1O/w1cDnyilFU=' })
        .send({
            "messages": [
                {
                    type: 'text',
                    text: content
                }
            ], "to": sender
        })
    }
}

module.exports = Debug