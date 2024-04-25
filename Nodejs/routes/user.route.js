import express from "express";

const router = express.Router();

router.post("/regisrer", (req, res) => {
  return res.send("Received a POST HTTP method");
});

router.get("/login", (req, res) => {
  return res.send("Received a GET HTTP method");
});

export default router;
