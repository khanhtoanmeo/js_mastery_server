import PostModel from "../models/PostModel";

export const createPost = async (data) => {
  return PostModel.create(data);
};

export const getAllPosts = async () => {
  return PostModel.find({});
};
