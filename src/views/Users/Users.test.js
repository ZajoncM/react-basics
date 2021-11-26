import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Users from "./Users";

it("should render a list of users", () => {
  render(<Users />);

  const exampleUser = screen.getByText(/Edward/i);

  expect(exampleUser).toBeInTheDocument();
});

it("should render a user data after redirect", () => {
  render(<Users />);

  const userLink = screen.getByText(/show/i);

  userEvent.click(userLink);

  expect(screen.getByText(/User Id:/i)).toBeInTheDocument();
});
