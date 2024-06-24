import mongoose from "../config/mongoClient";

const SubmissionSchema = new mongoose.Schema({
  studentId: String,
  content: String,
  lessonId: String,
  excerciseId: String,
  createdAt: Date,
  status: String,
  point: Number,
});

const SubmissionModel = mongoose.model("submissions", SubmissionSchema);

export default SubmissionModel;
