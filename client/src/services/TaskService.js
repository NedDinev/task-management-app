import { api_base } from "../constants";
import { taskFormat } from "../utils/taskFormat";

export const TaskService = {
  GetTasks: async () =>
    await fetch(api_base + "/tasks", {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => console.error("Error: ", err)),

  CompleteTask: async (id) =>
    await fetch(api_base + "/task/complete/" + id).then((res) => res.json()),

  AddTask: async (newTaskTitle, newTaskText) =>
    await fetch(api_base + "/task/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTaskTitle,
        text: newTaskText,
      }),
    }).then((res) => res.json()),

  DeleteTask: async (id) =>
    await fetch(api_base + "/task/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err)),

  EditTask: async (taskIdToEdit, newTaskTitle, newTaskText) =>
    await fetch(api_base + "/task/update/" + taskIdToEdit, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTaskTitle,
        text: newTaskText,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err)),

  DownloadTask: (task) => {
    const taskToText = taskFormat(task);

    const blob = new Blob([taskToText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `Task_${task._id}.txt`;
    link.href = url;
    link.click();
  },
};
