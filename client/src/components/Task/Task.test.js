import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Task from "./Task";
import { TaskService } from "../../services/TaskService";

jest.mock("../../services/TaskService", () => ({
  TaskService: {
    GetTasks: jest.fn(),
    CompleteTask: jest.fn(),
    DownloadTask: jest.fn(),
    DeleteTask: jest.fn(),
  },
}));

describe("Task component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockTask = {
    _id: "task1",
    title: "Task Title",
    text: "Task Description",
    complete: false,
  };

  it("renders the task correctly", () => {
    render(
      <Task
        task={mockTask}
        setTaskIdToEdit={() => {}}
        setEditPopupActive={() => {}}
      />
    );

    expect(screen.getByText(/Task Title/)).toBeInTheDocument();
    expect(screen.getByText("Task Description")).toBeInTheDocument();
  });

  it("calls TaskService.CompleteTask when checkbox is clicked", () => {
    render(
      <Task
        task={mockTask}
        setTaskIdToEdit={() => {}}
        setEditPopupActive={() => {}}
      />
    );

    fireEvent.click(screen.getByText("⧗"));

    expect(TaskService.CompleteTask).toHaveBeenCalledWith("task1");
  });

  it("calls TaskService.DownloadTask when download icon is clicked", () => {
    render(
      <Task
        task={mockTask}
        setTaskIdToEdit={() => {}}
        setEditPopupActive={() => {}}
      />
    );

    fireEvent.click(screen.getByText("⇩"));

    expect(TaskService.DownloadTask).toHaveBeenCalledWith(mockTask);
  });

  it("calls setEditPopupActive and setTaskIdToEdit when edit icon is clicked", () => {
    const setEditPopupActiveMock = jest.fn();
    const setTaskIdToEditMock = jest.fn();

    render(
      <Task
        task={mockTask}
        setTaskIdToEdit={setTaskIdToEditMock}
        setEditPopupActive={setEditPopupActiveMock}
      />
    );

    fireEvent.click(screen.getByText("✎"));

    expect(setEditPopupActiveMock).toHaveBeenCalledWith(true);
    expect(setTaskIdToEditMock).toHaveBeenCalledWith("task1");
  });

  it("calls TaskService.DeleteTask when delete icon is clicked", () => {
    render(
      <Task
        task={mockTask}
        setTaskIdToEdit={() => {}}
        setEditPopupActive={() => {}}
      />
    );

    fireEvent.click(screen.getByText("🗑"));

    expect(TaskService.DeleteTask).toHaveBeenCalledWith("task1");
  });
});
