import { studentsData } from "../const/studentsData";
import { deleteAllData } from "../repositories/allRepositories";
import {
  createStudent,
  getAllStudents,
} from "../repositories/studentsRepository";

export const sync = async (req, res) => {
  try {
    // const students = await getAllStudents();
    // if (!students.length) {
    //   await Promise.all(studentsData.map((stu) => createStudent(stu)));
    //   console.log("Sync students successfully");
    // }
    // if (students.length && students.length < studentsData.length) {
    //   const newStudents = studentsData.filter(
    //     (stu) => !students.find((s) => stu.studentId === s.studentId)
    //   );
    //   await Promise.all(newStudents.map((stu) => createStudent(stu)));
    //   console.log("Add students successfully");
    // }
    res.json({ success: true });
  } catch (error) {
    console.log("Error");
    res.json({ success: false, error: error.message });
  }
};
