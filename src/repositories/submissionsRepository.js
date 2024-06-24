import SubmissionModel from "../models/SubmissionModel";

export const createSubmission = async (data) => {
  return SubmissionModel.create(data);
};

export const updateSubmission = async (data) => {
  const { excerciseId, studentId, lessonId, ...updateData } = data;
  console.log("UPDATED DATA ::: ", updateData);
  return SubmissionModel.updateOne(
    { excerciseId, studentId, lessonId },
    { ...updateData }
  );
};

export const getSubmission = async (data) => {
  const { excerciseId, studentId, lessonId } = data;
  return SubmissionModel.findOne({ excerciseId, studentId, lessonId });
};

export const getAllSubmissionsByLessonIdAndStudentId = async (data) => {
  const { studentId, lessonId } = data;
  return SubmissionModel.find({ studentId, lessonId });
};

export const getAllSubmissionsByLessonId = async (data) => {
  const { lessonId } = data;
  return SubmissionModel.find({ lessonId });
};
