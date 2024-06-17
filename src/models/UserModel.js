import mongoose from "../config/mongoClient";

const StudentsShema = new mongoose.Schema({
  studentId: String,
  email: String,
  password: String,
  name: String,
});

const StudentsModel = mongoose.model("students", StudentsShema);

export default StudentsModel;
