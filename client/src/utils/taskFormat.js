export const taskFormat = (task) => {
  let taskTimeStampToDate = new Date(Number(task.timestamp));
  let dateFormat =
    taskTimeStampToDate.getHours() +
    ":" +
    taskTimeStampToDate.getMinutes() +
    ", " +
    taskTimeStampToDate.toDateString();

  return `Task ID: ${task._id}\nTitle: ${task.title}\nDescription: ${task.text} \nCompleted: ${task.complete}\nTask created on: ${dateFormat}`;
};
