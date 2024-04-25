import mysql from "mysql";

(function connectDb() {
  try {
    const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "mysql",
      database: "gigl",
    });
    db.connect((err) => {
      if (err) {
        console.log(`Error in connecting Db: ${err}`);
        return;
      }
      console.log("Connected to DB");
    });
  } catch (error) {
    console.log(`Error in connecting Db: ${error}`);
  }
})();

export default db;
