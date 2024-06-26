import { Router } from "express";
const router = Router();
import * as studentsController from "../controllers/studentsController";
import * as authController from "../controllers/authController";
import * as codeController from "../controllers/codeController";
import * as postsController from "../controllers/postsController";
import * as commentsController from "../controllers/commentsController";
import * as submissionsController from "../controllers/submissionController";

//students routes
router.route("/students/sync").post(studentsController.sync);

//auth routes
router.route("/auth/login").post(authController.login);
router.route("/auth/signup").post(authController.signup);

//code routes
router.route("/code/execute").post(codeController.executeCode);
router.route("/code/analyze").post(codeController.analyzeCode);
router.route("/code/generateQuestion").post(codeController.generateQuestion);
router.route("/code/askGpt").post(codeController.askChatGpt);

//posts routes
router.route("/posts").get(postsController.getAll);
router.route("/posts").post(postsController.create);

//comments routes
router.route("/comments").post(commentsController.create);

//submissions routes
router
  .route("/submissions")
  .get(submissionsController.getAllByLessonIdAndStudentId)
  .post(submissionsController.create);

//admin routes
router
  .route("/admin/submissions/:lessonId")
  .get(submissionsController.getAllByLessonId);

export default router;
