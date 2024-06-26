import {
  createStudent,
  getStudentByEmail,
} from "../repositories/studentsRepository";

function generateRandomNumericString() {
  let randomString = "";
  const possibleDigits = "0123456789";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * possibleDigits.length);
    randomString += possibleDigits.charAt(randomIndex);
  }

  return randomString;
}

export const login = async (req, res) => {
  try {
    const {
      body: { email, password },
    } = req;

    const student = await getStudentByEmail(email);
    console.log(student);
    if (!student) throw new Error("Người dùng không tồn tại!");
    if (student && student.password !== password)
      throw new Error("Sai mật khẩu!");

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

export const signup = async (req, res) => {
  try {
    const {
      body: { email, password, name },
    } = req;

    const student = await getStudentByEmail(email);
    console.log(student);
    if (student) throw new Error("Email đã tồn tại!");

    const user = await createStudent({
      name,
      password,
      email,
      studentId: generateRandomNumericString(),
    });

    console.log("STUDENT ::: ", user);
    res.json({
      success: true,
      student: user,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};
