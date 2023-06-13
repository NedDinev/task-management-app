import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Popup from "./Popup";

// Mock the TaskService methods
jest.mock("../../services/TaskService", () => ({
  EditTask: jest.fn(),
  AddTask: jest.fn(),
}));

describe("Popup", () => {
  test("should update taskTitle state on input change", () => {
    render(<Popup setPopupActive={jest.fn()} text="Create Task" />);
    const input = screen.getByPlaceholderText("Task Title");

    fireEvent.change(input, { target: { value: "New Task Title" } });

    expect(input.value).toBe("New Task Title");
  });

  test("should update taskText state on textarea change", () => {
    render(<Popup setPopupActive={jest.fn()} text="Create Task" />);
    const textarea = screen.getByPlaceholderText("Task Description");

    fireEvent.change(textarea, { target: { value: "New Task Description" } });

    expect(textarea.value).toBe("New Task Description");
  });
});
