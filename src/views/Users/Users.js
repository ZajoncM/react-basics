import { users } from "../../data/users";
import { Link } from "react-router-dom";
const Users = () => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} <Link to={`/users/${user.id}`}>Show {user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Users;
