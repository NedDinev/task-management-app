import { TaskController } from "../controllers/TaskController";

function useTask() {
  return {
    getTask: () => TaskController.GetTasks,

    completeTask: () => TaskController.CompleteTask,

    addTask: (newTaskTitle, newTaskText) =>
      TaskController.AddTask(newTaskTitle, newTaskText),

    deleteTask: (id) => TaskController.DeleteTask(id),

    edit: (taskIdToEdit, newTaskTitle, newTaskText) =>
      TaskController.EditTask(taskIdToEdit, newTaskTitle, newTaskText),
  };
}

export default useTask;
