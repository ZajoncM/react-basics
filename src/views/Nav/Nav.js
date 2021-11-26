import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link> <br />
      <Link to="/form">Form</Link>
    </div>
  );
};

export default Nav;
