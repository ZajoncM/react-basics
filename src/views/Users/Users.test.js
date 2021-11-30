import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Users from "./Users";

const MockUsers = () => {
  return (
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
};

it("should render a list of users", () => {
  render(<MockUsers />);
  const exampleUser = screen.getByText(/Edward/i);

  expect(exampleUser).toBeInTheDocument();
});
