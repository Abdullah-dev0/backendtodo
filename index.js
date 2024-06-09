import express from "express";
const app = express();
//import dot env to use environment variables
import dotenv from "dotenv";
dotenv.config();
//define port number to run server on port 4000 or any other port
const port = 8080;
//middleware to parse the  json data from request body
app.use(express.json());

//require the routes to mount the router on app
import todoroutes from "./routes/todo.js";

//mount the router on app
app.use("/api/v1", todoroutes);

//listen to port

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});

//import database connection

import Dbconnect from "./config/database.js";

//call the database connection function
Dbconnect();

//deflaut port

app.get("/", (res, response) => {
   response.send("<h1>heloo world this is home page</h1>");
});
