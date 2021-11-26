import { createContext } from "react";
import { useUsers } from "../hooks/useUsers";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { dispatch, actionTypes, state, user, setUser, initialUser } =
    useUsers();

  const addUser = (payload) => {
    dispatch({ type: actionTypes.ADD_USER, payload });
  };

  const removeUser = (payload) => {
    dispatch({ type: actionTypes.REMOVE_USER, payload });
  };

  const editUser = (payload) => {
    dispatch({ type: actionTypes.EDIT_USER, payload });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addUser,
        removeUser,
        editUser,
        user,
        setUser,
        initialUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
