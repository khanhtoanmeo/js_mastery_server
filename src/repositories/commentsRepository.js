import CommentModel from "../models/CommentModel";

export const createComment = async (data) => {
  return CommentModel.create(data);
};

export const getAllCommentsFromAPost = async (postId) => {
  return CommentModel.find({ postId });
};
