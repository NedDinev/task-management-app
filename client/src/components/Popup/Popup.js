import React, { useState } from "react";
import { TaskService } from "../../services/TaskService";

export default function Popup(props) {
  const { setPopupActive, text, taskToEdit } = props;
  const [taskTitle, setTaskTitle] = useState("");
  const [taskText, setTaskText] = useState("");

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleButtonClick = () => {
    if (text === "Edit Task") {
      TaskService.EditTask(taskToEdit, taskTitle, taskText);
    } else if (text === "Create Task") {
      TaskService.AddTask(taskTitle, taskText);
    }
    setPopupActive(false);
    setTaskTitle("");
    setTaskText("");
  };

  return (
    <div className="popup">
      <div className="closePopup" onClick={() => setPopupActive(false)}>
        X
      </div>
      <div className="content">
        <h3>{text}</h3>
        <input
          type="text"
          className="add-task-input"
          onChange={handleTitleChange}
          value={taskTitle}
          placeholder="Task Title"
        />
        <textarea
          className="add-task-input"
          onChange={handleTextChange}
          value={taskText}
          placeholder="Task Description"
        />
        <div className="button" onClick={handleButtonClick}>
          {text}
        </div>
      </div>
    </div>
  );
}
