const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/task-management-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

const Task = require("./models/Task");

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();

  res.json(tasks);
});

app.post("/task/new", async (req, res) => {
  const task = new Task({
    text: req.body.text,
  });

  await task.save();

  res.json(task);
});

app.delete("/task/delete/:id", async (req, res) => {
  const result = await Task.findByIdAndDelete(req.params.id);

  res.json({ result });
});

app.get("/task/complete/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);

  task.complete = !task.complete;

  task.save();

  res.json(task);
});

app.put("/task/update/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);

  task.text = req.body.text;

  task.save();

  res.json(task);
});

app.listen(3001);
