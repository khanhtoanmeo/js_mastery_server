import mongoose from "../config/mongoClient";

const CommentSchema = new mongoose.Schema({
  studentId: String,
  postId: String,
  content: String,
  createdAt: Date,
  name: String,
});

const CommentModel = mongoose.model("comments", CommentSchema);

export default CommentModel;
