import { MysqlError } from "mysql";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../db/Database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      let body;
      //console.log(JSON.parse(req.body));
      
      if (typeof req.body !== "object") {
        body = JSON.parse(req.body);
      } else {
        body = req.body;
      }
    // body = req.body;
    //body = JSON.parse(req.body)
      console.log(body);
    //   console.log(JSON.parse(body));
      
      
      if (body.username && body.password) {
        const { username, password } = body;
        let loginSql = "SELECT * FROM admin WHERE ?";

        db.query(loginSql, { username }, (err: MysqlError, result) => {
          if (result && result.length > 0) {
            if (password === result[0].password) {
                
              return res.status(200).json({ status: true, result: result[0] });
            } else {
              res
                .status(402)
                .json({ status: false, error: "Credentials do not match" });
            }
          } else {
            res.status(404).json({ error: "not found" });
          }
        });
      } else {
        res.status(401).json({ error: "Invalid data entry" });
      }
      break;

    default:
      res.setHeader("Allow", "POST");
      res.status(405).json({ error: "Method not allowed" });
      break;
  }
};
