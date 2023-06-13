const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");
const Task = require("./models/Task");
const app = require("./server");

chai.use(chaiHttp);
const expect = chai.expect;

describe("Task Management App", () => {
  before(async () => {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/task-management-app-test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  });

  after(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  describe("GET /tasks", () => {
    it("should retrieve all tasks", async () => {
      const task1 = new Task({ title: "Task 1", text: "Task 1 description" });
      const task2 = new Task({ title: "Task 2", text: "Task 2 description" });

      await task1.save();
      await task2.save();

      const res = await chai.request(app).get("/tasks");

      expect(res).to.have.status(200);
      expect(res.body).to.be.an("array");
      expect(res.body).to.have.lengthOf(2);
      expect(res.body[0].title).to.equal("Task 1");
      expect(res.body[1].title).to.equal("Task 2");
    });
  });

  describe("POST /task/new", () => {
    it("should create a new task", async () => {
      const newTask = { title: "New Task", text: "New Task description" };

      const res = await chai.request(app).post("/task/new").send(newTask);

      expect(res).to.have.status(200);
      expect(res.body).to.be.an("object");
      expect(res.body.title).to.equal("New Task");
      expect(res.body.text).to.equal("New Task description");

      const task = await Task.findOne({ title: "New Task" });
      expect(task).to.exist;
      expect(task.title).to.equal("New Task");
      expect(task.text).to.equal("New Task description");
    });
  });

  describe("DELETE /task/delete/:id", () => {
    it("should delete a task", async () => {
      const task = new Task({
        title: "Task to delete",
        text: "Task description",
      });
      await task.save();

      const res = await chai.request(app).delete(`/task/delete/${task._id}`);

      expect(res).to.have.status(200);
      expect(res.body.result).to.equal("success");

      const deletedTask = await Task.findById(task._id);
      expect(deletedTask).to.not.exist;
    });
  });

  describe("GET /task/complete/:id", () => {
    it("should toggle the completion status of a task", async () => {
      const task = new Task({
        title: "Task to toggle",
        text: "Task description",
      });
      await task.save();

      const res = await chai.request(app).get(`/task/complete/${task._id}`);

      expect(res).to.have.status(200);
      expect(res.body.title).to.equal("Task to toggle");
      expect(res.body.complete).to.be.true;

      const updatedTask = await Task.findById(task._id);
      expect(updatedTask).to.exist;
      expect(updatedTask.complete).to.be.true;
    });
  });

  describe("PUT /task/update/:id", () => {
    it("should update a task", async () => {
      const task = new Task({
        title: "Task to update",
        text: "Task description",
      });
      await task.save();

      const updatedTask = {
        title: "Updated Task",
        text: "Updated Task description",
      };

      const res = await chai
        .request(app)
        .put(`/task/update/${task._id}`)
        .send(updatedTask);

      expect(res).to.have.status(200);
      expect(res.body).to.be.an("object");
      expect(res.body.title).to.equal("Updated Task");
      expect(res.body.text).to.equal("Updated Task description");

      const retrievedTask = await Task.findById(task._id);
      expect(retrievedTask).to.exist;
      expect(retrievedTask.title).to.equal("Updated Task");
      expect(retrievedTask.text).to.equal("Updated Task description");
    });
  });
});
