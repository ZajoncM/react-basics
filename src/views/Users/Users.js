import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <nav>
        <ul>
          <li>
            <Link to="./1">1</Link>
          </li>
          <li>
            <Link to="./2">2</Link>
          </li>
          <li>
            <Link to="./3">3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Users;
