<template>
  <div class="container">
    <div class="todo-app">
      <h1>Vue.js To-Do List</h1>
      <input
        v-model="newTask"
        placeholder="Add a new task"
        @keyup.enter="addTask"
        class="task-input"
      />
      <button @click="addTask" class="add-btn">Add Task</button>

      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <input type="checkbox" v-model="task.completed" />
          <span :class="{ 'completed-task': task.completed }">
            {{ task.text }}
          </span>
          <button @click="removeTask(index)" class="delete-btn">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}

.todo-app {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  text-align: center;
  color: #2c3e50;
}

.task-input {
  border-radius: 20px;
  border: 1px solid #00bcd4;
  padding: 10px;
  width: 70%;
  font-size: 16px;
  margin: 10px 0;
}

.add-btn {
  border-radius: 20px;
  background-color: #00bcd4;
  color: white;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 10px 0;
}
.add-btn:hover {
  background-color: #0097a7;
}

.delete-btn {
  border-radius: 20px;
  background-color: #ef5350;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.delete-btn:hover {
  background-color: #d32f2f;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
}
li span {
  flex-grow: 1;
  margin-left: 10px;
  text-align: left;
  color: #333;
}

.completed-task {
  text-decoration: line-through;
  color: #9e9e9e;
}

@media only screen and (max-width: 600px) {
  .todo-app {
    width: 95%;
    padding: 20px;
  }

  .task-input {
    width: 60%;
  }

  .add-btn,
  .delete-btn {
    padding: 8px 10px;
  }
}
</style>
