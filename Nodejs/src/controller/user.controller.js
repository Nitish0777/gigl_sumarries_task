import db from "../config/db.js";
import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";

export const registerUser = (req, res) => {
  console.log("Inside registerUser", req.body);
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are mandatory" });
  }
  const checkUserQuery = `SELECT * FROM Users WHERE email='${email}'`;

  db.query(checkUserQuery, (err, result) => {
    if (err) {
      console.log(`Error in checking user: ${err}`);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (result.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }
  });

  const query = `INSERT INTO Users (username, email, password) VALUES ('${username}', '${email}', '${password}')`;

  db.query(query, (err, result) => {
    if (err) {
      console.log(`Error in inserting data: ${err}`);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(200).json({ message: "User registered successfully" });
  });
};

export const loginUser = (req, res) => {
  console.log("Inside loginUser", req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are mandatory" });
  }
  const query = `SELECT * FROM Users WHERE email='${email}' AND password='${password}'`;

  db.query(query, (err, result) => {
    if (err) {
      console.log(`Error in checking user: ${err}`);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (result.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });
    return res.status(200).json({ message: "Login successful", token });
  });
};
