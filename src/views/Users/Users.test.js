import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Root from "../Root";

it("should render a list of users", () => {
  render(<Root />);
  const usersLink = screen.getByText(/Users/i);

  userEvent.click(usersLink);
  const exampleUser = screen.getByText(/Edward/i);

  expect(exampleUser).toBeInTheDocument();
});

it("should render a user data after redirect", () => {
  render(<Root />);
  const usersLink = screen.getByText(/Users/i);

  userEvent.click(usersLink);
  const exampleUserLink = screen.getByText(/Show/i);

  userEvent.click(exampleUserLink);

  expect(/User:/i).toBeInTheDocument();
});
