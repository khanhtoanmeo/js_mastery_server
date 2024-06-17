import { config } from "dotenv";
import mongoose from "mongoose";
config();
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@final-project.mtbpx4e.mongodb.net/?retryWrites=true&w=majority&appName=final-project`;

mongoose.connect(uri, { dbName: "js_course" });
export default mongoose;
