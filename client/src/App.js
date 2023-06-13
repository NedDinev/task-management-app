import { useEffect, useState } from "react";
const api_base = "http://localhost:3001";

function App() {
  const [tasks, setTasks] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [editPopupActive, setEditPopupActive] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [taskIdToEdit, setTaskIdToEdit] = useState();

  useEffect(() => {
    GetTasks();
  }, []);

  const GetTasks = () => {
    fetch(api_base + "/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error: ", err));
  };

  const completeTask = async (id) => {
    const data = await fetch(api_base + "/task/complete/" + id).then((res) =>
      res.json()
    );

    setTasks((tasks) =>
      tasks.map((task) => {
        if (task._id === data._id) {
          task.complete = data.complete;
        }

        return task;
      })
    );
  };

  const addTask = async () => {
    const data = await fetch(api_base + "/task/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newTask,
      }),
    }).then((res) => res.json());

    setTasks([...tasks, data]);

    setPopupActive(false);
    setNewTask("");
  };

  const deleteTask = async (id) => {
    await fetch(api_base + "/task/delete/" + id, {
      method: "DELETE",
    })
      .then(() => {
        setTasks((tasks) => tasks.filter((task) => task._id !== id));
        // return res.json();
      })
      .catch((err) => console.log(err));
  };

  const editTask = async () => {
    const data = await fetch(api_base + "/task/update/" + taskIdToEdit, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newTask,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    setTasks((tasks) =>
      tasks.map((task) => {
        if (task._id === taskIdToEdit) {
          task.text = data.text;
        }

        return task;
      })
    );
    setEditPopupActive(false);
    setNewTask("");
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <h4>Your tasks</h4>

      <div className="tasks">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              className={"task" + (task.complete ? " is-complete" : "")}
              key={task._id}
            >
              <div className="task-left-control">
                <div
                  className="checkbox"
                  onClick={() => completeTask(task._id)}
                ></div>
                <div className="text">{task.text}</div>
              </div>
              <div className="task-right-control">
                <div
                  className="edit-task"
                  onClick={() => {
                    setEditPopupActive(true);
                    setTaskIdToEdit(task._id);
                  }}
                >
                  ✎
                </div>
                <div
                  className="delete-task"
                  onClick={() => deleteTask(task._id)}
                >
                  🗑
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>You currently have no tasks</p>
        )}
      </div>

      <div className="addPopup" onClick={() => setPopupActive(true)}>
        +
      </div>

      {popupActive && (
        <div className="popup">
          <div className="closePopup" onClick={() => setPopupActive(false)}>
            X
          </div>
          <div className="content">
            <h3>Add Task</h3>
            <input
              type="text"
              className="add-task-input"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
            />
            <div className="button" onClick={addTask}>
              Create Task
            </div>
          </div>
        </div>
      )}

      {editPopupActive && (
        <div className="popup">
          <div className="closePopup" onClick={() => setEditPopupActive(false)}>
            X
          </div>
          <div className="content">
            <h3>Edit Task</h3>
            <input
              type="text"
              className="add-task-input"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
            />
            <div className="button" onClick={editTask}>
              Edit Task
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
