import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  FETCH_USER_SUCCESS,
  SEARCH_USER,
} from "../constants/userConstants";

const initialState = {
  users: [],
  search: "",
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return { ...state, users: [...state.users, payload] };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === payload.id ? payload : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload),
      };
    case SEARCH_USER:
      return {
        ...state,
        search: payload,
      };
    case FETCH_USER_SUCCESS:
      return { ...state, users: payload };
    default:
      return state;
  }
};
