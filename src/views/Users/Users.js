import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../reducers/userReducer";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (id) => {
    navigate(`/form/${id}`);
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
      <Link to="/form">Add user</Link>
    </div>
  );
};

export default Users;
