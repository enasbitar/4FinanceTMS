import { httpCommon } from "./http-common";

const getAllCourses = () => {
  return httpCommon.get("Courses");
};

const CoursesService = {
  getAllCourses,
};

export default CoursesService;
