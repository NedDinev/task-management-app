import React, { useEffect, useState } from "react";
import { TaskService } from "../../services/TaskService";
import NoTasks from "../NoTasks/NoTasks";
import TaskWrapper from "../TaskWrapper/TaskWrapper";

export default function TaskMapper(props) {
  const { setTaskIdToEdit, setEditPopupActive } = props;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    return async () => {
      TaskService.GetTasks().then((tasks) => setTasks(tasks));
    };
  }, [tasks, setTasks]);
  return (
    <div className="tasks">
      {tasks.length > 0 && (
        <TaskWrapper
          tasks={tasks}
          setTaskIdToEdit={setTaskIdToEdit}
          setEditPopupActive={setEditPopupActive}
        />
      )}
      {tasks.length === 0 && <NoTasks />}
    </div>
  );
}
