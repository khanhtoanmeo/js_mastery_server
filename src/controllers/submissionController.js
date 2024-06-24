import { PENDING } from "../const/submissionStatus";
import { getStudentById } from "../repositories/studentsRepository";
import {
  createSubmission,
  getAllSubmissionsByLessonId,
  getAllSubmissionsByLessonIdAndStudentId,
  getSubmission,
  updateSubmission,
  updateSubmissionById,
} from "../repositories/submissionsRepository";

export const getAllByLessonId = async (req, res) => {
  try {
    const { lessonId } = req.params;
    console.log("LESS ::: ", lessonId);
    const submissions = await getAllSubmissionsByLessonId({
      lessonId,
    });
    console.log("SUBMIS :: ", submissions);
    const students = await Promise.all(
      submissions.map(({ studentId }) => {
        return getStudentById(studentId);
      })
    );
    console.log("STUDENTs ", students);
    const submissionsWithStudentInfo = submissions.map(({ _doc: sub }) => ({
      ...sub,
      name: students.find((s) => s._id.toString() === sub.studentId)?.name,
      studentUniqueId: students.find((s) => s._id.toString() === sub.studentId)
        ?.studentId,
    }));
    console.log("FULL DATA ::: ", submissionsWithStudentInfo);
    res.json({
      success: true,
      data: submissionsWithStudentInfo.reduce((prev, curr) => {
        if (prev.hasOwnProperty(curr.excerciseId))
          prev[curr.excerciseId].push(curr);
        else prev[curr.excerciseId] = [curr];
        return prev;
      }, {}),
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};

export const getAllByLessonIdAndStudentId = async (req, res) => {
  try {
    const { lessonId, studentId } = req.query;

    console.log("DATA :: ", req.query, lessonId, studentId);

    const data = await getAllSubmissionsByLessonIdAndStudentId({
      lessonId,
      studentId,
    });

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { lessonId, studentId, excerciseId, status, code, point } = req.body;

    console.log("DATA :: ", req.body, lessonId, studentId, excerciseId);
    const submission = await getSubmission({
      lessonId,
      studentId,
      excerciseId,
    });
    console.log("SUBMIS :: ", submission);

    if (!submission) {
      const newSubmission = await createSubmission({
        lessonId,
        studentId,
        excerciseId,
        createdAt: new Date(),
        content: code,
        status: PENDING,
      });
      console.log("newly :: ", newSubmission);
      return res.json({
        success: true,
        data: [],
      });
    }

    const updatedSubmission = await updateSubmission({
      lessonId,
      studentId,
      excerciseId,
      status: status || PENDING,
      point,
      code,
    });
    console.log("updated :: ", updatedSubmission);

    return res.json({
      success: true,
      data: [],
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};
