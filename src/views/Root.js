import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Routes from "../Routes/Routes";
import Cars from "./Cars/Cars";
import Home from "./Home/Home";
import User from "./User/User";
import Users from "./Users/Users";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users">
            <Route index element={<Users />} />
            <Route path=":userId" element={<User />} />
          </Route>
          <Route path="cars" element={<Cars />} />
        </Routes>
        {/* <Routes /> */}
      </div>
    </Router>
  );
}

export default App;
