import Task from "../Task/Task";

export default function TaskWrapper(props) {
  const { tasks, setTaskToEdit, setEditPopupActive } = props;
  return (
    <div className="App">
      <div className="tasks">
        {tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            setTaskToEdit={setTaskToEdit}
            setEditPopupActive={setEditPopupActive}
          />
        ))}
      </div>
    </div>
  );
}
