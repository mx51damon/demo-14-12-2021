import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Error Boundary text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Error Boundary/i);
  expect(linkElement).toBeInTheDocument();
});
