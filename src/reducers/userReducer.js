const userTypes = {
  DELETE_USER: "DELETE_USER",
  EDIT_USER: "EDIT_USER",
  ADD_USER: "ADD_USER",
  SEARCH_USER: "SEARCH_USER",
};

const { DELETE_USER, EDIT_USER, ADD_USER, SEARCH_USER } = userTypes;

export const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};

export const editUser = (payload) => {
  return {
    type: EDIT_USER,
    payload,
  };
};

export const deleteUser = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  };
};

export const searchUser = (payload) => {
  return {
    type: SEARCH_USER,
    payload,
  };
};

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
    default:
      return state;
  }
};
