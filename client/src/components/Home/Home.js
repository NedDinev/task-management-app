import React, { useState } from "react";
import TaskMapper from "../TaskMapper/TaskMapper";
import Popup from "../Popup/Popup";
import AddButton from "../AddButton/AddButton";

export default function Home() {
  const [popupActive, setPopupActive] = useState(false);
  const [editPopupActive, setEditPopupActive] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [taskIdToEdit, setTaskIdToEdit] = useState();
  return (
    <div>
      <h1>Task Management App</h1>
      <h4>Your tasks</h4>
      <TaskMapper
        setTaskIdToEdit={setTaskIdToEdit}
        setEditPopupActive={setEditPopupActive}
      />

      <AddButton setPopupActive={setPopupActive} />

      {popupActive && (
        <Popup
          setPopupActive={setPopupActive}
          setNewTask={setNewTask}
          newTask={newTask}
          text={"Create Task"}
        />
      )}

      {editPopupActive && (
        <Popup
          setPopupActive={setEditPopupActive}
          setNewTask={setNewTask}
          newTask={newTask}
          taskIdToEdit={taskIdToEdit}
          text={"Edit Task"}
        />
      )}
    </div>
  );
}
