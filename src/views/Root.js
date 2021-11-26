import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import Nav from "./Nav/Nav";
import User from "./User/User";
import Users from "./Users/Users";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route
          path="/form"
          element={<LoginForm submit={() => console.log("submit")} />}
        />
        <Route path="/users">
          <Route index element={<Users />} />
          <Route path=":userId" element={<User />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
