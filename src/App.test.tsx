import { render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";

test("renders main component", () => {
  render(<App />);
  const linkElement = screen.getByText(/1/i);
  expect(linkElement).toBeInTheDocument();
});
