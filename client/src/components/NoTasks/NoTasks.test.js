import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import NoTasks from "./NoTasks";

describe("NoTasks component", () => {
  it("renders the correct text", () => {
    render(<NoTasks />);
    const textElement = screen.getByText("You currently have no tasks");
    expect(textElement).toBeInTheDocument();
  });
});
