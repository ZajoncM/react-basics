import AppProvider from "../providers/AppProvider";
import ExampleFrom from "./ExampleForm/ExampleForm";
import UserList from "./UserList/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/form" element={<ExampleFrom />} />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
