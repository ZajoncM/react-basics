import { createSelector } from "reselect";

export const usersSelector = (state) => state.users.users;
export const searchSelector = (state) => state.users.search;

export const filteredUsersSelector = createSelector(
  usersSelector,
  searchSelector,
  (users, search) => {
    return users.filter((user) => user.name.includes(search));
  }
);
