const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "https://task-management-app-client-lime.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

const Task = require("./models/Task");

app.get("/", (req, res) => {
  res.json("Connected to DB");
});

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

app.listen(3001);
