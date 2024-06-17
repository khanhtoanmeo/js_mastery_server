import StudentsModel from "../models/UserModel";

export const createStudent = async (data) => {
  return StudentsModel.create(data);
};

export const getAllStudents = async () => {
  return StudentsModel.find({});
};

export const getStudentByEmail = async (email) => {
  return StudentsModel.findOne({
    email,
  });
};

export const deleteAllStudents = async () => {
  return StudentsModel.deleteMany({});
};

export const getStudentById = async (id) => {
  return StudentsModel.findById(id);
};
