import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cook-it",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

export default db
