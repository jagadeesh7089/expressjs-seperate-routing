const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "jagadeeshk775@gmail.com",
    pass: process.env['PASS'],
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'jaggubai private solutions', // sender address
    to: "kumarsurendra93828@gmail.com", // list of receivers
    subject: "Hii ra Mama", // Subject line
    text: "Emchasthunau ra", // plain text body
    html: "<h1> Emchastunau ra bagunava </h1>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
