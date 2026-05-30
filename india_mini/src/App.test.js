import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders historical home page title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Echoes of Time/i);
  expect(titleElement).toBeInTheDocument();
});
