import { userReducer } from "./userReducer";
import { addUser, deleteUser, editUser } from "../actions/userActions";
const initialState = {
  users: [],
  search: "",
};

describe("UserReducer", () => {
  it("should init reducer", () => {
    expect(userReducer(initialState, {})).toEqual(initialState);
  });

  it("should add user", () => {
    expect(
      userReducer(
        initialState,
        addUser({ id: 1, name: "John", surname: "Smith" })
      )
    ).toEqual({
      ...initialState,
      users: [{ id: 1, name: "John", surname: "Smith" }],
    });
  });

  it("should delete user", () => {
    const prevState = {
      ...initialState,
      users: [{ id: 1, name: "John", surname: "Smith" }],
    };

    expect(userReducer(prevState, deleteUser(1))).toEqual(initialState);
  });

  it("should edit user", () => {
    const prevState = {
      ...initialState,
      users: [{ id: 1, name: "John", surname: "Smith" }],
    };

    expect(
      userReducer(
        prevState,
        editUser({ id: 1, name: "Adeline", surname: "Smith" })
      )
    ).toEqual({
      ...initialState,
      users: [{ id: 1, name: "Adeline", surname: "Smith" }],
    });
  });
});
