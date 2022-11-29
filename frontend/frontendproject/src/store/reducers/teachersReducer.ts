import {
  GET_ALL_TEACHERS_SUCCESS,
  CREATE_TEACHER_SUCCESS,
  DELETE_TEACHER_SUCCESS,
  UPDATE_TEACHER_SUCCESS,
} from "../actions/teacherAction";

const initialState = [] as any;
const TeachersReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  let tempArray = [] as any;
  switch (type) {
    case GET_ALL_TEACHERS_SUCCESS:
      return payload;

    case CREATE_TEACHER_SUCCESS:
      return [...state, payload];

    case DELETE_TEACHER_SUCCESS:
      tempArray = state.filter((teacher: any) => teacher.id !== payload);
      return tempArray;

    case UPDATE_TEACHER_SUCCESS:
      let array = [...state];
      array.map((teacher: any, index: number) => {
        if (teacher.id == payload.id) {
          array[index] = payload;
        }
      });

    default:
      return state;
  }
};

export default TeachersReducer;
