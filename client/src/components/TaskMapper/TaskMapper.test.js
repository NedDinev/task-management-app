import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import TaskMapper from "./TaskMapper";

test("renders TaskMapper component without errors", () => {
  render(<TaskMapper />);
});
