<<<<<<< HEAD
require("dotenv").config();
const path = require("node:path");
=======
>>>>>>> parent of 01594bc (Publish to Heroku)
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());



mongoose
  .connect(process.env.MONGODB_URI, {
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
    title: req.body.title,
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

  task.title = req.body.title;
  task.text = req.body.text;

  task.save();

  res.json(task);
});

<<<<<<< HEAD
const dirname = path.resolve();
app.use(express.static(path.join(dirname, "/client/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(dirname, "/client/build/index.html"))
);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
=======
app.listen(3001);
>>>>>>> parent of 01594bc (Publish to Heroku)
