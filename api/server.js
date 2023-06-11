const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json);
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

app.listen(3001, () => console.log("Server started on port 3001"));
