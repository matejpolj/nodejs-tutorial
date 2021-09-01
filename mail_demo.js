var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'enrandom06@gmail.com',
        pass: 'kdguabisvxtyyezq'
    }
});

var mailOptions = {
    from: 'enrandom06@gmail.com',
    to: 'enrandom01@gmail.com, enrandom03@gmail.com',
    subject: 'Sending email using node.js',
    //text: 'That was easy!'
    html: '<h1>Welcome!</h1> <p>That was easy!!!</p>'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent!' + info.response);
    }
});