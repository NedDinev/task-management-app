import { TaskController } from "../controllers/TaskController";

function useTask() {
  return {
    getTask: () => TaskController.GetTasks,

    completeTask: () => TaskController.CompleteTask,

    addTask: (newTask) => TaskController.AddTask(newTask),

    deleteTask: (id) => TaskController.DeleteTask(id),

    edit: (taskIdToEdit, newTask) =>
      TaskController.EditTask(taskIdToEdit, newTask),
  };
}

export default useTask;
