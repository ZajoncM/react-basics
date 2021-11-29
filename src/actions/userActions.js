import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  FETCH_USER_SUCCESS,
  SEARCH_USER,
} from "../constants/userConstants";

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

export const fetchUserSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
};
