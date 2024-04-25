import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./src/config/db.js";
import userRoute from "./src/routes/user.route.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error in starting server: ${err}`);
    return;
  }
  console.log(`Server is running on PORT: ${PORT}`);
});
