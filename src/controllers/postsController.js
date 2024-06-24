import { ObjectId } from "mongodb";
import { getAllCommentsFromAPost } from "../repositories/commentsRepository";
import { createPost, getAllPosts } from "../repositories/postsRepository";
import { getStudentByEmail } from "../repositories/studentsRepository";

export const getAll = async (req, res) => {
  try {
    const posts = await getAllPosts();
    console.log("POSTS ::: ", posts);

    const postsWithComments = await Promise.all(
      posts.map(async (post) => {
        const [comments = []] = await Promise.all([
          getAllCommentsFromAPost(post._id),
        ]);
        return { ...post._doc, comments };
      })
    );
    console.log("PP ", postsWithComments);
    res.json({ success: true, data: postsWithComments });
  } catch (error) {
    console.log("Error", error.message);
    res.json({ success: false, error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { content, studentId, name } = req.body;
    const data = await createPost({
      studentId,
      content,
      createdAt: new Date(),
      name,
    });

    console.log("POST ::: ", data);

    res.json({ success: true, data });
  } catch (error) {
    console.log("Error");
    res.json({ success: false, error: error.message });
  }
};
