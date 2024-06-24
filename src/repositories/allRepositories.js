import CommentModel from "../models/CommentModel";
import PostModel from "../models/PostModel";
import StudentsModel from "../models/UserModel";
import SubmissionModel from "../models/SubmissionModel";

const models = [CommentModel, PostModel, StudentsModel, SubmissionModel];

export const deleteAllData = async () => {
  return await Promise.all(models.map((model) => model.deleteMany({})));
};
