import LoginForm from "./LoginForm";
import { render, screen } from "@testing-library/react";

it("should have a username, password and submit button", () => {
  render(<LoginForm />);

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/submit/i);

  expect(usernameField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
