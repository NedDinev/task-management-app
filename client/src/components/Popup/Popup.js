import React from "react";
import { TaskService } from "../../services/TaskService";

export default function Popup(props) {
  const { setPopupActive, setNewTask, newTask, text, taskIdToEdit } = props;
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
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <div
          className="button"
          onClick={() => {
            text === "Edit Task" && TaskService.EditTask(taskIdToEdit, newTask);
            text === "Create Task" && TaskService.AddTask(newTask);
            setPopupActive(false);
            setNewTask("");
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
