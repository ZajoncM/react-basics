import { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";
import { Link, useNavigate } from "react-router-dom";
const UserList = () => {
  const { state, removeUser, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleEditUser = (user) => {
    setUser(user);
    navigate("/form");
  };

  const showUsers = () => (
    <ul>
      {state.map((user) => (
        <li key={user.id}>
          {user.name} {user.surname} {user.age} {user.email}{" "}
          {user.adresses.map((address, index) => (
            <p key={index}>
              {address.city} {address.street}
            </p>
          ))}
          <button type="button" onClick={() => handleEditUser(user)}>
            Edit
          </button>
          <button type="button" onClick={() => removeUser(user.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {state.length ? showUsers() : <div>Create a user</div>}{" "}
      <Link to="form">Add a new user</Link>
    </div>
  );
};

export default UserList;
