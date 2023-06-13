const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  complete: { type: Boolean, default: false },
  timestamp: { type: String, default: Date.now() },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
