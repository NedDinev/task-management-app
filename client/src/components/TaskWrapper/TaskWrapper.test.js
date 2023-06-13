import React from "react";
import { render } from "@testing-library/react";
import TaskWrapper from "./TaskWrapper";

test("renders TaskWrapper component without errors", () => {
  render(<TaskWrapper tasks={[]} />);
});
