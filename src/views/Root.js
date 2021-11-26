import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import Nav from "./Nav/Nav";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/form" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
