import { useEffect } from "react";
import { TaskService } from "../../service/TaskService";

export default function Task(props) {
  const { task } = props;

  useEffect(() => {
    TaskService.GetTasks();
  }, []);
  return (
    <div
      className={"task" + (task.complete ? " is-complete" : "")}
      key={task._id}
    >
      <div className="task-left-control">
        <div
          className="checkbox"
          onClick={() => TaskService.CompleteTask(task._id)}
        ></div>
        <div className="text">{task.text}</div>
      </div>
      <div className="task-right-control">
        <div
          className="download-task"
          onClick={() => {
            TaskService.DownloadTask(task);
          }}
        >
          ⇩
        </div>
        {/* <div
          className="edit-task"
          onClick={() => {
            setEditPopupActive(true);
            setTaskIdToEdit(task._id);
          }}
        >
          ✎
        </div>
        <div className="delete-task" onClick={() => deleteTask(task._id)}>
          🗑
        </div> */}
      </div>
    </div>
  );
}
