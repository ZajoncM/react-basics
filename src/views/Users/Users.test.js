import { render, screen } from "@testing-library/react";
import Users from "./Users";

it("should render a list of users", () => {
  render(<Users />);

  const exampleUser = screen.getByText(/Edward/i);

  expect(exampleUser).toBeInTheDocument();
});
