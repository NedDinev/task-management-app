# task-management-app

## Overview
The Task Management App is a web-based application that allows users to manage their tasks and track their progress. It provides features for creating, updating, and deleting tasks, as well as setting due dates. The application is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and follows a client-server architecture.

## Installation

### Prerequisites
To run the Task Management App, you need to have the following prerequisites installed on your system:
- Node.js (v12 or higher)
- MongoDB Compass

### Getting Started
To install and run the Task Management App, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/NedDinev/task-management-app.git
   ```

## For the server

1. Navigate to the project server:
   ```
   cd api
   ```

2. Install the dependencies:
   ```
   npm install
   ```
NOTE: Change connection string to your MongoDB connection string if needed.

3. Start the server:
   ```
   npm start
   ```
## For the client

1. Open another terminal tab and navigate to the project client:
   ```
   cd client
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the client:
   ```
   npm start
   ```
- The Task Management App should now be running locally. Access it in your web browser at `http://localhost:3000`.

## Usage


### Task Management
Once logged in, you can perform the following tasks:

#### Create a Task
1. Click on the "+" button.
2. Fill in the task details, such as title and description.
3. Click "Create task" to create the task.

#### View Tasks
All tasks are displayed on the dashboard.

#### Update a Task
1. Click on the button with pencil icon.
2. Modify the task details as desired.
3. Click "Edit task" to update the task.

#### Delete a Task
Click on the button with bin icon.

#### Change Task Status
Click on the button yellow button in the top left corner of the task.

## API Reference
The Task Management App provides a RESTful API for interacting with tasks. Here are some key endpoints:

- **GET /tasks**: Get all tasks.
- **POST /task/new**: Create new task.
- **DELETE /task/delete/:id**: Delete a task.
- **GET /task/complete/:id**: Complete a task.
- **PUT /task/update/:id**: Update a task.
