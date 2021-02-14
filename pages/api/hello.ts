import db from "../../db/DB";

// this is a top-level await
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      let sql =
        "CREATE TABLE admin(id int AUTO_INCREMENT, email VARCHAR(255), username VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))";
      db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.status(200).json({ msg: "done!", result });
      });
      break;

    default:
      res.status(405).json({ msg: "method not allowed" });
      break;
  }
};
