import mongoose from "../config/mongoClient";

const PostSchema = new mongoose.Schema({
  studentId: String,
  email: String,
  name: String,
  content: String,
  createdAt: Date,
});

const PostModel = mongoose.model("posts", PostSchema);

export default PostModel;
