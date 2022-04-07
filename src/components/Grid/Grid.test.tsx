import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { generateRandomColors } from "../../utils/colors";

import Grid from "./Grid";

jest.mock("../../utils/colors");

describe("Grid component", () => {
  it("should generate new background color on click", () => {
    (generateRandomColors as jest.Mock).mockReturnValue(["#ffffff"]);

    render(<Grid />);

    let element = screen.getByTestId("1");
    expect(element).toHaveStyle({
      "background-color": "#ffffff",
    });

    (generateRandomColors as jest.Mock).mockReturnValue(["#333333"]);

    fireEvent.click(screen.getByTestId("1"));
    element = screen.getByTestId("1");
    expect(element).toHaveStyle({
      "background-color": "#333333",
    });
  });
});
