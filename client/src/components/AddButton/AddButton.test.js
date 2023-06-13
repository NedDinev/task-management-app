import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AddButton from "./AddButton";

test("renders AddButton without error", () => {
  render(<AddButton />);
});

test("renders '+' symbol", () => {
  render(<AddButton />);
  expect(screen.getByText("+")).toBeInTheDocument();
});

test("calls setPopupActive function on click", () => {
  const mockSetPopupActive = jest.fn();
  render(<AddButton setPopupActive={mockSetPopupActive} />);
  const addPopup = screen.getByText("+");
  fireEvent.click(addPopup);
  expect(mockSetPopupActive).toHaveBeenCalledWith(true);
});
