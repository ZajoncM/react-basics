import LoginForm from "./LoginForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should have a username, password and submit button", () => {
  render(<LoginForm />);

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/submit/i);

  expect(usernameField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

it("should allow the user to submit their credentials", () => {
  const submit = jest.fn();
  render(<LoginForm submit={submit} />);

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/submit/i);

  userEvent.type(usernameField, "Miłosz");
  userEvent.type(passwordField, "secure");
  userEvent.click(submitButton);

  expect(submit).toHaveBeenCalledWith({
    username: "Miłosz",
    password: "secure",
  });
});
