import { useEffect, useState } from "react";
import { TaskService } from "../../service/TaskService";
import Task from "../Task/Task";

export default function TaskWrapper() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(TaskService.GetTasks());
    console.log(tasks);
  }, []);

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <h4>Your tasks</h4>

      <div className="tasks">
        {tasks.length > 0 && tasks.map((task) => <Task task={task} />)}
      </div>
    </div>
  );
}
