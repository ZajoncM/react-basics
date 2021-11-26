const userTypes = {
  DELETE_USER: "DELETE_USER",
  EDIT_USER: "EDIT_USER",
  ADD_USER: "ADD_USER",
};

const { DELETE_USER, EDIT_USER, ADD_USER } = userTypes;

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

export const userReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return { ...state, payload };
    case EDIT_USER:
      return state.map((user) => (user.id === payload.id ? payload : user));
    case DELETE_USER:
      return state.filter((user) => user.id !== payload.id);
    default:
      return state;
  }
};
