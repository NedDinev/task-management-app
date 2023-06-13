import React, { useEffect, useState } from "react";
import { TaskService } from "../../services/TaskService";
import Task from "../Task/Task";
import NoTasks from "../NoTasks/NoTasks";

export default function TaskMapper(props) {
  const { setTaskIdToEdit, setEditPopupActive } = props;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    return async () => {
      TaskService.GetTasks().then((tasks) => setTasks(tasks));
    };
  }, [tasks]);
  return (
    <div className="tasks">
      {tasks.length > 0 &&
        tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            setTaskIdToEdit={setTaskIdToEdit}
            setEditPopupActive={setEditPopupActive}
          />
        ))}
      {tasks.length === 0 && <NoTasks />}
    </div>
  );
}
