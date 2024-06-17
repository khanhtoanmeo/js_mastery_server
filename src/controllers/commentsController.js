import { createComment } from "../repositories/commentsRepository";

export const create = async (req, res) => {
  try {
    const { content, studentId, postId, name } = req.body;
    const data = await createComment({
      studentId,
      content,
      postId,
      name,
      createdAt: new Date(),
    });

    console.log("Comment ::: ", data);

    res.json({ success: true, data });
  } catch (error) {
    console.log("Error");
    res.json({ success: false, error: error.message });
  }
};
