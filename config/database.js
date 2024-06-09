import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const Dbconnect = () => {
   mongoose
      .connect(process.env.URL)
      .then(() => console.log("Connected to Database"))
      .catch((err) => {
         console.error(`Error connecting to database: ${err}`);
         process.exit(1);
      });
};

export default Dbconnect;
