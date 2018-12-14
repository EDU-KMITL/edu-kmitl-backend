const nodemailer = require('nodemailer');

/* Account UserName */
var account = {
    user: "wandee016@gmail.com",
    pass: "misternt559",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    tls:true
}; 

function MailService(email,text) {
    sendMail(email,text,function (error, res) {
        if (error === null) {

        }
    })
}
async function sendMail(email,msg, callback) {
    let transporter = nodemailer.createTransport({
        host: account.host,
        port: account.port,
        secure: account.secure, 
        tls:account.tls,
        auth: {
            user: account.user, 
            pass: account.pass 
        }
    });

    let mailOptions = {
        from: '"EDU@KMITL"' + account.user, // sender address
        subject: 'Comfrim Email From Link Plase', // Subject line
        to: email, // list of receivers
        //text: 'Hello world?', // plain text body
       // html: '<b>Hello world?</b>' // html body
    };
    mailOptions.text = msg
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            callback(error, null)
            return console.log(error);
        }
        console.log('Email To: %s', mailOptions.to);
        console.log('Message sent: %s', info.messageId);
        callback(null, email)
    });
}

module.exports = MailService