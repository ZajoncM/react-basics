import axios from "axios";
import { v4 } from "uuid";
import { fetchUserSuccess } from "../actions/userActions";

export const fetchUsers = () => {
  return async (dispatch) => {
    await axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        const users = response.data.results.map((user) => {
          return {
            name: user.name.first,
            surname: user.name.last,
            id: v4(),
          };
        });
        dispatch(fetchUserSuccess(users));
      });
  };
};
