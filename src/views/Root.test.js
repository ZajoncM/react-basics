import { render, screen, fireEvent } from "@testing-library/react";
import Root from "./Root";

it("should render a user data after redirect", () => {
  render(<Root />);
  const usersLink = screen.getByText(/Users/i);

  fireEvent.click(usersLink);

  const exampleUserLink = screen.getByText(/Show Edward/i);

  fireEvent.click(exampleUserLink);
  expect(screen.getByText(/User: 4/i)).toBeInTheDocument();
});
