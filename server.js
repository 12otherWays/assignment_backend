import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./mongooseConfig/dbConnection.js";

dotenv.config({ path: "./config.env" });

//database connection
connectDB();

//server script
const port = 3051;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
