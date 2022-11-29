import TeachersService from "../../services/teacherServices";
import {
  getAllTeachersSuccess,
  createTeachersSuccess,
  deleteTeachersSuccess,
  updateTeachersSuccess,
} from "../actions/teacherAction";

export const getAllTeachersRequest = () => (dispatch: any) => {
  try {
    //API call
    TeachersService.getAllTeachers().then((response: any) => {
      //dispatch an action
      dispatch(getAllTeachersSuccess(response.data));
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const createTeacherRequest =
  (teacher: any, closePopup: any) => (dispatch: any) => {
    try {
      //Api call
      TeachersService.createTeacher(teacher).then(
        (response: any) => {
          console.log("response", response);
          dispatch(createTeachersSuccess(response.data));
          closePopup();
        },
        (error: any) => {
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };

export const deleteTeacherRequest =
  (id: string, closePopup: any) => (dispatch: any) => {
    try {
      //Api call
      TeachersService.deleteTeacher(id).then(
        (response: any) => {
          console.log("response delete", response);
          dispatch(deleteTeachersSuccess(response.data.id));
        },
        (error: any) => {
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };
export const updateTeacherRequest =
  (id: string, teacher: any, closePopup: any) => (dispatch: any) => {
    try {
      //Api call
      TeachersService.updateTeacher(id, teacher).then(
        (response: any) => {
          console.log("response update", response);
          dispatch(updateTeachersSuccess(response.data.id));
        },
        (error: any) => {
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };
