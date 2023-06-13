import { api_base } from "../constants";
import { taskFormat } from "../utils/taskFormat";

export const TaskService = {
  GetTasks: async () =>
    await fetch(api_base + "/tasks")
      .then((res) => res.json())
      .catch((err) => console.error("Error: ", err)),
  CompleteTask: async (id) =>
    await fetch(api_base + "/task/complete/" + id).then((res) => res.json()),

  //   addTask: async () => {
  //     const data = await fetch(api_base + "/task/new", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         text: newTask,
  //       }),
  //     }).then((res) => res.json());

  //     setTasks([...tasks, data]);

  //     setPopupActive(false);
  //     setNewTask("");
  //   },

  //   deleteTask: async (id) => {
  //     await fetch(api_base + "/task/delete/" + id, {
  //       method: "DELETE",
  //     })
  //       .then(() => {
  //         setTasks((tasks) => tasks.filter((task) => task._id !== id));
  //         // return res.json();
  //       })
  //       .catch((err) => console.log(err));
  //   },

  //   editTask: async () => {
  //     const data = await fetch(api_base + "/task/update/" + taskIdToEdit, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         text: newTask,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .catch((err) => console.log(err));

  //     setTasks((tasks) =>
  //       tasks.map((task) => {
  //         if (task._id === taskIdToEdit) {
  //           task.text = data.text;
  //         }

  //         return task;
  //       })
  //     );
  //     setEditPopupActive(false);
  //     setNewTask("");
  //   },

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
