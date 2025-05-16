import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./src/config/db.config.js";

//config dotenv

dotenv.config();

const port = process.env.PORT;
//listening

connectDB()
  .then(() => {
    app.listen(port, (error) => {
      if (error) {
        throw new Error("Server Not Started!");
      }
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });