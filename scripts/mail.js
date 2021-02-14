var nodemailer = require("nodemailer");

function mail(to, code = "", from = "", subject = "", text = "", html = "") {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rayathossain49@gmail.com",
      pass: "ppooii1234!",
    },
  });

  var mailOptions = {
    from: `${from || "COOKit - Admin Auth"} <rayathossain49@gmail.com>`,
    sender: "rayathossain49@gmail.com",
    replyTo: "rayathossain49@gmail.com",
    to,
    subject: subject || "Authentication admin account at COOKit",
    text:
      text ||
      `Your COOKit authentication code:\n\n ${code}\n Enter this to the command line to create admin account`,
    html:
      html ||
      `<div>
        <h2>Your COOKit authentication code:</h2><br/><br/>
        <code><b>${code}<b/></code><br/><br/>
        <p>Enter this to the command line to create admin account</p>
    </div>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      //console.log("\nEmail sent: " + info.response);
    }
  });
}

module.exports = mail;
