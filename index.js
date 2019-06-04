const express = require("express");
const bodyParser =  require("body-parser");
const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) =>{
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3> Contact Details </h3>
        <ul>
            <li>
                Name: ${req.body.name}
            </li>
            <li>
                Email: ${req.body.email}
            </li>
        </ul>
        <h3> Message </h3>
        <p>
            ${req.body.message}
        </p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              type: 'OAuth2',
                user: "confortambiental.mailchimp@gmail.com",
                clientId: "375767153541-6olh64gn5808kq18gefusgf3dcqgquqh.apps.googleusercontent.com",
                clientSecret: "-6b8BHrd9D4mIIO3M6Uem05e",
                refreshToken: "1/Y-uy6TH8XoJv3HezlEJal49RiWm7vF0Wv82O5TEQeT92yt85-kGJg-SH6esQFVwb"
             }
        });

        let mailOptions = {
            from: "confortambiental.mailchimp@gmail.com",
            to: "clgportafolio@gmail.com",
            replyTo: "test@testaccount.com",
            subject: "New Message",
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return console.log(err);
            } 
                console.log("Message Sent: %s", info.message);
                console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
            
        });
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`)
})