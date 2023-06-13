import Task from "../Task/Task";

export default function TaskWrapper(props) {
  const { tasks, setTaskIdToEdit, setEditPopupActive } = props;
  return (
    <div className="App">
      <div className="tasks">
        {tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            setTaskIdToEdit={setTaskIdToEdit}
            setEditPopupActive={setEditPopupActive}
          />
        ))}
      </div>
    </div>
  );
}
