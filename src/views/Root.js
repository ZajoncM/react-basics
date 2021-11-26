import store from "../store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Users/Users";
import UserForm from "./UserForm/UserForm";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/form">
            <Route index element={<UserForm />} />
            <Route path=":userId" element={<UserForm />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
