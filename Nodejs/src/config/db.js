import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "gigl",
});

db.connect((err) => {
  if (err) {
    console.log(`Error in connecting to DB: ${err}`);
    return;
  }
  console.log("Connected to DB");
});

export default db;
