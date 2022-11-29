export const GET_ALL_TEACHERS_SUCCESS = "GET_ALL_TEACHERS_SUCCESS";
export const getAllTeachersSuccess = (teachers: any) => ({
  type: GET_ALL_TEACHERS_SUCCESS,
  payload: teachers,
});

export const CREATE_TEACHER_SUCCESS = "CREATE_TEACHER_SUCCESS";
export const createTeachersSuccess = (teacher: any) => ({
  type: CREATE_TEACHER_SUCCESS,
  payload: teacher,
});

export const DELETE_TEACHER_SUCCESS = "DELETE_TEACHER_SUCCESS";
export const deleteTeachersSuccess = (id: string) => ({
  type: DELETE_TEACHER_SUCCESS,
  payload: id,
});

export const UPDATE_TEACHER_SUCCESS = "UPDATE_TEACHER_SUCCESS";
export const updateTeachersSuccess = (teacher: any) => ({
  type: UPDATE_TEACHER_SUCCESS,
  payload: teacher,
});
