import { getStudentByEmail } from "../repositories/studentsRepository";

export const login = async (req, res) => {
  try {
    const {
      body: { email, password },
    } = req;

    const student = await getStudentByEmail(email);
    console.log(student);
    if (!student) throw new Error("No user with given email address found");
    if (student && student.password !== password)
      throw new Error("Incorrect password");

    console.log("STUDENT ::: ", student);
    res.json({
      success: true,
      student,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};
