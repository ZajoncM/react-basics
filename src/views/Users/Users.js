import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, searchUser } from "../../reducers/userReducer";
import { useNavigate } from "react-router-dom";
import { filteredUsersSelector } from "../../selectors";

const Users = () => {
  const users = useSelector(filteredUsersSelector);
  const search = useSelector(({ users }) => users.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (id) => {
    navigate(`/form/${id}`);
  };

  const handleSearch = (value) => {
    dispatch(searchUser(value));
  };

  return (
    <div>
      {users.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} {user.surname}{" "}
              <button onClick={() => handleDelete(user.id)}>Delete</button>
              <button onClick={() => handleEdit(user.id)}>Edit</button>
            </li>
          ))}
        </ul>
      ) : (
        "Add user"
      )}
      <br />

      <input
        type="text"
        name="search"
        placeholder="Search"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <br />
      <Link to="/form">Add user</Link>
    </div>
  );
};

export default Users;
