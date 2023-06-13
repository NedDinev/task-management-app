import { taskFormat } from "./taskFormat";

describe("taskFormat", () => {
  test("should format task correctly", () => {
    const task = {
      _id: "12345",
      title: "Task Title",
      text: "Task Description",
      timestamp: "1623578535000",
      complete: false,
    };

    const formattedTask = taskFormat(task);

    expect(formattedTask).toEqual(
      expect.stringContaining(`Task ID: ${task._id}`),
      expect.stringContaining(`Title: ${task.title}`),
      expect.stringContaining(`Description: ${task.text}`),
      expect.stringContaining(`Completed: ${task.complete}`),
      expect.stringMatching(
        /^\w{1,2}:\w{2}, (Sun|Mon|Tue|Wed|Thu|Fri|Sat) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{1,2} \d{4}$/
      )
    );
  });
});
