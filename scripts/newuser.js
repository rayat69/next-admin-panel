const db = require("../db/DB");
const mail = require("./mail");
const newKey = require("./random");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter email address: `, (email) => {
  let emailSql = "SELECT * FROM admin WHERE ?";
  let emailQuery = { email };

  db.query(emailSql, emailQuery, (err, result) => {
    if (result.length === 0) {
      readline.question(`Create a new password: `, (password) => {
        readline.question(`Create a new username: `, (name) => {
          let emailSql = "SELECT * FROM admin WHERE ?";
          let emailQuery = { email };

          db.query(emailSql, emailQuery, (err, result) => {
            const key = newKey.random(15);
            mail(email, key);
            console.log(`Email sent to ${email}\n`);
            readline.question(
              "Provide secret key sent to your email: ",
              (secretKey) => {
                if (secretKey === key) {
                  const secret = newKey.adminSecret();
                  let sql = "INSERT INTO admin SET ?";
                  let query = { username: name, password, email, secret };

                  db.query(sql, query, (err, results, fields) => {
                    if (err) throw err;
                  });
                  const sub = "COOKit Admin SECRET KEY",
                    text = `Your COOKit Admin SECRET KEY:\n\n${secret}\n\nStore it safely. You'll need it every time you log into the admin panel.`,
                    html = `<div>
                    <h2>Your COOKit Admin SECRET:</h2><br/><br/>
                    <code><b>${secret}<b/></code><br/><br/>
                    <p>Store it safely. You'll need it every time you log into the admin panel.</p>
                </div>`;
                  mail(
                    email,
                    "_",
                    "COOKit - Admin SECRET KEY",
                    sub,
                    text,
                    html
                  );
                  console.log(
                    `Admin account created\n`,
                    `Check your email for the SECRET KEY\n`,
                    "login to > http://localhost:3000/admin"
                  );

                  //db.close();
                  readline.close();
                  process.exit();
                } else {
                  console.log("Invalid secret key");

                  //db.close();
                  readline.close();
                  process.exit();
                }
              }
            );
          });
        });
      });
    } else {
      console.log("\nAn admin account with the provided email already exists");
      readline.close();
      process.exit();
    }
  });
});
