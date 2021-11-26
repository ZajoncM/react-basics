import { useReducer, useState } from "react";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ADD_USER:
      return [...state, payload];
    case actionTypes.REMOVE_USER:
      return state.filter(({ id }) => id !== payload);
    case actionTypes.EDIT_USER:
      return state.map((user) => (user.id === payload.id ? payload : user));
    default:
      return state;
  }
};

const initialState = [];

const actionTypes = {
  ADD_USER: "ADD_USER",
  REMOVE_USER: "REMOVE_USER",
  EDIT_USER: "EDIT_USER",
};

export const useUsers = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialUser = {
    name: "",
    surname: "",
    age: 0,
    email: "",
    id: "",
    agreement: false,
    adresses: [],
  };
  const [user, setUser] = useState(initialUser);
  return { state, dispatch, actionTypes, user, setUser, initialUser };
};
