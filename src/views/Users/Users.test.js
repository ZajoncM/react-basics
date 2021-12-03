import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import User from "../User/User";

const MockUsers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

describe("Users", () => {
  it("should render a list of users", () => {
    render(<MockUsers />);
    const exampleUser = screen.getByText(/Show Edward/i);
    expect(exampleUser).toBeInTheDocument();
  });

  it("should redirect int user component", () => {
    render(<MockUsers />);
    const exampleUser = screen.getByText(/Show Edward/i);
    fireEvent.click(exampleUser);

    expect(screen.getByText("User: 4")).toBeInTheDocument();
  });
});
