import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

async function connectDB() {
  const MONGOOSDB_URL = process.env.MONGODB_URL;
  const DB_NAME = process.env.DB_NAME;

  try {
    const connectionInstance = await mongoose.connect(`${MONGOOSDB_URL}/${DB_NAME}`);
    console.log(
      `Database Connected at host  ${connectionInstance.connection.host} on port ${connectionInstance.connection.port}`
    );
  } catch (error) {
    throw new Error(` Database Connection failed due to -----> ${error}`);
  }
}

export default connectDB;